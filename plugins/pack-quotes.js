import { fileURLToPath } from 'url';
import { cmd } from '../command.js';
const __filename = fileURLToPath(import.meta.url);


cmd({
  pattern: "motivateq",
  alias: [],
  desc: "Random Motivation.",
  category: "fun",
  react: "🔥",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["The secret of getting ahead is getting started.","Don't watch the clock; do what it does. Keep going.","Believe you can and you're halfway there.","Success is not final, failure is not fatal.","Dream big and dare to fail."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`🔥 *Motivation*\n\n"${pick}"`);
});

cmd({
  pattern: "wisdomq",
  alias: [],
  desc: "Random Wisdom.",
  category: "fun",
  react: "🦉",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Knowledge speaks, but wisdom listens.","The only true wisdom is in knowing you know nothing.","Patience is bitter, but its fruit is sweet.","A wise man learns more from his enemies than a fool from his friends.","Silence is a source of great strength."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`🦉 *Wisdom*\n\n"${pick}"`);
});

cmd({
  pattern: "funnyq",
  alias: [],
  desc: "Random Funny Quote.",
  category: "fun",
  react: "😂",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["I'm not lazy, I'm on energy-saving mode.","I told my computer I needed a break, and it froze.","Life is short. Smile while you still have teeth.","I'm on a seafood diet. I see food and I eat it.","Common sense is like deodorant. The people who need it most never use it."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`😂 *Funny Quote*\n\n"${pick}"`);
});

cmd({
  pattern: "loveq",
  alias: [],
  desc: "Random Love Quote.",
  category: "fun",
  react: "💕",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Where there is love there is life.","Love is composed of a single soul inhabiting two bodies.","To love and be loved is to feel the sun from both sides.","The best thing to hold onto in life is each other.","Love doesn't make the world go round. Love is what makes the ride worthwhile."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`💕 *Love Quote*\n\n"${pick}"`);
});

cmd({
  pattern: "successq",
  alias: [],
  desc: "Random Success Quote.",
  category: "fun",
  react: "🏆",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Success usually comes to those who are too busy to be looking for it.","Opportunities don't happen. You create them.","Don't be afraid to give up the good to go for the great.","I find that the harder I work, the more luck I seem to have.","Success is walking from failure to failure with no loss of enthusiasm."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`🏆 *Success Quote*\n\n"${pick}"`);
});

cmd({
  pattern: "lifeq",
  alias: [],
  desc: "Random Life Quote.",
  category: "fun",
  react: "🌍",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Life is what happens when you're busy making other plans.","In the end, it's not the years in your life that count.","Life is either a daring adventure or nothing at all.","The purpose of our lives is to be happy.","Get busy living or get busy dying."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`🌍 *Life Quote*\n\n"${pick}"`);
});

cmd({
  pattern: "friendq",
  alias: [],
  desc: "Random Friendship Quote.",
  category: "fun",
  react: "🤝",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["A real friend is one who walks in when the rest of the world walks out.","Friendship is born at that moment when one person says to another: What! You too?","Friends are the family we choose.","A friend is someone who knows all about you and still loves you.","True friends are never apart, maybe in distance but never in heart."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`🤝 *Friendship Quote*\n\n"${pick}"`);
});

cmd({
  pattern: "islamicq",
  alias: [],
  desc: "Random Islamic Reminder.",
  category: "fun",
  react: "🕌",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Indeed, with hardship comes ease. (Qur'an 94:6)","Verily, Allah is with the patient. (Qur'an 2:153)","And He found you lost and guided you. (Qur'an 93:7)","So remember Me; I will remember you. (Qur'an 2:152)","Allah does not burden a soul beyond that it can bear. (Qur'an 2:286)"];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`🕌 *Islamic Reminder*\n\n"${pick}"`);
});

cmd({
  pattern: "hopeq",
  alias: [],
  desc: "Random Hope.",
  category: "fun",
  react: "🌅",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`🌅 *Hope*\n\n"${pick}"`);
});

cmd({
  pattern: "faithq",
  alias: [],
  desc: "Random Faith.",
  category: "fun",
  react: "🙏",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`🙏 *Faith*\n\n"${pick}"`);
});

cmd({
  pattern: "peaceq",
  alias: [],
  desc: "Random Peace.",
  category: "fun",
  react: "🕊️",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`🕊️ *Peace*\n\n"${pick}"`);
});

cmd({
  pattern: "dreamq",
  alias: [],
  desc: "Random Dreams.",
  category: "fun",
  react: "💭",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`💭 *Dreams*\n\n"${pick}"`);
});

