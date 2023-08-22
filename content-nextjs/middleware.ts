import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    if (process.env.NODE_ENV === 'production' && !request.url.includes("https")) {
        return NextResponse.redirect(
            `https://${request.headers.get('host')}${request.nextUrl.pathname}`,
            301
        )
    }
}