import type { NextConfig } from "next";

const backendProxyTarget =
  process.env.BACKEND_PROXY_TARGET?.trim() || "http://127.0.0.1:8000";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
        pathname: "/maps/**",
      },
      {
        protocol: "https",
        hostname: "maps.googleapis.com",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api-proxy/:path*",
        destination: `${backendProxyTarget.replace(/\/$/, "")}/api/:path*`,
      },
    ];
  },
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/index", destination: "/", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/about", destination: "/About", permanent: true },
      { source: "/about-us", destination: "/About", permanent: true },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.gausevasangh.org" }],
        destination: "https://gausevasangh.org/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.gauvsevasangh.org" }],
        destination: "https://gausevasangh.org/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "gauvsevasangh.org" }],
        destination: "https://gausevasangh.org/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
