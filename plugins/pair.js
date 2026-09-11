// plugins/pair.js - Generate WhatsApp pairing code without opening the website
import { fileURLToPath } from 'url';
import { cmd } from '../command.js';
import axios from 'axios';

const __filename = fileURLToPath(import.meta.url);

// Same Heroku pair backends used by malikmd.vercel.app
const SERVERS = [
    'https://malikjimdx1-4fab31273e17.herokuapp.com',
    'https://malikjimdx10-1604aed1d526.herokuapp.com',
    'https://malikjimdx2-0933f7b1324b.herokuapp.com',
    'https://malikjimdx3-3c8e0a0995c4.herokuapp.com',
    'https://malikjimdx4-b715fe8dc508.herokuapp.com',
    'https://malikjimdx5-4f26a249536f.herokuapp.com',
    'https://malikjimdx6-b123b2a56d04.herokuapp.com',
    'https://malikjimdx7-bb07e91490b7.herokuapp.com',
    'https://malikjimdx8-25047b2e4575.herokuapp.com',
    'https://malikjimdx9-f607c316c3fb.herokuapp.com',
];

function normalizeNumber(input) {
    return String(input || '').replace(/[^\d]/g, '');
}

function numberFromJid(jid) {
    if (!jid) return '';
    return normalizeNumber(String(jid).split('@')[0].split(':')[0]);
}

async function requestPairCode(phone) {
    let lastErr = null;
    for (const base of SERVERS) {
        try {
            // Prefer servers with free capacity
            try {
                const active = await axios.get(`${base}/active`, { timeout: 4000 });
                const count = Number(active.data?.count || 0);
                const limit = Number(active.data?.limit || 50);
                if (count >= limit) continue;
            } catch {
                /* still try code endpoint */
            }

            const { data } = await axios.get(`${base}/code`, {
                params: { number: phone },
                timeout: 20000,
            });
            if (data?.code) {
                return { code: String(data.code).trim(), server: base };
            }
            lastErr = data?.error || 'No code';
        } catch (e) {
            lastErr = e.message;
        }
    }
    throw new Error(lastErr || 'All pair servers failed');
}

cmd(
    {
        pattern: 'pair',
        alias: ['getpair', 'paircode', 'linkdevice'],
        desc: 'Get WhatsApp pairing code without opening the website',
        category: 'main',
        react: '🔗',
        use: '.pair <number with country code>   OR   .pair (your number)',
        filename: __filename,
    },
    async (conn, mek, m, { from, q, reply, sender }) => {
        try {
            let phone = normalizeNumber(q);
            if (!phone) phone = numberFromJid(sender) || numberFromJid(m?.sender);

            if (!phone || phone.length < 10 || phone.length > 15) {
                return reply(
                    '🔗 *Pair Bot (no website needed)*\n\n' +
                        'Usage:\n`.pair 923001234567`\n`.pair` ← uses your WhatsApp number\n\n' +
                        '_Include country code (e.g. 92 for Pakistan)._'
                );
            }

            await conn.sendMessage(from, { react: { text: '⏳', key: mek.key } });
            await reply(`⏳ Generating pair code for *+${phone}* ...`);

            const { code } = await requestPairCode(phone);
            const pretty = code.includes('-')
                ? code
                : code.length === 8
                  ? `${code.slice(0, 4)}-${code.slice(4)}`
                  : code;

            const guide =
                `✅ *Pair Code Ready*\n\n` +
                `📱 Number: *+${phone}*\n` +
                `🔑 Code: *${pretty}*\n\n` +
                `*How to link:*\n` +
                `1. Open WhatsApp on your phone\n` +
                `2. Android: ⋮ → Linked devices\n` +
                `   iPhone: Settings → Linked devices\n` +
                `3. Tap *Link a device*\n` +
                `4. Tap *Link with phone number instead*\n` +
                `5. Enter this code: *${pretty.replace(/-/g, '')}*\n\n` +
                `_No need to open the website._`;

            await reply(guide);
            await conn.sendMessage(from, { react: { text: '✅', key: mek.key } });
        } catch (err) {
            console.error('[PAIR]', err.message);
            await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
            reply(
                `❌ Could not generate pair code.\n${err.message}\n\nTry again or use https://malikmd.vercel.app/`
            );
        }
    }
);
