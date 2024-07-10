export default function PrivacyPolicy() {
  const nachName = process.env.NEXT_PUBLIC_NACHNAME;
  const adresse = process.env.NEXT_PUBLIC_ADRESSE;
  const email = process.env.NEXT_PUBLIC_EMAIL;
  const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // 月は0から始まるので+1します
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };
  const today = formatDate(new Date());
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-gray-100 p-4 text-black">
      <div className="max-w-[800px]">
        <h1 className="text-2xl font-bold mb-4">Datenschutzerklärung</h1>
        <p className="mb-2">
          Wir freuen uns über Ihr Interesse an unseren Taiyaki-Produkten. Der
          Schutz Ihrer Privatsphäre ist für uns sehr wichtig. Nachstehend
          informieren wir Sie ausführlich über den Umgang mit Ihren Daten.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">1. Verantwortlicher</h2>
        <p className="mb-2">
          Verantwortlicher für die Erhebung, Verarbeitung und Nutzung Ihrer
          personenbezogenen Daten im Sinne der DSGVO ist:
          <br />
          {nachName}
          <br />
          {adresse}
          <br />
          {email}
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">
          2. Erhebung und Speicherung personenbezogener Daten
        </h2>
        <p className="mb-2">
          Wenn Sie über Facebook oder Instagram mit uns in Kontakt treten,
          erheben wir die folgenden Informationen:
          <br />
          - Name
          <br />
          - E-Mail-Adresse
          <br />
          - Telefonnummer
          <br />
          Diese Daten werden ausschließlich zum Zweck der Kontaktaufnahme und
          zur Angebotserstellung für den Kauf unserer Taiyaki-Produkte
          verwendet.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">
          3. Nutzung Ihrer Daten
        </h2>
        <p className="mb-2">
          Wir verwenden die von Ihnen mitgeteilten Daten zur Erfüllung und
          Abwicklung Ihrer Anfragen und Bestellungen. Ihre personenbezogenen
          Daten werden nicht an Dritte weitergegeben, es sei denn, dass dies zur
          Erfüllung unserer vertraglichen Pflichten notwendig ist oder Sie
          ausdrücklich eingewilligt haben.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">4. Ihre Rechte</h2>
        <p className="mb-2">
          Sie haben das Recht, jederzeit Auskunft über Ihre bei uns
          gespeicherten personenbezogenen Daten zu erhalten. Darüber hinaus
          haben Sie das Recht auf Berichtigung, Sperrung oder Löschung Ihrer
          Daten. Bitte wenden Sie sich hierzu an die oben angegebene
          Kontaktadresse.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">5. Datensicherheit</h2>
        <p className="mb-2">
          Wir sichern unsere Webseite und sonstigen Systeme durch technische und
          organisatorische Maßnahmen gegen Verlust, Zerstörung, Zugriff,
          Veränderung oder Verbreitung Ihrer Daten durch unbefugte Personen.
        </p>

        <h2 className="text-xl font-semibold mt-4 mb-2">
          6. Änderungen dieser Datenschutzerklärung
        </h2>
        <p className="mb-2">
          Wir behalten uns vor, diese Datenschutzerklärung künftig zu ändern.
          Änderungen werden auf unserer Webseite veröffentlicht. Bitte
          informieren Sie sich regelmäßig über den aktuellen Stand unserer
          Datenschutzerklärung.
        </p>
        <p className="mt-4">Stand: {today}</p>
      </div>
    </div>
  );
}
