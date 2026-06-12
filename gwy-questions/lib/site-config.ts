export const defaultSiteUrl = "https://gwy-questions.vercel.app";

export function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL || defaultSiteUrl).replace(/\/+$/, "");
}
