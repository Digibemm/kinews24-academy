import React, { useState } from 'react';
import Button from '../components/Button';
import { CheckCircle2, ArrowRight, Calendar, BookOpen, Users, Presentation, GraduationCap } from 'lucide-react';

type TabType = 'thinkai' | 'coaching' | 'keynotes' | 'workshops';

const AcademyPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('thinkai');

  const tabs = [
    { id: 'thinkai' as TabType, label: 'ThinkAI Weiterbildung', icon: '⭐' },
    { id: 'coaching' as TabType, label: '1:1 Coaching', icon: '👤' },
    { id: 'keynotes' as TabType, label: 'Keynotes', icon: '🎤' },
    { id: 'workshops' as TabType, label: 'Firmen-Workshops', icon: '📅' },
  ];

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
            <span className="text-sm font-medium text-brand-cyan tracking-wide">Wissen, das bleibt. Skills, die wirken.</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 md:mb-10 leading-tight tracking-tight">
            <span className="text-gradient">KI verstehen.</span><br />
            KI nutzen. KI umsetzen.
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-brand-muted mb-12 md:mb-14 leading-relaxed">
            <span className="text-white font-medium text-xl md:text-2xl">Wir befähigen Sie, KI selbstständig zu nutzen.</span><br />
            <span className="text-brand-cyan font-semibold">Praxisnah. Verständlich. Sofort anwendbar.</span>
          </p>

          <div className="flex flex-col items-center justify-center gap-4 mb-16 md:mb-20">
            <Button
              size="lg"
              className="w-full sm:w-auto shadow-lg shadow-brand-accent/25 text-lg px-8 py-6"
              onClick={() => {
                const element = document.querySelector('#academy-angebote');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Angebote entdecken <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-sm text-brand-muted text-center max-w-md">
              <span className="text-brand-cyan font-medium">Von Onlinekursen bis zu Firmen-Workshops</span>
              <br />
              <span className="inline-flex items-center gap-2 mt-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Für Einzelpersonen, Teams und ganze Unternehmen
              </span>
            </p>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 pb-10 md:pb-12 border-b border-white/10">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">Praxisnah</div>
              <div className="text-sm text-brand-muted">Keine Theorie, sondern Anwendung</div>
            </div>
            <div className="hidden md:block w-px h-16 bg-white/10"></div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">Flexibel</div>
              <div className="text-sm text-brand-muted">Online, vor Ort oder hybrid</div>
            </div>
            <div className="hidden md:block w-px h-16 bg-white/10"></div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">Individuell</div>
              <div className="text-sm text-brand-muted">Angepasst an Ihr Level</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Light Background */}
      <div className="bg-[#F8FAFC] relative z-20 rounded-t-[40px] md:rounded-t-[60px] -mt-12 md:-mt-20 shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden pb-24">

        {/* Difference Section - Academy vs Roadmap */}
        <section className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">
                Wann Academy, wann Roadmap?
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Beides hat seinen Platz – je nachdem, was Sie gerade brauchen.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl border-2 border-brand-accent/20">
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="w-8 h-8 text-brand-accent" />
                  <h3 className="text-2xl font-bold text-slate-900">KI-Roadmap</h3>
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  <strong>Wenn Sie KI konkret umsetzen wollen.</strong><br />
                  Wir analysieren Ihre Prozesse, zeigen konkrete Einsparpotenziale und setzen gemeinsam mit Ihnen um.
                </p>
                <ul className="space-y-3">
                  {[
                    "Strategische Planung",
                    "ROI-Kalkulation",
                    "Technische Umsetzung",
                    "Agenturleistung"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl border-2 border-brand-cyan/20">
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="w-8 h-8 text-brand-cyan" />
                  <h3 className="text-2xl font-bold text-slate-900">KI-Academy</h3>
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  <strong>Wenn Sie KI selbst beherrschen wollen.</strong><br />
                  Wir vermitteln Wissen, trainieren Skills und befähigen Sie, KI eigenständig zu nutzen.
                </p>
                <ul className="space-y-3">
                  {[
                    "Wissensvermittlung",
                    "Praktische Anwendung",
                    "Individuelle Befähigung",
                    "Workshops & Training"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-slate-100 rounded-xl text-center">
              <p className="text-slate-700">
                <strong>Übrigens:</strong> Viele Kunden kombinieren beides – erst die Roadmap für die Strategie, dann Academy-Trainings für die eigenständige Umsetzung.
              </p>
            </div>
          </div>
        </section>

        {/* Offerings Section */}
        <section id="academy-angebote" className="py-20 md:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">
                Unsere Academy-Angebote
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Von Selbstlern-Kursen bis zu individuellen Firmen-Workshops – für jedes Bedürfnis das richtige Format.
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="mb-12 sticky top-20 z-30 bg-white/95 backdrop-blur-md pb-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 border-b border-slate-200">
              <div className="overflow-x-auto hide-scrollbar">
                <div className="flex gap-2 min-w-max mx-auto justify-start md:justify-center pb-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`
                        px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-200 whitespace-nowrap
                        ${activeTab === tab.id
                          ? 'bg-brand-accent text-white shadow-lg shadow-brand-accent/30'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }
                      `}
                    >
                      <span className="mr-2">{tab.icon}</span>
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {activeTab === 'thinkai' && (
              <div className="bg-gradient-to-br from-brand-accent/10 to-white p-8 md:p-12 rounded-2xl border-2 border-brand-accent/30 shadow-xl animate-fade-in-up">
                <div className="grid md:grid-cols-[2fr_1fr] gap-8">

                  {/* Left: Details */}
                  <div>
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 bg-brand-accent/10 rounded-2xl flex items-center justify-center shrink-0">
                        <GraduationCap className="w-8 h-8 text-brand-accent" />
                      </div>
                      <div>
                        <div className="inline-block px-3 py-1 bg-brand-accent/20 text-brand-accent rounded-full text-xs font-bold mb-2">
                          ⭐ FLAGSHIP-KURS
                        </div>
                        <h3 className="text-3xl font-bold text-slate-900 mb-2">ThinkAI Weiterbildung</h3>
                        <p className="text-brand-accent font-semibold">Du als Pilot. KI als Co-Pilot.</p>
                      </div>
                    </div>

                    <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                      Unser strukturiertes Live-Training für alle, die KI professionell einsetzen wollen.
                      32 Stunden, 7 Module, Ihr eigenes Projekt – BDVT-geprüft und praxisorientiert.
                    </p>

                    {/* Key Features */}
                    <div className="mb-8">
                      <h4 className="font-bold text-slate-900 mb-4">Was Sie lernen:</h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">KI-Strategie für Ihr Business</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">Prompt Engineering & Tools</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">Content-Erstellung & Marketing</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">Automatisierung & No-Code</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">Rechtliche & ethische Aspekte</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">Ihr eigenes KI-Projekt</span>
                        </div>
                      </div>
                    </div>

                    {/* What's Included */}
                    <div className="bg-white rounded-xl p-6 mb-6 border border-slate-200">
                      <h4 className="font-bold text-slate-900 mb-4">Das ist enthalten:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-slate-900">32 Stunden Live-Training</p>
                            <p className="text-sm text-slate-600">Keine aufgezeichneten Videos – echte Interaktion</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-slate-900">7 praxisnahe Module</p>
                            <p className="text-sm text-slate-600">Von Strategie bis Umsetzung</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-slate-900">Ihr eigenes KI-Projekt</p>
                            <p className="text-sm text-slate-600">Direkt anwendbar in Ihrem Business</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-slate-900">BDVT-geprüftes Zertifikat</p>
                            <p className="text-sm text-slate-600">Anerkannte Weiterbildung</p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* For Whom */}
                    <div className="bg-orange-50 rounded-xl p-4 border border-orange-100">
                      <p className="text-sm text-slate-700">
                        <strong className="text-slate-900">Perfekt für:</strong> Trainer:innen, Berater:innen, Coaches, Selbstständige –
                        alle, die KI strukturiert und professionell lernen wollen.
                      </p>
                    </div>
                  </div>

                  {/* Right: Pricing Box */}
                  <div>
                    <div className="bg-white rounded-2xl p-8 border-2 border-brand-accent shadow-xl sticky top-24">
                      <div className="text-center mb-6">
                        <div className="inline-block px-4 py-2 bg-brand-accent/10 text-brand-accent rounded-full text-sm font-bold mb-4">
                          LIVE-TRAINING
                        </div>
                        <div className="text-5xl font-bold text-slate-900 mb-2">4.200 €</div>
                        <p className="text-sm text-slate-600">zzgl. MwSt. · Förderung möglich</p>

                        {/* BDVT Badge */}
                        <div className="mt-4 pt-4 border-t border-slate-200">
                          <div className="inline-flex items-center gap-2 text-xs text-slate-600">
                            <span className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-brand-accent font-bold">BDVT</span>
                            <span>Geprüfte Weiterbildung</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3 mb-6 pb-6 border-b border-slate-200">
                        <div className="flex items-center gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                          <span>32 Stunden Live-Training</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                          <span>7 Module + eigenes Projekt</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                          <span>BDVT-Zertifikat</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                          <span>Lebenslanger Zugang</span>
                        </div>
                      </div>

                      <Button className="w-full mb-3" size="lg" variant="primary" onClick={() => window.location.href = '/ki-experte-weiterbildung'}>
                        Mehr Infos zur Weiterbildung
                      </Button>

                      <Button className="w-full" size="lg" variant="outline" onClick={() => {
                        window.history.pushState({}, '', '/termin?source=thinkai');
                        window.dispatchEvent(new Event('popstate'));
                        window.scrollTo(0, 0);
                      }}>
                        Infogespräch buchen
                      </Button>
                    </div>
                  </div>

                </div>
              </div>
              )}

              {activeTab === 'coaching' && (
              <div id="coaching" className="bg-gradient-to-br from-brand-cyan/5 to-white p-8 md:p-12 rounded-2xl border-2 border-brand-cyan/20 shadow-lg animate-fade-in-up">
                <div className="grid md:grid-cols-[2fr_1fr] gap-8">

                  {/* Left: Details */}
                  <div>
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 bg-brand-cyan/10 rounded-2xl flex items-center justify-center shrink-0">
                        <Users className="w-8 h-8 text-brand-cyan" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-slate-900 mb-2">1:1 KI-Coaching</h3>
                        <p className="text-brand-cyan font-semibold">Individuell. Flexibel. Auf den Punkt.</p>
                      </div>
                    </div>

                    <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                      Sie brauchen keine Standard-Schulung, sondern konkrete Antworten auf Ihre spezifischen Fragen.
                      Im 1:1 Coaching arbeiten wir direkt an Ihren Themen – egal ob Content-Erstellung, Marketing-Optimierung oder Use-Case-Entwicklung.
                    </p>

                    {/* Pain Points / Use Cases */}
                    <div className="mb-8">
                      <h4 className="font-bold text-slate-900 mb-4">Typische Coaching-Themen:</h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">KI-Integration in Ihr Business</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">Content-Erstellung mit KI</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">Marketing-Automatisierung</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">Konkrete Use-Cases für Ihre Nische</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">Tool-Auswahl & Implementierung</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">Eigene Templates & Automatisierungen</span>
                        </div>
                      </div>
                    </div>

                    {/* What's Included */}
                    <div className="bg-white rounded-xl p-6 mb-6 border border-slate-200">
                      <h4 className="font-bold text-slate-900 mb-4">Das ist im Coaching enthalten:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-slate-900">1:1 Video-Calls</p>
                            <p className="text-sm text-slate-600">Persönliche Sessions, genau dann wenn Sie sie brauchen</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-slate-900">E-Mail-Support zwischen den Sessions</p>
                            <p className="text-sm text-slate-600">Keine Frage bleibt unbeantwortet</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-slate-900">Praktische Aufgaben & Homework</p>
                            <p className="text-sm text-slate-600">Sie lernen durch echte Anwendung</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-slate-900">Unterstützung bei Templates & Automatisierungen</p>
                            <p className="text-sm text-slate-600">Wir bauen gemeinsam, was Sie brauchen</p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* For Whom */}
                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                      <p className="text-sm text-slate-700">
                        <strong className="text-slate-900">Perfekt für:</strong> Selbstständige, Trainer:innen, Berater:innen, Coaches, Führungskräfte –
                        alle, die KI individuell und auf ihr Business zugeschnitten lernen wollen.
                      </p>
                    </div>
                  </div>

                  {/* Right: Pricing Box */}
                  <div>
                    <div className="bg-white rounded-2xl p-8 border-2 border-brand-cyan shadow-xl sticky top-24">
                      <div className="text-center mb-6">
                        <div className="inline-block px-4 py-2 bg-brand-cyan/10 text-brand-cyan rounded-full text-sm font-bold mb-4">
                          10-STUNDEN-PAKET
                        </div>
                        <div className="text-5xl font-bold text-slate-900 mb-2">1.200 €</div>
                        <p className="text-sm text-slate-600">innerhalb von 3 Monaten flexibel einlösbar</p>
                      </div>

                      <div className="space-y-3 mb-6 pb-6 border-b border-slate-200">
                        <div className="flex items-center gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                          <span>10 Stunden individuelles Coaching</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                          <span>Flexible Termin-Buchung</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                          <span>E-Mail-Support inklusive</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                          <span>Online oder vor Ort möglich</span>
                        </div>
                      </div>

                      <Button className="w-full mb-4" size="lg" onClick={() => {
                        window.history.pushState({}, '', '/termin?source=coaching');
                        window.dispatchEvent(new Event('popstate'));
                        window.scrollTo(0, 0);
                      }}>
                        Coaching-Paket anfragen
                      </Button>

                      <p className="text-xs text-center text-slate-500">
                        Unverbindliches Erstgespräch · Keine versteckten Kosten
                      </p>
                    </div>
                  </div>

                </div>
              </div>
              )}

              {activeTab === 'keynotes' && (
              <div className="bg-gradient-to-br from-orange-500/5 to-white p-8 md:p-12 rounded-2xl border-2 border-orange-500/20 shadow-lg animate-fade-in-up">
                <div className="grid md:grid-cols-[2fr_1fr] gap-8">

                  {/* Left: Details */}
                  <div>
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center shrink-0">
                        <Presentation className="w-8 h-8 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-slate-900 mb-2">Keynotes & Vorträge</h3>
                        <p className="text-orange-600 font-semibold">Keynotes, die wirken – nicht nur unterhalten.</p>
                      </div>
                    </div>

                    <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                      Inspirierende Vorträge für Ihr Event, Ihre Tagung oder Ihren Verband. Wir machen KI verständlich
                      und zeigen konkrete Anwendungsfälle aus der Praxis – praxisnah, authentisch, ohne Buzzwords.
                    </p>

                    {/* Featured Keynote Themes */}
                    <div className="mb-8">
                      <h4 className="font-bold text-slate-900 mb-4">Beliebte Keynote-Themen:</h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-slate-900">KI im Mittelstand: Wo anfangen?</p>
                            <p className="text-sm text-slate-600">Konkrete Startpunkte statt Überforderung</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-slate-900">Vom Stillstand zum Durchbruch</p>
                            <p className="text-sm text-slate-600">KI als Wettbewerbsvorteil nutzen</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-slate-900">ThinkAI: Mensch + KI = Erfolg</p>
                            <p className="text-sm text-slate-600">Die richtige Rollenverteilung zwischen Mensch und Maschine</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* What's Included */}
                    <div className="bg-white rounded-xl p-6 mb-6 border border-slate-200">
                      <h4 className="font-bold text-slate-900 mb-4">Was Sie erwarten dürfen:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-slate-900">Praxisnah & authentisch</p>
                            <p className="text-sm text-slate-600">Keine Buzzwords, sondern echte Insights</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-slate-900">Individuell auf Ihr Event zugeschnitten</p>
                            <p className="text-sm text-slate-600">Passt zu Ihrer Branche und Zielgruppe</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-slate-900">Live-Demos & konkrete Beispiele</p>
                            <p className="text-sm text-slate-600">Zum Anfassen und direkt anwendbar</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-slate-900">Vorbesprechung & Feinabstimmung</p>
                            <p className="text-sm text-slate-600">Damit die Keynote genau passt</p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Target Audience */}
                    <div className="bg-orange-50 rounded-xl p-4 border border-orange-100">
                      <p className="text-sm text-slate-700">
                        <strong className="text-slate-900">Perfekt für:</strong> Unternehmensveranstaltungen, Verbandstreffen,
                        IHK-Events, Tagungen, öffentliche Institutionen, Branchennetzwerke
                      </p>
                    </div>
                  </div>

                  {/* Right: Pricing Box */}
                  <div>
                    <div className="bg-white rounded-2xl p-8 border-2 border-orange-500 shadow-xl sticky top-24">
                      <div className="text-center mb-6">
                        <div className="inline-block px-4 py-2 bg-orange-500/10 text-orange-600 rounded-full text-sm font-bold mb-4">
                          TAGESHONORAR
                        </div>
                        <div className="text-5xl font-bold text-slate-900 mb-2">1.280 €</div>
                        <p className="text-sm text-slate-600">zzgl. MwSt. · inkl. Vorbereitung & Anreise (DE)</p>
                      </div>

                      <div className="space-y-3 mb-6 pb-6 border-b border-slate-200">
                        <div className="flex items-center gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                          <span>30-90 Min Keynote (flexibel)</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                          <span>Individuelle Themenwahl</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                          <span>Vorbesprechung inklusive</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                          <span>Live-Demos & Q&A</span>
                        </div>
                      </div>

                      <Button className="w-full mb-3" size="lg" onClick={() => window.location.href = '/keynotes'}>
                        Mehr Infos & Referenzen
                      </Button>

                      <Button className="w-full" size="lg" variant="outline" onClick={() => {
                        window.history.pushState({}, '', '/termin?source=keynote');
                        window.dispatchEvent(new Event('popstate'));
                        window.scrollTo(0, 0);
                      }}>
                        Keynote anfragen
                      </Button>

                      <p className="text-xs text-center text-slate-500 mt-4">
                        Referenzen: Reeperbahnfestival, Universal Music, BDVT u.v.m.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
              )}

              {activeTab === 'workshops' && (
              <div className="bg-gradient-to-br from-green-500/5 to-white p-8 md:p-12 rounded-2xl border-2 border-green-500/20 shadow-lg animate-fade-in-up">
                <div className="grid md:grid-cols-[2fr_1fr] gap-8">

                  {/* Left: Details */}
                  <div>
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center shrink-0">
                        <Calendar className="w-8 h-8 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-slate-900 mb-2">Firmen-Workshops</h3>
                        <p className="text-green-600 font-semibold">Hands-on. Praxisnah. Sofort umsetzbar.</p>
                      </div>
                    </div>

                    <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                      Maßgeschneiderte Tagesworkshops für Ihr Team. Wir kommen zu Ihnen (oder online) und arbeiten
                      einen ganzen Tag an Ihren konkreten Use Cases – maximal 5 Personen für intensive Betreuung.
                    </p>

                    {/* Workshop Benefits */}
                    <div className="mb-8">
                      <h4 className="font-bold text-slate-900 mb-4">Was macht unsere Workshops besonders:</h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-slate-900">Kleine Gruppe, maximale Wirkung</p>
                            <p className="text-sm text-slate-600">Maximal 5 Personen für intensive, individuelle Betreuung</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-slate-900">Ihre Use Cases, nicht Theorie</p>
                            <p className="text-sm text-slate-600">Wir arbeiten an echten Projekten aus Ihrem Alltag</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-slate-900">Sofort anwendbare Ergebnisse</p>
                            <p className="text-sm text-slate-600">Sie gehen mit fertigen Templates und Workflows nach Hause</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-slate-900">Flexibel auf Ihre Branche zugeschnitten</p>
                            <p className="text-sm text-slate-600">Jeder Workshop wird individuell vorbereitet</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* What's Included */}
                    <div className="bg-white rounded-xl p-6 mb-6 border border-slate-200">
                      <h4 className="font-bold text-slate-900 mb-4">Im Workshop enthalten:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-slate-900">Ganztägiger Workshop (6-8 Stunden)</p>
                            <p className="text-sm text-slate-600">Vor Ort bei Ihnen oder online</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-slate-900">Intensive Vorbereitung</p>
                            <p className="text-sm text-slate-600">Kennenlernen Ihrer Prozesse & Ziele im Vorfeld</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-slate-900">Workshop-Materialien & Templates</p>
                            <p className="text-sm text-slate-600">Alle Unterlagen zum Mitnehmen und Weiternutzen</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-slate-900">2 Wochen Follow-up Support</p>
                            <p className="text-sm text-slate-600">E-Mail-Support für Fragen nach dem Workshop</p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Target Audience */}
                    <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                      <p className="text-sm text-slate-700">
                        <strong className="text-slate-900">Perfekt für:</strong> KMUs, Abteilungen, kleine Teams, Projektgruppen –
                        alle, die KI hands-on und intensiv lernen wollen
                      </p>
                    </div>
                  </div>

                  {/* Right: Pricing Box */}
                  <div>
                    <div className="bg-white rounded-2xl p-8 border-2 border-green-500 shadow-xl sticky top-24">
                      <div className="text-center mb-6">
                        <div className="inline-block px-4 py-2 bg-green-500/10 text-green-600 rounded-full text-sm font-bold mb-4">
                          TAGESWORKSHOP
                        </div>
                        <div className="text-5xl font-bold text-slate-900 mb-2">1.750 €</div>
                        <p className="text-sm text-slate-600">zzgl. MwSt. · inkl. Vorbereitung & Materialien</p>

                        <div className="mt-4 pt-4 border-t border-slate-200">
                          <p className="text-xs text-slate-600 mb-1">Maximale Teilnehmerzahl</p>
                          <p className="text-2xl font-bold text-green-600">5 Personen</p>
                        </div>
                      </div>

                      <div className="space-y-3 mb-6 pb-6 border-b border-slate-200">
                        <div className="flex items-center gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                          <span>6-8 Stunden intensiv</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                          <span>Vor Ort oder online</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                          <span>Individuelle Vorbereitung</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                          <span>2 Wochen Follow-up</span>
                        </div>
                      </div>

                      <Button className="w-full mb-4" size="lg" onClick={() => {
                        window.history.pushState({}, '', '/termin?source=workshop');
                        window.dispatchEvent(new Event('popstate'));
                        window.scrollTo(0, 0);
                      }}>
                        Workshop anfragen
                      </Button>

                      <p className="text-xs text-center text-slate-500">
                        Für größere Gruppen erstellen wir gerne ein individuelles Angebot
                      </p>
                    </div>
                  </div>

                </div>
              </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-brand-dark to-brand-darker rounded-3xl mx-4 md:mx-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Welches Format passt zu Ihnen?
            </h2>
            <p className="text-xl text-brand-muted mb-10 leading-relaxed">
              Nicht sicher, ob Onlinekurs, Coaching oder Workshop?<br />
              Lassen Sie uns kurz sprechen – wir finden gemeinsam das richtige Format.
            </p>

            <div className="flex flex-col items-center gap-6">
              <Button
                size="lg"
                variant="primary"
                className="text-lg px-12 py-6 shadow-xl shadow-brand-accent/30"
                onClick={() => {
                  window.history.pushState({}, '', '/termin?source=academy');
                  window.dispatchEvent(new Event('popstate'));
                  window.scrollTo(0, 0);
                }}
              >
                <Calendar className="mr-2 w-5 h-5" />
                Kostenfreie Beratung buchen
              </Button>

              <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-brand-muted">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  15 Min. reichen
                </span>
                <span className="hidden md:inline">•</span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Unverbindlich & kostenfrei
                </span>
                <span className="hidden md:inline">•</span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Ehrliche Empfehlung
                </span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default AcademyPage;
