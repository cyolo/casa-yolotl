import type { NextConfig } from "next";

// Fail-fast environment validation
(function validateEnv() {
  const env = (process.env.APP_ENV || 'local').toLowerCase();

  const required = [
    'NEXTAUTH_SECRET',
    'DATA_SOURCE',
    'GCP_PROJECT_ID',
    ...(process.env.DATA_SOURCE === 'supabase' ? ['SUPABASE_URL', 'SUPABASE_ANON_KEY'] : [])
  ];
  const missing = required.filter(key => !process.env[key]);

  if (missing.length > 0) {
    throw new Error(`[CRITICAL] Missing required environment variables: ${missing.join(', ')}`);
  }

  // Production Lockdown: Strict admin email
  if (env === 'production') {
    const adminEmail = process.env.ALLOWED_ADMIN_EMAILS;
    if (adminEmail !== 'cesar.vargas.alanis@gmail.com') {
      throw new Error(`[SECURITY CRITICAL] Unauthorized admin email configured in PRODUCTION: ${adminEmail}`);
    }
  }

  // Anti-Credential Check: Local must not use real secrets accidentally
  if (env === 'local') {
    const secrets = ['SUPABASE_SERVICE_ROLE_KEY', 'STRIPE_SECRET_KEY'];
    const detected = secrets.filter(s => process.env[s] && !process.env[s]?.includes('your-') && !process.env[s]?.includes('missing'));
    if (detected.length > 0) {
      console.warn(`[SECURITY WARNING]: Real secrets detected in LOCAL environment (${detected.join(', ')}).`);
    }
  }
})();

const nextConfig: NextConfig = {
  output: 'standalone',
  transpilePackages: ["@casa-yolotl/shared"],
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async rewrites() {
    return [];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https: https://www.googletagmanager.com; font-src 'self' data:; connect-src 'self' https://www.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com;",
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
