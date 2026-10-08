import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep old Squarespace URLs working
  async redirects() {
    return [
      { source: "/humannature", destination: "/motion", permanent: true },
      { source: "/video", destination: "/motion", permanent: true },
      { source: "/graphic", destination: "/stills", permanent: true },
      { source: "/graphics", destination: "/stills", permanent: true },
      { source: "/gallerymh", destination: "/mh", permanent: true },
      { source: "/new-page", destination: "/contact", permanent: true },
      // Product Styling moved to its own site
      { source: "/product-styling", destination: "https://makistyling.com", permanent: false },
    ];
  },
};

export default nextConfig;
