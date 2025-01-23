import type { Metadata, ResolvingMetadata } from "next";
import { getTranslation } from "../i18n/server";
import HomeComponent from "./_components/homeComponent";

export type PageProps = {
  params: Promise<{
    lang: string;
  }>;
};

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { lang } = await params;

  const { t } = await getTranslation(lang);
  const homeMetadata = t("home", { ns: "meta", returnObjects: true });

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: homeMetadata.title,
    description: homeMetadata.description,
    keywords: homeMetadata.keywords,
    openGraph: {
      title: homeMetadata.title,
      description: homeMetadata.description,
      images: [...previousImages],
    },
  };
}

export default async function Home({ params }: PageProps) {
  const { lang } = await params;
  const { t } = await getTranslation(lang);

  return (
    <HomeComponent
      title={t("title")}
      description={t("description")}
      imageAlt={t("imageAlt")}
      contactButtonText={t("contactButtonText")}
      lang={lang}
    />
  );
}
