#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function findFiles(dir, extensions) {
  const files = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const itemPath = path.join(dir, item);
    const stat = fs.statSync(itemPath);

    if (stat.isDirectory()) {
      files.push(...findFiles(itemPath, extensions));
    } else if (extensions.includes(path.extname(item))) {
      files.push(itemPath);
    }
  }

  return files;
}

function fixImports(file) {
  let content = fs.readFileSync(file, "utf8");
  const oldImport = /from\s+["']@workspace\/ui\/lib\/utils["']/g;

  if (oldImport.test(content)) {
    console.log(`Fixing imports in ${file}`);
    const newContent = content.replace(oldImport, 'from "@/lib/utils"');
    fs.writeFileSync(file, newContent);
  }
}

const files = findFiles(path.join(__dirname, "components"), [".tsx", ".ts"]);
files.forEach(fixImports);

console.log("All imports fixed successfully!");
