import React from 'react';
import Button from '../components/Button';

const ImpressumPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8">
          Impressum
        </h1>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Angaben gemäß § 5 TMG */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b-2 border-slate-200 pb-3">
              Angaben gemäß § 5 TMG
            </h2>
            <p className="text-slate-900 mb-6 text-lg">
              <strong>KINEWS24-Academy</strong><br />
              Eine Kooperation von:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Ansprechpartner 1 */}
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Ansprechpartner Hamburg</h3>
                <p className="text-slate-900 leading-relaxed">
                  <strong>Oliver Welling</strong><br />
                  <span className="text-slate-600">[Genaue Adresse folgt]</span><br />
                  Hamburg
                </p>
              </div>

              {/* Ansprechpartner 2 */}
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Ansprechpartner Bayern</h3>
                <p className="text-slate-900 leading-relaxed">
                  <strong>Markus Mühlich</strong><br />
                  Waxensteinstraße 4<br />
                  82327 Tutzing
                </p>
              </div>
            </div>
          </section>

          {/* Kontakt */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-slate-200 pb-3">
              Kontakt
            </h2>
            <div className="text-slate-900 space-y-2">
              <p>
                <strong>E-Mail:</strong>{' '}
                <a href="mailto:info@kinews24-academy.de" className="text-brand-accent hover:underline">
                  info@kinews24-academy.de
                </a>
              </p>
              <p>
                <strong>Telefon:</strong> [Telefonnummer folgt]
              </p>
            </div>
          </section>

          {/* Umsatzsteuer-ID */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-slate-200 pb-3">
              Umsatzsteuer-ID
            </h2>
            <p className="text-slate-900">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              [USt-IdNr. folgt]
            </p>
          </section>

          {/* Verantwortlich für den Inhalt */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-slate-200 pb-3">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p className="text-slate-900">
              Oliver Welling und Markus Mühlich<br />
              (Anschriften siehe oben)
            </p>
          </section>

          {/* Haftungsausschluss */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b-2 border-slate-200 pb-3">
              Haftungsausschluss
            </h2>

            <div className="space-y-6">
              {/* Haftung für Inhalte */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Haftung für Inhalte</h3>
                <div className="text-slate-900 space-y-3 leading-relaxed">
                  <p>
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                    allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                    verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
                    zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                  </p>
                  <p>
                    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
                    Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
                    Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen
                    werden wir diese Inhalte umgehend entfernen.
                  </p>
                </div>
              </div>

              {/* Haftung für Links */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Haftung für Links</h3>
                <div className="text-slate-900 space-y-3 leading-relaxed">
                  <p>
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                    Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
                    Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                    wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
                    Zeitpunkt der Verlinkung nicht erkennbar.
                  </p>
                  <p>
                    Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
                    Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links
                    umgehend entfernen.
                  </p>
                </div>
              </div>

              {/* Urheberrecht */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Urheberrecht</h3>
                <div className="text-slate-900 space-y-3 leading-relaxed">
                  <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                    Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                    Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                    Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                  </p>
                  <p>
                    Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
                    beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
                    Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
                    von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Verbraucherstreitbeilegung */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-slate-200 pb-3">
              Verbraucherstreitbeilegung
            </h2>
            <p className="text-slate-900 leading-relaxed">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
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

export default ImpressumPage;
