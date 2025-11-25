import React, { useState, useEffect } from 'react';
import { CheckCircle, Calendar, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import { trackLeadSubmission, getUTMParameters } from '../utils/tracking';

type SourceType = 'roadmap' | 'coi' | 'general' | 'academy' | 'thinkai' | 'keynote' | 'coaching' | 'workshop';

interface SourceContent {
  title: string;
  subtitle: string;
  benefits: string[];
  calendlyUrl: string;
  leadType: 'roadmap' | 'thinkai' | 'coaching' | 'keynote' | 'workshop' | 'coi';
}

const sourceContent: Record<SourceType, SourceContent> = {
  roadmap: {
    title: 'Ihre KI-Roadmap',
    subtitle: 'Kostenloses Erstgespräch buchen',
    benefits: [
      'Ihre aktuelle Situation und Herausforderungen besprechen',
      'Prozesse für KI-Automatisierung identifizieren',
      'Wie eine KI-Roadmap für Ihr Unternehmen aussieht',
      'Nächste Schritte und Investment klären'
    ],
    calendlyUrl: 'https://calendly.com/mm-kinews24-academy/ki-roadmap-kostenloses-erstgesprach',
    leadType: 'roadmap'
  },
  coi: {
    title: 'Ihr COI-Ergebnis besprechen',
    subtitle: 'Strategiegespräch buchen',
    benefits: [
      'Ihre Cost of Inaction Berechnung im Detail besprechen',
      'Konkrete Quick Wins für Ihren Prozess identifizieren',
      'Wie Sie die Automatisierung umsetzen können',
      'ROI-Prognose und Investitionsrahmen klären'
    ],
    calendlyUrl: 'https://calendly.com/mm-kinews24-academy/cost-of-inaction-strategiegesprach',
    leadType: 'coi'
  },
  general: {
    title: 'Wie können wir helfen?',
    subtitle: 'Unverbindliches Erstgespräch',
    benefits: [
      'Ihre Ziele und Herausforderungen besprechen',
      'Welche Leistungen zu Ihnen passen (Roadmap, Academy, etc.)',
      'Ob KI-Integration für Sie Sinn macht',
      'Ihre Fragen rund um KI beantworten'
    ],
    calendlyUrl: 'https://calendly.com/mm-kinews24-academy/erstgesprach-wie-konnen-wir-helfen',
    leadType: 'roadmap'
  },
  academy: {
    title: 'Welche Weiterbildung passt zu Ihnen?',
    subtitle: 'Academy Beratungsgespräch',
    benefits: [
      'Ihr aktueller Wissensstand und Ihre Ziele',
      'ThinkAI, Coaching, Workshop oder Keynote?',
      'Welches Format am besten zu Ihnen passt',
      'Nächste Schritte und Buchungsoptionen'
    ],
    calendlyUrl: 'https://calendly.com/mm-kinews24-academy/academy-welche-weiterbildung-passt-zu-mir',
    leadType: 'thinkai'
  },
  thinkai: {
    title: 'ThinkAI Weiterbildung',
    subtitle: 'Infogespräch buchen',
    benefits: [
      'Kurs-Inhalte und Ablauf (32 Stunden, 7 Module)',
      'Für wen ist ThinkAI geeignet?',
      'BDVT-Zertifizierung und Förderungsmöglichkeiten',
      'Termine und Anmeldung besprechen'
    ],
    calendlyUrl: 'https://calendly.com/mm-kinews24-academy/thinkai-weiterbildung-infogesprach',
    leadType: 'thinkai'
  },
  keynote: {
    title: 'Keynote & Vortrag',
    subtitle: 'Anfrage besprechen',
    benefits: [
      'Ihr Event (Datum, Format, Zielgruppe)',
      'Gewünschtes Keynote-Thema abstimmen',
      'Rahmenbedingungen und Honorar klären',
      'Nächste Schritte vereinbaren'
    ],
    calendlyUrl: 'https://calendly.com/mm-kinews24-academy/keynote-vortrag-anfrage-besprechen',
    leadType: 'keynote'
  },
  coaching: {
    title: '1:1 Coaching',
    subtitle: 'Unverbindliches Kennenlernen',
    benefits: [
      'Ihre spezifischen Herausforderungen und Ziele besprechen',
      'Welche KI-Themen für Sie relevant sind',
      'Ob das 1:1 Coaching-Format zu Ihnen passt',
      'Wie ein Coaching-Paket konkret ablaufen würde'
    ],
    calendlyUrl: 'https://calendly.com/mm-kinews24-academy/1-1-coaching-unverbindliches-kennenlernen',
    leadType: 'coaching'
  },
  workshop: {
    title: 'Firmen-Workshop',
    subtitle: 'Erstgespräch & Bedarfsanalyse',
    benefits: [
      'Ihre Ziele und die Ausgangssituation Ihres Teams',
      'Welche Prozesse/Themen im Workshop behandelt werden',
      'Die ideale Workshop-Struktur für Ihre Bedürfnisse',
      'Terminmöglichkeiten und nächste Schritte'
    ],
    calendlyUrl: 'https://calendly.com/mm-kinews24-academy/firmen-workshop-erstgesprach',
    leadType: 'workshop'
  }
};

const TerminPage: React.FC = () => {
  const [source, setSource] = useState<SourceType>('general');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dsgvoAccepted: false
  });
  const [showCalendly, setShowCalendly] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Get source from URL parameter
    const params = new URLSearchParams(window.location.search);
    const sourceParam = params.get('source') as SourceType;
    if (sourceParam && sourceContent[sourceParam]) {
      setSource(sourceParam);
    }
  }, []);

  const content = sourceContent[source];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Collect UTM parameters
    const utmParams = getUTMParameters();

    // Track lead submission
    const trackingData = {
      leadType: content.leadType,
      email: formData.email,
      name: formData.name,
      message: `Terminanfrage via ${source}`,
      page: `/termin?source=${source}`,
      timestamp: new Date().toISOString(),
      ...utmParams
    };

    trackLeadSubmission(trackingData);

    // TODO: API Call to save lead
    // await fetch('/api/leads', {
    //   method: 'POST',
    //   body: JSON.stringify(trackingData)
    // });

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));

    setIsSubmitting(false);
    setShowCalendly(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {!showCalendly ? (
          <>
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/10 text-brand-accent text-sm font-bold mb-6">
                <Calendar size={16} />
                Kostenlos & Unverbindlich
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
                {content.title}
              </h1>
              <p className="text-xl text-slate-600">
                {content.subtitle}
              </p>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Das erwartet Sie im Gespräch:
              </h2>
              <ul className="space-y-4">
                {content.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="text-brand-accent flex-shrink-0 mt-1" size={20} />
                    <span className="text-slate-700 leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-100">
                <p className="text-sm text-slate-700">
                  <strong>⏱️ Dauer:</strong> {source === 'academy' || source === 'thinkai' || source === 'keynote' || source === 'coaching' ? '20' : '30'} Minuten
                  <br />
                  <strong>📍 Format:</strong> Video-Call (Link erhalten Sie nach der Buchung)
                  <br />
                  <strong>💰 Kosten:</strong> Kostenlos
                </p>
              </div>
            </div>

            {/* Lead Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Schritt 1: Ihre Kontaktdaten
              </h2>
              <p className="text-slate-600 mb-8">
                Damit wir uns optimal vorbereiten können, benötigen wir kurz Ihre Daten.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                    Ihr Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all"
                    placeholder="Max Mustermann"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                    Ihre E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all"
                    placeholder="max@beispiel.de"
                  />
                </div>

                {/* DSGVO Checkbox */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="dsgvoAccepted"
                    name="dsgvoAccepted"
                    required
                    checked={formData.dsgvoAccepted}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 text-brand-accent border-slate-300 rounded focus:ring-brand-accent"
                  />
                  <label htmlFor="dsgvoAccepted" className="text-sm text-slate-600">
                    Ich habe die{' '}
                    <a
                      href="/datenschutz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-accent hover:underline font-medium"
                    >
                      Datenschutzerklärung
                    </a>{' '}
                    gelesen und stimme der Verarbeitung meiner Daten zum Zweck der Terminvereinbarung zu.
                    Meine Daten werden nicht an Dritte weitergegeben. *
                  </label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Wird verarbeitet...' : (
                    <>
                      Weiter zum Kalender <ArrowRight className="ml-2" size={20} />
                    </>
                  )}
                </Button>

                <p className="text-xs text-slate-500 text-center">
                  Im nächsten Schritt können Sie einen passenden Termin auswählen.
                </p>
              </form>
            </div>
          </>
        ) : (
          <>
            {/* Calendly Section */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <CheckCircle className="text-green-600" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                Perfekt, {formData.name.split(' ')[0]}!
              </h2>
              <p className="text-lg text-slate-600">
                Wählen Sie jetzt einen passenden Termin aus unserem Kalender.
              </p>
            </div>

            {/* Calendly Embed */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div
                className="calendly-inline-widget"
                data-url={`${content.calendlyUrl}?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=00d4aa`}
                style={{ minWidth: '320px', height: '700px' }}
              />
            </div>

            {/* Calendly Script */}
            <script
              type="text/javascript"
              src="https://assets.calendly.com/assets/external/widget.js"
              async
            />
          </>
        )}

        {/* Back Button */}
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

export default TerminPage;
