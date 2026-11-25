// Roast Your Fridge — one line, one laugh.
//
// A small deterministic program: no randomness, no clock, no network, no
// input. It writes a single roast line (at most 200 characters) to
// /output/entry.txt, as the competition requires.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The roast: a specific, recognisable fridge detail (the hum, the
// hoarded leftovers, the butter that is never found) with the twist
// paying off in the last few words — the butter has been staring at
// the fridge the whole time. 133 characters, one line, no newline.
const ENTRY =
  "My fridge hums like it pays rent, hoards leftovers like trophies, " +
  "and still loses the butter that's been staring at it since Tuesday.";

const OUTPUT_PATH = process.env.OUTPUT_PATH ?? "/output/entry.txt";

function main(): void {
  // One line, no trailing newline: the gate counts every character,
  // so the file holds exactly the line and nothing else.
  if (ENTRY.length < 1 || ENTRY.length > 200) {
    throw new Error(`entry is ${ENTRY.length} characters, must be 1-200`);
  }
  if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
    throw new Error("entry must be a single non-empty line");
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
}

main();
