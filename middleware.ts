import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl
  const hostname = request.headers.get('host') || ''

  // Support for elianaos subdomain
  // This will match elianaos.elianatech.com, elianaos.localhost:3000, etc.
  if (hostname.startsWith('elianaos.')) {
    // If the path is already /os, we don't need to do anything
    // This prevents infinite rewrite loops
    if (url.pathname.startsWith('/os')) {
      return NextResponse.next()
    }

    // Rewrite the root of the subdomain to /os
    // For other paths, we can decide if we want to rewrite them too
    // For now, let's just rewrite the root or any path that doesn't exist
    const newUrl = new URL(`/os${url.pathname === '/' ? '' : url.pathname}`, request.url)
    return NextResponse.rewrite(newUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc)
     */
     '/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)',
  ],
}
