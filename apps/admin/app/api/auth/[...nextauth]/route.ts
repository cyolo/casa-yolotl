import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { SecurityValidator } from "@casa-yolotl/shared";

// Security Guard: Validate critical environment variables
const githubId = process.env.GITHUB_ID;
const githubSecret = process.env.GITHUB_SECRET;
const googleId = process.env.GOOGLE_CLIENT_ID;
const googleSecret = process.env.GOOGLE_CLIENT_SECRET;

if (!githubId || !githubSecret || !googleId || !googleSecret) {
    if (process.env.NODE_ENV === "production") {
        throw new Error("[SECURITY CRITICAL] Missing OAuth credentials in production.");
    }
    console.warn("[AUTH WARNING] Missing OAuth credentials. Authentication will fail.");
}

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: googleId || "missing",
            clientSecret: googleSecret || "missing",
        }),
        GithubProvider({
            clientId: githubId || "missing",
            clientSecret: githubSecret || "missing",
        }),
    ],
    callbacks: {
        async signIn({ user }) {
            const isAdmin = SecurityValidator.isAdmin(user.email);

            if (isAdmin) {
                SecurityValidator.logSecurityEvent("AUTH_LOGIN_SUCCESS", { email: user.email });
                return true;
            }

            SecurityValidator.logSecurityEvent("AUTH_LOGIN_DENIED", { email: user.email });
            return false;
        },
        async session({ session, token }) {
            if (session?.user) {
                // Inject the specific role from shared logic
                const role = SecurityValidator.getUserRole(session.user.email);
                (session.user as any).role = role;

                SecurityValidator.logSecurityEvent("SESSION_CREATED", {
                    email: session.user.email,
                    role
                });
            }
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.role = (user as any).role;
            }
            return token;
        }
    },
    pages: {
        signIn: "/auth/signin",
        error: "/auth/signin",
    },
    useSecureCookies: process.env.APP_ENV !== "local",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
