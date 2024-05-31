/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  async exportPathMap(defaultPathMap) {
    return {
      "/": { page: "/" },
      // Add other pages if needed, for example:
      // '/about': { page: '/about' },
    };
  },
  assetPrefix: process.env.NODE_ENV === "production" ? "/your-repo-name/" : "",
};

export default nextConfig;
