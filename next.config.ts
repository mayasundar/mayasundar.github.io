import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true
    },
    assetPrefix: '',
    basePath: '',
    async rewrites() {
        return [
            {
                source: '/assistive-staging',
                destination: 'https://assistive-staging.vercel.app',
            },
            {
                source: '/assistive-staging/',
                destination: 'https://assistive-staging.vercel.app',
            },
            {
                source: '/assistive-staging/:path*',
                destination: 'https://assistive-staging.vercel.app/:path*',
            },
        ];
    },
};

module.exports = nextConfig
