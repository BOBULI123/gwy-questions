import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";
import { questions } from "@/app/data/questions";

describe("sitemap", () => {
  it("uses the production domain and prioritizes question detail pages", () => {
    const entries = sitemap();

    expect(entries.some((entry) => entry.url === "https://www.gwyms88.com")).toBe(true);
    expect(entries).toContainEqual(
      expect.objectContaining({
        url: `https://www.gwyms88.com/question/${questions[0].id}`,
        changeFrequency: "weekly",
        priority: 0.9
      })
    );
    expect(entries).toContainEqual(
      expect.objectContaining({
        url: "https://www.gwyms88.com/hot/2026-01",
        changeFrequency: "weekly",
        priority: 0.8
      })
    );
  });
});
