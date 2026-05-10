import type { MetadataRoute } from "next";
import { client } from "@/sanity/client";
import { defineQuery } from "next-sanity";
import { communes } from "@/lib/communes";

const SLUGS_QUERY = defineQuery(`*[
  _type == "article"
  && defined(slug.current)
  && status == "published"
] { "slug": slug.current, publishedAt }`);

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://maysante.be";

  const posts = await client.fetch<{ slug: string; publishedAt: string | null }[]>(SLUGS_QUERY);

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/nos-services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/soins-domicile`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/etre-appele`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/a-propos`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
  ];

  const communeRoutes: MetadataRoute.Sitemap = communes.map((c) => ({
    url: `${baseUrl}/soins-domicile/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...communeRoutes, ...blogRoutes];
}
