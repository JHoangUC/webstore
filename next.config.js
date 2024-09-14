/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['files.stripe.com','i.imgur.com'],
  },
}

module.exports = nextConfig
