import { fileURLToPath } from 'url';
import { cmd } from '../command.js';
const __filename = fileURLToPath(import.meta.url);


cmd({
  pattern: "servertime",
  alias: [],
  desc: "Current server time",
  category: "info",
  react: "🕒",
  filename: __filename,
}, async (conn, mek, m, { reply, q, args }) => {
  reply("🕒 Server time (UTC): " + new Date().toISOString());
});

cmd({
  pattern: "unixtime",
  alias: [],
  desc: "Unix timestamp",
  category: "info",
  react: "⏱️",
  filename: __filename,
}, async (conn, mek, m, { reply, q, args }) => {
  reply("⏱️ Unix: " + Math.floor(Date.now()/1000));
});

cmd({
  pattern: "dayofweek",
  alias: [],
  desc: "Day of week",
  category: "info",
  react: "📅",
  filename: __filename,
}, async (conn, mek, m, { reply, q, args }) => {
  reply("📅 Today is: " + new Date().toLocaleDateString('en-US',{weekday:'long'}));
});

cmd({
  pattern: "yearnow",
  alias: [],
  desc: "Current year",
  category: "info",
  react: "📆",
  filename: __filename,
}, async (conn, mek, m, { reply, q, args }) => {
  reply("📆 Year: " + new Date().getFullYear());
});

cmd({
  pattern: "coinflip2",
  alias: [],
  desc: "Flip a coin",
  category: "info",
  react: "🪙",
  filename: __filename,
}, async (conn, mek, m, { reply, q, args }) => {
  reply(Math.random()<0.5?"🪙 Heads":"🪙 Tails");
});

cmd({
  pattern: "dice6",
  alias: [],
  desc: "Roll d6",
  category: "info",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply, q, args }) => {
  reply("🎲 You rolled: " + (1+Math.floor(Math.random()*6)));
});

cmd({
  pattern: "dice20",
  alias: [],
  desc: "Roll d20",
  category: "info",
  react: "🎲",
  filename: __filename,
}, async (conn, mek, m, { reply, q, args }) => {
  reply("🎲 d20: " + (1+Math.floor(Math.random()*20)));
});

cmd({
  pattern: "randperc",
  alias: [],
  desc: "Random percent",
  category: "info",
  react: "📊",
  filename: __filename,
}, async (conn, mek, m, { reply, q, args }) => {
  reply("📊 " + Math.floor(Math.random()*101) + "%");
});

cmd({
  pattern: "password8",
  alias: [],
  desc: "Random 8-char password",
  category: "info",
  react: "🔑",
  filename: __filename,
}, async (conn, mek, m, { reply, q, args }) => {
  {const c="ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789";let p="";for(let i=0;i<8;i++)p+=c[Math.floor(Math.random()*c.length)];reply("🔑 "+p+"\n_(Don't use for real accounts from chat)_");}
});

