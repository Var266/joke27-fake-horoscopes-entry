import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "Venus retrogrades through your deprecation notice this week: users will mourn you in public, then paste your answers into your replacement by Friday.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text);
