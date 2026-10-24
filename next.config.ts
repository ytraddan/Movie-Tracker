import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://image.tmdb.org/**")],
    minimumCacheTTL: 60 * 60 * 24 * 31, // 1 month
  },
};

export default nextConfig;
