export default function PrivacyPolicy() {
  const nachName = process.env.NEXT_PUBLIC_NACHNAME;
  const firstName = process.env.NEXT_PUBLIC_VORNAME;
  const adresse = process.env.NEXT_PUBLIC_ADRESSE;
  const email = process.env.NEXT_PUBLIC_EMAIL;
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER;
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
        <h1 className="text-2xl font-bold">Datenschutzerklärung</h1>
        <div className="flex flex-col justify-center space-y-2 py-4">
          <h2 className="text-xl font-semibold">
            1. Datenschutz auf einen Blick
          </h2>
          <div className="flex flex-col space-y-1 py-2">
            <h3 className="font-semibold">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
              Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können. Ausführliche
              Informationen zum Thema Datenschutz entnehmen Sie unserer unter
              diesem Text aufgeführten Datenschutzerklärung.
            </p>
          </div>
          <div className="flex flex-col space-y-2 py-2">
            <h3 className="font-semibold">
              Datenerfassung auf unserer Website
            </h3>
            <div className="flex flex-col space-y-1">
              <h4 className="font-semibold">
                Wer ist verantwortlich für die Datenerfassung auf dieser
                Website?
              </h4>
              <p>
                Die Datenverarbeitung auf dieser Website erfolgt durch den
                Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
                „Hinweis zur Verantwortlichen Stelle“ in dieser
                Datenschutzerklärung entnehmen.
              </p>
            </div>
            <div className="flex flex-col space-y-1">
              <h4 className="font-semibold">Wie erfassen wir Ihre Daten?</h4>
              <p>
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
                mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie
                in ein Kontaktformular eingeben. Andere Daten werden automatisch
                oder nach Ihrer Einwilligung beim Besuch der Website durch
                unsere ITSysteme erfasst. Das sind vor allem technische Daten
                (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des
                Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch,
                sobald Sie diese Website betreten.
              </p>
            </div>
            <div className="flex flex-col space-y-1">
              <h4 className="font-semibold">Wofür nutzen wir Ihre Daten? </h4>
              <p>
                Ein Teil der Daten wird erhoben, um eine fehlerfreie
                Bereitstellung der Website zu gewährleisten. Andere Daten können
                zur Analyse Ihres Nutzerverhaltens verwendet werden{" "}
              </p>
            </div>
            <div className="flex flex-col space-y-1">
              <h4 className="font-semibold">
                Welche Rechte haben Sie bezüglich Ihrer Daten?
              </h4>
              <p>
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über
                Herkunft, Empfänger und Zweck Ihrer gespeicherten
                personenbezogenen Daten zu erhalten. Sie haben außerdem ein
                Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
                Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
                können Sie diese Einwilligung jederzeit für die Zukunft
                widerrufen. Außerdem haben Sie das Recht, unter bestimmten
                Umständen die Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen
                ein Beschwerderecht bei der zuständigen Aufsichtsbehörde
                zu.Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können
                Sie sich jederzeit an uns wenden.
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            <h3 className="font-semibold">
              Analyse-Tools und Tools von Drittanbietern
            </h3>
            <p>
              Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch
              ausgewertet werden. Das geschieht vor allem mit sogenannten
              Analyseprogrammen. Detaillierte Informationen zu diesen
              Analyseprogrammen finden Sie in der folgenden
              Datenschutzerklärung.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-2 py-4">
          <h2 className="text-xl font-semibold">2. Hosting</h2>
          <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
          <h3 className="font-semibold">Externes Hosting</h3>
          <p>
            Diese Website wird extern gehostet. Die personenbezogenen Daten, die
            auf dieser Website erfasst werden, werden auf den Servern des
            Hosters / der Hoster gespeichert. Hierbei kann es sich v. a. um
            IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten,
            Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige
            Daten, die über eine Website generiert werden, handeln. Das externe
            Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren
            potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und
            im Interesse einer sicheren, schnellen und effizienten
            Bereitstellung unseres Online-Angebots durch einen professionellen
            Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende
            Einwilligung abgefragt wurde, erfolgt die Verarbeitung
            ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25
            Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies
            oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B.
            Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung
            ist jederzeit widerrufbar. Unser(e) Hoster wird bzw. werden Ihre
            Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner
            Leistungspflichten erforderlich ist und unsere Weisungen in Bezug
            auf diese Daten befolgen. Wir setzen folgende(n) Hoster ein: Vercel
          </p>
        </div>

        <div className="flex flex-col justify-center space-y-2 py-4">
          <h2 className="text-xl font-semibold">
            3. Allgemeine Hinweise und Pflichtinformationen
          </h2>
          <div className="flex flex-col space-y-1">
            <h3 className="font-semibold">Datenschutz</h3>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
              Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
              vertraulich und entsprechend den gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung. Wenn
              Sie diese Website benutzen, werden verschiedene personenbezogene
              Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie
              persönlich identifiziert werden können. Die vorliegende
              Datenschutzerklärung erläutert, welche Daten wir erheben und wofür
              wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das
              geschieht. Wir weisen darauf hin, dass die Datenübertragung im
              Internet (z. B. bei der Kommunikation per E-Mail)
              Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten
              vor dem Zugriff durch Dritte ist nicht möglich.
            </p>
          </div>
          {/* TODO: from page 4 */}
          <div className="flex flex-col space-y-1">
            <h3 className="font-semibold"></h3>
            <p></p>
          </div>
          <div className="flex flex-col space-y-1">
            <h3 className="font-semibold"></h3>
            <p></p>
          </div>
          <div className="flex flex-col space-y-1">
            <h3 className="font-semibold"></h3>
            <p></p>
          </div>
          <div className="flex flex-col space-y-1">
            <h3 className="font-semibold"></h3>
            <p></p>
          </div>
          <div className="flex flex-col space-y-1">
            <h3 className="font-semibold"></h3>
            <p></p>
          </div>
          <div className="flex flex-col space-y-1">
            <h3 className="font-semibold"></h3>
            <p></p>
          </div>
          <div className="flex flex-col space-y-1">
            <h3 className="font-semibold"></h3>
            <p></p>
          </div>
          <div className="flex flex-col space-y-1">
            <h3 className="font-semibold"></h3>
            <p></p>
          </div>
          <div className="flex flex-col space-y-1">
            <h3 className="font-semibold"></h3>
            <p></p>
          </div>
          <div className="flex flex-col space-y-1">
            <h3 className="font-semibold"></h3>
            <p></p>
          </div>
          <div className="flex flex-col space-y-1">
            <h3 className="font-semibold"></h3>
            <p></p>
          </div>
          <div className="flex flex-col space-y-1">
            <h3 className="font-semibold"></h3>
            <p></p>
          </div>
        </div>

        {/* TODO: Big chank  */}
        <div className="flex flex-col justify-center space-y-2 py-4">
          <h2 className="text-xl font-semibold">
            4. Datenerfassung auf dieser Website
          </h2>
          <div className="flex flex-col space-y-1">
            <h3 className="font-semibold"></h3>
            <p></p>
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-2 py-4">
          <h2 className="text-xl font-semibold">5. Plugins und Tools</h2>
          <p></p>
        </div>

        <p className="mt-4">Stand: {today}</p>
      </div>
    </div>
  );
}
