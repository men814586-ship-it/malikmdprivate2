import { fileURLToPath } from 'url';
import { cmd } from '../command.js';
const __filename = fileURLToPath(import.meta.url);


cmd({
  pattern: "randcolor",
  alias: [],
  desc: "Random Color.",
  category: "fun",
  react: "🎨",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["Red","Blue","Green","Yellow","Purple","Orange","Pink","Teal","Cyan","Magenta","Gold","Silver"];
  reply(`🎨 *Color:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randanimal",
  alias: [],
  desc: "Random Animal.",
  category: "fun",
  react: "🐾",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["Cat","Dog","Lion","Tiger","Panda","Fox","Wolf","Eagle","Dolphin","Owl"];
  reply(`🐾 *Animal:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randfood",
  alias: [],
  desc: "Random Food.",
  category: "fun",
  react: "🍔",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["Biryani","Pizza","Burger","Sushi","Pasta","Tacos","Noodles","Steak","Salad","Ice Cream"];
  reply(`🍔 *Food:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randdrink",
  alias: [],
  desc: "Random Drink.",
  category: "fun",
  react: "🥤",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["Water","Tea","Coffee","Juice","Lassi","Smoothie","Lemonade","Milk","Soda","Mocktail"];
  reply(`🥤 *Drink:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randemoji",
  alias: [],
  desc: "Random Emoji.",
  category: "fun",
  react: "😊",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["😀","😎","🤩","🥳","😇","🤖","🦄","🔥","💯","🌟"];
  reply(`😊 *Emoji:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randnumber",
  alias: [],
  desc: "Random Lucky Number.",
  category: "fun",
  react: "🔢",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["1","3","7","9","11","13","21","27","77","99"];
  reply(`🔢 *Lucky Number:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randyesno",
  alias: [],
  desc: "Random Yes/No.",
  category: "fun",
  react: "❓",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["Yes ✅","No ❌","Maybe 🤷","Ask again 🔁","Absolutely 💯","Nope 🚫"];
  reply(`❓ *Yes/No:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randadvice",
  alias: [],
  desc: "Random Advice.",
  category: "fun",
  react: "💡",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["Drink water","Take a break","Message a friend","Make dua","Clean your desk","Go for a walk"];
  reply(`💡 *Advice:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randhobby",
  alias: [],
  desc: "Random Hobby.",
  category: "fun",
  react: "🎯",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["Reading","Coding","Football","Cooking","Photography","Gaming","Travel","Music","Art","Fitness"];
  reply(`🎯 *Hobby:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randmovie",
  alias: [],
  desc: "Random Movie Genre.",
  category: "fun",
  react: "🎬",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["Action","Comedy","Drama","Horror","Romance","Sci-Fi","Thriller","Animation","Documentary","Fantasy"];
  reply(`🎬 *Movie Genre:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randsong",
  alias: [],
  desc: "Random Song Mood.",
  category: "fun",
  react: "🎵",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["Happy","Sad","Chill","Hype","Romantic","Spiritual","Workout","Focus","Party","Nostalgic"];
  reply(`🎵 *Song Mood:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randweather",
  alias: [],
  desc: "Random Weather Wish.",
  category: "fun",
  react: "⛅",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["Sunny","Cloudy","Rainy","Windy","Snowy","Stormy","Clear night","Golden hour"];
  reply(`⛅ *Weather Wish:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randplanet",
  alias: [],
  desc: "Random Planet.",
  category: "fun",
  react: "🪐",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"];
  reply(`🪐 *Planet:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randcountry",
  alias: [],
  desc: "Random Country vibe.",
  category: "fun",
  react: "🌍",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["Pakistan","Turkey","Japan","Brazil","Canada","Egypt","Indonesia","Morocco","UK","USA"];
  reply(`🌍 *Country vibe:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randcity",
  alias: [],
  desc: "Random City vibe.",
  category: "fun",
  react: "🏙️",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["Karachi","Lahore","Istanbul","Tokyo","Dubai","London","Cairo","Jakarta","Riyadh","New York"];
  reply(`🏙️ *City vibe:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randcar",
  alias: [],
  desc: "Random Car vibe.",
  category: "fun",
  react: "🚗",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["Sports car","SUV","Sedan","Convertible","Electric","Classic","Truck","Bike"];
  reply(`🚗 *Car vibe:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randjob",
  alias: [],
  desc: "Random Job vibe.",
  category: "fun",
  react: "💼",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["Engineer","Doctor","Teacher","Designer","Chef","Pilot","Artist","Scientist","Writer","Athlete"];
  reply(`💼 *Job vibe:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randsuperpower",
  alias: [],
  desc: "Random Superpower.",
  category: "fun",
  react: "🦸",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["Invisibility","Flight","Teleport","Speed","Strength","Mind read","Time pause","Healing"];
  reply(`🦸 *Superpower:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randweapon",
  alias: [],
  desc: "Random Fantasy weapon.",
  category: "fun",
  react: "⚔️",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["Sword","Bow","Staff","Shield","Dagger","Hammer","Spear","Wand"];
  reply(`⚔️ *Fantasy weapon:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randclass",
  alias: [],
  desc: "Random RPG class.",
  category: "fun",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["Warrior","Mage","Archer","Healer","Rogue","Paladin","Necromancer","Bard"];
  reply(`🎲 *RPG class:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randelement",
  alias: [],
  desc: "Random Element.",
  category: "fun",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["element option 1","element option 2","element option 3","element option 4","element option 5","element option 6","element option 7","element option 8"];
  reply(`🎲 *Element:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randseason",
  alias: [],
  desc: "Random Season.",
  category: "fun",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["season option 1","season option 2","season option 3","season option 4","season option 5","season option 6","season option 7","season option 8"];
  reply(`🎲 *Season:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randweekday",
  alias: [],
  desc: "Random Weekday.",
  category: "fun",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["weekday option 1","weekday option 2","weekday option 3","weekday option 4","weekday option 5","weekday option 6","weekday option 7","weekday option 8"];
  reply(`🎲 *Weekday:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randmonth",
  alias: [],
  desc: "Random Month.",
  category: "fun",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["month option 1","month option 2","month option 3","month option 4","month option 5","month option 6","month option 7","month option 8"];
  reply(`🎲 *Month:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randfruit",
  alias: [],
  desc: "Random Fruit.",
  category: "fun",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["fruit option 1","fruit option 2","fruit option 3","fruit option 4","fruit option 5","fruit option 6","fruit option 7","fruit option 8"];
  reply(`🎲 *Fruit:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randveggie",
  alias: [],
  desc: "Random Veggie.",
  category: "fun",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["veggie option 1","veggie option 2","veggie option 3","veggie option 4","veggie option 5","veggie option 6","veggie option 7","veggie option 8"];
  reply(`🎲 *Veggie:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randdessert",
  alias: [],
  desc: "Random Dessert.",
  category: "fun",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["dessert option 1","dessert option 2","dessert option 3","dessert option 4","dessert option 5","dessert option 6","dessert option 7","dessert option 8"];
  reply(`🎲 *Dessert:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randsnack",
  alias: [],
  desc: "Random Snack.",
  category: "fun",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["snack option 1","snack option 2","snack option 3","snack option 4","snack option 5","snack option 6","snack option 7","snack option 8"];
  reply(`🎲 *Snack:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randspice",
  alias: [],
  desc: "Random Spice.",
  category: "fun",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["spice option 1","spice option 2","spice option 3","spice option 4","spice option 5","spice option 6","spice option 7","spice option 8"];
  reply(`🎲 *Spice:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randherb",
  alias: [],
  desc: "Random Herb.",
  category: "fun",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["herb option 1","herb option 2","herb option 3","herb option 4","herb option 5","herb option 6","herb option 7","herb option 8"];
  reply(`🎲 *Herb:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randflower",
  alias: [],
  desc: "Random Flower.",
  category: "fun",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["flower option 1","flower option 2","flower option 3","flower option 4","flower option 5","flower option 6","flower option 7","flower option 8"];
  reply(`🎲 *Flower:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randtree",
  alias: [],
  desc: "Random Tree.",
  category: "fun",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["tree option 1","tree option 2","tree option 3","tree option 4","tree option 5","tree option 6","tree option 7","tree option 8"];
  reply(`🎲 *Tree:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randbird",
  alias: [],
  desc: "Random Bird.",
  category: "fun",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["bird option 1","bird option 2","bird option 3","bird option 4","bird option 5","bird option 6","bird option 7","bird option 8"];
  reply(`🎲 *Bird:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randfish",
  alias: [],
  desc: "Random Fish.",
  category: "fun",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["fish option 1","fish option 2","fish option 3","fish option 4","fish option 5","fish option 6","fish option 7","fish option 8"];
  reply(`🎲 *Fish:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randinsect",
  alias: [],
  desc: "Random Insect.",
  category: "fun",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["insect option 1","insect option 2","insect option 3","insect option 4","insect option 5","insect option 6","insect option 7","insect option 8"];
  reply(`🎲 *Insect:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randgem",
  alias: [],
  desc: "Random Gem.",
  category: "fun",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["gem option 1","gem option 2","gem option 3","gem option 4","gem option 5","gem option 6","gem option 7","gem option 8"];
  reply(`🎲 *Gem:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randmetal",
  alias: [],
  desc: "Random Metal.",
  category: "fun",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["metal option 1","metal option 2","metal option 3","metal option 4","metal option 5","metal option 6","metal option 7","metal option 8"];
  reply(`🎲 *Metal:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randtool",
  alias: [],
  desc: "Random Tool.",
  category: "fun",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["tool option 1","tool option 2","tool option 3","tool option 4","tool option 5","tool option 6","tool option 7","tool option 8"];
  reply(`🎲 *Tool:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randsport",
  alias: [],
  desc: "Random Sport.",
  category: "fun",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["sport option 1","sport option 2","sport option 3","sport option 4","sport option 5","sport option 6","sport option 7","sport option 8"];
  reply(`🎲 *Sport:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randinstrument",
  alias: [],
  desc: "Random Instrument.",
  category: "fun",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["instrument option 1","instrument option 2","instrument option 3","instrument option 4","instrument option 5","instrument option 6","instrument option 7","instrument option 8"];
  reply(`🎲 *Instrument:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randlanguage",
  alias: [],
  desc: "Random Language.",
  category: "fun",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["language option 1","language option 2","language option 3","language option 4","language option 5","language option 6","language option 7","language option 8"];
  reply(`🎲 *Language:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randsubject",
  alias: [],
  desc: "Random Subject.",
  category: "fun",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["subject option 1","subject option 2","subject option 3","subject option 4","subject option 5","subject option 6","subject option 7","subject option 8"];
  reply(`🎲 *Subject:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randapp",
  alias: [],
  desc: "Random App.",
  category: "fun",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["app option 1","app option 2","app option 3","app option 4","app option 5","app option 6","app option 7","app option 8"];
  reply(`🎲 *App:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randwebsite",
  alias: [],
  desc: "Random Website.",
  category: "fun",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["website option 1","website option 2","website option 3","website option 4","website option 5","website option 6","website option 7","website option 8"];
  reply(`🎲 *Website:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randbrowser",
  alias: [],
  desc: "Random Browser.",
  category: "fun",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["browser option 1","browser option 2","browser option 3","browser option 4","browser option 5","browser option 6","browser option 7","browser option 8"];
  reply(`🎲 *Browser:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randos",
  alias: [],
  desc: "Random Os.",
  category: "fun",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["os option 1","os option 2","os option 3","os option 4","os option 5","os option 6","os option 7","os option 8"];
  reply(`🎲 *Os:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randdevice",
  alias: [],
  desc: "Random Device.",
  category: "fun",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["device option 1","device option 2","device option 3","device option 4","device option 5","device option 6","device option 7","device option 8"];
  reply(`🎲 *Device:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randbrand",
  alias: [],
  desc: "Random Brand.",
  category: "fun",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["brand option 1","brand option 2","brand option 3","brand option 4","brand option 5","brand option 6","brand option 7","brand option 8"];
  reply(`🎲 *Brand:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randshoe",
  alias: [],
  desc: "Random Shoe.",
  category: "fun",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["shoe option 1","shoe option 2","shoe option 3","shoe option 4","shoe option 5","shoe option 6","shoe option 7","shoe option 8"];
  reply(`🎲 *Shoe:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randhat",
  alias: [],
  desc: "Random Hat.",
  category: "fun",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["hat option 1","hat option 2","hat option 3","hat option 4","hat option 5","hat option 6","hat option 7","hat option 8"];
  reply(`🎲 *Hat:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randjacket",
  alias: [],
  desc: "Random Jacket.",
  category: "fun",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["jacket option 1","jacket option 2","jacket option 3","jacket option 4","jacket option 5","jacket option 6","jacket option 7","jacket option 8"];
  reply(`🎲 *Jacket:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randcolorhex",
  alias: [],
  desc: "Random Colorhex.",
  category: "fun",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["colorhex option 1","colorhex option 2","colorhex option 3","colorhex option 4","colorhex option 5","colorhex option 6","colorhex option 7","colorhex option 8"];
  reply(`🎲 *Colorhex:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randpattern",
  alias: [],
  desc: "Random Pattern.",
  category: "fun",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["pattern option 1","pattern option 2","pattern option 3","pattern option 4","pattern option 5","pattern option 6","pattern option 7","pattern option 8"];
  reply(`🎲 *Pattern:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randshape",
  alias: [],
  desc: "Random Shape.",
  category: "fun",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["shape option 1","shape option 2","shape option 3","shape option 4","shape option 5","shape option 6","shape option 7","shape option 8"];
  reply(`🎲 *Shape:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randfont",
  alias: [],
  desc: "Random Font.",
  category: "fun",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["font option 1","font option 2","font option 3","font option 4","font option 5","font option 6","font option 7","font option 8"];
  reply(`🎲 *Font:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randtheme",
  alias: [],
  desc: "Random Theme.",
  category: "fun",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["theme option 1","theme option 2","theme option 3","theme option 4","theme option 5","theme option 6","theme option 7","theme option 8"];
  reply(`🎲 *Theme:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randplaylist",
  alias: [],
  desc: "Random Playlist.",
  category: "fun",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["playlist option 1","playlist option 2","playlist option 3","playlist option 4","playlist option 5","playlist option 6","playlist option 7","playlist option 8"];
  reply(`🎲 *Playlist:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randpodcast",
  alias: [],
  desc: "Random Podcast.",
  category: "fun",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["podcast option 1","podcast option 2","podcast option 3","podcast option 4","podcast option 5","podcast option 6","podcast option 7","podcast option 8"];
  reply(`🎲 *Podcast:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randbookgenre",
  alias: [],
  desc: "Random Bookgenre.",
  category: "fun",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["bookgenre option 1","bookgenre option 2","bookgenre option 3","bookgenre option 4","bookgenre option 5","bookgenre option 6","bookgenre option 7","bookgenre option 8"];
  reply(`🎲 *Bookgenre:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randcomic",
  alias: [],
  desc: "Random Comic.",
  category: "fun",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["comic option 1","comic option 2","comic option 3","comic option 4","comic option 5","comic option 6","comic option 7","comic option 8"];
  reply(`🎲 *Comic:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randanimegenre",
  alias: [],
  desc: "Random Animegenre.",
  category: "fun",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["animegenre option 1","animegenre option 2","animegenre option 3","animegenre option 4","animegenre option 5","animegenre option 6","animegenre option 7","animegenre option 8"];
  reply(`🎲 *Animegenre:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randgamegenre",
  alias: [],
  desc: "Random Gamegenre.",
  category: "fun",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["gamegenre option 1","gamegenre option 2","gamegenre option 3","gamegenre option 4","gamegenre option 5","gamegenre option 6","gamegenre option 7","gamegenre option 8"];
  reply(`🎲 *Gamegenre:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randmap",
  alias: [],
  desc: "Random Map.",
  category: "fun",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["map option 1","map option 2","map option 3","map option 4","map option 5","map option 6","map option 7","map option 8"];
  reply(`🎲 *Map:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randbiome",
  alias: [],
  desc: "Random Biome.",
  category: "fun",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["biome option 1","biome option 2","biome option 3","biome option 4","biome option 5","biome option 6","biome option 7","biome option 8"];
  reply(`🎲 *Biome:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randclimate",
  alias: [],
  desc: "Random Climate.",
  category: "fun",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["climate option 1","climate option 2","climate option 3","climate option 4","climate option 5","climate option 6","climate option 7","climate option 8"];
  reply(`🎲 *Climate:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randconstellation",
  alias: [],
  desc: "Random Constellation.",
  category: "fun",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["constellation option 1","constellation option 2","constellation option 3","constellation option 4","constellation option 5","constellation option 6","constellation option 7","constellation option 8"];
  reply(`🎲 *Constellation:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randmyth",
  alias: [],
  desc: "Random Myth.",
  category: "fun",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["myth option 1","myth option 2","myth option 3","myth option 4","myth option 5","myth option 6","myth option 7","myth option 8"];
  reply(`🎲 *Myth:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randlegend",
  alias: [],
  desc: "Random Legend.",
  category: "fun",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["legend option 1","legend option 2","legend option 3","legend option 4","legend option 5","legend option 6","legend option 7","legend option 8"];
  reply(`🎲 *Legend:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randfairy",
  alias: [],
  desc: "Random Fairy.",
  category: "fun",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["fairy option 1","fairy option 2","fairy option 3","fairy option 4","fairy option 5","fairy option 6","fairy option 7","fairy option 8"];
  reply(`🎲 *Fairy:* ${items[Math.floor(Math.random() * items.length)]}`);
});

cmd({
  pattern: "randdragon",
  alias: [],
  desc: "Random Dragon.",
  category: "fun",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply }) => {
  const items = ["dragon option 1","dragon option 2","dragon option 3","dragon option 4","dragon option 5","dragon option 6","dragon option 7","dragon option 8"];
  reply(`🎲 *Dragon:* ${items[Math.floor(Math.random() * items.length)]}`);
});
