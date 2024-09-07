const Widerrufsbelehrung = () => {
  return (
    <div className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-between bg-gray-100 p-4 text-black">
      <div className="max-w-[800px]">
        <h1 className="mb-4 text-2xl font-bold">Widerrufsbelehrung</h1>

        <h2 className="mb-2 mt-4 text-xl font-semibold">Widerrufsrecht</h2>
        <p className="mb-2">
          Da unsere Dienstleistungen im Bereich SNS-Marketing,
          Webseitenerstellung und Systementwicklung individuell auf Ihre
          Bedürfnisse zugeschnitten sind, ist ein Widerruf oder eine Stornierung
          des Auftrags nach Beginn der Leistungserbringung grundsätzlich
          ausgeschlossen. Sollten jedoch schwerwiegende Mängel in der
          Leistungserbringung auftreten, werden wir gemeinsam mit Ihnen eine
          angemessene Lösung, einschließlich einer möglichen Rückerstattung,
          finden.
        </p>

        <h2 className="mb-2 mt-4 text-xl font-semibold">Rücksendungskosten</h2>
        <p className="mb-2">
          Im Falle einer berechtigten Rückerstattung tragen wir die anfallenden
          Kosten, sofern diese im Zusammenhang mit unseren Dienstleistungen
          stehen.
        </p>

        <h2 className="mb-2 mt-4 text-xl font-semibold">Rückgabefrist</h2>
        <p className="mb-2">
          Da es sich bei unseren Dienstleistungen um maßgeschneiderte Lösungen
          handelt, ist eine Rückgabe nicht möglich. In berechtigten Fällen
          bieten wir jedoch eine Rückerstattung an.
        </p>

        <h2 className="mb-2 mt-4 text-xl font-semibold">Erstattung</h2>
        <p className="mb-2">
          Rückerstattungen werden in Absprache mit Ihnen über eine geeignete
          Zahlungsmethode abgewickelt.
        </p>

        <h2 className="mb-2 mt-4 text-xl font-semibold">Kundendienst</h2>
        <p className="mb-2">
          Für Rückfragen oder Anliegen zu Stornierungen und Rückerstattungen
          wenden Sie sich bitte an die E-Mail-Adresse, die Sie bei der
          Beauftragung unserer Dienstleistungen verwendet haben.
        </p>
      </div>
    </div>
  );
};

export default Widerrufsbelehrung;
