/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: false, // THIS IS THE FLAG THAT MATTERS
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/account123/**",
      },
    ],
  },
}

module.exports = nextConfig