cmd({
  pattern: "workq",
  alias: [],
  desc: "Random Work Ethic.",
  category: "fun",
  react: "💼",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`💼 *Work Ethic*\n\n"${pick}"`);
});

cmd({
  pattern: "studyq",
  alias: [],
  desc: "Random Study.",
  category: "fun",
  react: "📚",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`📚 *Study*\n\n"${pick}"`);
});

cmd({
  pattern: "healthq",
  alias: [],
  desc: "Random Health.",
  category: "fun",
  react: "🏥",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`🏥 *Health*\n\n"${pick}"`);
});

cmd({
  pattern: "timeq",
  alias: [],
  desc: "Random Time.",
  category: "fun",
  react: "⏰",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`⏰ *Time*\n\n"${pick}"`);
});

cmd({
  pattern: "changeq",
  alias: [],
  desc: "Random Change.",
  category: "fun",
  react: "🔄",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`🔄 *Change*\n\n"${pick}"`);
});

cmd({
  pattern: "courageq",
  alias: [],
  desc: "Random Courage.",
  category: "fun",
  react: "🦁",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`🦁 *Courage*\n\n"${pick}"`);
});

cmd({
  pattern: "kindq",
  alias: [],
  desc: "Random Kindness.",
  category: "fun",
  react: "💗",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`💗 *Kindness*\n\n"${pick}"`);
});

cmd({
  pattern: "gratitudeq",
  alias: [],
  desc: "Random Gratitude.",
  category: "fun",
  react: "🙏",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`🙏 *Gratitude*\n\n"${pick}"`);
});

cmd({
  pattern: "leadq",
  alias: [],
  desc: "Random Leadership.",
  category: "fun",
  react: "👑",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`👑 *Leadership*\n\n"${pick}"`);
});

cmd({
  pattern: "teamq",
  alias: [],
  desc: "Random Teamwork.",
  category: "fun",
  react: "🤜",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`🤜 *Teamwork*\n\n"${pick}"`);
});

cmd({
  pattern: "creativityq",
  alias: [],
  desc: "Random Creativity.",
  category: "fun",
  react: "🎨",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`🎨 *Creativity*\n\n"${pick}"`);
});

cmd({
  pattern: "focusq",
  alias: [],
  desc: "Random Focus.",
  category: "fun",
  react: "🎯",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`🎯 *Focus*\n\n"${pick}"`);
});

cmd({
  pattern: "patienceq",
  alias: [],
  desc: "Random Patience.",
  category: "fun",
  react: "⏳",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`⏳ *Patience*\n\n"${pick}"`);
});

cmd({
  pattern: "honestyq",
  alias: [],
  desc: "Random Honesty.",
  category: "fun",
  react: "💎",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`💎 *Honesty*\n\n"${pick}"`);
});

cmd({
  pattern: "humilityq",
  alias: [],
  desc: "Random Humility.",
  category: "fun",
  react: "🌿",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`🌿 *Humility*\n\n"${pick}"`);
});

cmd({
  pattern: "respectq",
  alias: [],
  desc: "Random Respect.",
  category: "fun",
  react: "🫡",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`🫡 *Respect*\n\n"${pick}"`);
});

cmd({
  pattern: "parentq",
  alias: [],
  desc: "Random Parents.",
  category: "fun",
  react: "👨‍👩‍👧",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`👨‍👩‍👧 *Parents*\n\n"${pick}"`);
});

cmd({
  pattern: "teacherq",
  alias: [],
  desc: "Random Teachers.",
  category: "fun",
  react: "👩‍🏫",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`👩‍🏫 *Teachers*\n\n"${pick}"`);
});

cmd({
  pattern: "natureq",
  alias: [],
  desc: "Random Nature.",
  category: "fun",
  react: "🌿",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`🌿 *Nature*\n\n"${pick}"`);
});

cmd({
  pattern: "techq",
  alias: [],
  desc: "Random Technology.",
  category: "fun",
  react: "💻",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`💻 *Technology*\n\n"${pick}"`);
});

cmd({
  pattern: "sportq",
  alias: [],
  desc: "Random Sports.",
  category: "fun",
  react: "⚽",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`⚽ *Sports*\n\n"${pick}"`);
});

cmd({
  pattern: "musicq",
  alias: [],
  desc: "Random Music.",
  category: "fun",
  react: "🎵",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`🎵 *Music*\n\n"${pick}"`);
});

cmd({
  pattern: "artq",
  alias: [],
  desc: "Random Art.",
  category: "fun",
  react: "🖼️",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`🖼️ *Art*\n\n"${pick}"`);
});

cmd({
  pattern: "travelq",
  alias: [],
  desc: "Random Travel.",
  category: "fun",
  react: "✈️",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`✈️ *Travel*\n\n"${pick}"`);
});

