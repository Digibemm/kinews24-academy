import React from 'react';
import Button from '../components/Button';
import { CheckCircle2, ArrowRight, Calendar, Users, Zap, Award, BookOpen, Lightbulb, Target, Shield } from 'lucide-react';

const ThinkAIPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark text-brand-text">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 md:pt-40 pb-32 md:pb-40 overflow-hidden bg-brand-dark">
        {/* Background Ambience */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-accent/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-brand-cyan/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-10 md:mb-12 animate-fade-in-up backdrop-blur-md">
            <Award className="w-4 h-4 text-brand-cyan" />
            <span className="text-sm font-medium text-brand-cyan tracking-wide">BDVT - Geprüfte Fortbildung 2025</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 md:mb-10 leading-tight tracking-tight">
            <span className="text-gradient">ThinkAI</span><br />
            Weiterbildung zum KI-Expert:in
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-brand-muted mb-12 md:mb-14 leading-relaxed">
            <span className="text-white font-medium">Du als Pilot. KI als Co-Pilot.</span><br />
            Keine Videos, die morgen veraltet sind. Keine Theorie ohne Praxis.<br />
            Sondern: Live-Sessions, dein eigenes KI-Projekt und Wissen, das sofort wirkt.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 mb-16 md:mb-20">
            <Button
              size="lg"
              className="w-full sm:w-auto shadow-lg shadow-brand-accent/25 text-lg px-8 py-6"
              onClick={() => {
                window.location.href = '/#audit';
              }}
            >
              Kostenfreies Infogespräch <Calendar className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-sm text-brand-muted text-center max-w-md">
              <span className="text-brand-cyan font-medium">32 Stunden Live-Training · 7 praxisnahe Module</span>
              <br />
              <span className="inline-flex items-center gap-2 mt-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Wir klären, ob ThinkAI zu dir passt – unverbindlich & kostenfrei
              </span>
            </p>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 pb-10 md:pb-12 border-b border-white/10">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">Live</div>
              <div className="text-sm text-brand-muted">Kein veraltetes Videomaterial</div>
            </div>
            <div className="hidden md:block w-px h-16 bg-white/10"></div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">Praktisch</div>
              <div className="text-sm text-brand-muted">Dein eigenes Projekt umsetzen</div>
            </div>
            <div className="hidden md:block w-px h-16 bg-white/10"></div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">Individuell</div>
              <div className="text-sm text-brand-muted">Persönlicher Kick-off für jeden</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Light Background */}
      <div className="bg-[#F8FAFC] relative z-20 rounded-t-[40px] md:rounded-t-[60px] -mt-12 md:-mt-20 shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden pb-24">

        {/* ThinkAI Philosophy Section */}
        <section className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">
                Die ThinkAI-Philosophie
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Kein Tool-Sammelsurium. Sondern ein strukturiertes System mit klarer Rollenteilung.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-brand-accent/5 to-brand-cyan/5 p-8 rounded-2xl border-2 border-brand-accent/20">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-10 h-10 text-brand-accent" />
                  <h3 className="text-2xl font-bold text-slate-900">Du: Der Pilot</h3>
                </div>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Du behältst die strategische Kontrolle. Du denkst, entscheidest und gibst die Richtung vor. Deine menschliche Expertise, dein Urteilsvermögen und deine Kreativität bleiben unersetzlich.
                </p>
                <ul className="space-y-2">
                  {['Strategie definieren', 'Qualität sichern', 'Ethik bewahren', 'Verantwortung tragen'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl border-2 border-slate-200">
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="w-10 h-10 text-brand-cyan" />
                  <h3 className="text-2xl font-bold text-slate-900">KI: Dein Co-Pilot</h3>
                </div>
                <p className="text-slate-600 leading-relaxed mb-4">
                  KI übernimmt repetitive Aufgaben, liefert Daten-basierte Insights und beschleunigt deine Prozesse. Sie unterstützt dich – ersetzt dich aber nie.
                </p>
                <ul className="space-y-2">
                  {['Routinen automatisieren', 'Daten analysieren', 'Content erstellen', 'Prozesse beschleunigen'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center p-8 bg-slate-900 text-white rounded-2xl">
              <p className="text-xl mb-2">
                <strong>Der ThinkAI-Prozess:</strong> 6 Phasen (Collect → Share)
              </p>
              <p className="text-slate-300">
                Ein strukturiertes System, das du sofort in deiner Arbeit einsetzen kannst – dein USP gegenüber Kunden.
              </p>
            </div>
          </div>
        </section>

        {/* Why ThinkAI is Different */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">
                Warum ThinkAI anders ist
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Kein klassischer Onlinekurs. Sondern Live-Training mit echten Ergebnissen.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Lightbulb,
                  title: 'Immer aktuell',
                  description: 'Keine Videos, die morgen schon veraltet sind. Live-Sessions mit dem neuesten KI-Wissen – immer auf dem aktuellen Stand.'
                },
                {
                  icon: Target,
                  title: 'Dein eigenes Projekt',
                  description: 'Kein theoretisches Bla-Bla. Du setzt während des Kurses ein eigenes KI-Projekt um, das du sofort in deinem Alltag nutzen kannst.'
                },
                {
                  icon: Users,
                  title: 'Individueller Kick-off',
                  description: 'Wir starten mit einem persönlichen Gespräch: Was sind deine Ziele? Wo willst du hin? Darauf basiert dein Lernpfad.'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
                  <item.icon className="w-12 h-12 text-brand-accent mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modules Section */}
        <section className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">
                7 Module. 32 Stunden. Dein Durchbruch.
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Von KI-Grundlagen bis zu Automatisierung und Compliance – alles, was du brauchst.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  number: '01',
                  title: 'KI-Grundlagen & ThinkAI-Philosophie',
                  subtitle: 'Dein strategischer Kompass',
                  highlights: ['6-Phasen-Prozess (Collect → Share)', 'Mensch-zentrierte KI: IQ + AI', 'Knowledge Base & Checklisten'],
                  value: 'Praxisbewährtes System statt Tool-Chaos'
                },
                {
                  number: '02',
                  title: 'Kern-KI-Tools für Text & Bild',
                  subtitle: 'Die besten Sprachmodelle & Bildgeneratoren',
                  highlights: ['Fortgeschrittenes Prompting', 'Text- und Bilderzeugung', 'Tools gezielt auswählen'],
                  value: 'Schnellere Content-Erstellung, bessere Ergebnisse'
                },
                {
                  number: '03',
                  title: 'KI-Werkzeuge für Audio & Video',
                  subtitle: 'Multimediale Inhalte professionell erstellen',
                  highlights: ['Audio-KI-Tools', 'Video-Generierung', 'Praktische Anwendungen'],
                  value: 'Neue Formate für Marketing & Kunden'
                },
                {
                  number: '04',
                  title: 'KI im Marketing & Content',
                  subtitle: 'Knowledge Base als Fundament',
                  highlights: ['Persönliche Wissensbasis aufbauen', 'Zielgruppen präzise ansprechen', 'Content für alle Kanäle'],
                  value: 'Mehr Reichweite, weniger Aufwand'
                },
                {
                  number: '05',
                  title: 'Sales & Kundenservice',
                  subtitle: 'Verkaufsprozesse intelligent optimieren',
                  highlights: ['KI-gestützte Lead-Generierung', 'Chatbots & virtuelle Assistenten', 'CRM-Integration'],
                  value: 'Bessere Abschlussquoten, zufriedenere Kunden'
                },
                {
                  number: '06',
                  title: 'KI-Agenten & Prozessautomatisierung',
                  subtitle: 'No-Code/Low-Code-Plattformen nutzen',
                  highlights: ['Automatisierungs-Potenziale identifizieren', 'KI-Agenten verstehen', 'Eigenes Projekt umsetzen'],
                  value: 'Massive Zeitersparnis durch smarte Automatisierung'
                },
                {
                  number: '07',
                  title: 'EU AI Act & DSGVO',
                  subtitle: 'Mit Dr. Bettina Kähler',
                  highlights: ['Rechtliche Grundlagen', 'Ethik & Compliance', 'Haftungsrisiken vermeiden'],
                  value: 'Rechtssicherheit & Kundenvertrauen'
                }
              ].map((module, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-brand-accent/10 rounded-2xl flex items-center justify-center">
                        <span className="text-2xl font-bold text-brand-accent">{module.number}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{module.title}</h3>
                      <p className="text-brand-accent font-medium mb-4">{module.subtitle}</p>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm font-bold text-slate-700 mb-2">Was du lernst:</p>
                          <ul className="space-y-1">
                            {module.highlights.map((item, i) => (
                              <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-lg">
                          <p className="text-sm font-bold text-slate-900 mb-1">Dein Mehrwert:</p>
                          <p className="text-sm text-slate-600">{module.value}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Target Audience */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">
                Für wen ist ThinkAI?
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Für alle, die KI nicht nur verstehen, sondern wirklich einsetzen wollen.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-brand-accent/5 to-brand-cyan/5 p-8 rounded-2xl border border-brand-accent/20">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Perfekt für dich, wenn du...</h3>
                <ul className="space-y-4">
                  {[
                    'Als Trainer:in, Berater:in oder Coach dein Angebot mit KI erweitern willst',
                    'Als Selbstständige:r oder Unternehmer:in KI strategisch nutzen möchtest',
                    'Konkrete Projekte umsetzen willst – nicht nur Theorie lernen',
                    'Ein strukturiertes System suchst, das wirklich funktioniert',
                    'Dich langfristig als KI-Expert:in positionieren willst'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="w-6 h-6 text-brand-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-900 text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6">Was du mitbringen solltest:</h3>
                <ul className="space-y-4">
                  {[
                    'Bereitschaft, aktiv mitzuarbeiten (kein passives Video-Konsumieren)',
                    'Ein konkretes Projekt oder Geschäftsfeld, das du mit KI optimieren willst',
                    'Offenheit für neue Technologien und Prozesse',
                    'Zeit für 32 Stunden Live-Sessions + Eigenarbeit'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ArrowRight className="w-6 h-6 text-brand-cyan shrink-0 mt-0.5" />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Section */}
        <section className="py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">
                Investition in deine Zukunft
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Staatliche Förderung möglich – im Infogespräch klären wir alle Details.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl border-2 border-brand-accent/20 shadow-xl mb-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-6 mb-4">
                    <div>
                      <div className="text-5xl font-bold text-slate-900 mb-2">4.200 €</div>
                      <p className="text-slate-600">zzgl. 19% MwSt. · 32 Stunden Live-Training</p>
                    </div>
                    <img
                      src="/bdvt-siegel.png"
                      alt="BDVT - Geprüfte Fortbildung 2025"
                      className="h-24 w-auto"
                    />
                  </div>
                  <p className="text-xs text-slate-500 mb-6">BDVT - Geprüfte Fortbildung 2025</p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                      <span className="text-slate-700">7 Module mit Live-Sessions</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                      <span className="text-slate-700">Persönlicher Kick-off & individuelles Projekt</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                      <span className="text-slate-700">Experten-Netzwerk auch nach dem Kurs</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                      <span className="text-slate-700">BDVT-Zertifikat</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-brand-cyan/5 p-8 rounded-xl border-2 border-green-200">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="w-8 h-8 text-green-600" />
                    <h3 className="text-xl font-bold text-slate-900">Förderung möglich</h3>
                  </div>
                  <p className="text-slate-700 mb-4">
                    Für Soloselbständige: <strong className="text-green-700">Bis zu 90% Förderung</strong>
                  </p>
                  <p className="text-slate-600 text-sm mb-4">
                    Eigenanteil kann bei nur <strong>420 €</strong> liegen. Im Infogespräch prüfen wir gemeinsam deine Fördermöglichkeiten.
                  </p>
                  <p className="text-xs text-slate-500">
                    Förderung ist individuell und abhängig von verschiedenen Faktoren. Keine Garantie.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center p-8 bg-slate-900 text-white rounded-2xl">
              <p className="text-xl mb-2">
                <strong>Unsicher, ob ThinkAI zu dir passt?</strong>
              </p>
              <p className="text-slate-300">
                Genau dafür gibt es das Infogespräch. Wir klären alle Fragen, besprechen deine Ziele und schauen, ob die Weiterbildung der richtige Schritt ist.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-brand-dark to-brand-darker rounded-3xl mx-4 md:mx-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Bereit für den nächsten Schritt?
            </h2>
            <p className="text-xl text-brand-muted mb-10 leading-relaxed">
              Buche jetzt dein kostenfreies Infogespräch.<br />
              Wir beantworten alle Fragen und klären gemeinsam, ob ThinkAI zu deinen Zielen passt.
            </p>

            <div className="flex flex-col items-center gap-6">
              <Button
                size="lg"
                variant="primary"
                className="text-lg px-12 py-6 shadow-xl shadow-brand-accent/30"
                onClick={() => {
                  window.location.href = '/#audit';
                }}
              >
                <Calendar className="mr-2 w-5 h-5" />
                Jetzt Infogespräch buchen
              </Button>

              <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-brand-muted">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  15-20 Min. persönliches Gespräch
                </span>
                <span className="hidden md:inline">•</span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Kostenfrei & unverbindlich
                </span>
                <span className="hidden md:inline">•</span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Keine Verkaufstaktiken
                </span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ThinkAIPage;
