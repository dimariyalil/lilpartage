/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')('./lib/i18n.ts');

const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', 'vercel.app'],
    },
  },
  images: {
    domains: ['images.unsplash.com', 'avatars.githubusercontent.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: process.env.NODE_ENV === 'production',
  },
  eslint: {
    ignoreDuringBuilds: process.env.NODE_ENV === 'production',
  },
  // For demo mode, only build Russian locale to avoid translation errors
  ...(process.env.NEXT_PUBLIC_DEMO_MODE === 'true' && {
    output: 'export',
    trailingSlash: true,
    images: {
      unoptimized: true,
    },
  })
}

module.exports = withNextIntl(nextConfig);