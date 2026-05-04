"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { LogOut, User, Activity, BarChart3, ShieldCheck, Globe } from "lucide-react";

export default function AdminNavbar() {
    const { data: session } = useSession();

    return (
        <nav className="border-b border-stone-800 bg-stone-900/50 backdrop-blur-md sticky top-0 z-50 px-8 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center gap-12">
                    <Link href="/dashboard" className="text-xl font-serif text-white tracking-widest uppercase flex items-center gap-3">
                        <span className="text-brand-gold text-2xl">CY</span>
                        <span className="hidden md:inline">Dashboard</span>
                    </Link>

                    <div className="hidden lg:flex items-center gap-8">
                        <Link href="/dashboard" className="text-[10px] uppercase tracking-[0.2em] text-stone-400 hover:text-brand-gold transition-colors flex items-center gap-2">
                            <Activity className="w-3 h-3" /> Rendimiento
                        </Link>
                        <Link href="/dashboard?tab=analytics" className="text-[10px] uppercase tracking-[0.2em] text-stone-400 hover:text-brand-gold transition-colors flex items-center gap-2">
                            <BarChart3 className="w-3 h-3" /> Analíticas
                        </Link>
                        <Link href="/dashboard?tab=storytelling" className="text-[10px] uppercase tracking-[0.2em] text-stone-400 hover:text-brand-gold transition-colors flex items-center gap-2">
                            <Globe className="w-3 h-3" /> Storytelling
                        </Link>
                        <Link href="/dashboard?tab=devops" className="text-[10px] uppercase tracking-[0.2em] text-stone-400 hover:text-brand-gold transition-colors flex items-center gap-2">
                            <ShieldCheck className="w-3 h-3" /> DevOps
                        </Link>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3 bg-stone-800/50 px-4 py-2 border border-stone-700/50">
                        <User className="w-3 h-3 text-brand-gold" />
                        <span className="text-[9px] uppercase tracking-widest text-stone-300 font-bold hidden sm:inline">
                            {session?.user?.name || "Admin"}
                        </span>
                    </div>

                    <button
                        onClick={() => signOut({ callbackUrl: "/auth/signin" })}
                        className="flex items-center gap-2 bg-brand-gold/10 hover:bg-brand-gold text-brand-gold hover:text-stone-900 border border-brand-gold/20 px-6 py-2 transition-all duration-300 group"
                    >
                        <LogOut className="w-3 h-3" />
                        <span className="text-[9px] font-bold uppercase tracking-widest">Logout</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}
