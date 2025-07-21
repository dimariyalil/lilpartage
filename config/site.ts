export const siteConfig = {
  name: "LILBET Partners",
  description: "Партнёрство, которое приносит результат",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://partners.lilbet.com",
  ogImage: "/og-image.png",
  links: {
    telegram: "https://t.me/lilbet_partners",
    instagram: "https://instagram.com/lilbet.partners",
  },
  locales: ["ru", "kz"] as const,
  defaultLocale: "ru" as const,
}

export type Locale = (typeof siteConfig.locales)[number]