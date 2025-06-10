import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  compiler: {
    styledJsx: {
      useLightningcss: true,
    },
  },
};

export default nextConfig;
