export default function AGB() {
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
        <h1 className="mb-4 text-2xl font-bold">
          Allgemeine Geschäftsbedingungen (AGB)
        </h1>

        <h2 className="mb-2 mt-4 text-xl font-semibold">1. Geltungsbereich</h2>
        <p className="mb-2">
          Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle
          Bestellungen, die über unsere Webseite oder per Direktkontakt für den
          Kauf von Taiyaki getätigt werden.
        </p>

        <h2 className="mb-2 mt-4 text-xl font-semibold">
          2. Vertragsabschluss
        </h2>
        <p className="mb-2">
          Der Vertrag kommt zustande, sobald Sie Ihre Bestellung bestätigt
          haben. Nach der Bestätigung ist die Bestellung verbindlich und kann
          nicht mehr storniert werden.
        </p>

        <h2 className="mb-2 mt-4 text-xl font-semibold">
          3. Preise und Zahlungsbedingungen
        </h2>
        <p className="mb-2">
          Alle angegebenen Preise sind Endpreise und enthalten die gesetzliche
          Mehrwertsteuer. Die Bezahlung erfolgt wahlweise per PayPal oder in
          bar. Die Zahlung muss spätestens einen Tag vor der Warenübergabe
          erfolgen. Bei Lieferungen außerhalb von Soest können zusätzliche
          Lieferkosten anfallen, die in angemessenem Rahmen berechnet werden.
        </p>

        <h2 className="mb-2 mt-4 text-xl font-semibold">4. Lieferung</h2>
        <p className="mb-2">
          Die Lieferung erfolgt ausschließlich innerhalb der Stadt Soest.
          Lieferungen außerhalb von Soest sind nach Absprache möglich. Die
          Lieferzeit hängt vom jeweiligen Lieferort ab.
        </p>

        <h2 className="mb-2 mt-4 text-xl font-semibold">
          5. Rückgaberecht und Stornierungen
        </h2>
        <p className="mb-2">
          Rückgaben und Stornierungen sind nach Vertragsabschluss nicht möglich.
          Bitte überprüfen Sie Ihre Bestellung sorgfältig, bevor Sie sie
          abschließen.
        </p>

        <h2 className="mb-2 mt-4 text-xl font-semibold">
          6. Gewährleistung und Haftung
        </h2>
        <p className="mb-2">
          Als Einzelunternehmer bemühe ich mich, die bestmögliche Qualität
          meiner Taiyaki-Produkte zu gewährleisten. Sollte es dennoch zu Mängeln
          kommen, werden diese im Rahmen der gesetzlichen Bestimmungen geregelt.
          Für Schäden, die durch unsachgemäßen Umgang oder Lagerung der Produkte
          nach Erhalt entstehen, übernehme ich keine Haftung. Weitergehende
          Haftungsansprüche sind, soweit gesetzlich zulässig, ausgeschlossen.
        </p>

        <h2 className="mb-2 mt-4 text-xl font-semibold">7. Datenschutz</h2>
        <p className="mb-2">
          Ihre personenbezogenen Daten werden ausschließlich zur Abwicklung
          Ihrer Bestellung verwendet und nicht an Dritte weitergegeben, außer
          wenn dies für die Vertragsabwicklung erforderlich ist oder Sie
          ausdrücklich zugestimmt haben.
        </p>

        <h2 className="mb-2 mt-4 text-xl font-semibold">
          8. Anwendbares Recht und Gerichtsstand
        </h2>
        <p className="mb-2">
          Es gilt das Recht der Bundesrepublik Deutschland. Für alle
          Streitigkeiten, die sich aus oder im Zusammenhang mit diesem Vertrag
          ergeben, ist der Gerichtsstand Soest, sofern der Kunde Kaufmann, eine
          juristische Person des öffentlichen Rechts oder ein
          öffentlich-rechtliches Sondervermögen ist.
        </p>

        <p className="mt-4">Stand: {today}</p>
      </div>
    </div>
  );
}
