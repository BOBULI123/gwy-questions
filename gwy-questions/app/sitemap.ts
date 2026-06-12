import type { MetadataRoute } from "next";
import { hotTopics } from "@/app/data/hot-topics";
import { questions } from "@/app/data/questions";
import { getSiteUrl } from "@/lib/site-config";
import { typeMetas } from "@/lib/question-utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const now = new Date();

  const staticRoutes = ["", "/quotes", "/hot"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8
  }));

  const typeRoutes = typeMetas.map((type) => ({
    url: `${siteUrl}/type/${type.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8
  }));

  const questionRoutes = questions.map((question) => ({
    url: `${siteUrl}/question/${question.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  const hotRoutes = hotTopics.map((topic) => ({
    url: `${siteUrl}/hot/${topic.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [...staticRoutes, ...typeRoutes, ...questionRoutes, ...hotRoutes];
}
