import React from 'react';
import Button from '../components/Button';

const AGBPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8">
          Allgemeine Geschäftsbedingungen (AGB)
        </h1>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 prose prose-slate max-w-none">
          <h2>§ 1 Geltungsbereich</h2>
          <p>
            Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen KINEWS24-Academy
            und unseren Kunden über die Erbringung von Beratungs-, Trainings- und Weiterbildungsleistungen
            im Bereich Künstliche Intelligenz.
          </p>

          <h2>§ 2 Vertragsgegenstand</h2>
          <p>
            Gegenstand der Leistungen sind:
          </p>
          <ul>
            <li>KI-Roadmap Beratung</li>
            <li>KI-Academy Weiterbildungen (ThinkAI, Coaching, Workshops)</li>
            <li>Keynotes und Vorträge</li>
          </ul>

          <h2>§ 3 Vertragsschluss</h2>
          <p>
            Der Vertrag kommt durch die schriftliche Bestätigung (auch per E-Mail) des Auftrags durch
            KINEWS24-Academy zustande. Angebote sind freibleibend, sofern nicht ausdrücklich als
            verbindlich gekennzeichnet.
          </p>

          <h2>§ 4 Leistungsumfang</h2>
          <p>
            Der genaue Leistungsumfang ergibt sich aus der individuellen Auftragsbestätigung bzw. dem
            jeweiligen Angebot.
          </p>

          <h2>§ 5 Preise und Zahlungsbedingungen</h2>
          <p>
            Die Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer. Sofern nicht anders
            vereinbart, sind Rechnungen innerhalb von 14 Tagen nach Erhalt ohne Abzug zur Zahlung fällig.
          </p>

          <h2>§ 6 Termine und Fristen</h2>
          <p>
            Vereinbarte Termine sind verbindlich. Bei Verhinderung des Kunden ist eine kostenfreie
            Stornierung oder Verschiebung bis 14 Tage vor dem Termin möglich. Bei kurzfristigeren
            Absagen werden [X]% des vereinbarten Honorars berechnet.
          </p>

          <h2>§ 7 Urheberrecht</h2>
          <p>
            Alle im Rahmen der Leistungserbringung zur Verfügung gestellten Materialien, Präsentationen
            und Unterlagen bleiben geistiges Eigentum von KINEWS24-Academy und dürfen nur für den
            vereinbarten Zweck verwendet werden.
          </p>

          <h2>§ 8 Haftung</h2>
          <p>
            KINEWS24-Academy haftet nur bei Vorsatz und grober Fahrlässigkeit. Die Haftung für leichte
            Fahrlässigkeit ist ausgeschlossen, soweit nicht wesentliche Vertragspflichten betroffen sind.
          </p>

          <h2>§ 9 Datenschutz</h2>
          <p>
            Für die Verarbeitung personenbezogener Daten gelten die Bestimmungen der Datenschutzerklärung,
            die unter /datenschutz abrufbar ist.
          </p>

          <h2>§ 10 Schlussbestimmungen</h2>
          <p>
            Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist [Ort], sofern der Kunde
            Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.
          </p>

          <p className="text-sm text-slate-500 mt-8 pt-8 border-t border-slate-200">
            <strong>Hinweis:</strong> Dies ist ein Platzhalter. Bitte ergänzen Sie diese AGB mit Ihren
            vollständigen, rechtsgültigen Geschäftsbedingungen. Wir empfehlen dringend die Beratung durch
            einen Rechtsanwalt.
          </p>
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

export default AGBPage;
