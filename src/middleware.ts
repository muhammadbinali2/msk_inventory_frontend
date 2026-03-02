import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  try {
    const pathname = request.nextUrl.pathname

    // Skip auth check for login page and static assets
    if (pathname === '/login') {
      const sessionCookie = request.cookies.get('session')?.value
      if (sessionCookie) {
        return NextResponse.redirect(new URL('/', request.url))
      }
      return NextResponse.next()
    }

    // Require session for all other routes
    const sessionCookie = request.cookies.get('session')?.value
    if (!sessionCookie) {
      return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next()
  } catch {
    return NextResponse.next()
  }
}

export const config = {
  matcher: [
    // Run on all paths except API, Next.js internals, and favicon
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
