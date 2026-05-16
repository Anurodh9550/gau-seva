import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://gauvsevasangh.org",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://gauvsevasangh.org/about",
      lastModified: new Date(),
    },
    {
      url: "https://gauvsevasangh.org/contact",
      lastModified: new Date(),
    },
    {
      url: "https://gauvsevasangh.org/donations",
      lastModified: new Date(),
    },
  ];
}