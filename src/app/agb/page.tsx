export default function AGB() {
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
        <h1 className="mb-4 text-2xl font-bold">
          Allgemeine Geschäftsbedingungen (AGB)
        </h1>

        <h2 className="mb-2 mt-4 text-xl font-semibold">1. Geltungsbereich</h2>
        <p className="mb-2">
          Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle
          Dienstleistungen, die über unsere Webseite oder per Direktkontakt im
          Bereich SNS-Marketing, Webseitenerstellung und Systementwicklung
          beauftragt werden.
        </p>

        <h2 className="mb-2 mt-4 text-xl font-semibold">
          2. Vertragsabschluss
        </h2>
        <p className="mb-2">
          Der Vertrag kommt zustande, sobald Sie unser Angebot schriftlich oder
          elektronisch bestätigt haben. Nach der Bestätigung ist der Auftrag
          verbindlich und kann nur in Absprache mit uns geändert oder storniert
          werden.
        </p>

        <h2 className="mb-2 mt-4 text-xl font-semibold">
          3. Preise und Zahlungsbedingungen
        </h2>
        <p className="mb-2">
          Alle angegebenen Preise verstehen sich zuzüglich der gesetzlichen
          Mehrwertsteuer. Die Bezahlung erfolgt wahlweise per Überweisung,
          PayPal oder in bar. Die Zahlung muss spätestens sieben Tage nach
          Rechnungsdatum erfolgen. Bei besonderen Projekten oder Anforderungen
          können zusätzliche Kosten anfallen, die vorab mit Ihnen abgestimmt
          werden.
        </p>

        <h2 className="mb-2 mt-4 text-xl font-semibold">
          4. Leistungserbringung
        </h2>
        <p className="mb-2">
          Die Erbringung der vereinbarten Dienstleistungen erfolgt innerhalb des
          im Vertrag festgelegten Zeitraums. Verzögerungen, die durch den Kunden
          verursacht werden, können zu einer Anpassung des Liefertermins führen.
        </p>

        <h2 className="mb-2 mt-4 text-xl font-semibold">
          5. Rücktrittsrecht und Stornierungen
        </h2>
        <p className="mb-2">
          Ein Rücktritt vom Vertrag ist nur vor Beginn der Leistungserbringung
          möglich. Stornierungen nach diesem Zeitpunkt bedürfen unserer
          schriftlichen Zustimmung und können zu einer anteiligen Vergütung der
          bereits erbrachten Leistungen führen.
        </p>

        <h2 className="mb-2 mt-4 text-xl font-semibold">
          6. Gewährleistung und Haftung
        </h2>
        <p className="mb-2">
          Wir bemühen uns, die bestmögliche Qualität bei der Erbringung unserer
          Dienstleistungen zu gewährleisten. Sollte es dennoch zu Mängeln
          kommen, werden diese im Rahmen der gesetzlichen Bestimmungen behoben.
          Für Schäden, die durch unsachgemäße Nutzung der gelieferten Systeme
          oder Webseiten entstehen, übernehmen wir keine Haftung. Weitergehende
          Haftungsansprüche sind, soweit gesetzlich zulässig, ausgeschlossen.
        </p>

        <h2 className="mb-2 mt-4 text-xl font-semibold">7. Datenschutz</h2>
        <p className="mb-2">
          Ihre personenbezogenen Daten werden ausschließlich zur Abwicklung des
          Vertrags verwendet und nicht an Dritte weitergegeben, außer wenn dies
          für die Vertragsabwicklung erforderlich ist oder Sie ausdrücklich
          zugestimmt haben.
        </p>

        <h2 className="mb-2 mt-4 text-xl font-semibold">
          8. Anwendbares Recht und Gerichtsstand
        </h2>
        <p className="mb-2">
          Es gilt das Recht der Bundesrepublik Deutschland. Für alle
          Streitigkeiten, die sich aus oder im Zusammenhang mit diesem Vertrag
          ergeben, ist der Gerichtsstand der Sitz unseres Unternehmens, sofern
          der Kunde Kaufmann, eine juristische Person des öffentlichen Rechts
          oder ein öffentlich-rechtliches Sondervermögen ist.
        </p>

        <p className="mt-4">Stand: {today}</p>
      </div>
    </div>
  );
}
