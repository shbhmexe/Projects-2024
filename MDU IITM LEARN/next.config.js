/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  trailingSlash: true, // Ensures proper sitemap URLs
  output: "export", // ✅ Enables `next export`
  // ❌ REMOVE THIS - Static exports do not support rewrites!
  // async rewrites() {
  //   return [];
  // },
};

module.exports = nextConfig;
