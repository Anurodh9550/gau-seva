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

/** Missing public assets → copy from an existing file in /public. */
const COPY_FROM = {
  "gaur1.jpg": "v1.jpg",
  "gaur2.jpg": "v2.jpg",
  "gaur3.jpg": "v3.jpg",
  "gaur4.jpg": "v4.jpg",
  "gaurakshak-hero.jpg": "volenterbg.jpg",
  "gaurakshak-about.jpg": "cow2.jpg",
  "gaurakshak-cta.jpg": "help.jpg",
  "blog-banner.jpg": "cow_bg1.jpg",
  "newsletter-bg.jpg": "volenterbg.jpg",
  "blog1.jpg": "v1.jpg",
  "blog2.jpg": "v2.jpg",
  "blog3.jpg": "v3.jpg",
  "blog4.jpg": "v4.jpg",
  "blog5.jpg": "cow2.jpg",
  "blog6.jpg": "coww.jpg",
  "cta-bg.jpg": "help.jpg",
  "ambulance-cow.png": "gauan.png",
  "ambulance.jpg": "amb1.jpg",
  "gau-seva.jpg": "cow2.jpg",
  "cow-food.jpg": "foodbg.jpg",
  "qr-code.png": "gu2.png",
  "news1.jpg": "v1.jpg",
  "news2.jpg": "v2.jpg",
  "news3.jpg": "v3.jpg",
  "pattern-bg.png": "bgpc.png",
  "brush.png": "gu2.png",
  "brush-shape.png": "gu2.png",
  "left-hand.png": "gu2.png",
  "right-hand.png": "gu2.png",
};

let created = 0;

function ensureFile(name, sourceName) {
  const dest = path.join(publicDir, name);
  if (fs.existsSync(dest)) return;

  const source = path.join(publicDir, sourceName);
  if (fs.existsSync(source)) {
    fs.copyFileSync(source, dest);
  } else {
    fs.writeFileSync(dest, name.endsWith(".png") ? PNG : JPEG);
  }
  created++;
  console.log("created:", name, "<-", sourceName);
}

for (const [name, sourceName] of Object.entries(COPY_FROM)) {
  ensureFile(name, sourceName);
}

console.log(`ensure-public-images: ${created} file(s) added`);
