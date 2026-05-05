import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { SecurityValidator } from "@casa-yolotl/shared/src/auth";

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
                // Propagate role from token to session
                session.user.role = token.role || "USER";

                SecurityValidator.logSecurityEvent("SESSION_CREATED", {
                    email: session.user.email,
                    role: session.user.role
                });
            }
            return session;
        },
        async jwt({ token, user }) {
            // Initial sign in
            if (user) {
                const role = SecurityValidator.getUserRole(user.email);
                token.role = role;
            }
            return token;
        }
    },
    pages: {
        signIn: "/auth/signin",
        error: "/auth/signin",
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
