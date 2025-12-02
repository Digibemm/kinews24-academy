import React, { useState } from 'react';
import Button from './Button';
import { Calculator, Clock, DollarSign, Mail, CheckCircle, Settings, RotateCw, TrendingUp, ArrowRight, ArrowLeft } from 'lucide-react';

const CostOfInaction: React.FC = () => {
  // Form state
  const [step, setStep] = useState(1);
  const [processName, setProcessName] = useState('Lead-Qualifizierung');
  const [minutesPerTask, setMinutesPerTask] = useState(30);
  const [tasksPerMonth, setTasksPerMonth] = useState(40);
  const [hourlyRate, setHourlyRate] = useState(50);
  const [email, setEmail] = useState('');
  const [dsgvoAccepted, setDsgvoAccepted] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Define processes with specific Opportunity Cost Factors
  const processes = [
    {
      id: 'leads',
      label: 'Lead-Qualifizierung',
      factor: 3.0,
      hint: 'Zeit, die Sales-Mitarbeiter mit schlechten Leads verschwenden, fehlt für den Abschluss guter Deals.',
      lossExplanation: 'Das ist der Umsatz, der Ihnen entgeht, weil Ihr Vertrieb wertvolle Zeit mit unqualifizierten Kontakten verschwendet, statt abschlussreife Kunden zu betreuen.'
    },
    {
      id: 'followup',
      label: 'Manuelles Follow-up',
      factor: 2.5,
      hint: 'Manuelles Nachfassen im Funnel ist langsam. Leads werden kalt = Umsatz weg.',
      lossExplanation: 'Das ist das Potenzial, das liegen bleibt, weil Leads erkalten, während Ihr Team manuell E-Mails tippt, statt strategisch zu verkaufen.'
    },
    {
      id: 'offer',
      label: 'Angebotserstellung',
      factor: 2.0,
      hint: 'Je länger das Angebot dauert, desto eher kauft der Kunde beim Wettbewerb.',
      lossExplanation: 'Das ist das Risiko, Aufträge zu verlieren, weil Ihre Reaktionszeit zu langsam ist und Wettbewerber schneller beim Kunden sind.'
    },
    {
      id: 'support',
      label: 'Kundensupport',
      factor: 1.5,
      hint: 'Repetitive Tickets binden Fachkräfte, die Innovation vorantreiben könnten.',
      lossExplanation: 'Das sind die Opportunitätskosten, weil Ihre Fachkräfte in Tickets feststecken, statt Upselling-Potenziale bei Bestandskunden zu nutzen.'
    },
    {
      id: 'invoice',
      label: 'Rechnungsprüfung',
      factor: 1.2,
      hint: 'Reine Admin-Tätigkeit mit geringem strategischen Risiko, aber hohem Nerv-Faktor.',
      lossExplanation: 'Das ist die strategische Arbeitszeit, die im Backoffice verpufft, statt in wichtigere Wachstumsprojekte investiert zu werden.'
    },
    {
      id: 'data',
      label: 'Datenerfassung',
      factor: 1.0,
      hint: 'Klassische "Copy-Paste"-Arbeit. Kostet "nur" das Gehalt, aber demotiviert stark.',
      lossExplanation: 'Das sind unnötige Personalkosten für monotone Arbeit, die eine KI in Sekunden erledigen könnte, während Ihre Mitarbeiter wertschöpfender arbeiten würden.'
    },
  ];

  const currentProcess = processes.find(p => p.label === processName) || processes[0];

  // Calculations
  const hoursPerMonth = (minutesPerTask * tasksPerMonth) / 60;
  const costPerMonth = hoursPerMonth * hourlyRate;
  const costPerYear = costPerMonth * 12;
  const opportunityCost = costPerYear * currentProcess.factor;

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);

      // Increment COI counter in Hero section
      if (typeof (window as any).incrementCoiCount === 'function') {
        (window as any).incrementCoiCount();
      }

      // Here you would integrate with n8n webhook
      // fetch('/api/n8n-webhook', { method: 'POST', body: JSON.stringify({ email, processName, costPerYear, opportunityCost }) });
    }
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <section id="coi-calculator" className="py-24 relative bg-gradient-to-b from-[#F8FAFC] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
            <Calculator size={16} className="text-brand-accent shrink-0" />
            <span className="text-xs md:text-sm font-bold text-slate-700 tracking-wide uppercase">
              <span className="hidden sm:inline">Kostenlos • 2 Minuten • Sofortiges Ergebnis</span>
              <span className="sm:hidden">Kostenlos • 2 Min.</span>
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-3">
            Cost of Inaction Rechner
          </h2>
          <p className="text-lg md:text-xl text-brand-accent font-medium mb-6">
            Der Preis des Nichtstuns
          </p>
          <p className="text-slate-500 text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-4">
            Über <strong className="text-slate-900">18.000€</strong> verschwenden deutsche Mittelständler durchschnittlich
            pro Jahr durch einen einzigen ineffizienten Prozess. Wie sieht es bei Ihnen aus?
          </p>
        </div>

        {/* Progress Indicator */}
        {!isSubmitted && (
          <div className="max-w-md mx-auto mb-12">
            <div className="flex items-center justify-between mb-2">
              <span className={`text-sm font-medium ${step >= 1 ? 'text-brand-accent' : 'text-slate-400'}`}>Prozess & Daten</span>
              <span className={`text-sm font-medium ${step >= 2 ? 'text-brand-accent' : 'text-slate-400'}`}>Ergebnis anfordern</span>
            </div>
            <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-brand-accent to-brand-cyan transition-all duration-500"
                style={{ width: `${(step / 2) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* STEP 1: Process Selection + Data Input */}
        {step === 1 && (
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

              {/* Left: Input Form */}
              <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Settings size={20} className="text-brand-accent" />
                  Ihre Prozess-Daten
                </h3>

                <div className="space-y-8">
                  {/* Process Selector */}
                  <div>
                    <label className="block text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">
                      Welcher Prozess nervt Sie am meisten?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {processes.map((proc) => (
                        <button
                          key={proc.id}
                          onClick={() => setProcessName(proc.label)}
                          className={`px-4 py-3 rounded-xl text-sm font-medium text-left transition-all duration-200 border relative overflow-hidden ${
                            processName === proc.label
                              ? 'bg-brand-accent text-white border-brand-accent shadow-lg shadow-brand-accent/30'
                              : 'bg-slate-50 border-slate-100 text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          {proc.label}
                        </button>
                      ))}
                    </div>
                    {/* Dynamic Hint based on selection */}
                    <div className="mt-4 p-4 rounded-xl bg-blue-50 border border-blue-100 flex items-start gap-3">
                       <TrendingUp size={18} className="text-brand-accent mt-0.5 flex-shrink-0" />
                       <p className="text-sm text-slate-700 leading-relaxed">{currentProcess.hint}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Time Input */}
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-500 flex items-center gap-2">
                        <Clock size={16} /> Zeit pro Vorgang (Min)
                      </label>
                      <div className="relative group">
                        <input
                          type="number"
                          min="1"
                          value={minutesPerTask}
                          onChange={(e) => setMinutesPerTask(Number(e.target.value))}
                          className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl p-4 text-xl font-bold text-slate-900 focus:border-brand-accent focus:bg-white outline-none transition-all"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium text-sm">min</span>
                      </div>
                    </div>

                    {/* Frequency Input */}
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-500 flex items-center gap-2">
                        <RotateCw size={16} /> Häufigkeit (pro Monat)
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          min="1"
                          value={tasksPerMonth}
                          onChange={(e) => setTasksPerMonth(Number(e.target.value))}
                          className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl p-4 text-xl font-bold text-slate-900 focus:border-brand-accent focus:bg-white outline-none transition-all"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium text-sm">x</span>
                      </div>
                    </div>

                    {/* Hourly Rate Input */}
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-bold text-slate-500 flex items-center gap-2">
                        <DollarSign size={16} /> Interner Kostensatz (€/h)
                      </label>
                      <div className="relative">
                         <input
                          type="number"
                          min="1"
                          value={hourlyRate}
                          onChange={(e) => setHourlyRate(Number(e.target.value))}
                          className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl p-4 text-xl font-bold text-slate-900 focus:border-brand-accent focus:bg-white outline-none transition-all"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium text-sm">€</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Live Preview (Blurred) */}
              <div className="bg-brand-dark rounded-3xl overflow-hidden shadow-2xl shadow-slate-400/20 relative text-white flex flex-col justify-center p-8">
                <div className="h-2 w-full bg-gradient-to-r from-brand-accent to-brand-cyan absolute top-0 left-0"></div>

                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-4">
                    <TrendingUp size={14} className="text-brand-cyan" />
                    <span className="text-xs font-bold text-brand-cyan uppercase">Live-Vorschau</span>
                  </div>
                </div>

                <div className="space-y-6 relative">
                  {/* Blurred Preview */}
                  <div className="relative">
                    <div className="absolute inset-0 backdrop-blur-sm bg-white/5 z-10 flex items-center justify-center rounded-xl">
                      <div className="text-center">
                        <Mail size={48} className="text-brand-cyan mx-auto mb-2" />
                        <p className="text-sm font-medium">Ergebnis im nächsten Schritt</p>
                      </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10">
                      <p className="text-slate-400 uppercase tracking-wider text-xs font-bold mb-2">Jährlicher Verlust</p>
                      <div className="text-5xl font-display font-bold text-white tracking-tight mb-4">
                        {costPerYear.toLocaleString('de-DE', { maximumFractionDigits: 0 })} €
                      </div>

                      <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-4">
                        <div className="flex justify-between items-start mb-2">
                           <p className="text-brand-cyan font-bold uppercase text-xs tracking-wider flex items-center gap-2">
                              <TrendingUp size={14} /> Wahre Kosten (Opportunity Cost)
                           </p>
                           <span className="bg-brand-cyan/20 text-brand-cyan text-[10px] px-2 py-0.5 rounded font-bold">Faktor {currentProcess.factor}x</span>
                        </div>
                        <p className="text-3xl font-bold text-white mt-1">
                           ~{opportunityCost.toLocaleString('de-DE', { maximumFractionDigits: 0 })} €
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Button
                    size="lg"
                    onClick={nextStep}
                    className="w-full shadow-lg shadow-brand-accent/20"
                  >
                    Detailliertes Ergebnis anfordern <ArrowRight className="ml-2" />
                  </Button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* STEP 2: Email Gate */}
        {step === 2 && !isSubmitted && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl shadow-slate-200/50 overflow-hidden">

              {/* Header */}
              <div className="bg-gradient-to-r from-brand-accent to-brand-cyan p-8 text-white text-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail size={40} />
                </div>
                <h3 className="text-3xl font-bold mb-2">Ihr Ergebnis ist bereit!</h3>
                <p className="text-white/90">Erhalten Sie Ihre detaillierte Analyse + 3 Quick Win-Vorschläge</p>
              </div>

              <div className="p-8">
                {/* Preview Stats (Blurred Numbers) */}
                <div className="mb-8 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-bold text-slate-500 uppercase">Ihr gewählter Prozess:</span>
                    <span className="text-brand-accent font-bold">{processName}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-4 bg-white rounded-xl border border-slate-100">
                      <p className="text-xs text-slate-500 mb-1">Jährlicher Verlust</p>
                      <p className="text-2xl font-bold text-slate-900">{costPerYear.toLocaleString('de-DE', { maximumFractionDigits: 0 })} €</p>
                    </div>
                    <div className="text-center p-4 bg-white rounded-xl border border-slate-100 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-orange-50 opacity-50"></div>
                      <p className="text-xs text-slate-500 mb-1 relative z-10">Opportunity Cost</p>
                      <p className="text-2xl font-bold text-red-600 relative z-10">{opportunityCost.toLocaleString('de-DE', { maximumFractionDigits: 0 })} €</p>
                    </div>
                  </div>

                  <div className="text-center text-xs text-slate-500">
                    <TrendingUp size={14} className="inline mr-1" />
                    In 3 Jahren: <strong className="text-slate-900">{(opportunityCost * 3).toLocaleString('de-DE', { maximumFractionDigits: 0 })} €</strong> Potenzialverlust
                  </div>
                </div>

                {/* Value Proposition */}
                <div className="mb-8">
                  <p className="text-lg font-bold text-slate-900 mb-4">
                    Sie erhalten sofort per E-Mail:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-slate-700">Ihre exakte Cost-of-Inaction-Berechnung als <strong>PDF-Report</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-slate-700"><strong>3 Quick Win-Vorschläge</strong> speziell für "{processName}"</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-slate-700">Umsetzungs-Checkliste zum <strong>sofortigen Start</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-slate-700">Optional: Link zum <strong>30-Min-Strategiegespräch</strong></span>
                    </li>
                  </ul>
                </div>

                {/* Email Form */}
                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Ihre E-Mail-Adresse
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="ihre.email@firma.de"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-5 py-4 text-slate-900 text-lg focus:ring-2 focus:ring-brand-accent focus:bg-white outline-none transition-all"
                    />
                  </div>

                  {/* DSGVO Checkbox */}
                  <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <input
                      type="checkbox"
                      id="dsgvo-coi"
                      required
                      checked={dsgvoAccepted}
                      onChange={(e) => setDsgvoAccepted(e.target.checked)}
                      className="mt-1 w-4 h-4 text-brand-accent border-slate-300 rounded focus:ring-brand-accent focus:ring-2"
                    />
                    <label htmlFor="dsgvo-coi" className="text-xs text-slate-600 leading-relaxed">
                      Ich habe die{' '}
                      <a
                        href="/datenschutz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-accent hover:underline font-medium"
                      >
                        Datenschutzerklärung
                      </a>{' '}
                      gelesen und stimme der Verarbeitung meiner E-Mail-Adresse zum Zweck der Zusendung
                      des COI-Reports zu. Meine Daten werden nicht an Dritte weitergegeben. *
                    </label>
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg shadow-lg shadow-brand-accent/20">
                    Kostenloses Ergebnis jetzt erhalten
                  </Button>

                  <p className="text-xs text-center text-slate-500 flex items-center justify-center gap-2">
                    <span>🔒</span>
                    <span>Ihre Daten sind sicher. Keine Weitergabe an Dritte. DSGVO-konform.</span>
                  </p>
                </form>

                {/* Back Button */}
                <div className="mt-6 text-center">
                  <button
                    onClick={prevStep}
                    className="text-sm text-slate-500 hover:text-slate-700 flex items-center gap-1 mx-auto"
                  >
                    <ArrowLeft size={14} /> Zurück zu den Eingaben
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: Thank You / Full Results */}
        {isSubmitted && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl shadow-slate-200/50 overflow-hidden">

              {/* Success Header */}
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-8 text-white text-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-3xl font-bold mb-2">Berechnung abgeschlossen! ✅</h3>
                <p className="text-white/90">Wir haben Ihnen das detaillierte PDF an <strong>{email}</strong> gesendet.</p>
                <p className="text-sm text-white/75 mt-2">Bitte prüfen Sie auch Ihren Spam-Ordner.</p>
              </div>

              <div className="p-8">
                {/* Full Results Dashboard */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-slate-900 mb-6">Ihre Ergebnisse im Überblick:</h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                      <p className="text-sm text-slate-500 uppercase font-bold mb-2">Gewählter Prozess</p>
                      <p className="text-2xl font-bold text-slate-900">{processName}</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                      <p className="text-sm text-slate-500 uppercase font-bold mb-2">Zeitaufwand pro Jahr</p>
                      <p className="text-2xl font-bold text-slate-900">{Math.round(hoursPerMonth * 12)} Stunden</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl p-8 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-sm text-slate-600 uppercase font-bold mb-2 flex items-center gap-2">
                          <DollarSign size={16} /> Reiner Ressourcen-Verlust / Jahr
                        </p>
                        <p className="text-4xl font-display font-bold text-slate-900">
                          {costPerYear.toLocaleString('de-DE', { maximumFractionDigits: 0 })} €
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-red-600 uppercase font-bold mb-2 flex items-center gap-2">
                          <TrendingUp size={16} /> Wahre Kosten (Opportunity Cost)
                        </p>
                        <p className="text-4xl font-display font-bold text-red-600">
                          {opportunityCost.toLocaleString('de-DE', { maximumFractionDigits: 0 })} €
                        </p>
                        <p className="text-xs text-slate-600 mt-2">Faktor {currentProcess.factor}x</p>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-blue-200">
                      <p className="text-sm text-slate-600 mb-2">{currentProcess.lossExplanation}</p>
                      <p className="text-lg font-bold text-slate-900 mt-4">
                        In 3 Jahren: <span className="text-red-600">{(opportunityCost * 3).toLocaleString('de-DE', { maximumFractionDigits: 0 })} €</span> Potenzialverlust
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA: Next Steps */}
                <div className="bg-brand-dark rounded-2xl p-8 text-white text-center">
                  <h4 className="text-2xl font-bold mb-4">Bereit, das zu ändern?</h4>
                  <p className="text-brand-muted mb-6 max-w-xl mx-auto">
                    Buchen Sie ein kostenloses 30-Min-Strategiegespräch,
                    und wir zeigen Ihnen konkret, wie Sie "{processName}" automatisieren können.
                  </p>

                  <div className="space-y-4">
                    <Button
                      size="lg"
                      className="w-full md:w-auto shadow-xl shadow-brand-accent/20"
                      onClick={() => {
                        window.history.pushState({}, '', '/termin?source=coi');
                        window.dispatchEvent(new Event('popstate'));
                        window.scrollTo(0, 0);
                      }}
                    >
                      Kostenloses Strategiegespräch buchen
                    </Button>
                  </div>
                </div>

                {/* New Calculation */}
                <div className="mt-8 text-center">
                  <button
                    onClick={() => { setIsSubmitted(false); setStep(1); setEmail(''); setDsgvoAccepted(false); }}
                    className="text-sm text-slate-500 hover:text-brand-accent underline font-medium"
                  >
                    Neue Berechnung für anderen Prozess starten
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default CostOfInaction;