cmd({
  pattern: "foodq",
  alias: [],
  desc: "Random Food.",
  category: "fun",
  react: "🍕",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`🍕 *Food*\n\n"${pick}"`);
});

cmd({
  pattern: "sleepq",
  alias: [],
  desc: "Random Sleep.",
  category: "fun",
  react: "😴",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`😴 *Sleep*\n\n"${pick}"`);
});

cmd({
  pattern: "morningq",
  alias: [],
  desc: "Random Morning.",
  category: "fun",
  react: "☀️",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`☀️ *Morning*\n\n"${pick}"`);
});

cmd({
  pattern: "nightq",
  alias: [],
  desc: "Random Night.",
  category: "fun",
  react: "🌙",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`🌙 *Night*\n\n"${pick}"`);
});

cmd({
  pattern: "rainq",
  alias: [],
  desc: "Random Rain.",
  category: "fun",
  react: "🌧️",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`🌧️ *Rain*\n\n"${pick}"`);
});

cmd({
  pattern: "sunq",
  alias: [],
  desc: "Random Sunshine.",
  category: "fun",
  react: "☀️",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`☀️ *Sunshine*\n\n"${pick}"`);
});

cmd({
  pattern: "moonq",
  alias: [],
  desc: "Random Moon.",
  category: "fun",
  react: "🌕",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`🌕 *Moon*\n\n"${pick}"`);
});

cmd({
  pattern: "starq",
  alias: [],
  desc: "Random Stars.",
  category: "fun",
  react: "⭐",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`⭐ *Stars*\n\n"${pick}"`);
});

cmd({
  pattern: "oceanq",
  alias: [],
  desc: "Random Ocean.",
  category: "fun",
  react: "🌊",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`🌊 *Ocean*\n\n"${pick}"`);
});

cmd({
  pattern: "mountainq",
  alias: [],
  desc: "Random Mountains.",
  category: "fun",
  react: "⛰️",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`⛰️ *Mountains*\n\n"${pick}"`);
});

cmd({
  pattern: "gardenq",
  alias: [],
  desc: "Random Garden.",
  category: "fun",
  react: "🌻",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`🌻 *Garden*\n\n"${pick}"`);
});

cmd({
  pattern: "bookq",
  alias: [],
  desc: "Random Books.",
  category: "fun",
  react: "📖",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`📖 *Books*\n\n"${pick}"`);
});

cmd({
  pattern: "poetq",
  alias: [],
  desc: "Random Poetry.",
  category: "fun",
  react: "✒️",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`✒️ *Poetry*\n\n"${pick}"`);
});

cmd({
  pattern: "writerq",
  alias: [],
  desc: "Random Writing.",
  category: "fun",
  react: "✍️",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`✍️ *Writing*\n\n"${pick}"`);
});

cmd({
  pattern: "coderq",
  alias: [],
  desc: "Random Coding.",
  category: "fun",
  react: "👨‍💻",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`👨‍💻 *Coding*\n\n"${pick}"`);
});

cmd({
  pattern: "gamerq",
  alias: [],
  desc: "Random Gaming.",
  category: "fun",
  react: "🎮",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`🎮 *Gaming*\n\n"${pick}"`);
});

cmd({
  pattern: "animeq",
  alias: [],
  desc: "Random Anime Wisdom.",
  category: "fun",
  react: "🎌",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`🎌 *Anime Wisdom*\n\n"${pick}"`);
});

cmd({
  pattern: "mangaq",
  alias: [],
  desc: "Random Manga.",
  category: "fun",
  react: "📚",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`📚 *Manga*\n\n"${pick}"`);
});

cmd({
  pattern: "heroq",
  alias: [],
  desc: "Random Hero.",
  category: "fun",
  react: "🦸",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`🦸 *Hero*\n\n"${pick}"`);
});

cmd({
  pattern: "villainq",
  alias: [],
  desc: "Random Villain.",
  category: "fun",
  react: "😈",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`😈 *Villain*\n\n"${pick}"`);
});

cmd({
  pattern: "memeq",
  alias: [],
  desc: "Random Meme Wisdom.",
  category: "fun",
  react: "🐸",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`🐸 *Meme Wisdom*\n\n"${pick}"`);
});

cmd({
  pattern: "genzq",
  alias: [],
  desc: "Random Gen Z.",
  category: "fun",
  react: "📱",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`📱 *Gen Z*\n\n"${pick}"`);
});

cmd({
  pattern: "boomerq",
  alias: [],
  desc: "Random Classic.",
  category: "fun",
  react: "👴",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`👴 *Classic*\n\n"${pick}"`);
});

