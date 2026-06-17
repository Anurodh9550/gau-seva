import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");

const JPEG = Buffer.from(
  "/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k=",
  "base64",
);

const PNG = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==",
  "base64",
);

const REQUIRED = [
  "brush.png",
  "brush-shape.png",
  "left-hand.png",
  "right-hand.png",
  "postbg.png",
  "volenterbg.jpg",
  "qr-code.png",
];

const fallbackLogo = path.join(publicDir, "gu2.png");
let created = 0;

for (const name of REQUIRED) {
  const dest = path.join(publicDir, name);
  if (fs.existsSync(dest)) continue;

  if (fs.existsSync(fallbackLogo)) {
    fs.copyFileSync(fallbackLogo, dest);
  } else {
    fs.writeFileSync(dest, name.endsWith(".png") ? PNG : JPEG);
  }
  created++;
  console.log("created:", name);
}

console.log(`ensure-public-images: ${created} placeholder file(s) added`);
