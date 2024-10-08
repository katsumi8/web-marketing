// next-sitemap.js

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.katsumi-ishihara-consulting.com",
  generateRobotsTxt: true,
  exclude: ["/404", "/500"],
  alternateRefs: [
    { href: "https://www.katsumi-ishihara-consulting.com/ja", hreflang: "ja" },
    { href: "https://www.katsumi-ishihara-consulting.com/en", hreflang: "en" },
  ],
};
