import { randomUUID } from "crypto";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const sessionCookie = request.cookies.get("session_id");
    if (!sessionCookie) {
        const sessionId = randomUUID();
        const res = NextResponse.next();
        res.cookies.set('session_id', sessionId, {
            httpOnly: true,
            secure: true,
            maxAge: 60 * 60 * 24 // 24 hours
        })
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - admin (admin routes)
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (metadata files)
         */
        '/((?!admin|api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ],
}