cmd({
  pattern: "desiq",
  alias: [],
  desc: "Random Desi Wisdom.",
  category: "fun",
  react: "🇮🇳",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`🇮🇳 *Desi Wisdom*\n\n"${pick}"`);
});

cmd({
  pattern: "urduq",
  alias: [],
  desc: "Random Urdu Thought.",
  category: "fun",
  react: "🇵🇰",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`🇵🇰 *Urdu Thought*\n\n"${pick}"`);
});

cmd({
  pattern: "arabicq",
  alias: [],
  desc: "Random Arabic Wisdom.",
  category: "fun",
  react: "🇸🇦",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`🇸🇦 *Arabic Wisdom*\n\n"${pick}"`);
});

cmd({
  pattern: "englishq",
  alias: [],
  desc: "Random English Proverb.",
  category: "fun",
  react: "🇬🇧",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`🇬🇧 *English Proverb*\n\n"${pick}"`);
});

cmd({
  pattern: "scienceq",
  alias: [],
  desc: "Random Science.",
  category: "fun",
  react: "🔬",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`🔬 *Science*\n\n"${pick}"`);
});

cmd({
  pattern: "mathq",
  alias: [],
  desc: "Random Math.",
  category: "fun",
  react: "➗",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`➗ *Math*\n\n"${pick}"`);
});

cmd({
  pattern: "historyq",
  alias: [],
  desc: "Random History.",
  category: "fun",
  react: "📜",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`📜 *History*\n\n"${pick}"`);
});

cmd({
  pattern: "futureq",
  alias: [],
  desc: "Random Future.",
  category: "fun",
  react: "🚀",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`🚀 *Future*\n\n"${pick}"`);
});

cmd({
  pattern: "ramadanq",
  alias: [],
  desc: "Random Ramadan.",
  category: "fun",
  react: "🌙",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`🌙 *Ramadan*\n\n"${pick}"`);
});

cmd({
  pattern: "eidq",
  alias: [],
  desc: "Random Eid.",
  category: "fun",
  react: "🎉",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`🎉 *Eid*\n\n"${pick}"`);
});

cmd({
  pattern: "jummahq",
  alias: [],
  desc: "Random Jummah.",
  category: "fun",
  react: "🕌",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`🕌 *Jummah*\n\n"${pick}"`);
});

cmd({
  pattern: "duasq",
  alias: [],
  desc: "Random Dua Reminder.",
  category: "fun",
  react: "🤲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`🤲 *Dua Reminder*\n\n"${pick}"`);
});

cmd({
  pattern: "sunnahq",
  alias: [],
  desc: "Random Sunnah.",
  category: "fun",
  react: "💚",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`💚 *Sunnah*\n\n"${pick}"`);
});

cmd({
  pattern: "hadithq",
  alias: [],
  desc: "Random Hadith Reminder.",
  category: "fun",
  react: "📿",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`📿 *Hadith Reminder*\n\n"${pick}"`);
});

cmd({
  pattern: "taqwaq",
  alias: [],
  desc: "Random Taqwa.",
  category: "fun",
  react: "🕊️",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`🕊️ *Taqwa*\n\n"${pick}"`);
});

cmd({
  pattern: "sabrq",
  alias: [],
  desc: "Random Sabr.",
  category: "fun",
  react: "⏳",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`⏳ *Sabr*\n\n"${pick}"`);
});

cmd({
  pattern: "tawakkulq",
  alias: [],
  desc: "Random Tawakkul.",
  category: "fun",
  react: "🤲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`🤲 *Tawakkul*\n\n"${pick}"`);
});

cmd({
  pattern: "istikharaq",
  alias: [],
  desc: "Random Guidance.",
  category: "fun",
  react: "🧭",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`🧭 *Guidance*\n\n"${pick}"`);
});

cmd({
  pattern: "shukrq",
  alias: [],
  desc: "Random Shukr.",
  category: "fun",
  react: "🙌",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`🙌 *Shukr*\n\n"${pick}"`);
});

cmd({
  pattern: "istighfarq",
  alias: [],
  desc: "Random Istighfar.",
  category: "fun",
  react: "🙏",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const quotes = ["Keep going — small steps still move you forward.","Your vibe attracts your tribe.","Progress over perfection.","Be the reason someone smiles today.","Hard days build strong people.","Stay humble, stay hungry.","What you plant now, you will harvest later.","Don't compare your chapter 1 to someone else's chapter 20.","A calm mind is a powerful mind.","Kindness costs nothing and means everything."];
  const pick = quotes[Math.floor(Math.random() * quotes.length)];
  reply(`🙏 *Istighfar*\n\n"${pick}"`);
});
