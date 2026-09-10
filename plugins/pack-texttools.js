import { fileURLToPath } from 'url';
import { cmd } from '../command.js';
const __filename = fileURLToPath(import.meta.url);


cmd({
  pattern: "uppercasetool",
  alias: [],
  desc: "Convert text to UPPERCASE",
  category: "tools",
  react: "🔠",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = q.toUpperCase();
  reply(out);
});

cmd({
  pattern: "lowercasetool",
  alias: [],
  desc: "Convert text to lowercase",
  category: "tools",
  react: "🔡",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = q.toLowerCase();
  reply(out);
});

cmd({
  pattern: "titlecase",
  alias: [],
  desc: "Convert text to Title Case",
  category: "tools",
  react: "📝",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = q.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
  reply(out);
});

cmd({
  pattern: "reversetext",
  alias: [],
  desc: "Reverse text",
  category: "tools",
  react: "🔁",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = [...q].reverse().join('');
  reply(out);
});

cmd({
  pattern: "spacify",
  alias: [],
  desc: "Add spaces between characters",
  category: "tools",
  react: "␣",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = q.split('').join(' ');
  reply(out);
});

cmd({
  pattern: "despacify",
  alias: [],
  desc: "Remove all spaces",
  category: "tools",
  react: "✂️",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = q.replace(/\s+/g,'');
  reply(out);
});

cmd({
  pattern: "countchars",
  alias: [],
  desc: "Count characters",
  category: "tools",
  react: "🔢",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = `Characters: ${q.length}`;
  reply(out);
});

cmd({
  pattern: "countwords",
  alias: [],
  desc: "Count words",
  category: "tools",
  react: "🔢",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = `Words: ${q.trim().split(/\s+/).filter(Boolean).length}`;
  reply(out);
});

cmd({
  pattern: "countlines",
  alias: [],
  desc: "Count lines",
  category: "tools",
  react: "🔢",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = `Lines: ${q.split(/\n/).length}`;
  reply(out);
});

cmd({
  pattern: "trimtext",
  alias: [],
  desc: "Trim whitespace",
  category: "tools",
  react: "🧹",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = q.trim();
  reply(out);
});

cmd({
  pattern: "doublespace",
  alias: [],
  desc: "Double spaces between words",
  category: "tools",
  react: "⬜",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = q.trim().split(/\s+/).join('  ');
  reply(out);
});

cmd({
  pattern: "snakecase",
  alias: [],
  desc: "snake_case",
  category: "tools",
  react: "🐍",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = q.trim().toLowerCase().replace(/\s+/g,'_');
  reply(out);
});

cmd({
  pattern: "kebabcase",
  alias: [],
  desc: "kebab-case",
  category: "tools",
  react: "➖",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = q.trim().toLowerCase().replace(/\s+/g,'-');
  reply(out);
});

cmd({
  pattern: "camelcase",
  alias: [],
  desc: "camelCase",
  category: "tools",
  react: "🐪",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = q.trim().toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g,(_,c)=>c.toUpperCase()).replace(/^[A-Z]/,c=>c.toLowerCase());
  reply(out);
});

cmd({
  pattern: "pascalcase",
  alias: [],
  desc: "PascalCase",
  category: "tools",
  react: "📦",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = q.trim().toLowerCase().replace(/(^|[^a-zA-Z0-9]+)(.)/g,(_,__,c)=>c.toUpperCase());
  reply(out);
});

cmd({
  pattern: "slugify",
  alias: [],
  desc: "URL slug",
  category: "tools",
  react: "🔗",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = q.trim().toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
  reply(out);
});

cmd({
  pattern: "vowelsonly",
  alias: [],
  desc: "Keep only vowels",
  category: "tools",
  react: "🅰️",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = q.replace(/[^aeiouAEIOU\s]/g,'');
  reply(out);
});

cmd({
  pattern: "consonantsonly",
  alias: [],
  desc: "Keep only consonants",
  category: "tools",
  react: "🅱️",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = q.replace(/[aeiouAEIOU]/g,'');
  reply(out);
});

cmd({
  pattern: "altcase",
  alias: [],
  desc: "aLtErNaTiNg CaSe",
  category: "tools",
  react: "🔀",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = [...q].map((c,i)=>i%2?c.toUpperCase():c.toLowerCase()).join('');
  reply(out);
});

cmd({
  pattern: "mockcase",
  alias: [],
  desc: "MoCkInG cAsE",
  category: "tools",
  react: "😜",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = [...q].map((c,i)=>i%2?c.toLowerCase():c.toUpperCase()).join('');
  reply(out);
});

cmd({
  pattern: "emojifytext",
  alias: [],
  desc: "Add sparkles around text",
  category: "tools",
  react: "✨",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = `✨ ${q} ✨`;
  reply(out);
});

