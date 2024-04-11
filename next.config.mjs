/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV == "production";

const nextConfig = {
  basePath: isProd ? "/FindIt" : "",
  distDir: "dist",
  images: {
    unoptimized: true, // FIXME see here
  },
};

export default nextConfig;
