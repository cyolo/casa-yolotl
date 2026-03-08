"use client";

import Link from "next/link";

export default function Forbidden() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-stone-950 px-8 text-center">
            <div className="max-w-md">
                <h1 className="text-6xl font-serif text-brand-gold mb-8 opacity-50">403</h1>
                <h2 className="text-xl font-serif text-white mb-6 uppercase tracking-[0.2em]">Acceso Denegado</h2>
                <div className="h-px w-12 bg-brand-gold mx-auto mb-8"></div>
                <p className="text-stone-400 text-xs leading-relaxed uppercase tracking-widest mb-12">
                    No posees las credenciales de nivel CIARO necesarias para acceder a esta terminal.
                    Este incidente ha sido registrado en el historial de seguridad.
                </p>
                <Link
                    href="/auth/signin"
                    className="text-[10px] text-brand-gold font-bold uppercase tracking-[0.4em] hover:text-white transition-colors border-b border-brand-gold pb-1"
                >
                    Volver al Portal
                </Link>
            </div>
        </div>
    );
}
