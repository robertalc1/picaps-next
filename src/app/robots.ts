import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/", "/demo/"],
      },
    ],
    sitemap: "https://picaps.ro/sitemap.xml",
    host: "https://picaps.ro",
  };
}
