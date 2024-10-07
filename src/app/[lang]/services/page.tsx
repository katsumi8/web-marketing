import ServiceList from "./_components/ServiceList";

export default function Services({ params }: { params: { lang: string } }) {
  return <ServiceList lang={params.lang} />;
}
