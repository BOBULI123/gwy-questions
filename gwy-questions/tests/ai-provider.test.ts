import { afterEach, describe, expect, it } from "vitest";
import { getAiProviderConfig } from "@/lib/ai-provider";

const originalEnv = { ...process.env };

afterEach(() => {
  process.env = { ...originalEnv };
});

describe("AI provider config", () => {
  it("uses DeepSeek defaults with DEEPSEEK_API_KEY", () => {
    process.env.DEEPSEEK_API_KEY = "test-deepseek-key";
    delete process.env.OPENAI_API_KEY;
    delete process.env.DEEPSEEK_BASE_URL;
    delete process.env.DEEPSEEK_MODEL;

    expect(getAiProviderConfig()).toEqual({
      apiKey: "test-deepseek-key",
      baseURL: "https://api.deepseek.com",
      model: "deepseek-chat"
    });
  });

  it("allows OPENAI_API_KEY as a compatibility alias for DeepSeek", () => {
    delete process.env.DEEPSEEK_API_KEY;
    process.env.OPENAI_API_KEY = "test-openai-named-key";

    expect(getAiProviderConfig().apiKey).toBe("test-openai-named-key");
  });
});
