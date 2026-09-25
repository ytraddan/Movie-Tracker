import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://image.tmdb.org/**")],
    unoptimized: true,
  },
};

export default nextConfig;
