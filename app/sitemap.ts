import { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/About`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/donations`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
    },
  ];
}