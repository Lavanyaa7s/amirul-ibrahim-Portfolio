import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
  },
  // Allow GSAP and Three.js to work properly
  transpilePackages: [],
};

export default nextConfig;
