import type { NextConfig } from "next";
import withPWAInit from "next-pwa";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/numeralpha" : undefined,
  assetPrefix: isProd ? "/numeralpha/" : undefined,
  // experimental: {
  //   // Required for basePath and static export until this is stable
  //   assetPrefix: isProd ? "/numeralpha/" : undefined,
  // },
  images: {
    unoptimized: true, // Required for static export with next/image without a custom loader
  },
  // i18n: null, // Removing this to see if types align without it
  /* other config options here */
};

const withPWA = withPWAInit({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: !isProd, // Disable PWA in development
  // For GitHub Pages, ensure the service worker scope is correct with basePath
  // scope: isProd ? "/numeralpha" : "/", // Not always needed, next-pwa might handle basePath
  // sw: "sw.js", // default is fine
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default withPWA(nextConfig as any);
