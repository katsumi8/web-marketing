const Widerrufsbelehrung = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-gray-100 p-4 text-black">
      <div className="max-w-[800px]">
        <h1 className="mb-4 text-2xl font-bold">Widerrufsbelehrung</h1>

        <h2 className="mb-2 mt-4 text-xl font-semibold">Widerrufsrecht</h2>
        <p className="mb-2">
          Aufgrund der besonderen Natur unserer Produkte ist eine Rückgabe oder
          Stornierung der Bestellung grundsätzlich nicht möglich. Sollte jedoch
          ein erheblicher Mangel am Produkt vorliegen, werden wir
          selbstverständlich eine Rückerstattung in Erwägung ziehen.
        </p>

        <h2 className="mb-2 mt-4 text-xl font-semibold">Rücksendungskosten</h2>
        <p className="mb-2">
          Im Falle einer berechtigten Rückerstattung übernehmen wir die Kosten
          für den Rückversand.
        </p>

        <h2 className="mb-2 mt-4 text-xl font-semibold">Rückgabefrist</h2>
        <p className="mb-2">
          Eine Rückgabe ist nicht möglich, jedoch bieten wir bei berechtigten
          Fällen eine Rückerstattung an.
        </p>

        <h2 className="mb-2 mt-4 text-xl font-semibold">Erstattung</h2>
        <p className="mb-2">
          Rückerstattungen werden in der Regel über PayPal abgewickelt.
        </p>

        <h2 className="mb-2 mt-4 text-xl font-semibold">Kundendienst</h2>
        <p className="mb-2">
          Für Rückfragen oder Anliegen zu Rückgaben und Stornierungen wenden Sie
          sich bitte an die E-Mail-Adresse, die Sie bei der Bestellung verwendet
          haben.
        </p>
      </div>
    </div>
  );
};

export default Widerrufsbelehrung;
