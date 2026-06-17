import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Pass-through middleware. Host/canonical redirects are handled in Vercel Domains.
 * Do NOT redirect to gausevasangh.org — that domain does not exist in DNS.
 */
export function middleware(_request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
