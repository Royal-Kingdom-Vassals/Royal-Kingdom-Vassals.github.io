/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? "/Royal-Kingdom-Vassals.github.io/" : "",
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      // "/about": { page: "/about" },
      // "/p/hello-nextjs": { page: "/post", query: { title: "hello-nextjs" } },
      // "/p/learn-nextjs": { page: "/post", query: { title: "learn-nextjs" } },
      // "/p/deploy-nextjs": { page: "/post", query: { title: "deploy-nextjs" } },
    };
  },
};