cmd({
  pattern: "boxtext",
  alias: [],
  desc: "Put text in a box",
  category: "tools",
  react: "📦",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = `┌${'─'.repeat(Math.min(q.length,40))}┐\n│ ${q.slice(0,40)} │\n└${'─'.repeat(Math.min(q.length,40))}┘`;
  reply(out);
});

cmd({
  pattern: "claptext",
  alias: [],
  desc: "Clap between words",
  category: "tools",
  react: "👏",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = q.trim().split(/\s+/).join(' 👏 ');
  reply(out);
});

cmd({
  pattern: "hashtagify",
  alias: [],
  desc: "Make hashtags",
  category: "tools",
  react: "#️⃣",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = q.trim().split(/\s+/).map(w=>'#'+w.replace(/[^a-zA-Z0-9]/g,'')).join(' ');
  reply(out);
});

cmd({
  pattern: "mentionify",
  alias: [],
  desc: "Fake @mentions",
  category: "tools",
  react: "📣",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = q.trim().split(/\s+/).map(w=>'@'+w).join(' ');
  reply(out);
});

cmd({
  pattern: "repeat2",
  alias: [],
  desc: "Repeat text 2x",
  category: "tools",
  react: "2️⃣",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = (q+' ').repeat(2).trim();
  reply(out);
});

cmd({
  pattern: "repeat3",
  alias: [],
  desc: "Repeat text 3x",
  category: "tools",
  react: "3️⃣",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = (q+' ').repeat(3).trim();
  reply(out);
});

cmd({
  pattern: "shout",
  alias: [],
  desc: "Shout with !!!",
  category: "tools",
  react: "📢",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = q.toUpperCase()+'!!!';
  reply(out);
});

cmd({
  pattern: "whisper",
  alias: [],
  desc: "Whisper style",
  category: "tools",
  react: "🤫",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = '('+q.toLowerCase()+')';
  reply(out);
});

cmd({
  pattern: "dotdot",
  alias: [],
  desc: "Add ellipsis vibe",
  category: "tools",
  react: "⋯",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = q.trim()+'...';
  reply(out);
});

cmd({
  pattern: "questionify",
  alias: [],
  desc: "Make it a question",
  category: "tools",
  react: "❓",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = q.trim().replace(/[.!?]*$/,'')+'?';
  reply(out);
});

cmd({
  pattern: "exclaim",
  alias: [],
  desc: "Add excitement",
  category: "tools",
  react: "❗",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = q.trim().replace(/[.!?]*$/,'')+'!';
  reply(out);
});

cmd({
  pattern: "binarify",
  alias: [],
  desc: "Fake binary look",
  category: "tools",
  react: "0️⃣",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = [...q].map(c=>c.charCodeAt(0).toString(2).padStart(8,'0')).join(' ');
  reply(out);
});

cmd({
  pattern: "hexify",
  alias: [],
  desc: "Hex codes of chars",
  category: "tools",
  react: "#️⃣",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = [...q].map(c=>'0x'+c.charCodeAt(0).toString(16)).join(' ');
  reply(out);
});

cmd({
  pattern: "rot13tool",
  alias: [],
  desc: "ROT13 cipher",
  category: "tools",
  react: "🔐",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = q.replace(/[a-zA-Z]/g,c=>{const b=c<='Z'?65:97;return String.fromCharCode((c.charCodeAt(0)-b+13)%26+b)});
  reply(out);
});

cmd({
  pattern: "caesar3",
  alias: [],
  desc: "Caesar +3",
  category: "tools",
  react: "🔐",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = q.replace(/[a-zA-Z]/g,c=>{const b=c<='Z'?65:97;return String.fromCharCode((c.charCodeAt(0)-b+3)%26+b)});
  reply(out);
});

cmd({
  pattern: "mirrortext",
  alias: [],
  desc: "Mirror-ish reverse words",
  category: "tools",
  react: "🪞",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = q.split(' ').map(w=>[...w].reverse().join('')).join(' ');
  reply(out);
});

cmd({
  pattern: "firstletters",
  alias: [],
  desc: "Acronym from words",
  category: "tools",
  react: "🅰️",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = q.trim().split(/\s+/).map(w=>w[0]||'').join('').toUpperCase();
  reply(out);
});

cmd({
  pattern: "lastletters",
  alias: [],
  desc: "Last letters of words",
  category: "tools",
  react: "🇿",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = q.trim().split(/\s+/).map(w=>w.slice(-1)).join('');
  reply(out);
});

