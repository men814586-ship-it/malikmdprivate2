// plugins/play.js - YouTube play (search + real MP3 only)
import { fileURLToPath } from 'url';
import { cmd } from '../command.js';
import config from '../config.js';
import axios from 'axios';

const __filename = fileURLToPath(import.meta.url);

function getYoutubeKey() {
    return (
        process.env.YOUTUBE_API_KEY ||
        config.YOUTUBE_API_KEY ||
        config.YT_API_KEY ||
        ''
    ).trim();
}

async function searchYoutube(query, apiKey) {
    const { data } = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
            part: 'snippet',
            type: 'video',
            maxResults: 1,
            q: query,
            key: apiKey,
        },
        timeout: 20000,
    });
    const item = data?.items?.[0];
    if (!item?.id?.videoId) return null;
    return {
        id: item.id.videoId,
        title: item.snippet?.title || query,
        channel: item.snippet?.channelTitle || 'Unknown',
        thumb:
            item.snippet?.thumbnails?.high?.url ||
            item.snippet?.thumbnails?.medium?.url ||
            item.snippet?.thumbnails?.default?.url ||
            '',
        url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
    };
}

function collectHttpUrls(obj, out = [], depth = 0) {
    if (!obj || depth > 4) return out;
    if (typeof obj === 'string') {
        if (/^https?:\/\//i.test(obj)) out.push(obj);
        return out;
    }
    if (Array.isArray(obj)) {
        for (const v of obj) collectHttpUrls(v, out, depth + 1);
        return out;
    }
    if (typeof obj === 'object') {
        // Prefer known audio keys first
        const preferred = [
            'download_url',
            'downloadUrl',
            'mp3',
            'audio',
            'audio_url',
            'audioUrl',
            'link',
            'url',
        ];
        for (const k of preferred) {
            if (typeof obj[k] === 'string' && /^https?:\/\//i.test(obj[k])) out.push(obj[k]);
        }
        for (const v of Object.values(obj)) collectHttpUrls(v, out, depth + 1);
    }
    return out;
}

function isLikelyMediaUrl(u) {
    const s = String(u).toLowerCase();
    if (!/^https?:\/\//.test(s)) return false;
    // skip youtube watch / thumb / api pages
    if (s.includes('youtube.com/watch')) return false;
    if (s.includes('youtu.be/')) return false;
    if (s.includes('i.ytimg.com')) return false;
    if (s.includes('googleapis.com')) return false;
    return true;
}

async function resolveAudioCandidates(videoUrl) {
    const endpoints = [
        // Working savetube-backed endpoint first
        `https://apis.davidcyriltech.my.id/download/ytmp3?url=${encodeURIComponent(videoUrl)}`,
        `https://apis.davidcyriltech.my.id/youtube/mp3?url=${encodeURIComponent(videoUrl)}`,
        `https://api.deline.web.id/downloader/ytmp3?url=${encodeURIComponent(videoUrl)}`,
        `https://api.deline.web.id/downloader/youtube?url=${encodeURIComponent(videoUrl)}`,
    ];

    const urls = [];
    for (const apiUrl of endpoints) {
        try {
            const { data } = await axios.get(apiUrl, {
                timeout: 45000,
                headers: { Accept: 'application/json', 'User-Agent': 'Mozilla/5.0' },
                validateStatus: (s) => s < 500,
            });
            if (!data || data.status === false || data.success === false) continue;
            for (const u of collectHttpUrls(data)) {
                if (isLikelyMediaUrl(u) && !urls.includes(u)) urls.push(u);
            }
            if (urls.length) break; // prefer first successful API
        } catch {
            /* try next */
        }
    }
    return urls;
}

function isRealMp3(buf) {
    if (!Buffer.isBuffer(buf) || buf.length < 2000) return false;
    // Reject HTML / JSON / XML junk
    const head = buf.slice(0, 64).toString('utf8').trim().toLowerCase();
    if (
        head.startsWith('<!doctype') ||
        head.startsWith('<html') ||
        head.startsWith('{') ||
        head.startsWith('[') ||
        head.startsWith('<?xml')
    ) {
        return false;
    }
    // ID3 tag
    if (buf[0] === 0x49 && buf[1] === 0x44 && buf[2] === 0x33) return true;
    // MPEG frame sync
    if (buf[0] === 0xff && (buf[1] & 0xe0) === 0xe0) return true;
    // OGG
    if (buf[0] === 0x4f && buf[1] === 0x67 && buf[2] === 0x67 && buf[3] === 0x53) return true;
    // fLaC
    if (buf.slice(0, 4).toString() === 'fLaC') return true;
    // RIFF WAVE
    if (buf.slice(0, 4).toString() === 'RIFF' && buf.slice(8, 12).toString() === 'WAVE') return true;
    return false;
}

async function downloadValidatedMp3(fileUrl) {
    const res = await axios.get(fileUrl, {
        responseType: 'arraybuffer',
        timeout: 120000,
        maxContentLength: 20 * 1024 * 1024,
        maxRedirects: 5,
        headers: {
            'User-Agent': 'Mozilla/5.0',
            Accept: 'audio/mpeg,audio/*,*/*',
            Referer: 'https://www.youtube.com/',
        },
        validateStatus: (s) => s >= 200 && s < 400,
    });
    const buf = Buffer.from(res.data);
    const ctype = String(res.headers['content-type'] || '').toLowerCase();
    if (!isRealMp3(buf)) {
        throw new Error(`not a real audio file (ctype=${ctype}, size=${buf.length})`);
    }
    return { buf, ctype, url: fileUrl };
}

cmd(
    {
        pattern: 'play',
        alias: ['ytplay', 'song', 'music'],
        desc: 'Search YouTube by title and play audio in WhatsApp',
        category: 'download',
        react: '🎵',
        use: '.play <song or video title>',
        filename: __filename,
    },
    async (conn, mek, m, { from, q, reply, userConfig }) => {
        try {
            if (!q || !q.trim()) {
                return reply('🎵 *YouTube Play*\n\nUsage: `.play <title>`\nExample: `.play shape of you`');
            }

            const apiKey = getYoutubeKey();
            if (!apiKey) {
                return reply('❌ `YOUTUBE_API_KEY` missing in Heroku/config vars.');
            }

            await conn.sendMessage(from, { react: { text: '⏳', key: mek.key } });
            await reply(`🔍 Searching: *${q.trim()}*`);

            const video = await searchYoutube(q.trim(), apiKey);
            if (!video) {
                await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
                return reply('❌ No YouTube result found.');
            }

            const DESCRIPTION = userConfig?.DESCRIPTION || config.DESCRIPTION || '> Powered by MALIK-MD';
            const info =
                `╭┈───〔 YouTube Play 〕┈───⊷\n` +
                `├▢ 🎵 *${video.title}*\n` +
                `├▢ 👤 ${video.channel}\n` +
                `├▢ 🔗 ${video.url}\n` +
                `╰───────────────────⊷\n\n${DESCRIPTION}`;

            if (video.thumb) {
                await conn.sendMessage(from, { image: { url: video.thumb }, caption: info }, { quoted: mek });
            } else {
                await reply(info);
            }

            const candidates = await resolveAudioCandidates(video.url);
            if (!candidates.length) {
                await conn.sendMessage(from, { react: { text: '⚠️', key: mek.key } });
                return reply(
                    `⚠️ Found *${video.title}* but audio download APIs failed.\nTry again in a minute or another title.\n${video.url}`
                );
            }

            let audio = null;
            let lastErr = '';
            for (const u of candidates.slice(0, 4)) {
                try {
                    audio = await downloadValidatedMp3(u);
                    break;
                } catch (e) {
                    lastErr = e.message || String(e);
                }
            }

            if (!audio) {
                await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
                return reply(`❌ Could not get a playable MP3.\n_${lastErr}_`);
            }

            const safeName = `${video.title}`.replace(/[^\w\s\-\.]/g, '').slice(0, 60).trim() || 'audio';

            // Prefer direct URL send (same pattern as working .sound commands)
            let sent = false;
            try {
                await conn.sendMessage(
                    from,
                    {
                        audio: { url: audio.url },
                        mimetype: 'audio/mpeg',
                        ptt: false,
                        fileName: `${safeName}.mp3`,
                    },
                    { quoted: mek }
                );
                sent = true;
            } catch (e1) {
                console.error('[PLAY] url send failed', e1?.message);
            }

            if (!sent) {
                try {
                    await conn.sendMessage(
                        from,
                        {
                            audio: audio.buf,
                            mimetype: 'audio/mpeg',
                            ptt: false,
                            fileName: `${safeName}.mp3`,
                        },
                        { quoted: mek }
                    );
                    sent = true;
                } catch (e2) {
                    console.error('[PLAY] buffer send failed', e2?.message);
                }
            }

            if (!sent) {
                await conn.sendMessage(
                    from,
                    {
                        document: audio.buf,
                        mimetype: 'audio/mpeg',
                        fileName: `${safeName}.mp3`,
                        caption: `🎵 ${video.title}`,
                    },
                    { quoted: mek }
                );
            }

            await conn.sendMessage(from, { react: { text: '✅', key: mek.key } });
        } catch (err) {
            console.error('[PLAY]', err?.response?.data || err.message);
            const msg = err?.response?.data?.error?.message || err.message || 'Unknown error';
            await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
            reply(`❌ Play failed: ${msg}`);
        }
    }
);
