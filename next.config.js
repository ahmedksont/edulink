/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')();

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

module.exports = withNextIntl(nextConfig);