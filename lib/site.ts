/** Canonical production site URL. Vercel redirects apex → www; both work after deploy. */
export const SITE_URL = "https://gauvsevasangh.org";

export const SITE_HOSTS = [
  "gauvsevasangh.org",
  "www.gauvsevasangh.org",
] as const;

export const CANONICAL_HOST = "gauvsevasangh.org";
