/**
 * Finds the Japan ↔ Dubai comparisons inside the authored concern answers.
 *
 * The 2026.08.19 sheet asks for that comparison to sit in white boxes with each
 * country's flag, "for all the other sections for the Japan-Dubai comparison
 * (In 貴方のお悩みは何ですか？01-08)".
 *
 * The answers in concernAnswers.js are client-approved copy and are NOT
 * rewritten for this. This module only recognises the shape the copy already
 * has — a Japan line answered by a Dubai line — and reports where it is, so the
 * renderer can box it. Anything unmatched is handed back as plain text, so no
 * wording can be lost or altered. Kept free of JSX so it can be tested directly.
 */

export const bare = (s) => s.replace(/\*\*/g, '').trim();
export const isBoldOnly = (s) => /^\*\*[^*]+\*\*$/.test(s.trim());

/* "日本の税率：", "日本：", "日本の小学生の…：" — but not a prose sentence that
   merely opens with 日本, hence the short run and no 。 before the colon. */
const JP_SIDE = /^日本[^：:。]{0,30}[：:]/;
const AE_SIDE = /^(?:ドバイ|UAE|アラブ首長国連邦)[^：:。]{0,30}[：:]/;

/** End of one country's run: stops at the next side, a heading or a blank line,
 *  so copy wrapped over several lines (the 04 answer wraps Dubai across three)
 *  stays with its own country instead of being dropped. */
function sideEnd(lines, from) {
  let k = from + 1;
  while (k < lines.length && bare(lines[k]) && !isBoldOnly(lines[k])
    && !JP_SIDE.test(bare(lines[k])) && !AE_SIDE.test(bare(lines[k]))) k++;
  return k;
}

/** Does a comparison box start at line i? Returns the box and where to resume. */
function matchBox(lines, i) {
  const at = (k) => (k >= 0 && k < lines.length ? bare(lines[k]) : '');
  /* Bracket table (tiles 01/05/08): a label, its Japan rate, its Dubai rate —
     the exact shape drawn in the 08.19 mockup. */
  if (at(i) && !isBoldOnly(lines[i]) && !JP_SIDE.test(at(i)) && !AE_SIDE.test(at(i))
    && JP_SIDE.test(at(i + 1)) && AE_SIDE.test(at(i + 2))) {
    return { box: { label: lines[i].trim(), jp: [lines[i + 1]], ae: [lines[i + 2]] }, next: i + 3 };
  }
  /* Japan block answered by a Dubai block (tiles 02/03/04), where the Japan
     side may carry several detail lines before Dubai answers it. */
  if (JP_SIDE.test(at(i))) {
    for (let j = sideEnd(lines, i); j < lines.length && j < i + 14; j++) {
      if (AE_SIDE.test(at(j))) {
        const aeEnd = sideEnd(lines, j);
        /* everything from the Japan line up to Dubai's answer is the Japan
           side — the 02 answer puts a second Japan item (crypto) in there, and
           slicing only to the first blank line would drop it */
        const jp = lines.slice(i, j);
        while (jp.length && !bare(jp[jp.length - 1])) jp.pop();
        return { box: { label: null, jp, ae: lines.slice(j, aeEnd) }, next: aeEnd };
      }
      if (JP_SIDE.test(at(j))) break;            // the next Japan item, not a pair
      if (!at(j)) {                              // blank line: a new bold heading
        const n = lines.slice(j + 1).find((l) => bare(l)); // after it starts a new section
        if (n && isBoldOnly(n)) break;
      }
    }
  }
  return null;
}

/** Split an answer into plain text runs and Japan-Dubai comparison boxes. */
export function parseAnswer(text) {
  const lines = text.split('\n');
  const out = [];
  let buf = [];
  const flush = () => {
    /* drop the blank lines that spaced the run off from a box — boxes carry
       their own margins, so keeping them would double the gap */
    while (buf.length && !bare(buf[buf.length - 1])) buf.pop();
    while (buf.length && !bare(buf[0])) buf.shift();
    if (buf.length) out.push({ type: 'text', text: buf.join('\n') });
    buf = [];
  };
  for (let i = 0; i < lines.length;) {
    const m = matchBox(lines, i);
    if (m) { flush(); out.push({ type: 'box', ...m.box }); i = m.next; continue; }
    buf.push(lines[i]); i++;
  }
  flush();
  return out;
}
