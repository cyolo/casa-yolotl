import { I18N_CONFIG } from "../constants/i18n";

/**
 * Casa Yolotl & Co. - Global Marketplace Configuration
 * Centralized settings for white-label readiness and infrastructure consistency.
 */
export const MARKETPLACE_CONFIG = {
    branding: {
        name: "Casa Yolotl & Co.",
        tagline: "Curaduría de Arte Ancestral y Excelencia Artesanal",
        logoUrl: "/logo.png",
    },
    currency: {
        symbol: "€",
        code: "EUR",
        locale: "es-ES",
    },
    inventory: {
        lowStockThreshold: 5,
        defaultLimit: 12,
        maxLimit: 100,
    },
    i18n: I18N_CONFIG,
    social: {
        instagram: "https://instagram.com/casayolotl",
        facebook: "https://facebook.com/casayolotl",
    },
    contact: {
        email: "hola@casa-yolotl.com",
    }
} as const;

export type MarketplaceConfig = typeof MARKETPLACE_CONFIG;
