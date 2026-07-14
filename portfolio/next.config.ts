import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  turbopack: {
    root: '.',
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  experimental: {
    optimizeCss: false,
  },
};

export default nextConfig;
