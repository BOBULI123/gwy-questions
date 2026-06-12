import { afterEach, describe, expect, it } from "vitest";
import { getSiteUrl } from "@/lib/site-config";

const originalEnv = { ...process.env };

afterEach(() => {
  process.env = { ...originalEnv };
});

describe("site config", () => {
  it("uses NEXT_PUBLIC_SITE_URL without a trailing slash", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://example.com/";

    expect(getSiteUrl()).toBe("https://example.com");
  });

  it("falls back to the default Vercel domain", () => {
    delete process.env.NEXT_PUBLIC_SITE_URL;

    expect(getSiteUrl()).toBe("https://gwy-questions.vercel.app");
  });
});
