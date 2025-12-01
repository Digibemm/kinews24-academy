import { useEffect } from 'react';

interface PageMeta {
  title: string;
  description: string;
  keywords?: string;
}

const BASE_URL = 'https://kinews24-academy.de';
const OG_IMAGE = `${BASE_URL}/Logo-kinews24-white.png`;

export const useDocumentTitle = (meta: PageMeta) => {
  useEffect(() => {
    const currentPath = window.location.pathname;
    const canonicalUrl = `${BASE_URL}${currentPath}`;

    // Update title
    document.title = meta.title;

    // Update meta description
    updateOrCreateMeta('name', 'description', meta.description);

    // Update keywords if provided
    if (meta.keywords) {
      updateOrCreateMeta('name', 'keywords', meta.keywords);
    }

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // Open Graph tags
    updateOrCreateMeta('property', 'og:title', meta.title);
    updateOrCreateMeta('property', 'og:description', meta.description);
    updateOrCreateMeta('property', 'og:type', 'website');
    updateOrCreateMeta('property', 'og:url', canonicalUrl);
    updateOrCreateMeta('property', 'og:image', OG_IMAGE);
    updateOrCreateMeta('property', 'og:image:width', '1200');
    updateOrCreateMeta('property', 'og:image:height', '630');
    updateOrCreateMeta('property', 'og:locale', 'de_DE');
    updateOrCreateMeta('property', 'og:site_name', 'KINEWS24-Academy');

    // Twitter Card tags
    updateOrCreateMeta('name', 'twitter:card', 'summary_large_image');
    updateOrCreateMeta('name', 'twitter:title', meta.title);
    updateOrCreateMeta('name', 'twitter:description', meta.description);
    updateOrCreateMeta('name', 'twitter:image', OG_IMAGE);
  }, [meta.title, meta.description, meta.keywords]);
};

function updateOrCreateMeta(attr: 'name' | 'property', attrValue: string, content: string) {
  let element = document.querySelector(`meta[${attr}="${attrValue}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attr, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

export const PAGE_META: Record<string, PageMeta> = {
  '/': {
    title: 'KI-Beratung Mittelstand | DSGVO-konforme KI-Integration | KINEWS24-Academy',
    description: 'KI-Beratung für den Mittelstand mit rechtlicher Absicherung. DSGVO-konforme KI-Integration, EU AI Act-Beratung durch Fachanwältin. KI-Roadmap ab 2.000€. Standorte: Hamburg & Bayern.',
    keywords: 'KI-Beratung Mittelstand, KI-Integration, DSGVO-konforme KI, EU AI Act, KI-Roadmap, KI-Beratung Hamburg, KI-Beratung Bayern, KI-Transformation'
  },
  '/roadmap': {
    title: 'KI-Roadmap erstellen lassen | DSGVO & EU AI Act konform | KINEWS24-Academy',
    description: 'KI-Roadmap mit rechtlicher Absicherung: Prozessanalyse, ROI-Berechnung, Technologie-Auswahl. DSGVO-konform & EU AI Act-ready durch Fachanwältin. Ab 2.000€. Kostenfreies Erstgespräch.',
    keywords: 'KI-Roadmap erstellen, KI-Strategie entwickeln, DSGVO KI, EU AI Act Beratung, KI ROI berechnen, KI-Compliance Beratung, rechtssichere KI'
  },
  '/coi-calculator': {
    title: 'Cost of Inaction Rechner | KI ROI berechnen | KINEWS24-Academy',
    description: 'Cost of Inaction Rechner: Berechnen Sie in 2 Minuten Ihre Stillstandskosten durch fehlende KI-Integration. KI ROI kostenlos ermitteln. Keine Anmeldung, sofortiges Ergebnis.',
    keywords: 'Cost of Inaction Rechner, KI ROI berechnen, Stillstandskosten KI, KI Kosten berechnen, KI Wirtschaftlichkeit'
  },
  '/implementierung': {
    title: 'KI-Implementierung: Quick Wins in 30 Tagen | KINEWS24-Academy',
    description: 'Von der ersten Automatisierung bis zur unternehmensweiten Skalierung. Praxisnahe KI-Implementierung für KMU.'
  },
  '/academy': {
    title: 'KI-Weiterbildung & Schulung für Unternehmen | KINEWS24-Academy',
    description: 'KI-Weiterbildung für Mittelstand: Von KI-Schulungen über Workshops bis Coaching. Praxisnah, BDVT-geprüft. KI lernen ohne IT-Kenntnisse. Hamburg & Bayern.',
    keywords: 'KI-Weiterbildung, KI-Schulung Unternehmen, KI lernen, KI-Training, KI-Workshop, BDVT, KI-Weiterbildung Hamburg'
  },
  '/ki-experte-weiterbildung': {
    title: 'ThinkAI: KI-Experte Weiterbildung | BDVT-geprüft | KINEWS24-Academy',
    description: 'KI-Experte Weiterbildung ThinkAI: 32h Live-Training, 7 Module, eigenes Projekt. Für Berater, Trainer & Coaches. BDVT-geprüft, Förderung möglich. Jetzt anmelden.',
    keywords: 'KI-Experte Weiterbildung, ThinkAI, KI-Weiterbildung für Berater, KI-Coach werden, BDVT-geprüft, KI-Zertifizierung'
  },
  '/keynotes': {
    title: 'KI-Keynote Speaker buchen | Oliver Welling | KINEWS24-Academy',
    description: 'KI-Keynote Speaker Oliver Welling buchen: Praxisnahe KI-Vorträge für Events, Verbände, Unternehmen. Keine Theorie, sondern echte Insights. Ab 1.280€.',
    keywords: 'KI-Keynote Speaker, KI-Vortrag buchen, Oliver Welling, KI-Speaker Deutschland, KI-Keynote, KI-Vortrag Event'
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
