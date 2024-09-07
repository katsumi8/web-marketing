export default function Impressum() {
  const lastName = process.env.NEXT_PUBLIC_NACHNAME; // あなたのフルネーム
  const firstName = process.env.NEXT_PUBLIC_VORNAME; // あなたの名
  const adresse = process.env.NEXT_PUBLIC_ADRESSE; // あなたの住所
  const email = process.env.NEXT_PUBLIC_EMAIL; // あなたのメールアドレス
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER; // あなたの電話番号
  const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // 月は0から始まるので+1します
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };
  const today = formatDate(new Date());

  return (
    <div className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-between bg-gray-100 p-4 text-black">
      <div className="max-w-[800px]">
        <h1 className="mb-4 text-2xl font-bold">Impressum</h1>
        <p className="mb-2">Angaben gemäß § 5 TMG (Telemediengesetz):</p>
        <p className="mb-2">
          {lastName} {firstName}
          <br />
          {adresse}
          <br />
          Telefon: {phoneNumber}
          <br />
          E-Mail: {email}
        </p>

        <h2 className="mb-2 mt-4 text-xl font-semibold">Haftungsausschluss</h2>
        <p className="mb-2">
          Inhalte dieser Website:
          <br />
          Die Inhalte dieser Website, insbesondere im Bereich SNS-Marketing,
          Webseitenerstellung und Systementwicklung, werden mit größtmöglicher
          Sorgfalt erstellt. Der Anbieter übernimmt jedoch keine Gewähr für die
          Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten
          Inhalte.
        </p>

        <h2 className="mb-2 mt-4 text-xl font-semibold">Urheberrecht</h2>
        <p className="mb-2">
          Die auf dieser Website veröffentlichten Inhalte und Werke,
          insbesondere die im Rahmen unserer Dienstleistungen erstellten
          Materialien, unterliegen dem deutschen Urheberrecht. Jede vom
          deutschen Urheberrecht nicht zugelassene Verwertung bedarf der
          vorherigen schriftlichen Zustimmung des Anbieters oder jeweiligen
          Rechteinhabers.
        </p>

        <p className="mt-4">Stand: {today}</p>
      </div>
    </div>
  );
}
