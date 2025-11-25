import React from 'react';
import Button from '../components/Button';

const DatenschutzPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8">
          Datenschutzerklärung
        </h1>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">

          {/* Einleitung */}
          <section className="mb-12">
            <p className="text-slate-900 leading-relaxed mb-4">
              Wir freuen uns über Ihr Interesse an unserer Website. Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen.
              Nachfolgend informieren wir Sie ausführlich über den Umgang mit Ihren Daten.
            </p>
            <p className="text-slate-900 leading-relaxed">
              <strong>Stand:</strong> {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long' })}
            </p>
          </section>

          {/* 1. Verantwortlicher */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-slate-200 pb-3">
              1. Verantwortlicher
            </h2>
            <p className="text-slate-900 leading-relaxed mb-4">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <p className="text-slate-900">
                <strong>KINEWS24-Academy</strong><br />
                Oliver Welling und Markus Mühlich<br /><br />
                E-Mail: <a href="mailto:info@kinews24-academy.de" className="text-brand-accent hover:underline">info@kinews24-academy.de</a>
              </p>
            </div>
            <p className="text-slate-900 leading-relaxed mt-4">
              Die vollständigen Kontaktdaten finden Sie in unserem <a href="/impressum" className="text-brand-accent hover:underline">Impressum</a>.
            </p>
          </section>

          {/* 2. Allgemeine Hinweise */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-slate-200 pb-3">
              2. Allgemeine Hinweise zur Datenverarbeitung
            </h2>
            <div className="space-y-4 text-slate-900 leading-relaxed">
              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">Umfang der Verarbeitung personenbezogener Daten</h3>
              <p>
                Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung
                einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung
                personenbezogener Daten erfolgt regelmäßig nur nach Einwilligung des Nutzers. Eine Ausnahme gilt in
                solchen Fällen, in denen eine vorherige Einholung einer Einwilligung aus tatsächlichen Gründen nicht
                möglich ist und die Verarbeitung der Daten durch gesetzliche Vorschriften gestattet ist.
              </p>

              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">Rechtsgrundlage für die Verarbeitung personenbezogener Daten</h3>
              <p>
                Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine Einwilligung der betroffenen Person einholen,
                dient Art. 6 Abs. 1 lit. a EU-Datenschutzgrundverordnung (DSGVO) als Rechtsgrundlage.
              </p>
              <p>
                Bei der Verarbeitung von personenbezogenen Daten, die zur Erfüllung eines Vertrages erforderlich ist,
                dient Art. 6 Abs. 1 lit. b DSGVO als Rechtsgrundlage.
              </p>
              <p>
                Ist die Verarbeitung zur Wahrung eines berechtigten Interesses unseres Unternehmens oder eines Dritten
                erforderlich und überwiegen die Interessen, Grundrechte und Grundfreiheiten des Betroffenen das erstgenannte
                Interesse nicht, so dient Art. 6 Abs. 1 lit. f DSGVO als Rechtsgrundlage für die Verarbeitung.
              </p>

              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">Datenlöschung und Speicherdauer</h3>
              <p>
                Die personenbezogenen Daten der betroffenen Person werden gelöscht oder gesperrt, sobald der Zweck der
                Speicherung entfällt. Eine Speicherung kann darüber hinaus erfolgen, wenn dies durch den europäischen oder
                nationalen Gesetzgeber in unionsrechtlichen Verordnungen, Gesetzen oder sonstigen Vorschriften vorgesehen wurde.
              </p>
            </div>
          </section>

          {/* 3. Hosting */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-slate-200 pb-3">
              3. Hosting
            </h2>
            <div className="space-y-4 text-slate-900 leading-relaxed">
              <p>
                Unsere Website wird bei <strong>Hostinger</strong> gehostet. Anbieter ist die Hostinger International Ltd.,
                61 Lordou Vironos Street, 6023 Larnaca, Zypern.
              </p>
              <p>
                Hostinger ist EU-Hoster und erfüllt die Anforderungen der DSGVO. Details entnehmen Sie der Datenschutzerklärung
                von Hostinger:{' '}
                <a href="https://www.hostinger.de/datenschutzerklaerung" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline">
                  https://www.hostinger.de/datenschutzerklaerung
                </a>
              </p>
              <p>
                <strong>Rechtsgrundlage:</strong> Die Verwendung von Hostinger erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
                Wir haben ein berechtigtes Interesse an einer sicheren und zuverlässigen Darstellung unserer Website.
              </p>
            </div>
          </section>

          {/* 4. Server-Log-Dateien */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-slate-200 pb-3">
              4. Server-Log-Dateien
            </h2>
            <div className="space-y-4 text-slate-900 leading-relaxed">
              <p>
                Bei jedem Aufruf unserer Website erfasst unser System automatisiert Daten und Informationen vom Computersystem
                des aufrufenden Rechners. Folgende Daten werden hierbei erhoben:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL (die zuvor besuchte Seite)</li>
                <li>Hostname des zugreifenden Rechners (IP-Adresse)</li>
                <li>Uhrzeit der Serveranfrage</li>
              </ul>
              <p>
                Diese Daten werden in den Logfiles unseres Systems gespeichert. Eine Speicherung dieser Daten zusammen mit
                anderen personenbezogenen Daten des Nutzers findet nicht statt.
              </p>
              <p>
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der
                Verbesserung, Stabilität, Funktionalität und Sicherheit unserer Website.
              </p>
              <p>
                <strong>Speicherdauer:</strong> Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer
                Erhebung nicht mehr erforderlich sind. Dies ist in der Regel nach 7 Tagen der Fall.
              </p>
            </div>
          </section>

          {/* 5. Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-slate-200 pb-3">
              5. Cookies
            </h2>
            <div className="space-y-4 text-slate-900 leading-relaxed">
              <p>
                Unsere Website verwendet Cookies. Bei Cookies handelt es sich um Textdateien, die im Internetbrowser bzw.
                vom Internetbrowser auf dem Computersystem des Nutzers gespeichert werden. Ruft ein Nutzer eine Website auf,
                so kann ein Cookie auf dem Betriebssystem des Nutzers gespeichert werden.
              </p>

              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">Notwendige Cookies</h3>
              <p>
                Wir setzen Cookies ein, um unsere Website nutzerfreundlicher zu gestalten. Einige Elemente unserer Website
                erfordern es, dass der aufrufende Browser auch nach einem Seitenwechsel identifiziert werden kann. Diese Cookies
                dienen insbesondere dazu, Ihre Cookie-Einstellungen zu speichern.
              </p>
              <p>
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Funktionsfähigkeit der Website).
              </p>

              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">Analyse-Cookies</h3>
              <p>
                Darüber hinaus setzen wir Cookies ein, um das Nutzerverhalten zu analysieren. Details hierzu finden Sie im
                Abschnitt "Google Analytics".
              </p>
              <p>
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung über Cookie-Banner).
              </p>

              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">Widerspruch und Löschung</h3>
              <p>
                Sie können Ihre Cookie-Einstellungen jederzeit über Ihren Browser verwalten und Cookies löschen.
                Die meisten Browser akzeptieren Cookies automatisch. Sie können Ihren Browser jedoch so konfigurieren,
                dass keine Cookies auf Ihrem Computer gespeichert werden oder stets ein Hinweis erscheint, bevor ein
                neues Cookie angelegt wird.
              </p>
            </div>
          </section>

          {/* 6. Google Analytics */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-slate-200 pb-3">
              6. Google Analytics
            </h2>
            <div className="space-y-4 text-slate-900 leading-relaxed">
              <p>
                Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Ireland Limited,
                Gordon House, Barrow Street, Dublin 4, Irland.
              </p>
              <p>
                Google Analytics verwendet Cookies, die eine Analyse der Benutzung der Website durch Sie ermöglichen.
                Die durch das Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen
                Server von Google in den USA übertragen und dort gespeichert.
              </p>
              <p>
                <strong>IP-Anonymisierung:</strong> Wir haben auf dieser Website die IP-Anonymisierung aktiviert.
                Dadurch wird Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen
                Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum vor der Übermittlung in die USA gekürzt.
              </p>
              <p>
                <strong>Browser Plugin:</strong> Sie können die Speicherung der Cookies durch eine entsprechende Einstellung
                Ihrer Browser-Software verhindern oder das Browser-Plugin von Google herunterladen und installieren:{' '}
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline">
                  https://tools.google.com/dlpage/gaoptout
                </a>
              </p>
              <p>
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung über Cookie-Banner).
              </p>
              <p>
                <strong>Speicherdauer:</strong> User- und eventbezogene Daten werden nach 14 Monaten automatisch gelöscht.
              </p>
              <p>
                Mehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics finden Sie in der Datenschutzerklärung
                von Google:{' '}
                <a href="https://support.google.com/analytics/answer/6004245" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline">
                  https://support.google.com/analytics/answer/6004245
                </a>
              </p>
            </div>
          </section>

          {/* 7. Adsfox Marketing & Tracking */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-slate-200 pb-3">
              7. Adsfox Marketing & Tracking
            </h2>
            <div className="space-y-4 text-slate-900 leading-relaxed">
              <p>
                Wir nutzen die Marketing- und Tracking-Lösung von <strong>Adsfox</strong> (adsfox.com) zur Analyse
                und Optimierung unserer Marketing-Kampagnen.
              </p>
              <p>
                Adsfox erfasst Informationen über Ihr Nutzerverhalten auf unserer Website (z.B. besuchte Seiten,
                Klicks, Conversions) und übermittelt diese Daten an Facebook, LinkedIn und andere Werbeplattformen.
                Dies ermöglicht uns, die Wirksamkeit unserer Werbekampagnen zu messen und Zielgruppen gezielter anzusprechen.
              </p>
              <p>
                <strong>Verarbeitete Daten:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>IP-Adresse (anonymisiert)</li>
                <li>Besuchte Seiten und Interaktionen</li>
                <li>Geräte- und Browserinformationen</li>
                <li>Conversion-Events (z.B. Lead-Übermittlung, Button-Klicks)</li>
              </ul>
              <p>
                <strong>Weitergabe an Dritte:</strong> Die erfassten Daten werden an Facebook (Meta Platforms Ireland Limited)
                und LinkedIn (LinkedIn Ireland Unlimited Company) übermittelt, um Werbeanzeigen auszusteuern und zu optimieren.
              </p>
              <p>
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung über Cookie-Banner).
              </p>
              <p>
                <strong>Widerruf:</strong> Sie können Ihre Einwilligung jederzeit über unsere Cookie-Einstellungen widerrufen.
              </p>
            </div>
          </section>

          {/* 8. Kontaktformular und E-Mail-Kontakt */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-slate-200 pb-3">
              8. Kontaktformular und E-Mail-Kontakt
            </h2>
            <div className="space-y-4 text-slate-900 leading-relaxed">
              <p>
                Auf unserer Website stehen Ihnen Kontaktformulare zur Verfügung, über die Sie uns Anfragen zukommen lassen können.
                Dabei werden die von Ihnen eingegebenen Daten (Name, E-Mail-Adresse, Nachricht) an uns übermittelt und gespeichert.
              </p>
              <p>
                Alternativ ist eine Kontaktaufnahme über die bereitgestellte E-Mail-Adresse möglich. In diesem Fall werden die
                mit der E-Mail übermittelten personenbezogenen Daten des Nutzers gespeichert.
              </p>
              <p>
                <strong>Zweck der Datenverarbeitung:</strong> Die Verarbeitung der personenbezogenen Daten dient uns allein zur
                Bearbeitung der Kontaktaufnahme.
              </p>
              <p>
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) bzw. Art. 6 Abs. 1 lit. b DSGVO
                (zur Vertragsanbahnung erforderlich).
              </p>
              <p>
                <strong>Speicherdauer:</strong> Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer
                Erhebung nicht mehr erforderlich sind. Dies ist in der Regel nach vollständiger Bearbeitung Ihrer Anfrage der Fall.
                Gesetzliche Aufbewahrungsfristen bleiben unberührt.
              </p>
            </div>
          </section>

          {/* 9. KI-gestützte Kommunikation */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-slate-200 pb-3">
              9. KI-gestützte Kommunikation (Claude / Anthropic)
            </h2>
            <div className="space-y-4 text-slate-900 leading-relaxed">
              <p>
                Zur Verbesserung und Automatisierung unserer Kundenkommunikation setzen wir KI-Sprachmodelle ein.
                Konkret nutzen wir <strong>Claude</strong> von Anthropic PBC, 548 Market St, PMB 56830, San Francisco, CA 94104, USA.
              </p>
              <p>
                <strong>Zweck der Verarbeitung:</strong> KI-Sprachmodelle helfen uns bei der Erstellung von E-Mail-Antworten,
                der Beantwortung von Kundenanfragen und der Aufbereitung von Informationen. Dabei können personenbezogene Daten
                (Name, E-Mail-Adresse, Nachrichteninhalte) zur Verarbeitung an Anthropic übermittelt werden.
              </p>
              <p>
                <strong>Datenübermittlung in die USA:</strong> Anthropic hat seinen Sitz in den USA. Die Datenübermittlung erfolgt
                auf Grundlage von Standardvertragsklauseln der EU-Kommission gemäß Art. 46 Abs. 2 lit. c DSGVO.
              </p>
              <p>
                <strong>Wichtig:</strong> Ihre Daten werden nur zur unmittelbaren Bearbeitung Ihrer Anfrage verwendet.
                Anthropic nutzt Ihre Daten nicht zum Training ihrer KI-Modelle. Details hierzu finden Sie in Anthropics
                Datenschutzerklärung:{' '}
                <a href="https://www.anthropic.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline">
                  https://www.anthropic.com/privacy
                </a>
              </p>
              <p>
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an effizienter Kundenkommunikation)
                in Verbindung mit Art. 6 Abs. 1 lit. a DSGVO (Ihre Einwilligung bei Kontaktaufnahme).
              </p>
              <p>
                <strong>Speicherdauer:</strong> Die Daten werden bei Anthropic nur für die Dauer der Verarbeitung gespeichert
                und anschließend gelöscht. Bei uns erfolgt die Speicherung entsprechend der unter "Kontaktformular" genannten Fristen.
              </p>
            </div>
          </section>

          {/* 10. Calendly (Terminbuchung) */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-slate-200 pb-3">
              10. Calendly (Terminbuchung)
            </h2>
            <div className="space-y-4 text-slate-900 leading-relaxed">
              <p>
                Wir nutzen für die Terminbuchung den Dienst <strong>Calendly</strong>. Anbieter ist Calendly LLC,
                271 17th St NW, 10th Floor, Atlanta, Georgia 30363, USA.
              </p>
              <p>
                Wenn Sie einen Termin bei uns buchen, werden folgende Daten an Calendly übermittelt und dort gespeichert:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Ihr Name</li>
                <li>Ihre E-Mail-Adresse</li>
                <li>Optional: Telefonnummer und weitere von Ihnen eingegebene Informationen</li>
                <li>Gewählter Termin (Datum und Uhrzeit)</li>
                <li>IP-Adresse</li>
              </ul>
              <p>
                <strong>Datenübermittlung in die USA:</strong> Calendly hat seinen Sitz in den USA. Die Datenübermittlung
                erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) und der Erforderlichkeit zur
                Vertragsanbahnung (Art. 6 Abs. 1 lit. b DSGVO).
              </p>
              <p>
                <strong>Zweck:</strong> Die Verarbeitung dient der Verwaltung und Durchführung von Terminen zwischen Ihnen und uns.
              </p>
              <p>
                Weitere Informationen finden Sie in der Datenschutzerklärung von Calendly:{' '}
                <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline">
                  https://calendly.com/privacy
                </a>
              </p>
            </div>
          </section>

          {/* 11. Newsletter (Brevo) */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-slate-200 pb-3">
              11. Newsletter (Brevo)
            </h2>
            <div className="space-y-4 text-slate-900 leading-relaxed">
              <p>
                Wenn Sie unseren Newsletter abonnieren, nutzen wir den Dienst <strong>Brevo</strong> (ehemals Sendinblue).
                Anbieter ist die Sendinblue GmbH, Köpenicker Str. 126, 10179 Berlin, Deutschland.
              </p>

              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">Datenverarbeitung</h3>
              <p>
                Wenn Sie sich für unseren Newsletter anmelden, werden die von Ihnen angegebenen Daten (E-Mail-Adresse,
                optional: Name) an Brevo übermittelt und dort gespeichert. Zusätzlich werden folgende Daten gespeichert:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Datum und Uhrzeit der Anmeldung</li>
                <li>IP-Adresse</li>
                <li>Bestätigung des Double-Opt-In</li>
              </ul>

              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">Double-Opt-In</h3>
              <p>
                Die Anmeldung zu unserem Newsletter erfolgt über ein Double-Opt-In-Verfahren. Nach Ihrer Anmeldung erhalten
                Sie eine E-Mail, in der Sie um Bestätigung Ihrer Anmeldung gebeten werden. Nur wenn Sie diese Bestätigung
                durchführen, wird Ihr Newsletter-Abonnement aktiviert.
              </p>

              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">Nutzungsanalyse</h3>
              <p>
                Brevo ermöglicht uns, das Nutzerverhalten der Newsletter-Empfänger zu analysieren. Dabei können wir u.a. sehen,
                wie viele Empfänger die Newsletter-Nachricht geöffnet haben und wie oft welcher Link im Newsletter angeklickt wurde.
              </p>

              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">Abmeldung</h3>
              <p>
                Sie können den Newsletter jederzeit über den Link am Ende jeder Newsletter-E-Mail abbestellen.
                Nach Ihrer Abmeldung werden Ihre Daten bei Brevo gelöscht.
              </p>

              <p>
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
              </p>
              <p>
                Weitere Informationen finden Sie in der Datenschutzerklärung von Brevo:{' '}
                <a href="https://www.brevo.com/de/legal/privacypolicy/" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline">
                  https://www.brevo.com/de/legal/privacypolicy/
                </a>
              </p>
            </div>
          </section>

          {/* 12. Chatbot */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-slate-200 pb-3">
              12. Chatbot (geplant)
            </h2>
            <div className="space-y-4 text-slate-900 leading-relaxed">
              <p>
                Wir planen den Einsatz eines Chatbots zur Beantwortung häufiger Fragen und zur Verbesserung Ihres
                Nutzererlebnisses. Wenn Sie den Chatbot nutzen, werden Ihre Nachrichten und ggf. weitere von Ihnen
                freiwillig angegebene Informationen verarbeitet.
              </p>
              <p>
                <strong>Hinweis:</strong> Sobald wir einen Chatbot aktivieren, werden wir diese Datenschutzerklärung
                entsprechend aktualisieren und Sie über den genutzten Dienst, die Datenverarbeitung und Ihre Rechte informieren.
              </p>
              <p>
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung durch aktive Nutzung des Chatbots).
              </p>
            </div>
          </section>

          {/* 13. Ihre Rechte */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-slate-200 pb-3">
              13. Ihre Rechte als betroffene Person
            </h2>
            <div className="space-y-4 text-slate-900 leading-relaxed">
              <p>
                Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:
              </p>

              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">Recht auf Auskunft (Art. 15 DSGVO)</h3>
              <p>
                Sie können Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten verlangen.
              </p>

              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">Recht auf Berichtigung (Art. 16 DSGVO)</h3>
              <p>
                Sie haben das Recht, unverzüglich die Berichtigung unrichtiger oder die Vervollständigung Ihrer
                bei uns gespeicherten personenbezogenen Daten zu verlangen.
              </p>

              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">Recht auf Löschung (Art. 17 DSGVO)</h3>
              <p>
                Sie können die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten verlangen, soweit nicht
                die Verarbeitung zur Ausübung des Rechts auf freie Meinungsäußerung und Information, zur Erfüllung
                einer rechtlichen Verpflichtung, aus Gründen des öffentlichen Interesses oder zur Geltendmachung,
                Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist.
              </p>

              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</h3>
              <p>
                Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </p>

              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</h3>
              <p>
                Sie haben das Recht, Ihre personenbezogenen Daten in einem strukturierten, gängigen und
                maschinenlesbaren Format zu erhalten oder die Übermittlung an einen anderen Verantwortlichen zu verlangen.
              </p>

              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">Widerspruchsrecht (Art. 21 DSGVO)</h3>
              <p className="bg-orange-50 p-4 rounded-xl border border-orange-200">
                <strong>Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen
                die Verarbeitung Sie betreffender personenbezogener Daten, die aufgrund von Art. 6 Abs. 1 lit. f DSGVO
                (Datenverarbeitung auf der Grundlage einer Interessenabwägung) erfolgt, Widerspruch einzulegen.</strong>
                <br /><br />
                Legen Sie Widerspruch ein, werden wir Ihre personenbezogenen Daten nicht mehr verarbeiten, es sei denn,
                wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte
                und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung
                von Rechtsansprüchen.
              </p>

              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">Widerruf Ihrer Einwilligung (Art. 7 Abs. 3 DSGVO)</h3>
              <p>
                Sie haben das Recht, Ihre einmal erteilte Einwilligung jederzeit zu widerrufen. Durch den Widerruf
                der Einwilligung wird die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten
                Verarbeitung nicht berührt.
              </p>

              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">Beschwerderecht bei einer Aufsichtsbehörde (Art. 77 DSGVO)</h3>
              <p>
                Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über unsere Verarbeitung
                personenbezogener Daten zu beschweren.
              </p>
              <p>
                Die für uns zuständige Aufsichtsbehörde ist:<br />
                <strong>Der Bundesbeauftragte für den Datenschutz und die Informationsfreiheit</strong><br />
                Graurheindorfer Str. 153<br />
                53117 Bonn<br />
                Telefon: 0228 997799-0<br />
                E-Mail: poststelle@bfdi.bund.de<br />
                Website:{' '}
                <a href="https://www.bfdi.bund.de" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:underline">
                  https://www.bfdi.bund.de
                </a>
              </p>
            </div>
          </section>

          {/* 14. Kontakt */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-slate-200 pb-3">
              14. Kontakt in Datenschutzfragen
            </h2>
            <div className="space-y-4 text-slate-900 leading-relaxed">
              <p>
                Für Fragen zum Datenschutz oder zur Ausübung Ihrer Rechte können Sie uns jederzeit kontaktieren:
              </p>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <p className="text-slate-900">
                  <strong>KINEWS24-Academy</strong><br />
                  Oliver Welling und Markus Mühlich<br /><br />
                  E-Mail: <a href="mailto:info@kinews24-academy.de" className="text-brand-accent hover:underline">info@kinews24-academy.de</a>
                </p>
              </div>
            </div>
          </section>

        </div>

        <div className="mt-8 text-center">
          <Button
            variant="outline"
            onClick={() => {
              window.history.pushState({}, '', '/');
              window.dispatchEvent(new Event('popstate'));
              window.scrollTo(0, 0);
            }}
          >
            ← Zurück zur Startseite
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DatenschutzPage;
