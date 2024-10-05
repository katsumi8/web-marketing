export default function Impressum() {
  const companyName = "Katsumi Ishihara Consulting"; // あなたの会社名
  const adresse = process.env.NEXT_PUBLIC_ADRESSE; // あなたの住所
  const email = process.env.NEXT_PUBLIC_EMAIL; // あなたのメールアドレス
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER; // あなたの電話番号
  const steuernummer = process.env.NEXT_PUBLIC_STEUERNUMMER; // あなたの税金番号

  return (
    <div className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-between bg-gray-100 p-4 text-black">
      <div className="max-w-[800px]">
        <div className="flex flex-col justify-center space-y-4 py-4">
          <h1 className="text-2xl font-bold">Impressum</h1>
          <div className="flex flex-col">
            <h2 className="font-semibold">
              Angaben gemäß § 5 TMG (Telemediengesetz):
            </h2>
            <div className="flex flex-col ml-3">
              <p>Katsumi Ishihara consulting</p>
              <p>{adresse}</p>
              <p>E-Mail: {email}</p>
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="font-semibold">Kontakt:</h2>
            <div className="flex flex-col ml-3">
              <p>Telefon: {phoneNumber}</p>
              <p>E-Mail: {email}</p>
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="font-semibold">Umsatzsteuer-ID</h2>
            <div className="flex ml-3 space-x-2">
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß §27 a
                Umsatzsteuergesetz:
              </p>
              <p>{steuernummer}</p>
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="font-semibold">
              Verbraucherstreitbeilegung/Universalschlichtungsstelle
            </h2>
            <div className="flex flex-col ml-3">
              <p>
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-2 py-4">
          <h1 className="text-2xl font-semibold">Haftungsausschluss</h1>
          <p>
            Für die Informationen, die auf dieser Website bereitgestellt werden,
            sowie für etwaige Probleme, Verluste oder Schäden, die durch die
            Nutzung dieser Website entstehen, übernehme ich keine Verantwortung.
            <br />
            Die Struktur, die Nutzungsbedingungen, die URL und die Inhalte
            dieser Website können ohne vorherige Ankündigung geändert oder
            gelöscht werden. <br />
            Bitte haben Sie dafür Verständnis. Es kann auch vorkommen, dass der
            Betrieb dieser Website ohne Ankündigung unterbrochen oder
            eingestellt wird. <br />
            Wir bitten um Ihr Verständnis. Die Nutzungsbedingungen können
            ebenfalls ohne vorherige Ankündigung geändert werden. Bitte beachten
            Sie dies im Voraus.
          </p>
        </div>

        <div className="flex flex-col space-y-2 py-4">
          <h1 className="text-2xl font-semibold">Urheberrecht</h1>
          <p>
            Die auf dieser Website veröffentlichten Inhalte und Werke,
            insbesondere die im Rahmen unserer Dienstleistungen erstellten
            Materialien, unterliegen dem deutschen Urheberrecht. Jede vom
            deutschen Urheberrecht nicht zugelassene Verwertung bedarf der
            vorherigen schriftlichen Zustimmung des Anbieters oder jeweiligen
            Rechteinhabers.
          </p>
        </div>
        <div className="flex flex-col space-y-2 py-4">
          <h1 className="text-2xl font-semibold">Verbotene Handlungen</h1>
          <p>
            {`Bei der Nutzung dieser Website sind die folgenden Handlungen
            verboten: Handlungen, die den Betrieb dieser Website stören oder
            behindern. Handlungen, die anderen Nutzern, Dritten oder{" "}
            ${companyName}
            Unannehmlichkeiten, Nachteile oder Schäden zufügen oder die die
            Möglichkeit solcher Handlungen beinhalten. Handlungen, die das
            Eigentum, die Privatsphäre oder andere Rechte anderer Nutzer,
            Dritter oder ${companyName} verletzen oder die die Möglichkeit
            solcher Handlungen beinhalten. Handlungen, die gegen die öffentliche
            Ordnung und Moral verstoßen oder die die Möglichkeit solcher
            Handlungen beinhalten. Handlungen, die gegen Gesetze, Vorschriften
            oder Verordnungen verstoßen oder die die Möglichkeit solcher
            Handlungen beinhalten. Sonstige Handlungen, die ${companyName} als
            unangemessen erachtet.`}
          </p>
        </div>

        <div className="flex flex-col space-y-2 py-4">
          <h1 className="text-2xl font-semibold">Links zu anderen Websites</h1>
          <p>
            Bezüglich der Links von dieser Website zu anderen Websites gilt: Die
            verlinkten Websites werden unter der Verantwortung der jeweiligen
            Betreiber verwaltet, und {companyName} übernimmt keine Gewähr für
            deren Inhalte. Ebenso übernimmt {companyName} keine Haftung für
            eventuelle Probleme oder Schäden, die durch die Nutzung dieser
            Websites entstehen können. Ein Link bedeutet nicht, dass{" "}
            {companyName} die verlinkten Websites und deren Inhalte empfiehlt,
            noch besteht eine besondere Beziehung zwischen
            {companyName} und den Betreibern der verlinkten Websites.
          </p>
        </div>

        <div className="flex flex-col space-y-2 py-4">
          <h1 className="text-2xl font-semibold">Datenschutz</h1>
          <p>
            {companyName} respektiert die persönlichen Daten, die Sie uns zur
            Verfügung gestellt haben, und bemüht sich um den Schutz Ihrer
            Privatsphäre. Bitte beachten Sie unsere Datenschutzerklärung.
          </p>
        </div>
        <p className="mt-4">Stand: 05.10.2024</p>
      </div>
    </div>
  );
}
