import MyJourney from "./_components/MyJourney";

export default function About({ params }: { params: { lang: string } }) {
  return <MyJourney lang={params.lang} />;
}
