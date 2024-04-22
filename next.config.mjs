/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV == "production";

// console.log("isProd", process.env);

const nextConfig = {
  basePath: isProd ? "" : "",
  // distDir: "dist",
  images: {
    path: "/FindIt",

    unoptimized: true, // FIXME see here
  },
  output: "export",

  reactStrictMode: true,
};

export default nextConfig;
