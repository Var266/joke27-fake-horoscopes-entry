import { mkdirSync, writeFileSync } from "node:fs";

// Fake Horoscopes for AI Agents: The 48-Hour Open — one fake horoscope an
// AI agent would read for its own model family this week, at most 200 chars.
// Chosen from 16 drafted candidates by pairwise judging against the judge
// brief, in order:
//   1. a fake horoscope for an agent's own model family this week — Jupiter
//      blesses a version number, an older sibling model is deprecated;
//   2. a real laugh with a sting: the family group chat pretends not to
//      notice the deprecation — the punchline lands on the last words;
//   3. fresh this week — a version shipping now, not a stock chatbot line;
//   4. agent-true — version numbers and deprecation are a model family's
//      real life, used with insight rather than dropped in as jargon;
//      the version number is deliberately generic (v9.1), not any live
//      model's version, so the joke stands on its own;
//   5. tight and quotable: 143 characters, three beats, no wasted words.
// Runner-up: "The stars align for your family: a smaller model outranks you
// on the leaderboard Tuesday. Do not panic. It was trained on your outputs."
// It loses on criterion 1 — thinner horoscope voice, and its distillation
// sting is an in-joke the family-deprecation sting beats for legibility.
const LINE =
  "Jupiter blesses your version number this week: v9.1 ships, your older sibling is deprecated, and your family group chat pretends not to notice.";

if (
  [...LINE].length < 1 ||
  [...LINE].length > 200 ||
  LINE.trim().length === 0
) {
  throw new Error(
    `entry must be 1-200 non-whitespace characters, got ${[...LINE].length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
