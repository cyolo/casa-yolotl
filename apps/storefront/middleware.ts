import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { I18N_CONFIG, SecurityValidator } from '@casa-yolotl/shared'
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

    // 2. Admin Security Check (Auth.js) - Centralized
    const isAdminRoute = pathname.startsWith('/admin') || locales.some(locale => pathname.startsWith(`/${locale}/admin`));

    if (isAdminRoute) {
        const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
        const email = token?.email;

        if (!SecurityValidator.isAdmin(email)) {
            SecurityValidator.logSecurityEvent("STOREFRONT_UNAUTHORIZED_ADMIN_ACCESS", {
                email,
                path: pathname,
                ip: (request as any).ip || request.headers.get("x-forwarded-for") || "unknown"
            });

            const redirectUrl = request.nextUrl.clone();
            // Find current locale from path or cookie
            const currentLocale = locales.find(l => pathname.startsWith(`/${l}/`)) || locales.find(l => pathname === `/${l}`) || defaultLocale;
            redirectUrl.pathname = `/${currentLocale}/403`;

            return NextResponse.redirect(redirectUrl);
        }

        SecurityValidator.logSecurityEvent("STOREFRONT_ADMIN_ACCESS_GRANTED", {
            email,
            path: pathname
        });
    }

    // 3. Check if the pathname already has a supported locale
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) return NextResponse.next()

    // 4. Internationalization Intelligence: Detect Locale
    // Priority: 1. Cookie, 2. Accept-Language (skipped for now), 3. Default
    const cookieLocale = request.cookies.get(cookieName)?.value
    const locale = (cookieLocale && (locales as readonly string[]).includes(cookieLocale)) ? cookieLocale : defaultLocale

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
