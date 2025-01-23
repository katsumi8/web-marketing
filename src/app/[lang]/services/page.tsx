import { getTranslation } from "@/app/i18n/server";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Metadata, ResolvingMetadata } from "next";
import type { PageProps } from "../page";
import ServiceList from "./_components/ServiceList";

export const generateMetadata = async (
  { params }: PageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  const { lang } = await params;

  const { t } = await getTranslation(lang);
  const metadata = t("services", { ns: "meta", returnObjects: true });
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
};

export default async function Services({ params }: PageProps) {
  const { lang } = await params;
  return (
    <div className="w-full bg-gray-100 min-h-screen flex flex-col items-center text-gray-100">
      <div className="w-full py-4 px-6 text-gray-400 bg-white">
        <Breadcrumbs segments={["services"]} />
      </div>
      <ServiceList lang={lang} />
    </div>
  );
}
