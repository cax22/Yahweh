/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/Yahweh" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/Yahweh/" : "",
  trailingSlash: true,
};

module.exports = nextConfig;
