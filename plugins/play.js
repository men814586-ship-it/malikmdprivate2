// plugins/play.js - YouTube play via YouTube Data API v3 + audio download
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
    const url = 'https://www.googleapis.com/youtube/v3/search';
    const { data } = await axios.get(url, {
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
        thumb: item.snippet?.thumbnails?.high?.url || item.snippet?.thumbnails?.default?.url || '',
        url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
    };
}

async function fetchAudioUrl(videoUrl) {
    // Prefer APIs already used across MALIK-MD download plugins
    const endpoints = [
        `https://api.deline.web.id/downloader/youtube?url=${encodeURIComponent(videoUrl)}`,
        `https://api.deline.web.id/downloader/ytmp3?url=${encodeURIComponent(videoUrl)}`,
    ];
    for (const apiUrl of endpoints) {
        try {
            const { data } = await axios.get(apiUrl, {
                timeout: 45000,
                headers: {
                    Accept: 'application/json',
                    'User-Agent': 'Mozilla/5.0',
                },
            });
            const result = data?.result || data?.data || data;
            const audio =
                result?.download_url ||
                result?.downloadUrl ||
                result?.url ||
                result?.audio ||
                result?.mp3 ||
                result?.link ||
                data?.download_url ||
                data?.url;
            if (audio && typeof audio === 'string' && audio.startsWith('http')) {
                return { audio, meta: result };
            }
        } catch {
            /* try next */
        }
    }
    return null;
}

cmd(
    {
        pattern: 'play',
        alias: ['ytplay', 'song', 'music'],
        desc: 'Search YouTube by title and play/download audio',
        category: 'download',
        react: '🎵',
        use: '.play <song or video title>',
        filename: __filename,
    },
    async (conn, mek, m, { from, q, reply, userConfig }) => {
        try {
            if (!q || !q.trim()) {
                return reply(
                    '🎵 *YouTube Play*\n\nUsage: `.play <title>`\nExample: `.play shape of you`'
                );
            }

            const apiKey = getYoutubeKey();
            if (!apiKey) {
                return reply(
                    '❌ YouTube API key missing.\nSet `YOUTUBE_API_KEY` in Heroku/Vercel config vars.'
                );
            }

            await conn.sendMessage(from, { react: { text: '⏳', key: mek.key } });
            await reply(`🔍 Searching YouTube for: *${q.trim()}* ...`);

            const video = await searchYoutube(q.trim(), apiKey);
            if (!video) {
                await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
                return reply('❌ No video found for that title. Try different words.');
            }

            const DESCRIPTION =
                userConfig?.DESCRIPTION || config.DESCRIPTION || '> Powered by MALIK-MD';

            const caption = `╭┈───〔 YouTube Play 〕┈───⊷
├▢ 🎵 *${video.title}*
├▢ 👤 ${video.channel}
├▢ 🔗 ${video.url}
├▢ 📥 Fetching audio...
╰───────────────────⊷

${DESCRIPTION}`;

            if (video.thumb) {
                await conn.sendMessage(
                    from,
                    { image: { url: video.thumb }, caption },
                    { quoted: mek }
                );
            } else {
                await reply(caption);
            }

            const dl = await fetchAudioUrl(video.url);
            if (!dl?.audio) {
                await conn.sendMessage(from, { react: { text: '⚠️', key: mek.key } });
                return reply(
                    `⚠️ Found *${video.title}* but audio download failed.\nWatch here:\n${video.url}`
                );
            }

            await conn.sendMessage(
                from,
                {
                    audio: { url: dl.audio },
                    mimetype: 'audio/mpeg',
                    fileName: `${video.title}.mp3`,
                    contextInfo: {
                        externalAdReply: {
                            title: video.title,
                            body: video.channel,
                            mediaType: 1,
                            thumbnailUrl: video.thumb,
                            sourceUrl: video.url,
                        },
                    },
                },
                { quoted: mek }
            );

            await conn.sendMessage(from, { react: { text: '✅', key: mek.key } });
        } catch (err) {
            console.error('[PLAY]', err?.response?.data || err.message);
            const msg = err?.response?.data?.error?.message || err.message || 'Unknown error';
            await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
            reply(`❌ Play failed: ${msg}`);
        }
    }
);
