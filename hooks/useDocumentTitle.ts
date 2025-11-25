import { useEffect } from 'react';

interface PageMeta {
  title: string;
  description: string;
}

export const useDocumentTitle = (meta: PageMeta) => {
  useEffect(() => {
    // Update title
    document.title = meta.title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', meta.description);

    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', meta.title);

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', meta.description);
  }, [meta.title, meta.description]);
};

export const PAGE_META: Record<string, PageMeta> = {
  '/': {
    title: 'KINEWS24-Academy | KI-Integration für den Mittelstand',
    description: 'Praxisnahe KI-Integration für KMU. Von der Roadmap über Quick Wins bis zur unternehmensweiten Skalierung. Berechnen Sie jetzt Ihren Cost of Inaction.'
  },
  '/roadmap': {
    title: 'KI-Roadmap: Von "Wo anfangen?" zu klarem Aktionsplan | KINEWS24-Academy',
    description: 'Ihre individuelle KI-Strategie in 5 Werktagen. Prozessanalyse, ROI-Rechnung und priorisierte Maßnahmen. Quick Wins identifizieren und sofort umsetzen.'
  },
  '/coi-calculator': {
    title: 'Cost of Inaction Rechner - Was kostet Sie der Stillstand? | KINEWS24-Academy',
    description: 'Berechnen Sie in 2 Minuten, wie viel Geld Sie durch fehlende KI-Integration verlieren. Kostenlos, keine Anmeldung, sofortiges Ergebnis.'
  },
  '/implementierung': {
    title: 'KI-Implementierung: Quick Wins in 30 Tagen | KINEWS24-Academy',
    description: 'Von der ersten Automatisierung bis zur unternehmensweiten Skalierung. Praxisnahe KI-Implementierung für KMU.'
  },
  '/academy': {
    title: 'KI-Academy: Wissen, das wirkt | KINEWS24-Academy',
    description: 'KI verstehen, nutzen und umsetzen. Von Onlinekursen über Masterclasses bis zu Firmen-Workshops. Praxisnah, verständlich und sofort anwendbar.'
  },
  '/ki-experte-weiterbildung': {
    title: 'ThinkAI - Weiterbildung zum KI-Expert:in | KINEWS24-Academy',
    description: 'Du als Pilot. KI als Co-Pilot. 32 Stunden Live-Training · 7 Module · Dein eigenes Projekt. BDVT-geprüft. Förderung möglich.'
  },
  '/keynotes': {
    title: 'KI-Keynotes & Vorträge - Oliver Welling | KINEWS24-Academy',
    description: 'Keynotes, die wirken – nicht nur unterhalten. Praxisnahe KI-Vorträge für Events, Verbände und Unternehmen. Ab 1.280€.'
  },
  '/thank-you': {
    title: 'Vielen Dank für Ihre Anfrage! | KINEWS24-Academy',
    description: 'Ihre Anfrage ist bei uns eingegangen. Wir melden uns innerhalb von 24 Stunden bei Ihnen.'
  },
  '/beratung': {
    title: 'KI-Beratung: Strategie & Begleitung | KINEWS24-Academy',
    description: 'Langfristige strategische Begleitung Ihrer KI-Transformation. Von der Strategie bis zur erfolgreichen Implementierung.'
  },
  '/impressum': {
    title: 'Impressum | KINEWS24-Academy',
    description: 'Impressum und rechtliche Informationen der KINEWS24-Academy.'
  },
  '/datenschutz': {
    title: 'Datenschutzerklärung | KINEWS24-Academy',
    description: 'Datenschutzerklärung der KINEWS24-Academy. Informationen zur Verarbeitung Ihrer personenbezogenen Daten.'
  },
  '/agb': {
    title: 'AGB - Allgemeine Geschäftsbedingungen | KINEWS24-Academy',
    description: 'Allgemeine Geschäftsbedingungen der KINEWS24-Academy für Beratungs-, Trainings- und Weiterbildungsleistungen.'
  },
  '/termin': {
    title: 'Termin buchen - Kostenloses Erstgespräch | KINEWS24-Academy',
    description: 'Buchen Sie jetzt Ihr kostenloses Erstgespräch. Wir besprechen Ihre KI-Strategie, Roadmap oder Weiterbildung. Unverbindlich und auf Augenhöhe.'
  },
  '/faq': {
    title: 'FAQ - Häufig gestellte Fragen zu KI-Beratung & Academy | KINEWS24-Academy',
    description: 'Alle Antworten zu KI-Roadmap, Kosten, BAFA-Förderung, Ablauf, Academy und Implementierung. Über 30 FAQs zu KI-Integration für den Mittelstand.'
  }
};
