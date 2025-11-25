import React from 'react';
import Button from '../components/Button';
import { CheckCircle2, ArrowRight, Calendar, TrendingUp, Target, Zap } from 'lucide-react';

const RoadmapPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark text-brand-text">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 md:pt-40 pb-32 md:pb-40 overflow-hidden bg-brand-dark">
        {/* Background Ambience */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-accent/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-brand-cyan/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-10 md:mb-12 animate-fade-in-up backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></span>
            <span className="text-sm font-medium text-brand-cyan tracking-wide">Sofort starten, langfristig profitieren</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 md:mb-10 leading-tight tracking-tight">
            Von <span className="text-gradient">„Wo anfangen?"</span><br />
            zu Ihrem konkreten KI-Fahrplan
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-brand-muted mb-12 md:mb-14 leading-relaxed">
            <span className="text-white font-medium">Klare Prioritäten. Echte Zahlen. Sofort umsetzbar.</span><br />
            Wir zeigen Ihnen, welche Prozesse Sie zuerst angehen, was sich rechnet und wie Sie ohne Fachchinesisch starten.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 mb-16 md:mb-20">
            <Button
              size="lg"
              className="w-full sm:w-auto shadow-lg shadow-brand-accent/25 text-lg px-8 py-6"
              onClick={() => {
                window.history.pushState({}, '', '/termin?source=roadmap');
                window.dispatchEvent(new Event('popstate'));
                window.scrollTo(0, 0);
              }}
            >
              Kostenfreies Erstgespräch buchen <Calendar className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-sm text-brand-muted text-center max-w-md">
              <span className="text-brand-cyan font-medium">30 Minuten Strategiegespräch – unverbindlich & kostenfrei</span>
              <br />
              <span className="inline-flex items-center gap-2 mt-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Wir klären Ihre Fragen • Analysieren Ihr Potenzial • Zeigen nächste Schritte
              </span>
            </p>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 pb-10 md:pb-12 border-b border-white/10">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">Erste Schritte</div>
              <div className="text-sm text-brand-muted">können Sie sofort umsetzen</div>
            </div>
            <div className="hidden md:block w-px h-16 bg-white/10"></div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-sm text-brand-muted">für Ihre Prozesse entwickelt</div>
            </div>
            <div className="hidden md:block w-px h-16 bg-white/10"></div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">Klarer Plan</div>
              <div className="text-sm text-brand-muted">für die nächsten 3-6 Monate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Light Background */}
      <div className="bg-[#F8FAFC] relative z-20 rounded-t-[40px] md:rounded-t-[60px] -mt-12 md:-mt-20 shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden pb-24">

        {/* Problem Section */}
        <section className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">
                Warum scheitern die meisten KI-Projekte?
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Nicht an der Technologie – sondern an fehlender Strategie und falschen Prioritäten.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Fehlende Strategie",
                  description: "Tools werden gekauft, aber nicht strategisch eingesetzt. Es fehlt der Plan: Welche Prozesse zuerst? Welche Tools passen zusammen? Wo ist der echte Hebel?"
                },
                {
                  title: "Unrealistische Erwartungen",
                  description: "KI soll 'alles automatisieren' – ohne klare Ziele oder konkrete Rechnung. Das Ergebnis: Frustration statt Erfolg."
                },
                {
                  title: "Fehlende Priorisierung",
                  description: "Zu viele Ideen auf einmal. Keine Klarheit, womit starten. Einfache Verbesserungen werden übersehen, während komplexe Projekte scheitern."
                },
                {
                  title: "Mangelndes Buy-In",
                  description: "Das Team sieht KI als Bedrohung statt Chance. Es fehlt die Kommunikation: Was bringt es uns? Wie hilft es konkret?"
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            {/* CTA after Problem Section */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Stoppen Sie das Trial-and-Error
                </h3>
                <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                  Lassen Sie uns gemeinsam klären, welche KI-Lösungen für Ihr Unternehmen wirklich Sinn machen – im kostenfreien Erstgespräch.
                </p>
                <Button
                  size="lg"
                  className="shadow-xl shadow-brand-accent/30"
                  onClick={() => {
                    window.history.pushState({}, '', '/termin?source=roadmap');
                    window.dispatchEvent(new Event('popstate'));
                    window.scrollTo(0, 0);
                  }}
                >
                  <Calendar className="mr-2 w-5 h-5" />
                  Jetzt Erstgespräch buchen
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Solution/Process Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">
                So entwickeln wir Ihre KI-Roadmap
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Von der ersten Analyse bis zum fertigen Aktionsplan – strukturiert, individuell und praxisnah.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  icon: Calendar,
                  step: "Schritt 1",
                  title: "Kostenfreies Erstgespräch",
                  description: "Wir lernen Ihr Unternehmen kennen, analysieren Ihre größten Herausforderungen und klären, ob eine KI-Roadmap für Sie sinnvoll ist. Keine Verkaufsgespräch – echte Beratung.",
                  deliverables: ["30 Min. Strategiecall", "Potenzial-Check", "Unverbindlich & kostenfrei"]
                },
                {
                  icon: Target,
                  step: "Schritt 2",
                  title: "Roadmap-Workshop",
                  description: "Gemeinsam schauen wir uns Ihre Prozesse an: Wo verschwenden Sie heute Zeit und Geld? Welche Aufgaben lassen sich sinnvoll automatisieren? Was können Sie sofort angehen, was braucht mehr Planung?",
                  deliverables: ["Prozessanalyse", "Potenziale erkennen", "Erste Schritte definieren"]
                },
                {
                  icon: TrendingUp,
                  step: "Schritt 3",
                  title: "Analyse & Konzeption",
                  description: "Wir berechnen ROI, priorisieren Maßnahmen und erstellen Ihren individuellen Aktionsplan. Mit Tool-Empfehlungen, Ressourcenplanung und realistischen Zeitschienen.",
                  deliverables: ["ROI-Kalkulation", "Priorisierungsmatrix", "Tool-Stack Empfehlung"]
                },
                {
                  icon: CheckCircle2,
                  step: "Schritt 4",
                  title: "Übergabe & Start",
                  description: "Sie erhalten Ihre fertige Roadmap mit allen Details. Wir präsentieren die Ergebnisse, beantworten Fragen und zeigen Ihnen die ersten konkreten Umsetzungsschritte.",
                  deliverables: ["Roadmap-Präsentation", "Aktionsplan (3-6 Monate)", "Implementierungs-Support"]
                }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col md:flex-row gap-6 items-start bg-slate-50 p-8 rounded-2xl border border-slate-200">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-brand-accent/10 rounded-2xl flex items-center justify-center">
                      <item.icon className="w-8 h-8 text-brand-accent" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-brand-accent mb-2">{item.step}</div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.deliverables.map((deliverable, i) => (
                        <span key={i} className="inline-flex items-center gap-1 text-sm text-slate-700 bg-white px-3 py-1 rounded-full border border-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          {deliverable}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">
                Was Sie konkret erhalten
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Keine theoretischen Konzepte – sondern ein sofort umsetzbarer Aktionsplan.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Ihr Aktionsplan",
                  items: ["Was Sie in den ersten Wochen umsetzen", "Was mittelfristig kommt", "Langfristige Perspektive", "Klare Zeitschiene mit Meilensteinen"]
                },
                {
                  title: "Konkrete Zahlen",
                  items: ["Was können Sie einsparen?", "Was kostet die Umsetzung?", "Wann rechnet es sich?", "Welche Ressourcen brauchen Sie?"]
                },
                {
                  title: "Tool-Empfehlungen",
                  items: ["Welche KI-Tools passen zu Ihnen?", "Wie setzen Sie sie ein?", "Was müssen Sie beachten?", "Wo liegen die Risiken?"]
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">{item.title}</h3>
                  <ul className="space-y-3">
                    {item.items.map((subitem, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600">
                        <CheckCircle2 className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                        <span>{subitem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* CTA after What You Get Section */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-br from-brand-accent/10 to-brand-cyan/10 rounded-2xl p-8 md:p-12 border-2 border-brand-accent/20">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  Bereit, Ihre individuelle Roadmap zu erhalten?
                </h3>
                <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                  Im kostenfreien Erstgespräch zeigen wir Ihnen, wie Ihre konkrete Roadmap aussehen könnte und welche Quick Wins Sie sofort umsetzen können.
                </p>
                <Button
                  size="lg"
                  className="shadow-xl shadow-brand-accent/30"
                  onClick={() => {
                    window.history.pushState({}, '', '/termin?source=roadmap');
                    window.dispatchEvent(new Event('popstate'));
                    window.scrollTo(0, 0);
                  }}
                >
                  <Calendar className="mr-2 w-5 h-5" />
                  Kostenloses Erstgespräch vereinbaren
                </Button>
                <p className="text-sm text-slate-500 mt-4">
                  30 Minuten • Unverbindlich • Keine Verpflichtung
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">
                Warum sich die Investition lohnt
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Sie haben im COI-Rechner gesehen, was Stillstand kostet.<br />
                Die Roadmap zeigt Ihnen konkret, wie Sie das ändern.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                <div className="text-4xl font-bold text-slate-900 mb-4">Ab 2.000€</div>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Individuell nach Ihrem Bedarf und der Komplexität. Transparentes Angebot im kostenfreien Erstgespräch – keine versteckten Kosten.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                    <span className="text-slate-700">Start mit einem einzelnen Prozess möglich</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                    <span className="text-slate-700">Bei Erfolg weitere Bereiche angehen</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                    <span className="text-slate-700">Keine langfristige Bindung</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-brand-accent/5 to-brand-cyan/5 p-8 rounded-2xl border border-brand-accent/20">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Was Sie dafür bekommen</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Target className="w-6 h-6 text-brand-accent shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-slate-900">Klarheit statt Rätselraten</p>
                      <p className="text-slate-600 text-sm">Wissen Sie genau, welche Prozesse Sie zuerst angehen</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 text-brand-accent shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-slate-900">Konkrete Zahlen</p>
                      <p className="text-slate-600 text-sm">Einsparpotenziale und ROI-Kalkulation für jede Maßnahme</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="w-6 h-6 text-brand-accent shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-slate-900">Sofort umsetzbar</p>
                      <p className="text-slate-600 text-sm">Aktionsplan mit konkreten ersten Schritten für diese Woche</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-brand-accent shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-slate-900">Kein Risiko</p>
                      <p className="text-slate-600 text-sm">Erst Erstgespräch, dann Angebot – Sie entscheiden</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center p-8 bg-slate-900 text-white rounded-2xl">
              <p className="text-xl mb-2">
                <strong>Ohne Roadmap:</strong> Falsche Prozesse angehen, frustriertes Team, Geld in die falschen Lösungen stecken, 6+ Monate im Kreis drehen.
              </p>
              <p className="text-slate-300">
                <strong className="text-white">Mit Roadmap:</strong> Von Anfang an die richtige Reihenfolge. Keine vergeudete Zeit. Keine Fehlstarts.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">
                Häufige Fragen zur KI-Roadmap
              </h2>
              <p className="text-xl text-slate-600">
                Hier beantworten wir die wichtigsten Fragen vorab.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "Was kostet eine KI-Roadmap?",
                  answer: "Ab 2.000€ – individuell nach Ihrem Bedarf. Sie können mit einem einzelnen Prozess starten (z.B. Angebotsstellung automatisieren) und bei Erfolg weitere Bereiche angehen. Im kostenfreien Erstgespräch analysieren wir gemeinsam Ihr Potenzial und erstellen ein transparentes Angebot."
                },
                {
                  question: "Wie lange dauert der gesamte Prozess?",
                  answer: "Von der ersten Anfrage bis zur fertigen Roadmap vergehen in der Regel 2-4 Wochen – abhängig von Ihrer Verfügbarkeit und der Komplexität. Der Workshop selbst dauert ca. 2-3 Stunden, die Analyse und Ausarbeitung übernehmen wir. Die Präsentation der Ergebnisse dauert etwa 60-90 Minuten."
                },
                {
                  question: "Ist das auch für kleine Unternehmen geeignet?",
                  answer: "Absolut. Wir arbeiten mit Einzelunternehmer:innen, Selbstständigen, Trainer:innen und Berater:innen genauso wie mit größeren Betrieben. Gerade kleine Unternehmen profitieren besonders, weil wir uns auf schnell umsetzbare Maßnahmen konzentrieren, die sofort Wirkung zeigen. Sie brauchen kein großes IT-Team oder riesige Budgets."
                },
                {
                  question: "Brauchen wir technisches Know-how?",
                  answer: "Nein. Genau dafür sind wir da. Sie kennen Ihre Prozesse, wir kennen die KI-Möglichkeiten. Wir übersetzen komplexe Technologie in verständliche Lösungen und zeigen Ihnen, wie Sie diese ohne IT-Abteilung umsetzen können. Viele unserer Tools sind so einfach zu bedienen wie WhatsApp."
                },
                {
                  question: "Was, wenn wir am Ende nichts davon umsetzen können?",
                  answer: "Das passiert nicht. Wir entwickeln die Roadmap MIT Ihnen, nicht FÜR Sie. Das bedeutet: Wir berücksichtigen von Anfang an Ihr Budget, Ihre Ressourcen und Ihre Fähigkeiten. Jede Empfehlung ist realistisch umsetzbar. Außerdem priorisieren wir so, dass Sie mit einfachen Schritten starten und Erfolge sehen, bevor größere Investitionen kommen."
                },
                {
                  question: "Was unterscheidet Sie von anderen Beratern?",
                  answer: "Drei Dinge: 1) Wir reden Klartext statt Fachchinesisch. 2) Wir verkaufen keine Beratungs-Stunden, sondern Ergebnisse. 3) Wir kennen die Realität von KMU – keine theoretischen Konzepte, sondern praktische Lösungen, die auch mit begrenzten Ressourcen funktionieren. Viele unserer Kunden setzen die ersten Maßnahmen bereits während der Roadmap-Erstellung um."
                },
                {
                  question: "Können Sie auch bei der Umsetzung helfen?",
                  answer: "Ja. Die Roadmap ist der erste Schritt. Danach können Sie entweder selbst umsetzen (mit unserem Leitfaden) oder wir begleiten Sie bei der Implementierung. Von einzelnen Workshops über kontinuierliche Begleitung bis hin zur vollständigen Umsetzung – Sie entscheiden, wie viel Unterstützung Sie brauchen."
                }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-start gap-3">
                    <span className="text-brand-accent shrink-0">?</span>
                    {faq.question}
                  </h3>
                  <p className="text-slate-600 leading-relaxed pl-8">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center p-8 bg-slate-50 rounded-2xl border border-slate-200">
              <p className="text-slate-700 mb-4">
                <strong>Noch eine Frage?</strong> Rufen Sie uns an oder buchen Sie direkt ein Erstgespräch.
              </p>
              <p className="text-slate-600 text-sm">
                Wir beantworten alle Ihre Fragen – ehrlich, transparent und ohne Verkaufsdruck.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="roadmap-anfragen" className="py-20 md:py-28 bg-gradient-to-br from-brand-dark to-brand-darker rounded-3xl mx-4 md:mx-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Bereit für den ersten Schritt?
            </h2>
            <p className="text-xl text-brand-muted mb-10 leading-relaxed">
              Buchen Sie jetzt Ihr kostenfreies Erstgespräch.<br className="hidden md:inline" />
              Wir analysieren Ihr Potenzial, klären Ihre Fragen und zeigen Ihnen konkrete nächste Schritte.
            </p>

            <div className="flex flex-col items-center gap-6">
              <Button
                size="lg"
                variant="primary"
                className="text-lg px-12 py-6 shadow-xl shadow-brand-accent/30"
                onClick={() => {
                  window.history.pushState({}, '', '/termin?source=roadmap');
                  window.dispatchEvent(new Event('popstate'));
                  window.scrollTo(0, 0);
                }}
              >
                <Calendar className="mr-2 w-5 h-5" />
                Erstgespräch buchen (30 Min.)
              </Button>

              <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-brand-muted">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Kostenfrei & unverbindlich
                </span>
                <span className="hidden md:inline">•</span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Echte Beratung, kein Verkaufsgespräch
                </span>
                <span className="hidden md:inline">•</span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Termine kurzfristig verfügbar
                </span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default RoadmapPage;
