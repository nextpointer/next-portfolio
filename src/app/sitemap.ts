import type { MetadataRoute } from "next";
import { DOMAIN } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = DOMAIN;

  return [
    {
      url: `${baseUrl}/`,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/playground`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/llms.txt`,
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];
}
