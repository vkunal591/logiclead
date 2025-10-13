// next.config.js or next.config.ts

import type { NextConfig } from "next";
import withPWA from "next-pwa";
import path from "path";

// Enable PWA with options
const withPWAModule = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development", // disable in dev mode
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["https://logiclead.vercel.app"],
  },
  // You can add other Next.js options here if needed
};

export default withPWAModule(nextConfig as any);
