import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import Button from '../components/Button';

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('alle');
  const [searchQuery, setSearchQuery] = useState('');

  const faqs: FAQ[] = [
    // Allgemein
    {
      category: 'Allgemein',
      question: 'Brauchen wir wirklich KI – oder ist das nur Hype?',
      answer: 'Es ist ein technologischer Wandel vergleichbar mit dem Internet. Unsere Kunden sparen im Schnitt 20-30% Prozesskosten im ersten Jahr. KI ist kein Hype, sondern eine fundamentale Technologie, die Geschäftsprozesse nachhaltig verändert.'
    },
    {
      category: 'Allgemein',
      question: 'Für welche Unternehmen ist KINEWS24-Academy geeignet?',
      answer: 'Wir arbeiten hauptsächlich mit KMUs (10-500 Mitarbeiter) zusammen, die KI strategisch einsetzen wollen. Besonders geeignet für Geschäftsführer und Führungskräfte, die konkrete Automatisierung statt theoretischer Beratung suchen.'
    },
    {
      category: 'Allgemein',
      question: 'Was unterscheidet euch von anderen KI-Beratern?',
      answer: 'Wir liefern keine PowerPoint-Strategien, sondern funktionierende Lösungen. Unser Fokus liegt auf Quick Wins in 30 Tagen, messbaren ROI und echter Implementierung statt reiner Beratung.'
    },
    {
      category: 'Allgemein',
      question: 'Müssen wir bereits KI-Erfahrung haben?',
      answer: 'Nein, überhaupt nicht. Wir holen Sie da ab, wo Sie stehen. Viele unserer erfolgreichsten Projekte starten bei Null. Wir erklären alles verständlich und ohne Fachchinesisch.'
    },

    // KI-Roadmap
    {
      category: 'KI-Roadmap',
      question: 'Was kostet eine KI-Roadmap?',
      answer: 'Die KI-Roadmap startet ab 2.000 € zzgl. MwSt. und ist individuell auf Ihr Unternehmen zugeschnitten. Durch die BAFA-Förderung können Sie bis zu 50% der Kosten erstattet bekommen. Die Investition amortisiert sich in der Regel innerhalb von 3-6 Monaten durch die identifizierten Einsparpotenziale.'
    },
    {
      category: 'KI-Roadmap',
      question: 'Was ist in der KI-Roadmap enthalten?',
      answer: 'Die Roadmap umfasst: (1) Prozessanalyse und Potenzialidentifikation, (2) ROI-Berechnung für jeden Use Case, (3) Priorisierte Umsetzungsempfehlung, (4) Technologie-Auswahl, (5) Konkrete Implementierungsschritte. Sie erhalten einen klaren Aktionsplan, nicht nur eine Präsentation.'
    },
    {
      category: 'KI-Roadmap',
      question: 'Wie lange dauert die Erstellung einer Roadmap?',
      answer: 'In der Regel 5-10 Werktage, abhängig von der Unternehmensgröße und Komplexität. Wir arbeiten effizient: Kickoff-Workshop (1 Tag), Analyse (3-5 Tage), Präsentation der Ergebnisse (1 Tag).'
    },
    {
      category: 'KI-Roadmap',
      question: 'Was passiert nach der Roadmap?',
      answer: 'Sie haben drei Optionen: (1) Sie setzen selbst um (wir unterstützen bei Bedarf), (2) Wir implementieren die Quick Wins für Sie, (3) Wir begleiten Sie langfristig als strategischer Partner. Es gibt keine Verpflichtung zur weiteren Zusammenarbeit.'
    },
    {
      category: 'KI-Roadmap',
      question: 'Bekomme ich wirklich konkrete Umsetzungsschritte?',
      answer: 'Ja, absolut. Sie erhalten keine theoretische Strategie-Folie, sondern einen konkreten Aktionsplan mit Prioritäten, benötigten Ressourcen, Zeitaufwand und ROI-Prognose für jeden Use Case. Direkt umsetzbar.'
    },

    // Ablauf & Zeitrahmen
    {
      category: 'Ablauf',
      question: 'Wie lange dauert es, bis wir Ergebnisse sehen?',
      answer: 'Wir fokussieren uns auf Quick Wins. Die erste Automatisierung steht oft schon nach 30 Tagen. Komplexere Projekte dauern 60-90 Tage. Sie sehen Fortschritte Woche für Woche, nicht erst nach Monaten.'
    },
    {
      category: 'Ablauf',
      question: 'Wie läuft die Zusammenarbeit ab?',
      answer: 'Schritt 1: Kostenloses Erstgespräch (30 Min.). Schritt 2: KI-Roadmap erstellen (5-10 Tage). Schritt 3: Quick Win implementieren (30 Tage). Schritt 4: Skalierung auf weitere Prozesse (optional). Alles transparent und planbar.'
    },
    {
      category: 'Ablauf',
      question: 'Arbeitet ihr vor Ort oder remote?',
      answer: 'Beides möglich. Die meisten Projekte laufen hybrid: Kickoff-Workshops vor Ort, Umsetzung remote mit regelmäßigen Check-ins. Das spart Reisekosten und Zeit. Bei Bedarf kommen wir auch komplett vor Ort.'
    },
    {
      category: 'Ablauf',
      question: 'Wie viel Zeit müssen wir als Unternehmen investieren?',
      answer: 'Für die Roadmap: ca. 1-2 Tage (Workshops + Interviews). Für die Implementierung: 2-4 Stunden pro Woche für Feedback und Tests. Wir halten den Aufwand für Sie minimal – Sie bleiben im Tagesgeschäft.'
    },

    // Kosten & Förderung
    {
      category: 'Kosten',
      question: 'Wie funktioniert die BAFA-Förderung?',
      answer: 'Das Bundesamt für Wirtschaft und Ausfuhrkontrolle (BAFA) fördert Beratungsleistungen für KMUs mit bis zu 50% der Kosten (max. 3.200 €). Wir unterstützen Sie beim Antrag. Die Förderung gilt für die KI-Roadmap und Beratungsleistungen.'
    },
    {
      category: 'Kosten',
      question: 'Gibt es versteckte Kosten?',
      answer: 'Nein. Alle Preise sind transparent und werden vorab vereinbart. Es gibt keine versteckten Kosten, keine Überraschungen. Sie wissen genau, was Sie bekommen und was es kostet.'
    },
    {
      category: 'Kosten',
      question: 'Was kostet die Implementierung?',
      answer: 'Die Kosten hängen vom Umfang ab. Quick Wins starten bei ca. 5.000 €, komplexere Automatisierungen bei 10.000-20.000 €. Wir kalkulieren immer mit klarem ROI – die Investition muss sich rechnen.'
    },
    {
      category: 'Kosten',
      question: 'Welche laufenden Kosten entstehen nach der Implementierung?',
      answer: 'Je nach Lösung: API-Kosten (z.B. OpenAI, Claude), Software-Lizenzen, ggf. Cloud-Hosting. Typischerweise 100-500 € pro Monat. Wir kalkulieren das im Vorfeld transparent mit Ihnen durch.'
    },

    // Team & Change Management
    {
      category: 'Team',
      question: 'Was ist, wenn unser Team überfordert ist?',
      answer: 'Change Management ist Teil unseres Prozesses. Wir nehmen Ihr Team mit, statt Lösungen überzustülpen. Schulungen, Workshops und kontinuierliche Unterstützung gehören dazu. Niemand wird zurückgelassen.'
    },
    {
      category: 'Team',
      question: 'Haben wir Angst vor Jobverlust durch KI?',
      answer: 'Verständliche Sorge. Unsere Erfahrung: KI ersetzt keine Jobs, sondern nervige Aufgaben. Ihre Mitarbeiter gewinnen Zeit für wertvolle Tätigkeiten. Wir kommunizieren das klar und binden das Team aktiv ein.'
    },
    {
      category: 'Team',
      question: 'Brauchen wir eigene IT-Experten?',
      answer: 'Nein. Wir setzen auf No-Code/Low-Code-Lösungen, die Ihr Team selbst warten kann. Natürlich ist es hilfreich, wenn jemand technikaffin ist, aber IT-Spezialisten sind nicht zwingend nötig.'
    },

    // Academy & Weiterbildung
    {
      category: 'Academy',
      question: 'Was ist der Unterschied zwischen Roadmap und Academy?',
      answer: 'Die Roadmap ist "done for you" – wir analysieren und setzen um. Die Academy ist "done with you" – wir befähigen Ihr Team, KI selbstständig zu nutzen. Viele Kunden kombinieren beides: erst Roadmap für Strategie, dann Academy für Befähigung.'
    },
    {
      category: 'Academy',
      question: 'Für wen ist die ThinkAI Weiterbildung geeignet?',
      answer: 'Für Trainer:innen, Berater:innen, Coaches, Selbstständige und Führungskräfte, die KI professionell in ihrem Business einsetzen wollen. 32 Stunden Live-Training, 7 Module, BDVT-geprüft. Keine Vorkenntnisse nötig.'
    },
    {
      category: 'Academy',
      question: 'Sind die Academy-Angebote förderbar?',
      answer: 'Ja, ThinkAI ist als BDVT-geprüfte Weiterbildung förderfähig. Je nach Bundesland gibt es verschiedene Förderprogramme (z.B. Bildungsscheck NRW, Weiterbildungsbonus Bayern). Wir beraten Sie gerne dazu.'
    },

    // Technisch
    {
      category: 'Technisch',
      question: 'Welche KI-Tools setzt ihr ein?',
      answer: 'Je nach Use Case: ChatGPT, Claude, Make.com, Zapier, n8n, Custom GPTs, API-Integrationen. Wir sind Tool-agnostisch und wählen die beste Lösung für Ihren Anwendungsfall – nicht die trendigste.'
    },
    {
      category: 'Technisch',
      question: 'Ist unsere Datensicherheit gewährleistet?',
      answer: 'Absolut. Wir arbeiten DSGVO-konform, nutzen EU-Server wo möglich und implementieren sichere API-Verbindungen. Sensible Daten bleiben in Ihrem System. Datenschutz hat höchste Priorität.'
    },
    {
      category: 'Technisch',
      question: 'Was ist, wenn die KI Fehler macht?',
      answer: 'KI ist nicht perfekt. Deshalb bauen wir immer Kontrollmechanismen ein: Human-in-the-Loop, Plausibilitätschecks, Eskalationswege. Bei kritischen Prozessen prüft immer ein Mensch das Ergebnis.'
    },
    {
      category: 'Technisch',
      question: 'Können wir die Lösungen später selbst anpassen?',
      answer: 'Ja, das ist unser Ziel. Wir setzen auf wartbare, dokumentierte Lösungen. Bei No-Code-Tools können Sie direkt selbst Änderungen vornehmen. Bei komplexeren Lösungen bieten wir Schulungen an.'
    },

    // Sonstiges
    {
      category: 'Sonstiges',
      question: 'Macht ihr auch Keynotes und Vorträge?',
      answer: 'Ja, Oliver Welling hält praxisnahe KI-Keynotes für Events, Tagungen und Verbände. Keine Buzzwords, sondern echte Insights. Ab 1.280 € zzgl. MwSt. Mehr Infos unter /keynotes.'
    },
    {
      category: 'Sonstiges',
      question: 'Habt ihr Referenzen?',
      answer: 'Ja, wir haben mit Unternehmen aus Maschinenbau, Beratung, E-Commerce und Dienstleistung gearbeitet. Konkrete Case Studies finden Sie auf unserer Website. Auf Anfrage stellen wir gerne Kontakt zu Referenzkunden her.'
    },
    {
      category: 'Sonstiges',
      question: 'Was ist, wenn wir unzufrieden sind?',
      answer: 'Transparente Kommunikation ist uns wichtig. Wenn Sie unzufrieden sind, sprechen wir das sofort an und finden eine Lösung. Bei der Roadmap bieten wir eine Zufriedenheitsgarantie: Wenn Sie nicht zufrieden sind, finden wir eine faire Lösung.'
    }
  ];

  const categories = ['alle', ...Array.from(new Set(faqs.map(faq => faq.category)))];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'alle' || faq.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div className="pt-32 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
            Häufig gestellte Fragen
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Alle Antworten auf Ihre Fragen zu KI-Roadmap, Academy, Ablauf und Kosten
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Frage suchen..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-brand-accent text-white shadow-lg shadow-brand-accent/30'
                    : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                {category === 'alle' ? 'Alle' : category}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4 mb-16">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full px-6 md:px-8 py-6 flex justify-between items-start text-left focus:outline-none gap-4"
                >
                  <div className="flex-1">
                    <span className={`font-bold text-base md:text-lg ${openIndex === idx ? 'text-brand-accent' : 'text-slate-900'}`}>
                      {faq.question}
                    </span>
                    {openIndex !== idx && (
                      <span className="block text-xs text-slate-500 mt-1">{faq.category}</span>
                    )}
                  </div>
                  <div className="shrink-0">
                    {openIndex === idx ? (
                      <ChevronUp className="text-brand-accent" size={24} />
                    ) : (
                      <ChevronDown className="text-slate-400" size={24} />
                    )}
                  </div>
                </button>
                {openIndex === idx && (
                  <div className="px-6 md:px-8 pb-6 animate-fade-in">
                    <div className="text-slate-700 leading-relaxed">
                      {faq.answer}
                    </div>
                    <div className="mt-3 text-xs text-slate-500 font-medium">
                      Kategorie: {faq.category}
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-600 text-lg">
                Keine FAQs gefunden für "{searchQuery}"
              </p>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-brand-dark to-brand-darker rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ihre Frage ist nicht dabei?
          </h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Kein Problem! Buchen Sie ein kostenloses Erstgespräch und wir beantworten
            alle Ihre Fragen persönlich.
          </p>
          <Button
            size="lg"
            onClick={() => {
              window.history.pushState({}, '', '/termin?source=general');
              window.dispatchEvent(new Event('popstate'));
              window.scrollTo(0, 0);
            }}
          >
            Kostenloses Erstgespräch buchen
          </Button>
        </div>

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

export default FAQPage;
