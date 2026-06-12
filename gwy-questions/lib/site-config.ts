export const defaultSiteUrl = "https://www.gwyms88.com";
export const defaultGoogleSiteVerification = "8W7uWYBgh4Ifd4wWfhrTKYe_B6ghHkqjBt-LRViCv6g";

export function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL || defaultSiteUrl).replace(/\/+$/, "");
}

export function getGoogleSiteVerification() {
  return process.env.GOOGLE_SITE_VERIFICATION || defaultGoogleSiteVerification;
}
