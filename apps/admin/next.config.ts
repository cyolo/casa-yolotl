import type { NextConfig } from "next";

// Fail-fast environment validation for Admin
(function validateAdminEnv() {
    const required = [
        'NEXTAUTH_SECRET',
        'ALLOWED_ADMIN_EMAILS',
        'GOOGLE_CLIENT_ID',
        'GOOGLE_CLIENT_SECRET'
    ];
    const missing = required.filter(key => !process.env[key]);

    if (missing.length > 0 && process.env.NODE_ENV === 'production') {
        throw new Error(`[ADMIN CRITICAL] Missing required environment variables: ${missing.join(', ')}`);
    }
})();

const nextConfig: NextConfig = {
    transpilePackages: ["@casa-yolotl/shared"],
};

export default nextConfig;
