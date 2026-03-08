"use client";

import { signIn, useSession, signOut } from "next-auth/react";
import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import messages from "../../../../storefront/messages/admin/es.json";

function SignInContent() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const searchParams = useSearchParams();
    const [accessDenied, setAccessDenied] = useState(false);

    const errorParam = searchParams.get("error");

    // Simulated Translation Hook
    const t = (key: keyof typeof messages.Auth) => messages.Auth[key] || key;

    useEffect(() => {
        if (errorParam === "AccessDenied") {
            setAccessDenied(true);
        }
    }, [errorParam]);

    useEffect(() => {
        if (status === "authenticated") {
            if (session?.user?.email === "cesar.vargas.alanis@gmail.com") {
                router.push("/dashboard");
            } else {
                setAccessDenied(true);
                signOut({ redirect: false });
            }
        }
    }, [status, session, router]);

    return (
        <div className="flex min-h-screen items-center justify-center bg-[#F5F5F1] px-8">
            <div className="w-full max-w-md bg-white p-12 shadow-2xl border border-[#C5A059]/30">
                <div className="mb-12 text-center">
                    {/* Yollotl Isotype */}
                    <svg className="w-12 h-12 text-[#C5A059] mx-auto mb-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 22H22L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="12" cy="15" r="3" stroke="currentColor" strokeWidth="2" />
                    </svg>

                    <h1 className="text-3xl font-serif text-[#1A1A1A] tracking-widest mb-4 uppercase">{t('welcome')}</h1>
                    <div className="h-px w-24 bg-[#C5A059] mx-auto mb-4"></div>
                    <p className="text-[10px] uppercase tracking-[0.4em] text-[#1A1A1A] font-bold font-sans">{t('subtitle')}</p>
                </div>

                <p className="text-xs text-[#1A1A1A] mb-12 text-center leading-relaxed italic font-serif">
                    {t('quote')}
                </p>

                {accessDenied && (
                    <div className="mb-8 p-4 bg-red-50 border border-red-200 text-red-600 text-[10px] text-center uppercase tracking-widest font-bold font-sans">
                        {t('accessDenied')}
                    </div>
                )}

                <button
                    onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
                    className="w-full bg-[#1A1A1A] text-[#C5A059] py-4 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#333333] transition-all duration-500 flex items-center justify-center gap-4 shadow-xl group font-sans"
                >
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    {t('signInGoogle')}
                </button>

                <div className="mt-12 text-center">
                    <p className="text-[9px] text-[#1A1A1A]/60 uppercase tracking-widest leading-loose font-sans">
                        {t('warning')}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function SignIn() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#F5F5F1] flex items-center justify-center"><div className="w-8 h-8 border-4 border-[#C5A059] border-t-transparent rounded-full animate-spin"></div></div>}>
            <SignInContent />
        </Suspense>
    );
}
