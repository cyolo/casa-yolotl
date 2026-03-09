"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { allLanguages, Language } from "@/data/languages";
import { useRouter, usePathname } from "next/navigation";

interface TranslationStrings {
    [key: string]: any;
}

interface LanguageContextType {
    currentLanguage: Language;
    locale: string;
    setLanguage: (code: string) => void;
    t: (key: string, replacements?: Record<string, string>) => string;
    initialized: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const router = useRouter();
    const pathname = usePathname();

    const [currentLanguage, setCurrentLanguageState] = useState<Language>(
        allLanguages.find(l => l.code === "es") || allLanguages[0]
    );
    const [translations, setTranslations] = useState<TranslationStrings>({});
    const [fallbackTranslations, setFallbackTranslations] = useState<TranslationStrings>({});
    const [initialized, setInitialized] = useState(false);

    // Initial detection of locale from URL prefix
    useEffect(() => {
        const pathParts = pathname.split('/').filter(Boolean);
        if (pathParts.length > 0) {
            const potentialLocale = pathParts[0];
            const foundLang = allLanguages.find(l => l.code === potentialLocale);
            if (foundLang && foundLang.code !== currentLanguage.code) {
                setCurrentLanguageState(foundLang);
            }
        }
    }, [pathname]);

    const loadDictionary = async (code: string) => {
        try {
            // Load Base (Spanish) for fallbacks using dynamic import
            if (Object.keys(fallbackTranslations).length === 0) {
                const esFallback = await import(`../messages/es.json`);
                setFallbackTranslations(esFallback.default || esFallback);
            }

            // Attempt to load current language
            try {
                const response = await import(`../messages/${code}.json`);
                setTranslations(response.default || response);
            } catch (err) {
                // If specific language JSON doesn't exist, fallback to Empty (so fallback logic covers it)
                setTranslations({});
            }
        } catch (error) {
            console.error("Failed to load dictionary:", error);
            setTranslations({});
        }
    };

    useEffect(() => {
        loadDictionary(currentLanguage.code).then(() => setInitialized(true));
    }, [currentLanguage]);

    const setLanguage = (code: string) => {
        const lang = allLanguages.find(l => l.code === code);
        if (lang) {
            setCurrentLanguageState(lang);

            // Persist choice in cookie for Middleware (1 year)
            document.cookie = `NEXT_LOCALE=${code}; path=/; max-age=31536000; SameSite=Lax`;

            // 1. Capture current status from window to include Hash and correct segments
            const currentPathname = window.location.pathname;
            const currentHash = window.location.hash;

            // 2. Logic: Centralized Path Transformation
            const segments = currentPathname.split('/').filter(Boolean);
            const allLocaleCodes = allLanguages.map(l => l.code);

            if (segments.length > 0 && allLocaleCodes.includes(segments[0])) {
                // Replace existing locale segment
                segments[0] = code;
            } else {
                // Prepend new locale segment
                segments.unshift(code);
            }

            const newPath = '/' + segments.join('/') + currentHash;

            // 3. Execution: Unified hard redirect to ensure Middleware and Server Components sync
            window.location.href = newPath;
        }
    };

    const t = (key: string, replacements?: Record<string, string>) => {
        const resolve = (obj: Record<string, unknown> | undefined, path: string): unknown => {
            return path.split('.').reduce<unknown>((prev, curr) => {
                if (prev && typeof prev === 'object' && !Array.isArray(prev)) {
                    return (prev as Record<string, unknown>)[curr];
                }
                return undefined;
            }, obj);
        };

        const interpolate = (text: string, replacements?: Record<string, string>) => {
            if (!replacements) return text;
            return Object.entries(replacements).reduce((acc, [key, value]) => {
                return acc.replace(new RegExp(`\\{${key}\\}`, 'g'), value);
            }, text);
        };

        // 1. Check current translations
        const translated = resolve(translations as Record<string, unknown>, key);
        if (typeof translated === 'string') return interpolate(translated, replacements);

        // 2. Check fallback
        const fallback = resolve(fallbackTranslations as Record<string, unknown>, key);
        if (typeof fallback === 'string') {
            const result = interpolate(fallback, replacements);
            if (currentLanguage.code !== 'es') {
                return `[${currentLanguage.code.toUpperCase()}] ${result}`;
            }
            return result;
        }

        return key;
    };

    return (
        <LanguageContext.Provider value={{ currentLanguage, locale: currentLanguage.code, setLanguage, t, initialized }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