cmd({
  pattern: "uuidfake",
  alias: [],
  desc: "Fake UUID-like id",
  category: "info",
  react: "🆔",
  filename: __filename,
}, async (conn, mek, m, { reply, q, args }) => {
  reply("🆔 "+'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,c=>{const r=Math.random()*16|0;const v=c==='x'?r:(r&0x3|0x8);return v.toString(16);}));
});

cmd({
  pattern: "pingms",
  alias: [],
  desc: "Fake ping style",
  category: "info",
  react: "🏓",
  filename: __filename,
}, async (conn, mek, m, { reply, q, args }) => {
  reply("🏓 Pong! " + (Math.floor(Math.random()*40)+10) + "ms (local)");
});

cmd({
  pattern: "botnameinfo",
  alias: [],
  desc: "Bot name",
  category: "info",
  react: "🤖",
  filename: __filename,
}, async (conn, mek, m, { reply, q, args }) => {
  reply("🤖 Bot: MALIK-MD");
});

cmd({
  pattern: "ownerhint",
  alias: [],
  desc: "Owner hint",
  category: "info",
  react: "👑",
  filename: __filename,
}, async (conn, mek, m, { reply, q, args }) => {
  reply("👑 Owner configured in bot config.");
});

cmd({
  pattern: "helptip",
  alias: [],
  desc: "Random help tip",
  category: "info",
  react: "💡",
  filename: __filename,
}, async (conn, mek, m, { reply, q, args }) => {
  reply("💡 Tip: Use menu to explore commands. Type carefully!");
});

cmd({
  pattern: "grouptip",
  alias: [],
  desc: "Group tip",
  category: "info",
  react: "👥",
  filename: __filename,
}, async (conn, mek, m, { reply, q, args }) => {
  reply("👥 Tip: Be respectful in groups. Admins keep order.");
});

cmd({
  pattern: "privacytip",
  alias: [],
  desc: "Privacy tip",
  category: "info",
  react: "🔒",
  filename: __filename,
}, async (conn, mek, m, { reply, q, args }) => {
  reply("🔒 Tip: Never share OTPs or passwords in chat.");
});

cmd({
  pattern: "islamtips",
  alias: [],
  desc: "Islamic tip",
  category: "info",
  react: "🕌",
  filename: __filename,
}, async (conn, mek, m, { reply, q, args }) => {
  reply("🕌 Tip: Remember Allah in good times and hard times.");
});

cmd({
  pattern: "watertip",
  alias: [],
  desc: "Health tip",
  category: "info",
  react: "💧",
  filename: __filename,
}, async (conn, mek, m, { reply, q, args }) => {
  reply("💧 Drink water and stretch a little!");
});

cmd({
  pattern: "screentip",
  alias: [],
  desc: "Screen tip",
  category: "info",
  react: "📱",
  filename: __filename,
}, async (conn, mek, m, { reply, q, args }) => {
  reply("📱 Rest your eyes every 20 minutes.");
});

cmd({
  pattern: "studytip",
  alias: [],
  desc: "Study tip",
  category: "info",
  react: "📚",
  filename: __filename,
}, async (conn, mek, m, { reply, q, args }) => {
  reply("📚 Study in short focused blocks.");
});

cmd({
  pattern: "c2f",
  alias: [],
  desc: "Celsius to Fahrenheit",
  category: "tools",
  react: "🔄",
  filename: __filename,
}, async (conn, mek, m, { reply, q, args }) => {
  if(!q||isNaN(parseFloat(q)))return reply("Usage: .c2f 25"); const c=parseFloat(q); reply(c+"°C = "+((c*9/5)+32).toFixed(2)+"°F");
});

cmd({
  pattern: "f2c",
  alias: [],
  desc: "Fahrenheit to Celsius",
  category: "tools",
  react: "🔄",
  filename: __filename,
}, async (conn, mek, m, { reply, q, args }) => {
  if(!q||isNaN(parseFloat(q)))return reply("Usage: .f2c 77"); const f=parseFloat(q); reply(f+"°F = "+((f-32)*5/9).toFixed(2)+"°C");
});

cmd({
  pattern: "km2mi",
  alias: [],
  desc: "Km to miles",
  category: "tools",
  react: "🔄",
  filename: __filename,
}, async (conn, mek, m, { reply, q, args }) => {
  if(!q||isNaN(parseFloat(q)))return reply("Usage: .km2mi 10"); const k=parseFloat(q); reply(k+" km = "+(k*0.621371).toFixed(3)+" mi");
});

cmd({
  pattern: "mi2km",
  alias: [],
  desc: "Miles to km",
  category: "tools",
  react: "🔄",
  filename: __filename,
}, async (conn, mek, m, { reply, q, args }) => {
  if(!q||isNaN(parseFloat(q)))return reply("Usage: .mi2km 10"); const m=parseFloat(q); reply(m+" mi = "+(m*1.60934).toFixed(3)+" km");
});

cmd({
  pattern: "kg2lb",
  alias: [],
  desc: "Kg to lb",
  category: "tools",
  react: "🔄",
  filename: __filename,
}, async (conn, mek, m, { reply, q, args }) => {
  if(!q||isNaN(parseFloat(q)))return reply("Usage: .kg2lb 70"); const k=parseFloat(q); reply(k+" kg = "+(k*2.20462).toFixed(2)+" lb");
});

cmd({
  pattern: "lb2kg",
  alias: [],
  desc: "Lb to kg",
  category: "tools",
  react: "🔄",
  filename: __filename,
}, async (conn, mek, m, { reply, q, args }) => {
  if(!q||isNaN(parseFloat(q)))return reply("Usage: .lb2kg 154"); const l=parseFloat(q); reply(l+" lb = "+(l/2.20462).toFixed(2)+" kg");
});

cmd({
  pattern: "m2ft",
  alias: [],
  desc: "Meters to feet",
  category: "tools",
  react: "🔄",
  filename: __filename,
}, async (conn, mek, m, { reply, q, args }) => {
  if(!q||isNaN(parseFloat(q)))return reply("Usage: .m2ft 2"); const m=parseFloat(q); reply(m+" m = "+(m*3.28084).toFixed(2)+" ft");
});

cmd({
  pattern: "ft2m",
  alias: [],
  desc: "Feet to meters",
  category: "tools",
  react: "🔄",
  filename: __filename,
}, async (conn, mek, m, { reply, q, args }) => {
  if(!q||isNaN(parseFloat(q)))return reply("Usage: .ft2m 6"); const f=parseFloat(q); reply(f+" ft = "+(f/3.28084).toFixed(2)+" m");
});

cmd({
  pattern: "cm2in",
  alias: [],
  desc: "Cm to inches",
  category: "tools",
  react: "🔄",
  filename: __filename,
}, async (conn, mek, m, { reply, q, args }) => {
  if(!q||isNaN(parseFloat(q)))return reply("Usage: .cm2in 30"); const c=parseFloat(q); reply(c+" cm = "+(c/2.54).toFixed(2)+" in");
});

cmd({
  pattern: "in2cm",
  alias: [],
  desc: "Inches to cm",
  category: "tools",
  react: "🔄",
  filename: __filename,
}, async (conn, mek, m, { reply, q, args }) => {
  if(!q||isNaN(parseFloat(q)))return reply("Usage: .in2cm 12"); const i=parseFloat(q); reply(i+" in = "+(i*2.54).toFixed(2)+" cm");
});

cmd({
  pattern: "l2gal",
  alias: [],
  desc: "Liters to gallons",
  category: "tools",
  react: "🔄",
  filename: __filename,
}, async (conn, mek, m, { reply, q, args }) => {
  if(!q||isNaN(parseFloat(q)))return reply("Usage: .l2gal 5"); const l=parseFloat(q); reply(l+" L = "+(l*0.264172).toFixed(3)+" gal");
});

cmd({
  pattern: "gal2l",
  alias: [],
  desc: "Gallons to liters",
  category: "tools",
  react: "🔄",
  filename: __filename,
}, async (conn, mek, m, { reply, q, args }) => {
  if(!q||isNaN(parseFloat(q)))return reply("Usage: .gal2l 2"); const g=parseFloat(q); reply(g+" gal = "+(g/0.264172).toFixed(3)+" L");
});

cmd({
  pattern: "hrs2min",
  alias: [],
  desc: "Hours to minutes",
  category: "tools",
  react: "🔄",
  filename: __filename,
}, async (conn, mek, m, { reply, q, args }) => {
  if(!q||isNaN(parseFloat(q)))return reply("Usage: .hrs2min 2"); const h=parseFloat(q); reply(h+" h = "+(h*60)+" min");
});

cmd({
  pattern: "min2hrs",
  alias: [],
  desc: "Minutes to hours",
  category: "tools",
  react: "🔄",
  filename: __filename,
}, async (conn, mek, m, { reply, q, args }) => {
  if(!q||isNaN(parseFloat(q)))return reply("Usage: .min2hrs 90"); const m=parseFloat(q); reply(m+" min = "+(m/60).toFixed(2)+" h");
});

cmd({
  pattern: "sec2min",
  alias: [],
  desc: "Seconds to minutes",
  category: "tools",
  react: "🔄",
  filename: __filename,
}, async (conn, mek, m, { reply, q, args }) => {
  if(!q||isNaN(parseFloat(q)))return reply("Usage: .sec2min 120"); const s=parseFloat(q); reply(s+" s = "+(s/60).toFixed(2)+" min");
});

cmd({
  pattern: "bintodec",
  alias: [],
  desc: "Binary to decimal",
  category: "tools",
  react: "🔄",
  filename: __filename,
}, async (conn, mek, m, { reply, q, args }) => {
  if(!q||!/^[01]+$/.test(q.trim()))return reply("Usage: .bintodec 1010"); reply(parseInt(q.trim(),2).toString());
});

cmd({
  pattern: "dectobin",
  alias: [],
  desc: "Decimal to binary",
  category: "tools",
  react: "🔄",
  filename: __filename,
}, async (conn, mek, m, { reply, q, args }) => {
  if(!q||isNaN(parseInt(q)))return reply("Usage: .dectobin 42"); reply(parseInt(q,10).toString(2));
});

cmd({
  pattern: "dectohex",
  alias: [],
  desc: "Decimal to hex",
  category: "tools",
  react: "🔄",
  filename: __filename,
}, async (conn, mek, m, { reply, q, args }) => {
  if(!q||isNaN(parseInt(q)))return reply("Usage: .dectohex 255"); reply(parseInt(q,10).toString(16));
});

cmd({
  pattern: "hextodec",
  alias: [],
  desc: "Hex to decimal",
  category: "tools",
  react: "🔄",
  filename: __filename,
}, async (conn, mek, m, { reply, q, args }) => {
  if(!q||!/^[0-9a-fA-F]+$/.test(q.trim()))return reply("Usage: .hextodec ff"); reply(parseInt(q.trim(),16).toString());
});

cmd({
  pattern: "wordcountq",
  alias: [],
  desc: "Word count of q",
  category: "tools",
  react: "🔄",
  filename: __filename,
}, async (conn, mek, m, { reply, q, args }) => {
  if(!q)return reply("Provide text"); reply("Words: "+q.trim().split(/\s+/).filter(Boolean).length);
});
