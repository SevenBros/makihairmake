import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep old Squarespace URLs working
  async redirects() {
    return [
      { source: "/humannature", destination: "/video", permanent: true },
      { source: "/gallerymh", destination: "/mh", permanent: true },
      { source: "/new-page", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
