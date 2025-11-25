/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost',
      }
    ],
  },
  turbopack: {}, // Enable Turbopack
  webpack: null, // Disable Webpack custom config to use Turbopack
};

module.exports = nextConfig;
