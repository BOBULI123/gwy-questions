import { afterEach, describe, expect, it } from "vitest";
import { getBaiduSiteVerification, getGoogleSiteVerification, getSiteUrl } from "@/lib/site-config";

const originalEnv = { ...process.env };

afterEach(() => {
  process.env = { ...originalEnv };
});

describe("site config", () => {
  it("uses NEXT_PUBLIC_SITE_URL without a trailing slash", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://example.com/";

    expect(getSiteUrl()).toBe("https://example.com");
  });

  it("falls back to the custom production domain", () => {
    delete process.env.NEXT_PUBLIC_SITE_URL;

    expect(getSiteUrl()).toBe("https://www.gwyms88.com");
  });

  it("uses the Google site verification token", () => {
    delete process.env.GOOGLE_SITE_VERIFICATION;

    expect(getGoogleSiteVerification()).toBe("8W7uWYBgh4Ifd4wWfhrTKYe_B6ghHkqjBt-LRViCv6g");
  });

  it("uses the Baidu site verification token", () => {
    delete process.env.BAIDU_SITE_VERIFICATION;

    expect(getBaiduSiteVerification()).toBe("codeva-YKS51BNT1I");
  });
});
