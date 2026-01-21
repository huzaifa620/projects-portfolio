/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['play.google.com', 'www.devstudio.com'],
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig
