import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import { CheckCircle, Calendar, ArrowRight, Mail, Phone } from 'lucide-react';
import { LeadType } from '../components/ContactModal';

interface ThankYouContent {
  title: string;
  subtitle: string;
  message: string;
  ctaText: string;
  ctaLink: string; // Platzhalter für Calendly Link
  benefits: string[];
  nextSteps: string[];
  upsell?: {
    title: string;
    description: string;
    ctaText: string;
    ctaLink: string;
  };
}

const thankYouContent: Record<LeadType, ThankYouContent> = {
  thinkai: {
    title: 'Glückwunsch zu Ihrer Entscheidung!',
    subtitle: 'Ihre Anfrage zur ThinkAI Weiterbildung ist bei uns eingegangen.',
    message: 'Sie erhalten in Kürze eine E-Mail mit allen Details zur Weiterbildung, den Terminen und dem Ablauf. Möchten Sie vorab mit uns sprechen?',
    ctaText: 'Infogespräch vereinbaren',
    ctaLink: 'https://calendly.com/your-link', // TODO: Echten Link einfügen
    benefits: [
      '32 Stunden Live-Training',
      'BDVT-geprüftes Zertifikat',
      'Ihr eigenes KI-Projekt',
      'Lebenslanger Zugang zu Materialien'
    ],
    nextSteps: [
      'Sie erhalten eine Bestätigungs-E-Mail (prüfen Sie auch Ihren Spam-Ordner)',
      'Wir senden Ihnen detaillierte Informationen zur Weiterbildung',
      'Optional: Buchen Sie ein Infogespräch für offene Fragen'
    ]
  },
  coaching: {
    title: 'Perfekt! Wir freuen uns auf die Zusammenarbeit.',
    subtitle: 'Ihre Anfrage zum 1:1 KI-Coaching ist bei uns eingegangen.',
    message: 'Lassen Sie uns in einem kurzen Gespräch Ihre Ziele besprechen und das Coaching-Paket auf Sie zuschneiden.',
    ctaText: 'Erstgespräch buchen (15 Min)',
    ctaLink: 'https://calendly.com/your-link',
    benefits: [
      '10 Stunden individuelles Coaching',
      'Flexibel innerhalb 3 Monaten',
      'E-Mail-Support inklusive',
      'Ihre eigenen Use Cases'
    ],
    nextSteps: [
      'Buchen Sie direkt Ihr Erstgespräch (15 Minuten)',
      'Wir besprechen Ihre Ziele und Erwartungen',
      'Sie erhalten Ihr individuelles Coaching-Paket'
    ]
  },
  keynote: {
    title: 'Danke für Ihr Interesse!',
    subtitle: 'Ihre Keynote-Anfrage ist bei uns eingegangen.',
    message: 'Wir melden uns innerhalb von 24 Stunden bei Ihnen, um Details zu Ihrem Event zu besprechen. Oder buchen Sie direkt einen Termin:',
    ctaText: 'Termin für Vorbesprechung',
    ctaLink: 'https://calendly.com/your-link',
    benefits: [
      'Individuelle Themenwahl',
      'Praxisnahe Live-Demos',
      'Vorbesprechung inklusive',
      'Q&A mit Ihrem Publikum'
    ],
    nextSteps: [
      'Wir melden uns per E-Mail oder Telefon',
      'Optional: Buchen Sie direkt einen Termin',
      'Wir besprechen Ihr Event, Zielgruppe und Wünsche',
      'Sie erhalten ein unverbindliches Angebot'
    ],
    upsell: {
      title: 'Workshop statt Keynote?',
      description: 'Für tieferes Wissen: Buchen Sie einen ganztägigen Workshop für Ihr Team (max. 5 Personen).',
      ctaText: 'Workshop-Infos anfordern',
      ctaLink: '/#audit'
    }
  },
  workshop: {
    title: 'Großartig! Ihr Team wird begeistert sein.',
    subtitle: 'Ihre Workshop-Anfrage ist bei uns eingegangen.',
    message: 'Lassen Sie uns in einem kurzen Call die Details besprechen: Teilnehmer, Ziele, Termine und individuelle Anpassungen.',
    ctaText: 'Workshop-Planung buchen',
    ctaLink: 'https://calendly.com/your-link',
    benefits: [
      'Max. 5 Personen für intensive Betreuung',
      '6-8 Stunden hands-on',
      'Ihre eigenen Use Cases',
      '2 Wochen Follow-up Support'
    ],
    nextSteps: [
      'Buchen Sie einen Termin für die Workshop-Planung',
      'Wir besprechen Ziele, Teilnehmer und Termine',
      'Sie erhalten ein individuelles Angebot',
      'Wir starten mit der Vorbereitung'
    ]
  },
  roadmap: {
    title: 'Exzellente Entscheidung!',
    subtitle: 'Ihre Anfrage zur KI-Roadmap ist bei uns eingegangen.',
    message: 'Die KI-Roadmap ist unser Flaggschiff-Angebot. Lassen Sie uns in einem Strategie-Call Ihre Prozesse und Potenziale besprechen.',
    ctaText: 'Strategie-Call vereinbaren',
    ctaLink: 'https://calendly.com/your-link',
    benefits: [
      'Tiefe Prozessanalyse',
      'Konkrete ROI-Kalkulation',
      'Umsetzungsplan mit Quick Wins',
      'Technische Implementierung'
    ],
    nextSteps: [
      'Buchen Sie Ihren Strategie-Call (30 Minuten)',
      'Wir analysieren Ihre aktuellen Prozesse',
      'Sie erhalten eine individuelle Roadmap',
      'Optional: Wir setzen gemeinsam um'
    ],
    upsell: {
      title: 'Team-Training gewünscht?',
      description: 'Damit Ihr Team die KI-Tools nach der Implementierung selbst nutzen kann, empfehlen wir ein begleitendes Training.',
      ctaText: 'Mehr zu Academy-Trainings',
      ctaLink: '/academy'
    }
  },
  coi: {
    title: 'Wow! Diese Zahl sollte Sie wachrütteln.',
    subtitle: 'Ihr Cost of Inaction Ergebnis wurde an Ihre E-Mail gesendet.',
    message: 'Sie sehen jetzt, was Stillstand kostet. Lassen Sie uns in einem kurzen Call besprechen, wie Sie diese Kosten in Wachstum verwandeln.',
    ctaText: 'Kostenfreier Strategie-Call',
    ctaLink: 'https://calendly.com/your-link',
    benefits: [
      'Konkrete Quick Wins identifizieren',
      'ROI-Kalkulation für KI-Projekte',
      'Priorisierung nach Impact',
      'Sofort umsetzbare Maßnahmen'
    ],
    nextSteps: [
      'Prüfen Sie Ihre E-Mail für das detaillierte Ergebnis',
      'Buchen Sie einen kostenfreien Strategie-Call',
      'Wir zeigen Ihnen 3 konkrete Quick Wins',
      'Sie entscheiden, ob und wie wir zusammenarbeiten'
    ],
    upsell: {
      title: 'Bereit für den nächsten Schritt?',
      description: 'Mit der KI-Roadmap analysieren wir alle Ihre Prozesse und erstellen einen konkreten Umsetzungsplan.',
      ctaText: 'KI-Roadmap anfragen',
      ctaLink: '/roadmap'
    }
  }
};

const ThankYouPage: React.FC = () => {
  const [leadType, setLeadType] = useState<LeadType>('roadmap');

  useEffect(() => {
    // URL Parameter auslesen
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type') as LeadType;
    if (type && thankYouContent[type]) {
      setLeadType(type);
    }
  }, []);

  const content = thankYouContent[leadType];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 pt-32 pb-20 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Success Icon */}
        <div className="text-center mb-8 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-6 shadow-lg shadow-green-500/30">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
            {content.title}
          </h1>
          <p className="text-xl text-slate-600">
            {content.subtitle}
          </p>
        </div>

        {/* Main Message */}
        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            {content.message}
          </p>

          {/* CTA Button */}
          <Button
            size="lg"
            className="w-full mb-4"
            onClick={() => window.open(content.ctaLink, '_blank')}
          >
            <Calendar className="mr-2 w-5 h-5" />
            {content.ctaText}
          </Button>

          <p className="text-sm text-slate-500 text-center">
            Kostenlos & unverbindlich · Keine versteckten Kosten
          </p>
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-xl font-bold text-slate-900 mb-4">Das erwartet Sie:</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {content.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <span className="text-slate-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100 mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-xl font-bold text-slate-900 mb-4">Die nächsten Schritte:</h3>
          <ol className="space-y-3">
            {content.nextSteps.map((step, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 bg-brand-accent text-white rounded-full text-sm font-bold shrink-0">
                  {index + 1}
                </span>
                <span className="text-slate-700 pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Upsell (wenn vorhanden) */}
        {content.upsell && (
          <div className="bg-gradient-to-br from-brand-accent/5 to-brand-cyan/5 rounded-2xl p-8 border-2 border-brand-accent/20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center shrink-0">
                <ArrowRight className="w-6 h-6 text-brand-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{content.upsell.title}</h3>
                <p className="text-slate-700 mb-4">{content.upsell.description}</p>
                <Button
                  variant="outline"
                  onClick={() => window.location.href = content.upsell!.ctaLink}
                >
                  {content.upsell.ctaText}
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Contact Info */}
        <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <p className="text-slate-600 mb-4">Fragen? Wir sind für Sie da:</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:kontakt@kinews24.de" className="flex items-center gap-2 text-brand-accent hover:text-brand-dark transition-colors">
              <Mail className="w-5 h-5" />
              kontakt@kinews24.de
            </a>
            <span className="hidden sm:inline text-slate-300">•</span>
            <a href="tel:+49" className="flex items-center gap-2 text-brand-accent hover:text-brand-dark transition-colors">
              <Phone className="w-5 h-5" />
              +49 (0) XXX XXXXXX
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ThankYouPage;