cmd({
  pattern: "wordlen",
  alias: [],
  desc: "Show word lengths",
  category: "tools",
  react: "📏",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = q.trim().split(/\s+/).map(w=>`${w}(${w.length})`).join(' ');
  reply(out);
});

cmd({
  pattern: "sortwords",
  alias: [],
  desc: "Sort words A-Z",
  category: "tools",
  react: "🔤",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = q.trim().split(/\s+/).sort((a,b)=>a.localeCompare(b)).join(' ');
  reply(out);
});

cmd({
  pattern: "rsortwords",
  alias: [],
  desc: "Sort words Z-A",
  category: "tools",
  react: "🔤",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = q.trim().split(/\s+/).sort((a,b)=>b.localeCompare(a)).join(' ');
  reply(out);
});

cmd({
  pattern: "shufflewords",
  alias: [],
  desc: "Shuffle words",
  category: "tools",
  react: "🔀",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = q.trim().split(/\s+/).sort(()=>Math.random()-0.5).join(' ');
  reply(out);
});

cmd({
  pattern: "shufflechars",
  alias: [],
  desc: "Shuffle characters",
  category: "tools",
  react: "🔀",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = [...q].sort(()=>Math.random()-0.5).join('');
  reply(out);
});

cmd({
  pattern: "palindromecheck",
  alias: [],
  desc: "Check palindrome",
  category: "tools",
  react: "🔄",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = (()=>{const s=q.toLowerCase().replace(/[^a-z0-9]/g,'');return s=== [...s].reverse().join('')?`✅ Palindrome: ${q}`:`❌ Not a palindrome: ${q}`})();
  reply(out);
});

cmd({
  pattern: "leet",
  alias: [],
  desc: "1337 speak",
  category: "tools",
  react: "🕹️",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = q.replace(/a/gi,'4').replace(/e/gi,'3').replace(/i/gi,'1').replace(/o/gi,'0').replace(/s/gi,'5').replace(/t/gi,'7');
  reply(out);
});

cmd({
  pattern: "uwuify",
  alias: [],
  desc: "UwU-ify text",
  category: "tools",
  react: "🥺",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = q.replace(/r|l/gi,'w').replace(/n([aeiou])/gi,'ny$1')+' uwu';
  reply(out);
});

cmd({
  pattern: "zalgolight",
  alias: [],
  desc: "Light zalgo",
  category: "tools",
  react: "👹",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = q.split('').map(c=>c+(Math.random()>0.7?'̷':'')).join('');
  reply(out);
});

cmd({
  pattern: "wrapparen",
  alias: [],
  desc: "Wrap in parentheses",
  category: "tools",
  react: "()",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = `(${q})`;
  reply(out);
});

cmd({
  pattern: "wrapbrackets",
  alias: [],
  desc: "Wrap in brackets",
  category: "tools",
  react: "[]",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = `[${q}]`;
  reply(out);
});

cmd({
  pattern: "wrapcurly",
  alias: [],
  desc: "Wrap in curly braces",
  category: "tools",
  react: "{}",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = `{${q}}`;
  reply(out);
});

cmd({
  pattern: "wrapangle",
  alias: [],
  desc: "Wrap in angle brackets",
  category: "tools",
  react: "<>",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = `<${q}>`;
  reply(out);
});

cmd({
  pattern: "wrapquotes",
  alias: [],
  desc: "Wrap in quotes",
  category: "tools",
  react: "❝",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = `"${q}"`;
  reply(out);
});

cmd({
  pattern: "wrapbackticks",
  alias: [],
  desc: "Wrap in backticks",
  category: "tools",
  react: "💻",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = '`'+q+'`';
  reply(out);
});

cmd({
  pattern: "prefixgt",
  alias: [],
  desc: "Prefix with >",
  category: "tools",
  react: "💬",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = '> '+q;
  reply(out);
});

cmd({
  pattern: "bulletify",
  alias: [],
  desc: "Bullet list lines",
  category: "tools",
  react: "•",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = q.split(/\n/).map(l=>'• '+l).join('\n');
  reply(out);
});

cmd({
  pattern: "numberify",
  alias: [],
  desc: "Numbered list",
  category: "tools",
  react: "1️⃣",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = q.split(/\n/).map((l,i)=>(i+1)+'. '+l).join('\n');
  reply(out);
});

cmd({
  pattern: "mdbold",
  alias: [],
  desc: "Markdown bold",
  category: "tools",
  react: "𝐁",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = `**${q}**`;
  reply(out);
});

cmd({
  pattern: "mditalic",
  alias: [],
  desc: "Markdown italic",
  category: "tools",
  react: "𝐼",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = `*${q}*`;
  reply(out);
});

cmd({
  pattern: "mdstrike",
  alias: [],
  desc: "Markdown strike",
  category: "tools",
  react: "̶",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = `~~${q}~~`;
  reply(out);
});

