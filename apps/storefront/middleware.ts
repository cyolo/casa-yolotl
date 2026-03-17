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
    const cookieLocale = request.cookies.get(cookieName)?.value
    const locale = (cookieLocale && (locales as readonly string[]).includes(cookieLocale)) ? cookieLocale : defaultLocale

    // 5. Anti-Stacking Logic: Detect if path starts with a locale (Supported or Potential)
    const segments = pathname.split('/').filter(Boolean);
    const potentialLocale = segments.length > 0 ? segments[0] : null;
    const isSupportedLocale = potentialLocale ? (locales as readonly string[]).includes(potentialLocale) : false;

    // Detection heuristic: 2-3 letters OR contains a dash (like roa-ter)
    const looksLikeLocale = potentialLocale ? (
        potentialLocale.length === 2 ||
        potentialLocale.length === 3 ||
        (potentialLocale.includes('-') && potentialLocale.length < 10)
    ) : false;

    const url = request.nextUrl.clone()
    let response = NextResponse.next();

    if (looksLikeLocale && !isSupportedLocale) {
        segments[0] = defaultLocale;
        url.pathname = `/${segments.join('/')}`
        response = NextResponse.redirect(url);
    } else if (!looksLikeLocale) {
        url.pathname = `/${locale}${pathname}`
        response = NextResponse.redirect(url);
    }

    const cspHeader = `
        default-src 'self';
        script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com;
        style-src 'self' 'unsafe-inline';
        img-src 'self' blob: data: https:;
        font-src 'self';
        object-src 'none';
        base-uri 'self';
        form-action 'self';
        frame-ancestors 'none';
        connect-src 'self' https://region1.google-analytics.com https://www.google-analytics.com;
    `.replace(/\s{2,}/g, ' ').trim();

    response.headers.set('Content-Security-Policy', cspHeader);
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

    return response;
}

export const config = {
    matcher: [
        '/((?!api|_next|_vercel|.*\\..*).*)',
    ],
}
