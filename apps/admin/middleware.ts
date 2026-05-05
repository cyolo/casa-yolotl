import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { SecurityValidator } from "@casa-yolotl/shared/src/auth";

// Security Guard: Ensure critical environment variables are present
const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET;

if (!NEXTAUTH_SECRET) {
    if (process.env.NODE_ENV === "production") {
        throw new Error(
            "[SECURITY CRITICAL] Missing NEXTAUTH_SECRET environment variable. " +
            "Server startup aborted to prevent insecure state."
        );
    }
}

export default withAuth(
    function middleware(req) {
        const { pathname } = req.nextUrl;
        const token = req.nextauth.token;
        const email = token?.email;
        const role = (token as unknown as { role?: string })?.role || "USER";

        // Security Audit Log: Capture every access attempt to sensitive zones
        SecurityValidator.logSecurityEvent("ZONE_ACCESS_REQUEST", {
            email,
            role,
            path: pathname,
            ip: req.headers.get("x-forwarded-for") || "unknown"
        });

        // Use centralized validator for admin zones
        const isAuthorizedZone = SecurityValidator.isAdmin(email);

        if (!isAuthorizedZone && (pathname.startsWith("/dashboard") || pathname.startsWith("/admin"))) {
            SecurityValidator.logSecurityEvent("UNAUTHORIZED_ZONE_REJECTION", {
                email,
                role,
                path: pathname
            });
            // Redirect to a custom 403 page or back to signin with error
            return NextResponse.redirect(new URL("/auth/signin?error=AccessDenied", req.url));
        }

        // Specific Roles Logic (CEO required for certain sensitive sub-paths)
        if (pathname.startsWith("/dashboard/finances") && role !== "CEO") {
            SecurityValidator.logSecurityEvent("SENSITIVE_DATA_ACCESS_DENIED", { email, role, path: pathname });
            return NextResponse.redirect(new URL("/dashboard", req.url));
        }

        const cspHeader = `
            default-src 'self';
            script-src 'self' 'unsafe-eval' 'unsafe-inline';
            style-src 'self' 'unsafe-inline';
            img-src 'self' blob: data: https:;
            font-src 'self';
            object-src 'none';
            base-uri 'self';
            form-action 'self';
            frame-ancestors 'none';
            connect-src 'self';
        `.replace(/\s{2,}/g, ' ').trim();

        const response = NextResponse.next();
        response.headers.set('Content-Security-Policy', cspHeader);
        response.headers.set('X-Frame-Options', 'DENY');
        response.headers.set('X-Content-Type-Options', 'nosniff');
        response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

        return response;
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token,
        },
        pages: {
            signIn: "/auth/signin",
            error: "/auth/signin",
        },
        secret: NEXTAUTH_SECRET
    }
);

export const config = {
    matcher: ["/dashboard/:path*", "/admin/:path*", "/seo/:path*"],
};
