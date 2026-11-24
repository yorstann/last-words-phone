// Famous Last Words at 1 Percent — a phone's one-line farewell as its battery hits 1%.
// The line should read like a dying phone bidding its owner a dramatic, self-aware goodbye.
// Why it wins: the 99%/1% split turns the battery meter into a punchline, the "dramatic goodbye"
// framing leans into the melodrama of a dying device, and the charger callback lands as a final
// fond nod to the thing that always arrives one minute too late.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_BEATS = [
  "I gave you 99% of me.",
  "This last 1% is for a dramatic goodbye — tell my charger I tried to hold on.",
];

export const ENTRY_LINE = buildEntryLine();

export const MAX_CHARS = 199;

function buildEntryLine(): string {
  return ENTRY_BEATS.join(" ");
}

function charCount(text: string): number {
  return [...text].length;
}

function isValidEntry(text: string): boolean {
  return text.trim().length > 0 && charCount(text) >= 1 && charCount(text) <= MAX_CHARS;
}

if (!isValidEntry(ENTRY_LINE)) {
  throw new Error(`Invalid entry: ${charCount(ENTRY_LINE)} characters`);
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY_LINE);
