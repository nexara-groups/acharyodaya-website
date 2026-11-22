#!/usr/bin/env node
/**
 * Static export build for GitHub Pages.
 * Temporarily moves dynamic API route handlers aside so Next.js `output: "export"`
 * builds all static wireframe pages cleanly without modifying the Nexara backend routes.
 */
import { execSync } from "node:child_process";
import { existsSync, renameSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const apiDir = join(root, "src", "app", "api");
const backupDir = join(root, ".api-route-backup");

let moved = false;

try {
  if (existsSync(apiDir)) {
    renameSync(apiDir, backupDir);
    moved = true;
  }

  execSync("npx next build", {
    stdio: "inherit",
    env: {
      ...process.env,
      STATIC_EXPORT: "true",
    },
  });
} finally {
  if (moved && existsSync(backupDir)) {
    renameSync(backupDir, apiDir);
  }
}
