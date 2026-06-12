export type AiProviderConfig = {
  apiKey: string;
  baseURL: string;
  model: string;
};

export function getAiProviderConfig(): AiProviderConfig {
  const apiKey = process.env.DEEPSEEK_API_KEY || process.env.OPENAI_API_KEY || "";

  return {
    apiKey,
    baseURL: process.env.DEEPSEEK_BASE_URL || "https://api.deepseek.com",
    model: process.env.DEEPSEEK_MODEL || "deepseek-chat"
  };
}
