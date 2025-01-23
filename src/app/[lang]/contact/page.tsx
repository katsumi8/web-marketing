import { getTranslation } from "@/app/i18n/server";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata, ResolvingMetadata } from "next";
import type { PageProps } from "../page";
import ContactAndProfile from "./_components/ContactAndProfile";

export async function generateMetadata(
    { params }: PageProps,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { lang } = await params;

    const { t } = await getTranslation(lang);
    const metadata = t("contact", { ns: "meta", returnObjects: true });

    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || [];

    return {
        title: metadata.title,
        description: metadata.description,
        keywords: metadata.keywords,
        openGraph: {
            title: metadata.title,
            description: metadata.description,
            images: [...previousImages],
        },
    };
}

export default async function Contact({ params }: PageProps) {
    const { lang } = await params;
    return (
        <div className="flex min-h-screen w-full flex-col items-center bg-gray-100 text-gray-100">
            <div className="w-full px-6 py-4 text-gray-400">
                <Breadcrumbs segments={["contact"]} />
            </div>
            <ContactAndProfile lang={lang} />;
        </div>
    );
}
