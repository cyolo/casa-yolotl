import type { NextConfig } from "next";

// Fail-fast environment validation for Admin
(function validateAdminEnv() {
    const env = (process.env.APP_ENV || 'local').toLowerCase();

    const required = [
        'NEXTAUTH_SECRET',
        'ALLOWED_ADMIN_EMAILS',
        'GOOGLE_CLIENT_ID',
        'GOOGLE_CLIENT_SECRET',
        'GCP_PROJECT_ID',
        ...(process.env.DATA_SOURCE === 'supabase' ? ['SUPABASE_URL', 'SUPABASE_ANON_KEY'] : [])
    ];
    const missing = required.filter(key => !process.env[key]);

    if (missing.length > 0) {
        throw new Error(`[ADMIN CRITICAL] Missing required environment variables: ${missing.join(', ')}`);
    }

    // Production Lockdown: Strict admin email
    if (env === 'production') {
        const adminEmail = process.env.ALLOWED_ADMIN_EMAILS;
        if (adminEmail !== 'cesar.vargas.alanis@gmail.com') {
            throw new Error(`[SECURITY CRITICAL] Unauthorized admin email configured in PRODUCTION: ${adminEmail}`);
        }
    }

    // Anti-Credential Check
    if (env === 'local') {
        const secrets = ['SUPABASE_SERVICE_ROLE_KEY', 'GOOGLE_CLIENT_SECRET'];
        const detected = secrets.filter(s => process.env[s] && !process.env[s]?.includes('your-') && !process.env[s]?.includes('missing'));
        if (detected.length > 0) {
            console.warn(`[SECURITY WARNING]: Real secrets detected in LOCAL environment. Clear these to prevent accidental usage.`);
        }
    }
})();

const nextConfig: NextConfig = {
    output: 'standalone',
    transpilePackages: ["@casa-yolotl/shared"],
};

export default nextConfig;
