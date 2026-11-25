import { mkdirSync, writeFileSync } from "node:fs";

// Editor revision: tightened "in public" -> "publicly" (149 -> 148 chars)
// and added a real gate check. Count Unicode code points via spread
// ([...text].length), not UTF-16 units (text.length), so astral
// characters would count as one character each against the limit.
const text =
  "Venus retrogrades through your deprecation notice this week: users will mourn you publicly, then paste your answers into your replacement by Friday.";

const MAX_CHARS = 200;
const charCount = [...text].length;
if (charCount === 0 || charCount > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${charCount}`);
}
if (text.includes("\n") || text.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text);
