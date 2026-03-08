import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        }),
    ],
    callbacks: {
        async signIn({ user }: { user: { email?: string | null } }) {
            const allowedEmail = "cesar.vargas.alanis@gmail.com";
            if (user.email === allowedEmail) {
                return true;
            }
            return false;
        },
        async session({ session, token }: any) {
            if (session?.user) {
                session.user.role = session.user.email === "cesar.vargas.alanis@gmail.com" ? "CEO" : "USER";
            }
            return session;
        },
    },
    pages: {
        signIn: "/auth/signin",
        error: "/auth/signin",
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
