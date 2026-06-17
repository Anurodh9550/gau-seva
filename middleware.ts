import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { CANONICAL_HOST } from "@/lib/site";

/**
 * Ensures apex domain is canonical and "/" is never rewritten to internal routes.
 * No automatic redirects to /objectives/*, /about, /blog, etc.
 */
export function middleware(request: NextRequest) {
  const hostHeader = request.headers.get("host") ?? "";
  const hostname = hostHeader.split(":")[0].toLowerCase();

  if (hostname === `www.${CANONICAL_HOST}` || hostname === "www.gauvsevasangh.org") {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.host = CANONICAL_HOST;
    return NextResponse.redirect(url, 308);
  }

  if (hostname === "gauvsevasangh.org") {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.host = CANONICAL_HOST;
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
