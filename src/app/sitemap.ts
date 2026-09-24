import { SITE_URL } from "@/data/site";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: "2026-09-24",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
