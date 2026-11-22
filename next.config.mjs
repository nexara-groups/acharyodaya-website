import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const isStaticExport = process.env.STATIC_EXPORT === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ...(isStaticExport
    ? {
        output: "export",
        trailingSlash: true,
        images: { unoptimized: true },
        ...(basePath ? { basePath } : {}),
      }
    : {}),
  experimental: {
    // Server Actions / Route Handlers run on the Cloudflare Workers runtime
    // via OpenNext. Keep node built-ins out of the edge path.
  },
};

export default nextConfig;

if (!isStaticExport) {
  // Enable Cloudflare bindings (KV, Queues, etc.) during `next dev`.
  // Safe no-op in environments where the dev platform is unavailable.
  initOpenNextCloudflareForDev();
}
