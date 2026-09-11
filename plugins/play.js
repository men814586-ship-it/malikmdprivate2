// plugins/play.js - YouTube play via YouTube Data API v3 (search) + playable WhatsApp audio
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

function pickUrl(obj) {
    if (!obj || typeof obj !== 'object') return null;
    const candidates = [
        obj.mp3,
        obj.audio,
        obj.audio_url,
        obj.audioUrl,
        obj.download_url,
        obj.downloadUrl,
        obj.url,
        obj.link,
        obj.result?.mp3,
        obj.result?.audio,
        obj.result?.download_url,
        obj.result?.downloadUrl,
        obj.result?.url,
        obj.data?.mp3,
        obj.data?.audio,
        obj.data?.download_url,
        obj.data?.url,
        obj.data?.link,
    ];
    for (const u of candidates) {
        if (typeof u === 'string' && /^https?:\/\//i.test(u)) return u;
    }
    return null;
}

async function resolveAudioDownloadUrl(videoUrl) {
    const endpoints = [
        `https://api.deline.web.id/downloader/ytmp3?url=${encodeURIComponent(videoUrl)}`,
        `https://api.deline.web.id/downloader/youtube?url=${encodeURIComponent(videoUrl)}`,
        `https://apis.davidcyriltech.my.id/download/ytmp3?url=${encodeURIComponent(videoUrl)}`,
        `https://yt-api.vercel.app/api/mp3?url=${encodeURIComponent(videoUrl)}`,
    ];
    for (const apiUrl of endpoints) {
        try {
            const { data } = await axios.get(apiUrl, {
                timeout: 45000,
                headers: { Accept: 'application/json', 'User-Agent': 'Mozilla/5.0' },
            });
            const audio = pickUrl(data);
            if (audio) return audio;
        } catch {
            /* try next */
        }
    }
    return null;
}

async function downloadAsBuffer(fileUrl) {
    const res = await axios.get(fileUrl, {
        responseType: 'arraybuffer',
        timeout: 120000,
        maxContentLength: 25 * 1024 * 1024,
        headers: { 'User-Agent': 'Mozilla/5.0', Accept: '*/*' },
        validateStatus: (s) => s >= 200 && s < 400,
    });
    const buf = Buffer.from(res.data);
    const ctype = String(res.headers['content-type'] || '').toLowerCase();
    return { buf, ctype };
}

function looksLikeAudio(buf, ctype) {
    if (ctype.includes('audio') || ctype.includes('mpeg') || ctype.includes('mp3') || ctype.includes('ogg')) {
        return true;
    }
    // ID3 / MP3 frame sync
    if (buf.length > 3 && buf[0] === 0x49 && buf[1] === 0x44 && buf[2] === 0x33) return true;
    if (buf.length > 2 && buf[0] === 0xff && (buf[1] & 0xe0) === 0xe0) return true;
    return buf.length > 10_000; // allow send anyway if decent size
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

            const audioUrl = await resolveAudioDownloadUrl(video.url);
            if (!audioUrl) {
                await conn.sendMessage(from, { react: { text: '⚠️', key: mek.key } });
                return reply(`⚠️ Found *${video.title}* but no playable audio URL.\n${video.url}`);
            }

            const { buf, ctype } = await downloadAsBuffer(audioUrl);
            if (!buf?.length || buf.length < 2000) {
                await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
                return reply('❌ Downloaded audio is empty/corrupt. Try another title.');
            }

            const safeName = `${video.title}`.replace(/[^\w\s\-\.]/g, '').slice(0, 60) || 'audio';
            const mime = looksLikeAudio(buf, ctype) ? 'audio/mpeg' : 'audio/mpeg';

            // 1) Normal playable music message (not voice note)
            try {
                await conn.sendMessage(
                    from,
                    {
                        audio: buf,
                        mimetype: mime,
                        ptt: false,
                        fileName: `${safeName}.mp3`,
                    },
                    { quoted: mek }
                );
            } catch (sendErr) {
                console.error('[PLAY] audio send failed, document fallback', sendErr?.message);
                // 2) Fallback: document so user can still open/download
                await conn.sendMessage(
                    from,
                    {
                        document: buf,
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
