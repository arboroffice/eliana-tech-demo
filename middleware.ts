import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl
  const hostname = request.headers.get('host') || ''

  // Support for elianaos subdomain
  if (hostname.startsWith('elianaos.')) {
    if (url.pathname.startsWith('/os')) {
      return NextResponse.next()
    }
    const newUrl = new URL(`/os${url.pathname === '/' ? '' : url.pathname}`, request.url)
    return NextResponse.rewrite(newUrl)
  }

  // Support for caas subdomain
  if (hostname.startsWith('caas.')) {
    if (url.pathname.startsWith('/caas')) {
      return NextResponse.next()
    }
    const newUrl = new URL(`/caas${url.pathname === '/' ? '' : url.pathname}`, request.url)
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
