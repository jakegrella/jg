
import { NextRequest, NextResponse } from "next/server";

// PATHNAME FOR SERVER COMPONENTS
export const middleware = (request: NextRequest) => {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-pathname", request.nextUrl.pathname);

    return NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });
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
