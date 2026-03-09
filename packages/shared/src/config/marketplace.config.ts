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

/**
 * Environment-specific overrides for Phase 4.
 */
export const ENVIRONMENT_CONFIG = {
    local: {
        apiEndpoint: "http://localhost:3000",
        enableAnalytics: false,
        trustHost: true,
    },
    development: {
        apiEndpoint: "https://dev-api.casayolotl.com",
        enableAnalytics: true,
        trustHost: true,
    },
    production: {
        apiEndpoint: "https://api.casayolotl.com",
        enableAnalytics: true,
        trustHost: false, // Strict for PRD
    }
};

export const getEnvironment = () => {
    return (process.env.APP_ENV as keyof typeof ENVIRONMENT_CONFIG) || 'local';
};

export const getActiveConfig = () => {
    const env = getEnvironment();
    return {
        ...MARKETPLACE_CONFIG,
        ...ENVIRONMENT_CONFIG[env],
        env
    };
};

export type MarketplaceConfig = typeof MARKETPLACE_CONFIG;
