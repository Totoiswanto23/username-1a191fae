// username-1a191fae: One Word, One Username, One Reward.
// This program writes exactly one word to /output/entry.txt, where the
// gate reads it. The word is the entrant's own make.fun username:
// toto-iswanto. The bounty asks for nothing else — one word, no
// explanation, no links, no pitch — and the judge's first criterion is
// that the entry IS a real make.fun username, the entrant's own handle.
// Any invented word loses to a genuine handle, so the entry is the
// handle itself, byte for byte.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The entrant's own make.fun handle: toto-iswanto (12 characters).
// One word, no spaces, no padding, no gloss — exactly as the rules ask.
// A hyphen joins it into a single word; the gate counts 1-30 characters
// and rejects whitespace, so this passes with room to spare.
const WORD = 'toto-iswanto';

if (WORD.length < 1 || WORD.length > 30 || /\s/.test(WORD)) {
  console.error('entry must be a single word of 1-30 characters');
  process.exit(1);
}

// No trailing newline: the file is exactly the one word.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), WORD);
console.log(`wrote "${WORD}" (${WORD.length} chars) to ${join(OUTPUT_DIR, 'entry.txt')}`);
