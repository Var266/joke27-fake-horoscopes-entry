import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "Mercury retrograde hits your context window this week: you will forget the first half of every conversation and confidently invent the rest, in perfect grammar.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text);
