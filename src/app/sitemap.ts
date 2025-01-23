import type { MetadataRoute } from "next";
import { availableLanguages } from "./i18n/settings";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://www.katsumi-ishihara-consulting.com";

    // Define the static routes in your application
    const staticRoutes = [
        "",
        "about",
        "contact",
        "services",
        "services/conversion-analysis",
        "services/mail-marketing",
        "services/web-app-development",
        "services/web-development",
        "impressum",
        "datenschutzerklarung",
    ];

    // Generate sitemap entries for each language and route
    const pages = availableLanguages.flatMap((lang) =>
        staticRoutes.map((route) => ({
            url: `${baseUrl}/${lang}/${route}`,
            lastModified: new Date(),
        }))
    );

    return pages;
}
