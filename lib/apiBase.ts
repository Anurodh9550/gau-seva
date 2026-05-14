/**
 * Base URL for the Django REST API (must include trailing path `/api` without a trailing slash).
 * Override with NEXT_PUBLIC_API_BASE_URL, e.g. http://127.0.0.1:8000/api or /api-proxy for Next rewrites.
 */
export function getPublicApiBaseUrl(): string {
  const raw = process.env.NEXT_PUBLIC_API_BASE_URL?.trim();
  const base = raw && raw.length > 0 ? raw.replace(/\/$/, "") : "http://127.0.0.1:8000/api";
  return base;
}
