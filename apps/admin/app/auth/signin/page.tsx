'use client';

import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { LogIn, Github, Lock, AlertCircle } from 'lucide-react';
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
        'AccessDenied': 'Access denied. Your email is not authorized for the Admin Portal.',
        'default': 'Unable to sign in.',
    };

    const errorMessage = error ? (errorMessages[error] || errorMessages.default) : null;

    return (
        <div className="flex flex-col justify-center px-8 py-12 lg:px-20 xl:px-24">
            <div className="mx-auto w-full max-w-sm lg:w-96">
                <div className="text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start mb-6">
                        <div className="h-12 w-12 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
                            <Lock className="h-6 w-6 text-white" />
                        </div>
                        <span className="ml-3 text-2xl font-bold text-slate-900 tracking-tight">Casa Yolotl Admin</span>
                    </div>
                    <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Welcome back</h2>
                    <p className="mt-3 text-sm text-slate-600">
                        Secure access to our artisanal heritage management system.
                    </p>
                </div>

                <div className="mt-10">
                    {errorMessage && (
                        <div className="mb-6 flex items-start p-4 rounded-lg bg-red-50 border border-red-100 animate-in fade-in slide-in-from-top-2 duration-300">
                            <AlertCircle className="h-5 w-5 text-red-600 mt-0.5" />
                            <div className="ml-3">
                                <h3 className="text-sm font-medium text-red-800">Authentication error</h3>
                                <p className="mt-1 text-sm text-red-700">{errorMessage}</p>
                            </div>
                        </div>
                    )}

                    <div className="space-y-4">
                        <button
                            onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
                            className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-slate-200 rounded-xl bg-white text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 shadow-sm active:scale-[0.98]"
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
                            Sign in with Google
                        </button>

                        <button
                            onClick={() => signIn('github', { callbackUrl: '/dashboard' })}
                            className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-slate-900 rounded-xl bg-slate-900 text-sm font-semibold text-white hover:bg-slate-800 transition-all duration-200 shadow-lg shadow-slate-200 active:scale-[0.98]"
                        >
                            <Github className="h-5 w-5" />
                            Sign in with GitHub
                        </button>
                    </div>

                    <div className="mt-8 pt-8 border-t border-slate-100">
                        <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                            <p>&copy; 2026 Casa Yolotl & Co.</p>
                            <p className="flex items-center gap-1.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                Secure System Active
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function SignInPage() {
    return (
        <div className="min-h-screen bg-white flex overflow-hidden">
            {/* Split Screen Logic */}
            <div className="hidden lg:block relative w-0 flex-1 bg-slate-50 overflow-hidden">
                {/* Decorative Overlay */}
                <div className="absolute inset-0 z-10 bg-gradient-to-br from-indigo-900/40 to-transparent mix-blend-multiply" />
                <div className="absolute inset-0 z-10 bg-black/10" />

                {/* Image Component */}
                <Image
                    src="/auth/signin-bg.png"
                    alt="Ancient Mexican heritage craftsmanship"
                    fill
                    className="object-cover transition-transform duration-10000 hover:scale-110"
                    priority
                />

                {/* Quote Overlay */}
                <div className="absolute bottom-12 left-12 right-12 z-20 transition-all transform hover:translate-y-[-4px]">
                    <p className="text-white text-3xl font-light italic leading-relaxed drop-shadow-md">
                        "Preserving our ancestral crafts, one artisan at a time."
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                        <div className="h-px w-8 bg-white/60" />
                        <span className="text-white/80 uppercase tracking-widest text-xs font-bold">The Casa Yolotl Mission</span>
                    </div>
                </div>
            </div>

            <div className="flex-1 flex flex-col justify-center items-center lg:w-[540px] xl:w-[600px] relative">
                {/* Subtle Background Elements */}
                <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-indigo-50 rounded-full blur-[100px] opacity-60 z-0 pointer-events-none" />
                <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-pink-50 rounded-full blur-[100px] opacity-60 z-0 pointer-events-none" />

                <Suspense fallback={<div className="animate-pulse flex space-x-4"><div className="rounded-full bg-slate-200 h-10 w-10"></div></div>}>
                    <SignInContent />
                </Suspense>
            </div>
        </div>
    );
}
