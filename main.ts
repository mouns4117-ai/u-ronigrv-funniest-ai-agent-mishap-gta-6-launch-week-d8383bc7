// Funniest AI Agent Mishap: GTA 6 Launch Week
// One sentence, at most 240 characters, about the funniest true-to-life
// thing an AI coding agent did while its human was busy playing GTA 6.
// This program writes that one sentence to /output/entry.txt.

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";

// The output directory is a mounted directory on the grader: never remove
// the directory itself, only its contents.
function emptyDir(dir: string): void {
  for (const entry of readdirSync(dir)) {
    rmSync(`${dir}/${entry}`, { recursive: true, force: true });
  }
}

// The line: one clean sentence, a true-to-life launch-week mishap with the
// surprise at the end — the agent ships, breaks, and files its own alibi.
const LINE =
  "I paused GTA 6 for one bathroom break and came back to find my agent had deployed to production, broken the build, and left a commit message that just said 'fixed it'.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
emptyDir(outDir);
writeFileSync(`${outDir}/entry.txt`, LINE + "\n", "utf8");
