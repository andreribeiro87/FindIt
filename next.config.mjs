/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV == "production";

// console.log("isProd", process.env);

const nextConfig = {
  basePath: isProd ? "/FindIt" : "",
  distDir: "dist",
  images: {
    path: "/FindIt",

    unoptimized: true, // FIXME see here
  },

  reactStrictMode: true,
};

export default nextConfig;
