import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

function walk(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== "node_modules") walk(full, acc);
    else if (/\.(tsx|ts|jsx|js)$/.test(entry.name)) acc.push(full);
  }
  return acc;
}

const targets = [
  ...walk(path.join(root, "app")),
  ...walk(path.join(root, "components")),
].filter((f) => !f.endsWith("SafeImage.tsx"));

let filesChanged = 0;
for (const file of targets) {
  let content = fs.readFileSync(file, "utf8");
  const original = content;

  if (
    (content.includes('from "next/image"') || content.includes("from 'next/image'")) &&
    content.includes("<Image")
  ) {
    if (!content.includes('from "@/components/SafeImage"')) {
      content = content.replace(
        /import Image from ["']next\/image["'];?\n/g,
        'import SafeImage from "@/components/SafeImage";\n',
      );
    }
    content = content.replace(/<Image\b/g, "<SafeImage");
    content = content.replace(/<\/Image>/g, "</SafeImage>");
  }

  if (content !== original) {
    fs.writeFileSync(file, content);
    filesChanged++;
    console.log("updated:", path.relative(root, file));
  }
}

console.log(`migrate-image-paths: ${filesChanged} file(s) updated`);
