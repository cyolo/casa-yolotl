import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    transpilePackages: ["@casa-yolotl/shared"],
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    { key: 'X-Frame-Options', value: 'DENY' },
                    { key: 'X-Content-Type-Options', value: 'nosniff' },
                    { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';" },
                ],
            },
        ];
    },
};

export default nextConfig;
