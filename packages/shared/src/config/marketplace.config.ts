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
 * Environment-specific overrides for Phase 5 (Parametric Lockdown).
 */
export const ENVIRONMENT_CONFIG = {
    local: {
        apiEndpoint: "http://localhost:3000",
        enableAnalytics: false,
        trustHost: true,
        dataSource: 'static' as const, // Forced for 12-Factor Embedded Mode
        gcpProjectId: "casa-yolotl-local",
    },
    development: {
        apiEndpoint: "https://dev-api.casayolotl.com",
        enableAnalytics: true,
        trustHost: true,
        dataSource: (process.env.DATA_SOURCE || 'supabase') as 'static' | 'supabase',
        gcpProjectId: process.env.GCP_PROJECT_ID || "casa-yolotl-dev",
    },
    production: {
        apiEndpoint: "https://api.casayolotl.com",
        enableAnalytics: true,
        trustHost: false, // Strict for PRD
        dataSource: 'supabase' as const, // Forced for Prod
        gcpProjectId: process.env.GCP_PROJECT_ID || "casa-yolotl-prd",
    }
} as const;

export const getEnvironment = () => {
    return (process.env.APP_ENV as keyof typeof ENVIRONMENT_CONFIG) || 'local';
};

/**
 * Resolves the configuration based on the current environment.
 * Enforces 12-Factor App principles and data sovereignty.
 */
export const getActiveConfig = () => {
    const env = getEnvironment();
    const config = ENVIRONMENT_CONFIG[env];

    // ROI and Currency targets are immutable across environments as per Map of Governance
    const activeConfig = {
        ...MARKETPLACE_CONFIG,
        ...config,
        env,
        metrics: {
            roiTarget: 0.25, // 25% ROI Target
            growthFloor: 0.20, // 20% Growth Floor
        }
    };

    return activeConfig;
};

export type MarketplaceConfig = ReturnType<typeof getActiveConfig>;
