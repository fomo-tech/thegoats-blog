// middleware.ts
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  console.log(1111);
  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  const isProtected = req.nextUrl.pathname.startsWith('/admin')


  
  if (isProtected && !session && req.nextUrl.pathname !== '/admin/login') {
    const redirectUrl = req.nextUrl.clone()
    redirectUrl.pathname = '/admin/login'
    return NextResponse.redirect(redirectUrl)
  }
  

  return res
}

export const config = {
  matcher: ['/admin', '/admin/:path*']

}
