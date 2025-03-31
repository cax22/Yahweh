/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Remove the repository name when using a custom domain
  basePath: "",
  assetPrefix: "",
};

module.exports = nextConfig;
