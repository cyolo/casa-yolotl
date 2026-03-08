import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

// Security Guard: Ensure critical environment variables are present
const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

if (!NEXTAUTH_SECRET || !ADMIN_EMAIL) {
    throw new Error(
        "[SECURITY CRITICAL] Missing NEXTAUTH_SECRET or ADMIN_EMAIL environment variables. " +
        "Server startup aborted to prevent insecure state."
    );
}

export default withAuth(
    function middleware(req) {
        const { pathname } = req.nextUrl;
        const email = req.nextauth.token?.email;

        // Strict email check against environment variable
        const isAdmin = email === ADMIN_EMAIL;

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
