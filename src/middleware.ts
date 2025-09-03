import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  const isProtected = req.nextUrl.pathname.startsWith('/admin')
  const isLoginPage = req.nextUrl.pathname === '/admin/login'

  // Nếu có session nhưng token đã hết hạn → coi như chưa login
  const now = Math.floor(Date.now() / 1000)
  const isExpired = session?.expires_at ? session.expires_at < now : true

  // ✅ Chưa login hoặc token hết hạn mà vào /admin khác login → redirect login
  if (isProtected && (!session || isExpired) && !isLoginPage) {
    const redirectUrl = req.nextUrl.clone()
    redirectUrl.pathname = '/admin/login'
    return NextResponse.redirect(redirectUrl)
  }

  // ✅ Đã login mà vẫn vào /admin/login → redirect về /admin
  if (isLoginPage && session && !isExpired) {
    const redirectUrl = req.nextUrl.clone()
    redirectUrl.pathname = '/admin'
    return NextResponse.redirect(redirectUrl)
  }

  return res
}

export const config = {
  matcher: ['/admin/:path*'],
}
