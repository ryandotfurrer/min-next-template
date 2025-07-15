import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.zenblog.com",
        port: "",
        pathname: "/**",
      },
    ],
  }
};

export default nextConfig;
