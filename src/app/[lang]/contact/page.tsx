import ContactAndProfile from "./_components/ContactAndProfile";

export default async function Contact({
  params,
}: {
  params: { lang: string };
}) {
  return <ContactAndProfile lang={params.lang} />;
}
