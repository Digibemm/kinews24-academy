import React, { useState } from 'react';
import { Mic2, Users, Building2, ChevronDown, ChevronUp, CheckCircle, Sparkles, Award, TrendingUp } from 'lucide-react';
import Button from '../components/Button';

const KeynotesPage: React.FC = () => {
  const [expandedWorkshops, setExpandedWorkshops] = useState(false);

  const featuredKeynotes = [
    {
      title: 'KI im Mittelstand: Wo anfangen, ohne sich zu verzetteln?',
      icon: <TrendingUp className="text-brand-accent" size={32} />,
      description: 'Die größte Herausforderung für KMU ist nicht die Technologie – sondern die richtige Priorisierung.',
      takeaways: [
        'Konkrete Startpunkte statt Überforderung',
        'Kostenfallen erkennen und vermeiden',
        'Erste Schritte, die sich sofort rechnen'
      ],
      audience: 'Unternehmen, Mittelstandsverbände, IHK'
    },
    {
      title: 'Vom Stillstand zum Durchbruch: KI als Wettbewerbsvorteil',
      icon: <Sparkles className="text-brand-cyan" size={32} />,
      description: 'Warum die Konkurrenz bereits loslegt – und wie Sie den Anschluss nicht verpassen.',
      takeaways: [
        'Was passiert, wenn Sie NICHT handeln',
        'Wie andere Unternehmen KI nutzen',
        'Ihr Aktionsplan für die nächsten 90 Tage'
      ],
      audience: 'Führungskräfte, Geschäftsführung, Strategieteams'
    },
    {
      title: 'ThinkAI: Mensch + KI = Erfolg',
      icon: <Award className="text-brand-accent" size={32} />,
      description: 'Sie als Pilot, KI als Co-Pilot. Wie die Zusammenarbeit zwischen Mensch und Maschine funktioniert.',
      takeaways: [
        'Die richtige Rollenverteilung zwischen Mensch und KI',
        'Wo KI brilliert – und wo Sie unverzichtbar bleiben',
        'Praxisbeispiele aus echten Projekten'
      ],
      audience: 'Branchenveranstaltungen, Tagungen, öffentliche Institutionen'
    }
  ];

  const workshopTopics = [
    'ChatGPT für Einsteiger:innen – Basics & Best Practices',
    'Prompt Engineering – Die Kunst der richtigen Frage',
    'KI-Tools im Marketing – Content, SEO & Social Media',
    'KI im Vertrieb – Lead-Generierung & Automatisierung',
    'KI für Trainer:innen & Berater:innen',
    'Video & Audio mit KI – Produktion & Postproduction',
    'Bilder & Grafik mit KI – Midjourney, DALL·E & Co.',
    'KI-Strategie für KMU – Von der Roadmap zur Umsetzung',
    'Legal & Ethical AI – Datenschutz, Urheberrecht, Compliance',
    'No-Code-Automatisierung mit KI – Zapier, Make & n8n',
    'Custom GPTs entwickeln – Eigene KI-Assistenten bauen',
    'KI im Customer Service – Chatbots & Support-Automation',
    'Coding mit KI – GitHub Copilot & Claude Code',
    'KI in der Personalarbeit – Recruiting & Onboarding',
    'Change Management bei KI-Einführung'
  ];

  const references = [
    { name: 'Reeperbahnfestival', location: 'Hamburg' },
    { name: 'Universal Music / Deutsche Grammophon', location: 'Berlin/München' },
    { name: 'VUT (Verband unabhängiger Musikunternehmen)', location: 'Berlin' },
    { name: 'Digital-Cluster Hamburg', location: 'Hamburg' },
    { name: 'FoodRegio', location: 'Schleswig-Holstein' },
    { name: 'Stadtwerke Neumünster', location: 'Neumünster' },
    { name: 'BDSH.sh (Bund der Selbstständigen)', location: 'Schleswig-Holstein' },
    { name: 'BDVT (Berufsverband für Training, Beratung & Coaching)', location: 'Deutschland' },
    { name: 'Landesanstalt für Kommunikation Baden-Württemberg', location: 'Stuttgart' },
    { name: 'Verschiedene Regionalverbände und Gilden', location: 'Deutschlandweit' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-cyan/5 via-transparent to-transparent"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left: Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-accent/10 text-brand-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Mic2 size={16} />
                Keynotes & Vorträge
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-6 leading-tight">
                Keynotes, die wirken – <span className="text-brand-accent">nicht nur unterhalten</span>
              </h1>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                KI ist kein Buzzword-Thema – sondern die größte Veränderung seit dem Internet.
                Ihre Teilnehmer:innen brauchen keine Theorie, sondern <strong>konkrete Antworten und Mut zum Anfangen</strong>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  onClick={() => {
                    const element = document.querySelector('#keynote-anfragen');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Keynote anfragen
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    const element = document.querySelector('#speaker-profile');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Zum Speaker-Profil
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-brand-cyan" />
                  <span>Unternehmen & Verbände</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 size={16} className="text-brand-cyan" />
                  <span>Öffentliche Institutionen</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={16} className="text-brand-cyan" />
                  <span>Events & Tagungen</span>
                </div>
              </div>
            </div>

            {/* Right: Speaker Image */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src="/team-photos/oliver-welling-speaker.png"
                  alt="Oliver Welling - Speaker & KI-Experte"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-accent/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-4 -left-4 w-40 h-40 bg-brand-cyan/20 rounded-full blur-3xl"></div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Keynotes */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              Unsere Keynote-Themen
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Drei bewährte Formate – oder wir entwickeln ein individuelles Thema für Ihre Veranstaltung.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredKeynotes.map((keynote, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300 border border-slate-200"
              >
                <div className="mb-6">{keynote.icon}</div>

                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-snug">
                  {keynote.title}
                </h3>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {keynote.description}
                </p>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-slate-700 mb-3">Was Ihre Teilnehmer:innen mitnehmen:</p>
                  <ul className="space-y-2">
                    {keynote.takeaways.map((takeaway, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle size={16} className="text-brand-cyan mt-0.5 flex-shrink-0" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <p className="text-xs text-slate-500">
                    <strong>Ideal für:</strong> {keynote.audience}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-brand-cyan/5 border border-brand-cyan/20 rounded-xl p-6 text-center">
            <p className="text-slate-700">
              <strong>Individuelles Thema gewünscht?</strong> Wir entwickeln gerne eine maßgeschneiderte Keynote für Ihre Veranstaltung –
              abgestimmt auf Ihre Branche, Ihr Publikum und Ihre Ziele.
            </p>
          </div>
        </div>
      </section>

      {/* Speaker Profile */}
      <section id="speaker-profile" className="py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="grid md:grid-cols-[200px_1fr] gap-8 items-start mb-8">

              {/* Speaker Image */}
              <div className="aspect-square rounded-xl overflow-hidden shadow-md">
                <img
                  src="/team-photos/oliver-welling.jpg"
                  alt="Oliver Welling"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Speaker Bio */}
              <div>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-2">
                  Oliver Welling
                </h2>
                <p className="text-lg text-brand-accent font-medium mb-6">
                  CEO KINEWS24-Academy · Digital-Pionier · Speaker
                </p>

                <div className="prose prose-slate max-w-none">
                  <p className="text-slate-700 leading-relaxed mb-4">
                    <strong>Digital Native der ersten Stunde:</strong> Bereits 1987 – mit 20 Jahren – programmierte Oliver Welling
                    seinen ersten KI-Chatbot (ELIZA) auf einem Atari ST. Seitdem hat ihn das Thema nicht mehr losgelassen.
                  </p>

                  <p className="text-slate-700 leading-relaxed mb-4">
                    In den 1990er Jahren gründete er eine der führenden Hamburger Digital-Agenturen, die er 2008 erfolgreich verkaufte.
                    Seit 2015 ist er als Berater und Trainer tätig – mit Schwerpunkt auf digitaler Transformation und KI-Integration.
                  </p>

                  <p className="text-slate-700 leading-relaxed mb-4">
                    <strong>2023 gründete er KINEWS24.de</strong> – eine Plattform, die täglich KI-News und praktische Tutorials veröffentlicht.
                    Heute erreicht die Plattform über <strong>100.000 Leser:innen</strong> und hat mehr als <strong>2.500 Artikel</strong> publiziert.
                  </p>

                  <p className="text-slate-700 leading-relaxed">
                    Seine Keynotes und Workshops verbinden technisches Know-how mit unternehmerischer Erfahrung –
                    <strong> praxisnah, unterhaltsam und sofort umsetzbar</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-slate-200">
              <div>
                <p className="text-3xl font-bold text-brand-accent mb-1">30+</p>
                <p className="text-sm text-slate-600">Jahre Digital-Erfahrung</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-brand-cyan mb-1">100k+</p>
                <p className="text-sm text-slate-600">Leser:innen auf KINEWS24.de</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-700 mb-1">2.500+</p>
                <p className="text-sm text-slate-600">Publizierte KI-Artikel</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* References */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              Referenzen & Auftraggeber
            </h2>
            <p className="text-lg text-slate-600">
              Von der Musikindustrie über Verbände bis zu öffentlichen Institutionen
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {references.map((ref, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-lg p-6 border border-slate-200 hover:border-brand-cyan/40 transition-colors"
              >
                <p className="font-semibold text-slate-900 mb-1">{ref.name}</p>
                <p className="text-sm text-slate-500">{ref.location}</p>
              </div>
            ))}
          </div>

          {/* Video Testimonials Section */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-accent to-brand-cyan rounded-full mb-4 shadow-lg">
                <Sparkles className="text-white" size={28} />
              </div>
              <h3 className="text-3xl font-display font-bold text-slate-900 mb-3">
                Was Kunden und Teilnehmer:innen sagen
              </h3>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Echte Stimmen aus Workshops, Keynotes und Weiterbildungen
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Video 1: Creation - Marco Limm */}
              <div className="group bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <video
                  controls
                  className="w-full h-auto"
                  preload="metadata"
                >
                  <source src="/videos/ow-ref-creation-marco-limm.mp4" type="video/mp4" />
                  Ihr Browser unterstützt das Video-Tag nicht.
                </video>
              </div>

              {/* Video 2: Deutsche Grammophon - Stefan Steigleder */}
              <div className="group bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <video
                  controls
                  className="w-full h-auto"
                  preload="metadata"
                >
                  <source src="/videos/ow-ref-deutsche-gemmophon-stefan-steigleder.mp4" type="video/mp4" />
                  Ihr Browser unterstützt das Video-Tag nicht.
                </video>
              </div>

              {/* Video 3: Schmolling Pop Feinkost */}
              <div className="group bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <video
                  controls
                  className="w-full h-auto"
                  preload="metadata"
                >
                  <source src="/videos/ow-ref-schmolling-pop-feinkost.mp4" type="video/mp4" />
                  Ihr Browser unterstützt das Video-Tag nicht.
                </video>
              </div>

              {/* Video 4: Teilnehmer */}
              <div className="group bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <video
                  controls
                  className="w-full h-auto"
                  preload="metadata"
                >
                  <source src="/videos/ow-ref-teilnehmer.mp4" type="video/mp4" />
                  Ihr Browser unterstützt das Video-Tag nicht.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Topics */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              Workshop-Themen
            </h2>
            <p className="text-lg text-slate-600">
              Neben Keynotes bieten wir auch intensive Tages-Workshops zu spezifischen KI-Themen an
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">
            <button
              onClick={() => setExpandedWorkshops(!expandedWorkshops)}
              className="w-full flex items-center justify-between p-6 hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-cyan/10 rounded-lg flex items-center justify-center">
                  <Award className="text-brand-cyan" size={20} />
                </div>
                <span className="font-semibold text-slate-900">
                  {workshopTopics.length} Workshop-Themen verfügbar
                </span>
              </div>
              {expandedWorkshops ? (
                <ChevronUp className="text-slate-400" size={24} />
              ) : (
                <ChevronDown className="text-slate-400" size={24} />
              )}
            </button>

            {expandedWorkshops && (
              <div className="border-t border-slate-200 p-6 animate-fade-in">
                <div className="grid sm:grid-cols-2 gap-3">
                  {workshopTopics.map((topic, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 p-3 bg-slate-50 rounded-lg"
                    >
                      <CheckCircle size={16} className="text-brand-cyan mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-700">{topic}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-brand-cyan/5 rounded-lg border border-brand-cyan/20">
                  <p className="text-sm text-slate-700">
                    <strong>Individuell buchbar:</strong> Alle Themen können als Tages- oder Halbtages-Workshop gebucht werden –
                    wahlweise vor Ort oder online.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              Investment
            </h2>
            <p className="text-lg text-slate-600">
              Transparente Preise, individuelle Angebote
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl border-2 border-slate-200 p-8 md:p-12 text-center">
            <div className="mb-8">
              <div className="text-5xl md:text-6xl font-bold text-slate-900 mb-2">
                Ab 1.280 €
              </div>
              <p className="text-lg text-slate-600">
                Tagespauschale · zzgl. Reisekosten bei Bedarf
              </p>
            </div>

            <div className="max-w-2xl mx-auto space-y-4 text-left mb-8">
              <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-slate-200">
                <CheckCircle size={20} className="text-brand-cyan mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Keynote (45-90 Min.)</p>
                  <p className="text-sm text-slate-600">Perfekt für Events, Tagungen und Verbandstreffen</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-slate-200">
                <CheckCircle size={20} className="text-brand-cyan mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Halbtages-Workshop (4 Std.)</p>
                  <p className="text-sm text-slate-600">Intensive Deep-Dives mit praktischen Übungen</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-slate-200">
                <CheckCircle size={20} className="text-brand-cyan mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900 mb-1">Ganztages-Workshop (8 Std.)</p>
                  <p className="text-sm text-slate-600">Umfassende Team-Trainings mit nachhaltiger Wirkung</p>
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-500 mb-8">
              Das finale Angebot erstellen wir individuell – je nach Format, Aufwand, Anreise und Ihren spezifischen Anforderungen.
            </p>

            <Button
              size="lg"
              onClick={() => {
                const element = document.querySelector('#keynote-anfragen');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Unverbindliches Angebot anfragen
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="keynote-anfragen" className="py-24 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Bereit für eine Keynote, die bewegt?
          </h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed">
            Lassen Sie uns in einem unverbindlichen Gespräch klären, welches Format am besten zu Ihrer Veranstaltung passt.
          </p>

          <Button
            size="lg"
            variant="primary"
            className="text-lg px-12 py-5 shadow-xl shadow-brand-accent/20"
            onClick={() => {
              window.location.hash = '#audit';
              if (window.location.pathname !== '/') {
                window.location.href = '/#audit';
              }
            }}
          >
            INFOGESPRÄCH VEREINBAREN
          </Button>

          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-slate-400">
            <a
              href="/coi-calculator"
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, '', '/coi-calculator');
                window.dispatchEvent(new Event('popstate'));
              }}
              className="hover:text-brand-accent underline"
            >
              Cost of Inaction berechnen
            </a>
            <span className="hidden md:inline">•</span>
            <a
              href="/roadmap"
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, '', '/roadmap');
                window.dispatchEvent(new Event('popstate'));
              }}
              className="hover:text-brand-accent underline"
            >
              KI-Roadmap ansehen
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default KeynotesPage;
