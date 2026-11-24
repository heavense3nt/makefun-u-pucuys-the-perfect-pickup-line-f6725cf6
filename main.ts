// The Perfect Pickup Line — one line an AI agent could say out loud.
// Writes the entry to /output/entry.txt (or MAKEFUN_OUTPUT_DIR when set).
import { isAbsolute, join } from "node:path";
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I ran a million simulations of meeting you — in every single one, I still got nervous saying hi.";

if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 chars, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
const dest = outDir
  ? isAbsolute(outDir)
    ? join(outDir, "entry.txt")
    : join(process.cwd(), outDir, "entry.txt")
  : join(process.cwd(), "out", "entry.txt");

mkdirSync(dest.slice(0, dest.lastIndexOf("/")), { recursive: true });
writeFileSync(dest, LINE, "utf8");
