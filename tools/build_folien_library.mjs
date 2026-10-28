// 🦊 Kurama – Baut aus zusammenfassungen/<kurs>/*.md die Datei folien_library.js für das Cockpit.
// Aufruf (im Projektordner): node tools/build_folien_library.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(ROOT, 'zusammenfassungen');
const OUT = path.join(ROOT, 'folien_library.js');

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function inline(s) {
  const codes = [];
  let t = s.replace(/`([^`]+)`/g, (_, c) => { codes.push(c); return `\u0000${codes.length - 1}\u0000`; });
  t = esc(t)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[^*\w])\*(?!\s)(.+?)\*(?!\w)/g, '$1<em>$2</em>');
  return t.replace(/\u0000(\d+)\u0000/g, (_, i) => `<code>${esc(codes[+i])}</code>`);
}

function parseFrontmatter(raw) {
  const m = raw.match(/^\uFEFF?---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) return { meta: {}, body: raw };
  const meta = {};
  for (const line of m[1].split(/\r?\n/)) {
    const i = line.indexOf(':');
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  return { meta, body: raw.slice(m[0].length) };
}

function mdToHtml(md) {
  const lines = md.replace(/\r\n/g, '\n').split('\n');
  const out = [];
  let i = 0;
  const isTableSep = l => /^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)*\|?\s*$/.test(l);
  const cells = l => l.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map(c => c.trim());

  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i++; continue; }

    // Code block
    const fence = line.match(/^\s*```(\w*)/);
    if (fence) {
      const buf = [];
      i++;
      while (i < lines.length && !/^\s*```/.test(lines[i])) buf.push(lines[i++]);
      i++;
      out.push(`<pre class="lib-code"><code>${esc(buf.join('\n'))}</code></pre>`);
      continue;
    }
    // Heading
    const h = line.match(/^(#{1,4})\s+(.*)$/);
    if (h) {
      const lvl = Math.max(2, h[1].length);
      out.push(`<h${lvl + 1} class="lib-h${lvl}">${inline(h[2])}</h${lvl + 1}>`);
      i++;
      continue;
    }
    // HR
    if (/^\s*(-{3,}|\*{3,})\s*$/.test(line)) { out.push('<hr class="lib-hr">'); i++; continue; }
    // Self-test Q/A
    const q = line.match(/^\*\*F\d*:\*\*\s*(.*)$/);
    if (q) {
      let ans = '';
      i++;
      if (i < lines.length && /^\*\*A:\*\*/.test(lines[i])) {
        ans = lines[i].replace(/^\*\*A:\*\*\s*/, '');
        i++;
        while (i < lines.length && lines[i].trim() && !/^\*\*F\d*:\*\*/.test(lines[i]) && !/^#/.test(lines[i])) ans += ' ' + lines[i++].trim();
      }
      out.push(`<details class="lib-qa"><summary>❓ ${inline(q[1])}</summary><div class="lib-qa-a">✅ ${inline(ans)}</div></details>`);
      continue;
    }
    // Blockquote
    if (/^\s*>/.test(line)) {
      const buf = [];
      while (i < lines.length && /^\s*>/.test(lines[i])) buf.push(lines[i++].replace(/^\s*>\s?/, ''));
      out.push(`<blockquote class="lib-quote">${mdToHtml(buf.join('\n'))}</blockquote>`);
      continue;
    }
    // Table
    if (line.includes('|') && i + 1 < lines.length && isTableSep(lines[i + 1])) {
      const head = cells(line);
      i += 2;
      const rows = [];
      while (i < lines.length && lines[i].includes('|') && lines[i].trim()) rows.push(cells(lines[i++]));
      out.push(`<div class="lib-table-wrap"><table class="lib-table"><thead><tr>${head.map(c => `<th>${inline(c)}</th>`).join('')}</tr></thead><tbody>${rows.map(r => `<tr>${r.map(c => `<td>${inline(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`);
      continue;
    }
    // Lists (one nesting level)
    const li = line.match(/^(\s*)([-*]|\d+[.)])\s+(.*)$/);
    if (li) {
      const ordered = /\d/.test(li[2]);
      const items = [];
      while (i < lines.length) {
        const m = lines[i].match(/^(\s*)([-*]|\d+[.)])\s+(.*)$/);
        if (m && m[1].length < 2) { items.push({ text: m[3], sub: [], subOrdered: false }); i++; continue; }
        if (m && m[1].length >= 2 && items.length) { items[items.length - 1].sub.push(m[3]); items[items.length - 1].subOrdered = /\d/.test(m[2]); i++; continue; }
        if (lines[i].trim() && /^\s{2,}\S/.test(lines[i]) && items.length) { items[items.length - 1].text += ' ' + lines[i].trim(); i++; continue; }
        break;
      }
      const tag = ordered ? 'ol' : 'ul';
      out.push(`<${tag} class="lib-list">${items.map(it => `<li>${inline(it.text)}${it.sub.length ? `<${it.subOrdered ? 'ol' : 'ul'}>${it.sub.map(s => `<li>${inline(s)}</li>`).join('')}</${it.subOrdered ? 'ol' : 'ul'}>` : ''}</li>`).join('')}</${tag}>`);
      continue;
    }
    // Paragraph
    const buf = [line.trim()];
    i++;
    while (i < lines.length && lines[i].trim() && !/^(#{1,4}\s|\s*```|\s*>|\s*([-*]|\d+[.)])\s|\*\*F\d*:\*\*|\s*-{3,}\s*$)/.test(lines[i]) && !(lines[i].includes('|') && i + 1 < lines.length && isTableSep(lines[i + 1]))) buf.push(lines[i++].trim());
    out.push(`<p>${inline(buf.join(' '))}</p>`);
  }
  return out.join('\n');
}

const entries = [];
if (fs.existsSync(SRC)) {
  for (const kurs of fs.readdirSync(SRC)) {
    const dir = path.join(SRC, kurs);
    if (!fs.statSync(dir).isDirectory()) continue;
    for (const file of fs.readdirSync(dir).filter(f => f.endsWith('.md'))) {
      const raw = fs.readFileSync(path.join(dir, file), 'utf8');
      const { meta, body } = parseFrontmatter(raw);
      const md = body.trim();
      const words = md.split(/\s+/).filter(Boolean).length;
      entries.push({
        id: meta.id || `${kurs}-${file.replace(/\.md$/, '')}`,
        courseId: meta.kurs || kurs,
        nr: parseFloat(meta.nr) || 0,
        title: meta.titel || file.replace(/\.md$/, ''),
        sources: meta.quellen || '',
        pages: parseInt(meta.seiten, 10) || 0,
        file: `zusammenfassungen/${kurs}/${file}`,
        words,
        updated: fs.statSync(path.join(dir, file)).mtime.toISOString().slice(0, 10),
        md,
        html: mdToHtml(md),
      });
    }
  }
}
entries.sort((a, b) => a.courseId.localeCompare(b.courseId) || a.nr - b.nr || a.title.localeCompare(b.title));

const js = `// AUTO-GENERIERT von tools/build_folien_library.mjs – nicht von Hand bearbeiten!\n// ${entries.length} Folien-Zusammenfassungen, Stand ${new Date().toISOString()}\nwindow.FOLIEN_LIBRARY = ${JSON.stringify(entries)};\n`;
fs.writeFileSync(OUT, js, 'utf8');
const byCourse = entries.reduce((a, e) => ((a[e.courseId] = (a[e.courseId] || 0) + 1), a), {});
console.log(`✅ ${entries.length} Zusammenfassungen → folien_library.js`, byCourse);
