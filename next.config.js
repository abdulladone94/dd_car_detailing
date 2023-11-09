/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'plus.unsplash.com',
      'thenounproject.com',
      'images.unsplash.com',
      'unsplash.com',
      'pexels.com',
      'images.pexels.com',
    ],
  },
};

module.exports = nextConfig;
