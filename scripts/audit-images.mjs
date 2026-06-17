import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const publicDir = path.join(root, "public");

const LEGACY = {
  "/contectus2.png": "/images/contact-hero.png",
  "/gu2.png": "/images/logo.png",
  "/gulogo.png": "/images/gu-logo.png",
  "/aboutbg.jpg": "/images/about-hero.jpg",
  "/aboutbg1.png": "/images/about-mission.png",
  "/about22.jpg": "/images/about-cta.jpg",
  "/cow2.jpg": "/images/cow-2.jpg",
  "/cow22.png": "/images/cow-22.png",
  "/coww.jpg": "/images/cow-portrait.jpg",
  "/cowww.jpg": "/images/cow-portrait-2.jpg",
  "/cow_bg1.jpg": "/images/cow-bg.jpg",
  "/qr-code.png": "/images/qr-code.png",
  "/news1.jpg": "/images/news-1.jpg",
  "/news2.jpg": "/images/news-2.jpg",
  "/news3.jpg": "/images/news-3.jpg",
  "/bgrr.png": "/images/gau-raksha-hero.png",
  "/Gau1.png": "/images/gau-gallery-1.png",
  "/Gau2.png": "/images/gau-gallery-2.png",
  "/Gau3.png": "/images/gau-gallery-3.png",
  "/Gau4.png": "/images/gau-gallery-4.png",
  "/card4.png": "/images/gau-raksha-cta.png",
  "/gauan.png": "/images/gau-ambulance-hero.png",
  "/amb1.jpg": "/images/ambulance-1.jpg",
  "/amb2.jpg": "/images/ambulance-2.jpg",
  "/ambu3.jpg": "/images/ambulance-3.jpg",
  "/ambu4.jpg": "/images/ambulance-4.jpg",
  "/cta-bg.jpg": "/images/cta-bg.jpg",
  "/foodbg.jpg": "/images/cow-feeding-hero.jpg",
  "/foodcard.jpg": "/images/cow-feeding-card.jpg",
  "/fooditem1.jpg": "/images/food-item-1.jpg",
  "/fooditem2.jpg": "/images/food-item-2.jpg",
  "/fooditem3.jpg": "/images/food-item-3.jpg",
  "/fooditem4.jpg": "/images/food-item-4.jpg",
  "/help.jpg": "/images/cow-feeding-cta.jpg",
  "/devopment.jpg": "/images/gaushala-development-hero.jpg",
  "/dev.jpg": "/images/gaushala-about.jpg",
  "/cons1.jpg": "/images/gaushala-gallery-1.jpg",
  "/cons2.jpg": "/images/gaushala-gallery-2.jpg",
  "/cons3.jpg": "/images/gaushala-gallery-3.jpg",
  "/cons4.jpg": "/images/gaushala-gallery-4.jpg",
  "/dvbg.jpg": "/images/gaushala-cta.jpg",
  "/gaurakshak-hero.jpg": "/images/gaurakshak-hero.jpg",
  "/gaurakshak-about.jpg": "/images/gaurakshak-about.jpg",
  "/gaurakshak-cta.jpg": "/images/gaurakshak-cta.jpg",
  "/gaur1.jpg": "/images/gaurakshak-gallery-1.jpg",
  "/gaur2.jpg": "/images/gaurakshak-gallery-2.jpg",
  "/gaur3.jpg": "/images/gaurakshak-gallery-3.jpg",
  "/gaur4.jpg": "/images/gaurakshak-gallery-4.jpg",
  "/pattern-bg.png": "/images/pattern-bg.png",
  "/ambulance-cow.png": "/images/ambulance-cow.png",
  "/ambulance.jpg": "/images/ambulance-card.jpg",
  "/gau-seva.jpg": "/images/gau-seva-card.jpg",
  "/cow-food.jpg": "/images/cow-food-card.jpg",
  "/blog1.jpg": "/images/blog-1.jpg",
  "/blog2.jpg": "/images/blog-2.jpg",
  "/blog3.jpg": "/images/blog-3.jpg",
  "/blog4.jpg": "/images/blog-4.jpg",
  "/blog5.jpg": "/images/blog-5.jpg",
  "/blog6.jpg": "/images/blog-6.jpg",
  "/blog-banner.jpg": "/images/blog-banner.jpg",
  "/newsletter-bg.jpg": "/images/newsletter-bg.jpg",
  "/bgpc.png": "/images/bg-pattern.png",
  "/brush.png": "/images/brush.png",
  "/brush-shape.png": "/images/brush-shape.png",
  "/volenterbg.jpg": "/images/volunteer-bg.jpg",
  "/left-hand.png": "/images/left-hand.png",
  "/right-hand.png": "/images/right-hand.png",
  "/postbg.png": "/images/post-bg.png",
  "/v1.jpg": "/images/volunteer-1.jpg",
  "/v2.jpg": "/images/volunteer-2.jpg",
  "/v3.jpg": "/images/volunteer-3.jpg",
  "/v4.jpg": "/images/volunteer-4.jpg",
};

const allPaths = new Set(Object.values(LEGACY));
allPaths.add("/images/fallback.jpg");

const missing = [];
const ok = [];

for (const webPath of [...allPaths].sort()) {
  const disk = path.join(publicDir, webPath.replace(/^\//, ""));
  if (fs.existsSync(disk)) ok.push(webPath);
  else missing.push(webPath);
}

const report = {
  generatedAt: new Date().toISOString(),
  totalRequired: allPaths.size,
  found: ok.length,
  missing,
  legacyPathsStillBroken: Object.entries(LEGACY)
    .filter(([legacy]) => !fs.existsSync(path.join(publicDir, legacy.replace(/^\//, ""))))
    .map(([legacy, migrated]) => ({ legacy, migrated, migratedExists: ok.includes(migrated) })),
};

const outPath = path.join(root, "image-audit-report.json");
fs.writeFileSync(outPath, JSON.stringify(report, null, 2));
console.log(`Audit: ${ok.length}/${allPaths.size} images present. Report: image-audit-report.json`);
if (missing.length) {
  console.log("Missing:", missing.join(", "));
  process.exit(1);
}
