/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static HTML export
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: process.env.NODE_ENV === "production" ? "/Yahweh" : "", // Repository name
  assetPrefix: process.env.NODE_ENV === "production" ? "/Yahweh/" : "", // Repository name with trailing slash
};

module.exports = nextConfig;
