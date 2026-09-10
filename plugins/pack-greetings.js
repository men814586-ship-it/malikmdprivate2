import { fileURLToPath } from 'url';
import { cmd } from '../command.js';
const __filename = fileURLToPath(import.meta.url);


cmd({
  pattern: "hiwave",
  alias: [],
  desc: "Send a hiwave greeting.",
  category: "fun",
  react: "👋",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["Hey {name}! 👋","Hi {name}, hope you're well!","Hello {name}! 🌟"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "byewave",
  alias: [],
  desc: "Send a byewave greeting.",
  category: "fun",
  react: "👋",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["Bye {name}! 👋","See you later, {name}!","Take care, {name}! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "gmorn",
  alias: [],
  desc: "Send a gmorn greeting.",
  category: "fun",
  react: "☀️",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["Good morning {name}! ☀️","Rise and shine, {name}!","Sabah al-khair {name}! 🌅"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "gaft",
  alias: [],
  desc: "Send a gaft greeting.",
  category: "fun",
  react: "🌤️",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["Good afternoon {name}! 🌤️","Hope your afternoon is great, {name}!","Good afternoon! Keep going {name}."];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "gnight",
  alias: [],
  desc: "Send a gnight greeting.",
  category: "fun",
  react: "🌙",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["Good night {name}! 🌙","Sweet dreams, {name}!","Sleep well {name} 😴"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "congratsmsg",
  alias: [],
  desc: "Send a congratsmsg greeting.",
  category: "fun",
  react: "🎉",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["Congrats {name}! 🎉","Well done {name}! 🏆","Proud of you {name}! ✨"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "thankmsg",
  alias: [],
  desc: "Send a thankmsg greeting.",
  category: "fun",
  react: "🙏",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["Thank you {name}! 🙏","JazakAllah khair {name}!","Appreciate you {name}! 💖"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "welcomemsg2",
  alias: [],
  desc: "Send a welcomemsg2 greeting.",
  category: "fun",
  react: "🏠",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["Welcome {name}! 🏠","Glad you're here, {name}!","Ahlan wa sahlan {name}!"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "encouragemsg",
  alias: [],
  desc: "Send a encouragemsg greeting.",
  category: "fun",
  react: "💪",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["You've got this {name}! 💪","Keep pushing {name}!","Believe in yourself {name}! 🌟"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "salammsg",
  alias: [],
  desc: "Send a salammsg greeting.",
  category: "fun",
  react: "🕌",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["Assalamu Alaikum {name}! 🕌","Wa Alaikum Assalam {name}!","Peace be upon you {name}."];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "hello",
  alias: [],
  desc: "Send a hello greeting.",
  category: "fun",
  react: "🙂",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["hello {name}! ✨","Hey {name}, sending hello vibes!","{name}, hello — stay awesome! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "heythere",
  alias: [],
  desc: "Send a heythere greeting.",
  category: "fun",
  react: "🙂",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["heythere {name}! ✨","Hey {name}, sending heythere vibes!","{name}, heythere — stay awesome! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "howdy",
  alias: [],
  desc: "Send a howdy greeting.",
  category: "fun",
  react: "🙂",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["howdy {name}! ✨","Hey {name}, sending howdy vibes!","{name}, howdy — stay awesome! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "yo",
  alias: [],
  desc: "Send a yo greeting.",
  category: "fun",
  react: "🙂",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["yo {name}! ✨","Hey {name}, sending yo vibes!","{name}, yo — stay awesome! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "sup",
  alias: [],
  desc: "Send a sup greeting.",
  category: "fun",
  react: "🙂",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["sup {name}! ✨","Hey {name}, sending sup vibes!","{name}, sup — stay awesome! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "hiya",
  alias: [],
  desc: "Send a hiya greeting.",
  category: "fun",
  react: "🙂",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["hiya {name}! ✨","Hey {name}, sending hiya vibes!","{name}, hiya — stay awesome! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "aloha",
  alias: [],
  desc: "Send a aloha greeting.",
  category: "fun",
  react: "🙂",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["aloha {name}! ✨","Hey {name}, sending aloha vibes!","{name}, aloha — stay awesome! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "namaste",
  alias: [],
  desc: "Send a namaste greeting.",
  category: "fun",
  react: "🙂",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["namaste {name}! ✨","Hey {name}, sending namaste vibes!","{name}, namaste — stay awesome! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "bonjour",
  alias: [],
  desc: "Send a bonjour greeting.",
  category: "fun",
  react: "🙂",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["bonjour {name}! ✨","Hey {name}, sending bonjour vibes!","{name}, bonjour — stay awesome! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "hola",
  alias: [],
  desc: "Send a hola greeting.",
  category: "fun",
  react: "🙂",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["hola {name}! ✨","Hey {name}, sending hola vibes!","{name}, hola — stay awesome! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "ciao",
  alias: [],
  desc: "Send a ciao greeting.",
  category: "fun",
  react: "🙂",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["ciao {name}! ✨","Hey {name}, sending ciao vibes!","{name}, ciao — stay awesome! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "salve",
  alias: [],
  desc: "Send a salve greeting.",
  category: "fun",
  react: "🙂",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["salve {name}! ✨","Hey {name}, sending salve vibes!","{name}, salve — stay awesome! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "shalom",
  alias: [],
  desc: "Send a shalom greeting.",
  category: "fun",
  react: "🙂",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["shalom {name}! ✨","Hey {name}, sending shalom vibes!","{name}, shalom — stay awesome! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "konnichiwa",
  alias: [],
  desc: "Send a konnichiwa greeting.",
  category: "fun",
  react: "🙂",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["konnichiwa {name}! ✨","Hey {name}, sending konnichiwa vibes!","{name}, konnichiwa — stay awesome! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "annyeong",
  alias: [],
  desc: "Send a annyeong greeting.",
  category: "fun",
  react: "🙂",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["annyeong {name}! ✨","Hey {name}, sending annyeong vibes!","{name}, annyeong — stay awesome! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "nihao",
  alias: [],
  desc: "Send a nihao greeting.",
  category: "fun",
  react: "🙂",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["nihao {name}! ✨","Hey {name}, sending nihao vibes!","{name}, nihao — stay awesome! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "privet",
  alias: [],
  desc: "Send a privet greeting.",
  category: "fun",
  react: "🙂",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["privet {name}! ✨","Hey {name}, sending privet vibes!","{name}, privet — stay awesome! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "halo",
  alias: [],
  desc: "Send a halo greeting.",
  category: "fun",
  react: "🙂",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["halo {name}! ✨","Hey {name}, sending halo vibes!","{name}, halo — stay awesome! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "salamualaikum",
  alias: [],
  desc: "Send a salamualaikum greeting.",
  category: "fun",
  react: "🙂",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["salamualaikum {name}! ✨","Hey {name}, sending salamualaikum vibes!","{name}, salamualaikum — stay awesome! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "wassup",
  alias: [],
  desc: "Send a wassup greeting.",
  category: "fun",
  react: "🙂",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["wassup {name}! ✨","Hey {name}, sending wassup vibes!","{name}, wassup — stay awesome! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "heyyo",
  alias: [],
  desc: "Send a heyyo greeting.",
  category: "fun",
  react: "🙂",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["heyyo {name}! ✨","Hey {name}, sending heyyo vibes!","{name}, heyyo — stay awesome! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "morningvibes",
  alias: [],
  desc: "Send a morningvibes greeting.",
  category: "fun",
  react: "🙂",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["morningvibes {name}! ✨","Hey {name}, sending morningvibes vibes!","{name}, morningvibes — stay awesome! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "eveningvibes",
  alias: [],
  desc: "Send a eveningvibes greeting.",
  category: "fun",
  react: "🙂",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["eveningvibes {name}! ✨","Hey {name}, sending eveningvibes vibes!","{name}, eveningvibes — stay awesome! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "nightvibes",
  alias: [],
  desc: "Send a nightvibes greeting.",
  category: "fun",
  react: "🙂",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["nightvibes {name}! ✨","Hey {name}, sending nightvibes vibes!","{name}, nightvibes — stay awesome! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "weekendvibes",
  alias: [],
  desc: "Send a weekendvibes greeting.",
  category: "fun",
  react: "🙂",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["weekendvibes {name}! ✨","Hey {name}, sending weekendvibes vibes!","{name}, weekendvibes — stay awesome! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "fridayvibes",
  alias: [],
  desc: "Send a fridayvibes greeting.",
  category: "fun",
  react: "🙂",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["fridayvibes {name}! ✨","Hey {name}, sending fridayvibes vibes!","{name}, fridayvibes — stay awesome! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "mondayboost",
  alias: [],
  desc: "Send a mondayboost greeting.",
  category: "fun",
  react: "🙂",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["mondayboost {name}! ✨","Hey {name}, sending mondayboost vibes!","{name}, mondayboost — stay awesome! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "tuesdaycheer",
  alias: [],
  desc: "Send a tuesdaycheer greeting.",
  category: "fun",
  react: "🙂",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["tuesdaycheer {name}! ✨","Hey {name}, sending tuesdaycheer vibes!","{name}, tuesdaycheer — stay awesome! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "wednesdaymid",
  alias: [],
  desc: "Send a wednesdaymid greeting.",
  category: "fun",
  react: "🙂",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["wednesdaymid {name}! ✨","Hey {name}, sending wednesdaymid vibes!","{name}, wednesdaymid — stay awesome! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "thursdaypush",
  alias: [],
  desc: "Send a thursdaypush greeting.",
  category: "fun",
  react: "🙂",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["thursdaypush {name}! ✨","Hey {name}, sending thursdaypush vibes!","{name}, thursdaypush — stay awesome! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "sundaychill",
  alias: [],
  desc: "Send a sundaychill greeting.",
  category: "fun",
  react: "🙂",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["sundaychill {name}! ✨","Hey {name}, sending sundaychill vibes!","{name}, sundaychill — stay awesome! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "birthdaywish",
  alias: [],
  desc: "Send a birthdaywish greeting.",
  category: "fun",
  react: "🙂",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["birthdaywish {name}! ✨","Hey {name}, sending birthdaywish vibes!","{name}, birthdaywish — stay awesome! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "anniversarywish",
  alias: [],
  desc: "Send a anniversarywish greeting.",
  category: "fun",
  react: "🙂",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["anniversarywish {name}! ✨","Hey {name}, sending anniversarywish vibes!","{name}, anniversarywish — stay awesome! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "newyearwish",
  alias: [],
  desc: "Send a newyearwish greeting.",
  category: "fun",
  react: "🙂",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["newyearwish {name}! ✨","Hey {name}, sending newyearwish vibes!","{name}, newyearwish — stay awesome! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "eidwish",
  alias: [],
  desc: "Send a eidwish greeting.",
  category: "fun",
  react: "🙂",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["eidwish {name}! ✨","Hey {name}, sending eidwish vibes!","{name}, eidwish — stay awesome! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "ramadanwish",
  alias: [],
  desc: "Send a ramadanwish greeting.",
  category: "fun",
  react: "🙂",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["ramadanwish {name}! ✨","Hey {name}, sending ramadanwish vibes!","{name}, ramadanwish — stay awesome! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "graduationwish",
  alias: [],
  desc: "Send a graduationwish greeting.",
  category: "fun",
  react: "🙂",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["graduationwish {name}! ✨","Hey {name}, sending graduationwish vibes!","{name}, graduationwish — stay awesome! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "jobwish",
  alias: [],
  desc: "Send a jobwish greeting.",
  category: "fun",
  react: "🙂",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["jobwish {name}! ✨","Hey {name}, sending jobwish vibes!","{name}, jobwish — stay awesome! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "examwish",
  alias: [],
  desc: "Send a examwish greeting.",
  category: "fun",
  react: "🙂",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["examwish {name}! ✨","Hey {name}, sending examwish vibes!","{name}, examwish — stay awesome! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "travelwish",
  alias: [],
  desc: "Send a travelwish greeting.",
  category: "fun",
  react: "🙂",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["travelwish {name}! ✨","Hey {name}, sending travelwish vibes!","{name}, travelwish — stay awesome! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "healthwish",
  alias: [],
  desc: "Send a healthwish greeting.",
  category: "fun",
  react: "🙂",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["healthwish {name}! ✨","Hey {name}, sending healthwish vibes!","{name}, healthwish — stay awesome! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "wealthwish",
  alias: [],
  desc: "Send a wealthwish greeting.",
  category: "fun",
  react: "🙂",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["wealthwish {name}! ✨","Hey {name}, sending wealthwish vibes!","{name}, wealthwish — stay awesome! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "peacewish",
  alias: [],
  desc: "Send a peacewish greeting.",
  category: "fun",
  react: "🙂",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["peacewish {name}! ✨","Hey {name}, sending peacewish vibes!","{name}, peacewish — stay awesome! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "successwish",
  alias: [],
  desc: "Send a successwish greeting.",
  category: "fun",
  react: "🙂",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["successwish {name}! ✨","Hey {name}, sending successwish vibes!","{name}, successwish — stay awesome! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "lovewish",
  alias: [],
  desc: "Send a lovewish greeting.",
  category: "fun",
  react: "🙂",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["lovewish {name}! ✨","Hey {name}, sending lovewish vibes!","{name}, lovewish — stay awesome! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "friendshipwish",
  alias: [],
  desc: "Send a friendshipwish greeting.",
  category: "fun",
  react: "🙂",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["friendshipwish {name}! ✨","Hey {name}, sending friendshipwish vibes!","{name}, friendshipwish — stay awesome! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "familywish",
  alias: [],
  desc: "Send a familywish greeting.",
  category: "fun",
  react: "🙂",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["familywish {name}! ✨","Hey {name}, sending familywish vibes!","{name}, familywish — stay awesome! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "studywish",
  alias: [],
  desc: "Send a studywish greeting.",
  category: "fun",
  react: "🙂",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["studywish {name}! ✨","Hey {name}, sending studywish vibes!","{name}, studywish — stay awesome! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "workoutwish",
  alias: [],
  desc: "Send a workoutwish greeting.",
  category: "fun",
  react: "🙂",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["workoutwish {name}! ✨","Hey {name}, sending workoutwish vibes!","{name}, workoutwish — stay awesome! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "focuswish",
  alias: [],
  desc: "Send a focuswish greeting.",
  category: "fun",
  react: "🙂",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["focuswish {name}! ✨","Hey {name}, sending focuswish vibes!","{name}, focuswish — stay awesome! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "luckwish",
  alias: [],
  desc: "Send a luckwish greeting.",
  category: "fun",
  react: "🙂",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["luckwish {name}! ✨","Hey {name}, sending luckwish vibes!","{name}, luckwish — stay awesome! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});

cmd({
  pattern: "blessingwish",
  alias: [],
  desc: "Send a blessingwish greeting.",
  category: "fun",
  react: "🙂",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  const name = (q || m.pushName || "friend").slice(0, 40);
  const templates = ["blessingwish {name}! ✨","Hey {name}, sending blessingwish vibes!","{name}, blessingwish — stay awesome! 💫"];
  const t = templates[Math.floor(Math.random() * templates.length)];
  reply(t.replace(/\{name\}/g, name));
});
