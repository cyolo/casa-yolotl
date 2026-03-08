"use client";

import { SessionProvider, useSession, signOut } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

function AuthGuard({ children }: { children: React.ReactNode }) {
    const { data: session, status } = useSession();
    const router = useRouter();
    const pathname = typeof window !== "undefined" ? window.location.pathname : "";

    const isPublicRoute = pathname === "/auth/signin" || pathname === "/403";

    useEffect(() => {
        if (!isPublicRoute && status === "unauthenticated") {
            router.push("/auth/signin");
        } else if (status === "authenticated" && session?.user?.email !== "cesar.vargas.alanis@gmail.com") {
            signOut({ redirect: false }).then(() => {
                router.push("/403");
            });
        }
    }, [session, status, router, isPublicRoute]);

    if (status === "loading" && !isPublicRoute) {
        return <div className="min-h-screen flex items-center justify-center bg-[#F5F5F1] text-[#1A1A1A]">Validando identidad...</div>;
    }

    // Always render for public routes or if authorized
    if (isPublicRoute || (status === "authenticated" && session?.user?.email === "cesar.vargas.alanis@gmail.com")) {
        return <>{children}</>;
    }

    return null;
}

export default function AuthProvider({ children }: { children: React.ReactNode }) {
    return (
        <SessionProvider>
            <AuthGuard>{children}</AuthGuard>
        </SessionProvider>
    );
}
