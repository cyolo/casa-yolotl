import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { I18N_CONFIG } from '@casa-yolotl/shared'
import { getToken } from 'next-auth/jwt'

const locales = I18N_CONFIG.locales;
const defaultLocale = I18N_CONFIG.defaultLocale;
const cookieName = I18N_CONFIG.cookieName;

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    // 1. Skip if the path is static or internal
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.includes('.')
    ) {
        return NextResponse.next()
    }

    // 2. Admin Security Check (Auth.js)
    const isAdminRoute = pathname.startsWith('/admin') || locales.some(locale => pathname.startsWith(`/${locale}/admin`));

    if (isAdminRoute) {
        const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET || "default_secret" });
        if (!token || token.email !== "cesar.vargas.alanis@gmail.com") {
            return new NextResponse('403 Forbidden - Only Authorized Administrators', { status: 403 });
        }
    }

    // 3. Check if the pathname already has a supported locale
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) return NextResponse.next()

    // 4. Internationalization Intelligence: Detect Locale
    // Priority: 1. Cookie, 2. Accept-Language (skipped for now), 3. Default
    const cookieLocale = request.cookies.get(cookieName)?.value
    const locale = (cookieLocale && locales.includes(cookieLocale as any)) ? cookieLocale : defaultLocale

    // Redirect to the detected locale
    const url = request.nextUrl.clone()
    url.pathname = `/${locale}${pathname}`

    return NextResponse.redirect(url)
}

export const config = {
    matcher: [
        '/((?!api|_next|_vercel|.*\\..*).*)',
    ],
}
