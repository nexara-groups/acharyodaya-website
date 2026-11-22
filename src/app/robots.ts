import type { MetadataRoute } from "next";

export const dynamic = "force-static";

/**
 * Dynamic robots.txt Generator.
 * Sets crawling permissions and sitemap paths for search engine bots.
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://nexaragroups.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"], // Protect internal system endpoints
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
