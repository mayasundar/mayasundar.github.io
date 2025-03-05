import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    trailingSlash: false,
    output: "export",
    images: { unoptimized: true }
};

export default nextConfig;
