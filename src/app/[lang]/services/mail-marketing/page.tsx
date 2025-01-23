import { getTranslation } from "@/app/i18n/server";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";
import type { PageProps } from "../../page";

export async function generateMetadata(
    { params }: PageProps,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { lang } = await params;

    const { t } = await getTranslation(lang);
    const metadata = t("services.mailMarketing", {
        ns: "meta",
        returnObjects: true,
    });

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

export default async function MailMarketing({ params }: PageProps) {
    const segments = ["services", "mail-marketing"];
    const { lang } = await params;
    const { t } = await getTranslation(lang);
    const service = t("services.mailMarketing", {
        returnObjects: true,
        ns: "services",
    });

    return (
        <div className="flex min-h-screen w-full flex-col items-center bg-gray-100 text-gray-100">
            {/* Breadcrumbs を表示 */}
            <div className="w-full bg-white px-6 py-4 text-gray-400">
                <Breadcrumbs segments={segments} />
            </div>
            <div className="relative flex w-full sm:justify-end">
                {/* Top section with title and image */}
                <div className="absolute top-0 left-0 z-0 h-1/2 w-full bg-white"></div>

                <div className="z-50 flex w-full flex-col items-center justify-between space-y-8 bg-gradient-to-r from-red-600 via-red-400 to-red-100 p-6 py-16 sm:max-w-[80%] md:flex-row md:space-y-0">
                    {/* Left side: Title, subtitle, buttons */}
                    <div className="flex-grow space-y-4 px-2 text-left md:w-2/3">
                        <h1 className="text-4xl font-bold text-gray-100">
                            {service.title}
                        </h1>
                        <div className="mt-4 flex space-x-4 text-sm">
                            {service.desires.map((desire, index) => (
                                <p
                                    key={index}
                                    className="rounded-lg border border-gray-300 p-2 text-gray-100 transition"
                                >
                                    {desire}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* Right side: Image or Icon */}
                    <div className="flex justify-center bg-white md:justify-end">
                        <FaEnvelope className="size-36 p-4 text-red-700" />
                    </div>
                </div>
            </div>

            {/* Content sections (just as placeholders) */}
            <div
                id="section-overview"
                className="w-full space-y-8 p-8 sm:max-w-[60%]"
            >
                {/* Problem */}
                <div className="problem-section">
                    <p className="text-lg text-gray-600">
                        {service.description}
                    </p>
                </div>

                {/* Solution（解決策） */}
                <div className="flex flex-col py-4">
                    <h2 className="py-4 text-3xl font-bold text-gray-800">
                        {service.keyPoints}
                    </h2>
                    <div className="flex w-full justify-evenly">
                        {service.points.map((point, index) => (
                            <div
                                key={index}
                                className="flex size-36 items-center justify-center rounded-full bg-red-400"
                            >
                                <p className="p-2 text-center text-gray-100">
                                    {point}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="py-4">
                    <p className="text-lg text-gray-600">{service.solution}</p>
                </div>

                <div className="space-y-3 py-4">
                    <p className="text-lg text-gray-600">
                        {service.cta.myMessage}
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block rounded-lg bg-blue-500 px-6 py-3 text-center text-white transition hover:bg-blue-600"
                    >
                        {service.cta.buttonText}
                    </Link>
                    <p className="text-sm text-gray-500">
                        {service.cta.bubbleText}
                    </p>
                </div>
            </div>
        </div>
    );
}
