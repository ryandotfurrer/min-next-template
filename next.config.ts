import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["http://localhost:3000", "192.168.1.201"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.zenblog.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
