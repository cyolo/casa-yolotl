'use client';

import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { Github, Heart, AlertCircle, ShieldCheck } from 'lucide-react';
import { Suspense } from 'react';

function SignInContent() {
    const searchParams = useSearchParams();
    const error = searchParams.get('error');

    const errorMessages: Record<string, string> = {
        'Signin': 'Try signing in with a different account.',
        'OAuthSignin': 'Try signing in with a different account.',
        'OAuthCallback': 'Try signing in with a different account.',
        'OAuthCreateAccount': 'Try signing in with a different account.',
        'EmailCreateAccount': 'Try signing in with a different account.',
        'Callback': 'Try signing in with a different account.',
        'OAuthAccountNotLinked': 'To confirm your identity, sign in with the same account you used originally.',
        'EmailSignin': 'The e-mail could not be sent.',
        'CredentialsSignin': 'Sign in failed. Check the details you provided are correct.',
        'SessionRequired': 'Please sign in to access this page.',
        'AccessDenied': 'Access Denied - Contact CIARO Architecture Team.',
        'default': 'Unable to sign in.',
    };

    const errorMessage = error ? (errorMessages[error] || errorMessages.default) : null;

    return (
        <div className="flex flex-col justify-center px-8 py-12 lg:px-20 xl:px-24">
            <div className="mx-auto w-full max-w-sm lg:w-96">
                <div className="text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start mb-10">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-indigo-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative h-14 w-14 bg-white ring-1 ring-slate-200 rounded-full flex items-center justify-center shadow-2xl">
                                <Heart className="h-7 w-7 text-red-600 fill-red-500" />
                            </div>
                        </div>
                        <div className="ml-4">
                            <span className="block text-2xl font-bold text-slate-900 tracking-tight leading-none">Casa Yolotl</span>
                            <span className="block text-sm font-medium text-slate-500 mt-1 uppercase tracking-widest">Admin Control</span>
                        </div>
                    </div>
                    <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Welcome back</h2>
                    <p className="mt-4 text-base text-slate-600 leading-relaxed font-light">
                        Representando cultura con disciplina empresarial.
                    </p>
                </div>

                <div className="mt-12">
                    {errorMessage && (
                        <div className="mb-8 flex items-start p-5 rounded-xl bg-red-50 border border-red-100 ring-4 ring-red-50/50 animate-in fade-in slide-in-from-top-4 duration-500">
                            <AlertCircle className="h-6 w-6 text-red-600 mt-0.5 flex-shrink-0" />
                            <div className="ml-4">
                                <h3 className="text-sm font-bold text-red-900">Security Notification</h3>
                                <p className="mt-1 text-sm text-red-700 font-medium leading-normal">{errorMessage}</p>
                            </div>
                        </div>
                    )}

                    <div className="space-y-4">
                        <button
                            onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
                            className="w-full flex items-center justify-center gap-4 px-6 py-4 border border-slate-200 rounded-2xl bg-white text-sm font-bold text-slate-800 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 shadow-sm active:scale-[0.98] ring-offset-2 focus:ring-2 focus:ring-slate-200 outline-none"
                        >
                            <svg className="h-5 w-5" viewBox="0 0 24 24">
                                <path
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    fill="#4285F4"
                                />
                                <path
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    fill="#34A853"
                                />
                                <path
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                                    fill="#FBBC05"
                                />
                                <path
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    fill="#EA4335"
                                />
                            </svg>
                            Continue with Google
                        </button>

                        <button
                            onClick={() => signIn('github', { callbackUrl: '/dashboard' })}
                            className="w-full flex items-center justify-center gap-4 px-6 py-4 border border-slate-900 rounded-2xl bg-slate-900 text-sm font-bold text-white hover:bg-slate-800 transition-all duration-300 shadow-xl shadow-slate-200 active:scale-[0.98] ring-offset-2 focus:ring-2 focus:ring-slate-900 outline-none"
                        >
                            <Github className="h-5 w-5 text-white" />
                            Continue with GitHub
                        </button>
                    </div>

                    <div className="mt-12 pt-10 border-t border-slate-100 flex flex-col items-center">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-100 shadow-sm mb-6">
                            <ShieldCheck className="h-4 w-4 text-emerald-600" />
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Enterprise Shield Active</span>
                        </div>
                        <div className="flex items-center justify-between w-full text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">
                            <p>&copy; 2026 CASA YOLOTL & CO.</p>
                            <p>Global Admin Portal</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function SignInPage() {
    return (
        <div className="min-h-screen bg-white flex flex-col lg:flex-row overflow-hidden font-sans">
            {/* Left Panel (Visual/Brand) */}
            <div className="hidden lg:block relative flex-1 bg-slate-950 overflow-hidden group/bg" style={{ minWidth: '0' }}>
                <div className="absolute inset-0 z-0">
                    <img
                        src="/auth/signin-bg.png"
                        alt="Ancient Mexican heritage craftsmanship"
                        className="w-full h-full object-cover transition-transform duration-[20000ms] group-hover/bg:scale-125 opacity-70 scale-110 grayscale-[0.2] contrast-[1.1]"
                    />
                </div>

                {/* Decorative Overlays */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
                <div className="absolute inset-0 z-10 bg-slate-950/20 backdrop-blur-[1px]" />

                {/* Ambient Glows */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-500/10 rounded-full blur-[200px] z-0" />
                <div className="absolute -bottom-1/4 -right-1/4 w-[80%] h-[80%] bg-red-500/10 rounded-full blur-[180px] z-0" />

                {/* Brand Presence */}
                <div className="absolute inset-0 flex flex-col justify-end p-20 z-20 pointer-events-none">
                    <div className="max-w-xl transition-all duration-1000 transform group-hover/bg:translate-y-[-8px]">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-10 w-1 bg-red-600" />
                            <span className="text-white text-sm font-black tracking-[0.5em] uppercase">Enterprise Access</span>
                        </div>
                        <h1 className="text-white text-6xl font-black tracking-tight leading-[0.9] mb-6 drop-shadow-2xl">
                            CASA YOLOTL & CO <br />
                            <span className="text-slate-400 font-light">Admin Portal</span>
                        </h1>
                        <p className="text-slate-300 text-xl font-light leading-relaxed max-w-lg">
                            Representando cultura con disciplina empresarial. Gestión operativa de alto nivel para el mercado artesanal global.
                        </p>
                        <div className="mt-12 flex items-center gap-6">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="h-10 w-10 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center">
                                        <div className="h-8 w-8 rounded-full bg-slate-700 overflow-hidden ring-1 ring-white/10" />
                                    </div>
                                ))}
                            </div>
                            <div className="h-px w-24 bg-white/20" />
                            <span className="text-white/40 text-[10px] uppercase font-black tracking-widest italic">Authorized Personal Only</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Panel (Auth) */}
            <div className="relative flex flex-col justify-center items-center bg-slate-50/30 lg:w-[580px] xl:w-[640px] shrink-0">
                {/* Visual Depth Elements */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white shadow-2xl z-0" />
                <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent z-0" />

                <Suspense fallback={
                    <div className="flex items-center justify-center h-full">
                        <div className="h-12 w-12 border-4 border-slate-200 border-t-indigo-600 rounded-full animate-spin" />
                    </div>
                }>
                    <div className="relative z-10 w-full flex justify-center">
                        <SignInContent />
                    </div>
                </Suspense>
            </div>
        </div>
    );
}
