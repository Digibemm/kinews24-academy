// Schema.org structured data for SEO

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "KINEWS24-Academy",
  "alternateName": "KINEWS24 Academy",
  "url": "https://kinews24-academy.de",
  "logo": "https://kinews24-academy.de/Logo-kinews24-white.png",
  "description": "KI-Transformationsagentur für den deutschen Mittelstand. DSGVO-konforme KI-Beratung, Roadmap-Entwicklung und Weiterbildung mit rechtlicher Absicherung durch Fachanwältin.",
  "foundingDate": "2024",
  "address": [
    {
      "@type": "PostalAddress",
      "addressLocality": "Hamburg",
      "addressCountry": "DE"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "Waxensteinstraße 4",
      "addressLocality": "Tutzing",
      "postalCode": "82327",
      "addressCountry": "DE"
    }
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "kontakt@kinews24-academy.de",
    "contactType": "customer service",
    "availableLanguage": ["de"]
  },
  "sameAs": [
    "https://www.linkedin.com/company/kinews24"
  ],
  "areaServed": {
    "@type": "Country",
    "name": "Deutschland"
  },
  "knowsAbout": [
    "Künstliche Intelligenz",
    "KI-Beratung",
    "KI-Integration",
    "DSGVO-Compliance",
    "EU AI Act",
    "KI-Weiterbildung",
    "Digitale Transformation"
  ]
};

export const localBusinessSchemaHamburg = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "KINEWS24-Academy Hamburg",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Hamburg",
    "addressCountry": "DE"
  },
  "url": "https://kinews24-academy.de",
  "telephone": "",
  "email": "kontakt@kinews24-academy.de",
  "priceRange": "€€",
  "areaServed": ["Hamburg", "Norddeutschland", "Deutschland"]
};

export const localBusinessSchemaTutzing = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "KINEWS24-Academy Tutzing",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Waxensteinstraße 4",
    "addressLocality": "Tutzing",
    "postalCode": "82327",
    "addressRegion": "Bayern",
    "addressCountry": "DE"
  },
  "url": "https://kinews24-academy.de",
  "email": "kontakt@kinews24-academy.de",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "47.9097",
    "longitude": "11.2792"
  },
  "priceRange": "€€",
  "areaServed": ["Bayern", "München", "Starnberg", "Deutschland"]
};

export const serviceRoadmapSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "KI-Roadmap Beratung",
  "name": "KI-Roadmap für den Mittelstand",
  "description": "Individuelle KI-Strategie mit Prozessanalyse, ROI-Berechnung, priorisierten Maßnahmen und rechtlicher Absicherung. DSGVO-konform und EU AI Act-ready durch Fachanwältin.",
  "provider": {
    "@type": "Organization",
    "name": "KINEWS24-Academy"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Deutschland"
  },
  "offers": {
    "@type": "Offer",
    "price": "2000",
    "priceCurrency": "EUR",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "2000",
      "priceCurrency": "EUR",
      "valueAddedTaxIncluded": false
    }
  }
};

export const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "ThinkAI - KI-Experte Weiterbildung",
  "description": "32 Stunden Live-Training in 7 Modulen. Werden Sie KI-Expert:in mit praktischem Projekt. BDVT-geprüft, Förderung möglich.",
  "provider": {
    "@type": "Organization",
    "name": "KINEWS24-Academy"
  },
  "educationalLevel": "Professional",
  "courseMode": "online",
  "inLanguage": "de",
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online",
    "instructor": {
      "@type": "Person",
      "name": "Oliver Welling"
    }
  }
};

export const faqSchemaRoadmap = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Was ist in der KI-Roadmap enthalten?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Roadmap umfasst sechs zentrale Komponenten: (1) Prozessanalyse und Potenzialidentifikation, (2) ROI-Berechnung für jeden Use Case, (3) Priorisierte Umsetzungsempfehlung, (4) Technologie-Auswahl, (5) Konkrete Implementierungsschritte, (6) Rechtliche Absicherung durch Fachanwältin – DSGVO-konform und EU AI Act-ready."
      }
    },
    {
      "@type": "Question",
      "name": "Was kostet eine KI-Roadmap?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ab 2.000€ – individuell nach Ihrem Bedarf. Sie können mit einem einzelnen Prozess starten und bei Erfolg weitere Bereiche angehen. Im kostenfreien Erstgespräch erstellen wir ein transparentes Angebot."
      }
    },
    {
      "@type": "Question",
      "name": "Wie stellen Sie sicher, dass wir rechtlich auf der sicheren Seite sind?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wir haben eine Fachanwältin im Team, die jeden Roadmap-Prozess begleitet und sicherstellt, dass Ihre KI-Implementierung DSGVO-konform ist und den Anforderungen des EU AI Act entspricht."
      }
    },
    {
      "@type": "Question",
      "name": "Wie lange dauert der gesamte Prozess?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Von der ersten Anfrage bis zur fertigen Roadmap vergehen in der Regel 2-4 Wochen. Der Workshop dauert ca. 2-3 Stunden, die Präsentation der Ergebnisse etwa 60-90 Minuten."
      }
    }
  ]
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Oliver Welling",
  "jobTitle": "KI-Berater & Keynote Speaker",
  "worksFor": {
    "@type": "Organization",
    "name": "KINEWS24-Academy"
  },
  "knowsAbout": [
    "Künstliche Intelligenz",
    "KI-Strategie",
    "Digitale Transformation",
    "KI-Weiterbildung"
  ]
};
