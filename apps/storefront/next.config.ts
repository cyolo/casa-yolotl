import type { NextConfig } from "next";

// Fail-fast environment validation
(function validateEnv() {
  const required = [
    'NEXTAUTH_SECRET',
    'DATA_SOURCE',
    ...(process.env.DATA_SOURCE === 'supabase' ? ['SUPABASE_URL', 'SUPABASE_SERVICE_ROLE_KEY'] : [])
  ];
  const missing = required.filter(key => !process.env[key]);

  if (missing.length > 0 && process.env.NODE_ENV === 'production') {
    throw new Error(`[CRITICAL] Missing required environment variables: ${missing.join(', ')}`);
  }
})();

const nextConfig: NextConfig = {
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