cmd({
  pattern: "mdcode",
  alias: [],
  desc: "Markdown code",
  category: "tools",
  react: "💻",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = '`'+q+'`';
  reply(out);
});

cmd({
  pattern: "lengthreport",
  alias: [],
  desc: "Text length report",
  category: "tools",
  react: "📊",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = `Len: ${q.length} | Words: ${q.trim().split(/\s+/).filter(Boolean).length} | Lines: ${q.split(/\n/).length}`;
  reply(out);
});

cmd({
  pattern: "uniquewords",
  alias: [],
  desc: "Unique words",
  category: "tools",
  react: "🧬",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = [...new Set(q.toLowerCase().trim().split(/\s+/))].join(' ');
  reply(out);
});

cmd({
  pattern: "dupwords",
  alias: [],
  desc: "Find duplicate words",
  category: "tools",
  react: "👯",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = (()=>{const w=q.toLowerCase().trim().split(/\s+/);const s=new Set();const d=new Set();for(const x of w){if(s.has(x))d.add(x);s.add(x)}return d.size?`Duplicates: ${[...d].join(', ')}`:'No duplicates'})();
  reply(out);
});

cmd({
  pattern: "initials",
  alias: [],
  desc: "Get initials",
  category: "tools",
  react: "🔤",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = q.trim().split(/\s+/).map(w=>w[0]?.toUpperCase()||'').join('.')+'.';
  reply(out);
});

cmd({
  pattern: "expandspaces",
  alias: [],
  desc: "Triple spaces",
  category: "tools",
  react: "⬜",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = q.replace(/ /g,'   ');
  reply(out);
});

cmd({
  pattern: "collapsews",
  alias: [],
  desc: "Collapse whitespace",
  category: "tools",
  react: "🧹",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = q.replace(/\s+/g,' ').trim();
  reply(out);
});

cmd({
  pattern: "newlinejoin",
  alias: [],
  desc: "Join with newlines",
  category: "tools",
  react: "↩️",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = q.trim().split(/\s+/).join('\n');
  reply(out);
});

cmd({
  pattern: "csvjoin",
  alias: [],
  desc: "Join as CSV",
  category: "tools",
  react: "📑",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = q.trim().split(/\s+/).join(', ');
  reply(out);
});

cmd({
  pattern: "pipejoin",
  alias: [],
  desc: "Join with pipes",
  category: "tools",
  react: "|",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = q.trim().split(/\s+/).join(' | ');
  reply(out);
});

cmd({
  pattern: "tabjoin",
  alias: [],
  desc: "Join with tabs",
  category: "tools",
  react: "⇥",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = q.trim().split(/\s+/).join('\t');
  reply(out);
});

cmd({
  pattern: "xorcase",
  alias: [],
  desc: "Toggle case",
  category: "tools",
  react: "🔀",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = [...q].map(c=>c===c.toUpperCase()?c.toLowerCase():c.toUpperCase()).join('');
  reply(out);
});

cmd({
  pattern: "stripdigits",
  alias: [],
  desc: "Remove digits",
  category: "tools",
  react: "🚫",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = q.replace(/\d+/g,'');
  reply(out);
});

cmd({
  pattern: "stripletters",
  alias: [],
  desc: "Remove letters",
  category: "tools",
  react: "🚫",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = q.replace(/[a-zA-Z]+/g,'');
  reply(out);
});

cmd({
  pattern: "strippunct",
  alias: [],
  desc: "Remove punctuation",
  category: "tools",
  react: "🧹",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = q.replace(/[^\w\s]/g,'');
  reply(out);
});

cmd({
  pattern: "onlydigits",
  alias: [],
  desc: "Keep digits",
  category: "tools",
  react: "🔢",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = q.replace(/\D+/g,'');
  reply(out);
});

cmd({
  pattern: "padleft20",
  alias: [],
  desc: "Pad left to 20",
  category: "tools",
  react: "⬅️",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = q.padStart(20,' ');
  reply(out);
});

cmd({
  pattern: "padright20",
  alias: [],
  desc: "Pad right to 20",
  category: "tools",
  react: "➡️",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = q.padEnd(20,' ');
  reply(out);
});

cmd({
  pattern: "center20",
  alias: [],
  desc: "Center-ish pad",
  category: "tools",
  react: "↔️",
  filename: __filename,
}, async (conn, mek, m, { reply, q }) => {
  if (!q) return reply("❌ Provide some text.");
  const out = (()=>{const t=q.slice(0,20);const p=Math.max(0,20-t.length);const l=Math.floor(p/2);return ' '.repeat(l)+t+' '.repeat(p-l)})();
  reply(out);
});
