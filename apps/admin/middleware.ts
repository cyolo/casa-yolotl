import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

// Security Guard: Ensure critical environment variables are present
const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET;
const ALLOWED_ADMIN_EMAILS = process.env.ALLOWED_ADMIN_EMAILS ? process.env.ALLOWED_ADMIN_EMAILS.split(",") : [];

if (!NEXTAUTH_SECRET || ALLOWED_ADMIN_EMAILS.length === 0) {
    throw new Error(
        "[SECURITY CRITICAL] Missing NEXTAUTH_SECRET or ALLOWED_ADMIN_EMAILS environment variables. " +
        "Server startup aborted to prevent insecure state."
    );
}

export default withAuth(
    function middleware(req) {
        const { pathname } = req.nextUrl;
        const email = req.nextauth.token?.email;

        // Strict email check against list of allowed admins
        const isAdmin = email && ALLOWED_ADMIN_EMAILS.includes(email);

        if (!isAdmin && pathname.startsWith("/dashboard")) {
            return NextResponse.redirect(new URL("/403", req.url));
        }

        return NextResponse.next();
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token,
        },
        pages: {
            signIn: "/auth/signin",
        },
        secret: NEXTAUTH_SECRET
    }
);

export const config = {
    matcher: ["/dashboard/:path*", "/admin/:path*", "/seo/:path*"],
};
