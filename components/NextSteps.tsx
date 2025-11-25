import React from 'react';
import Button from './Button';
import { CheckCircle, Calendar, Microscope, Settings, ArrowRight } from 'lucide-react';

const NextSteps: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
            Was passiert jetzt?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Sie haben Ihren Cost of Inaction berechnet. Hier sind Ihre nächsten Schritte:
          </p>
        </div>

        {/* Funnel Steps */}
        <div className="relative">

          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-20 left-0 w-full h-1 bg-gradient-to-r from-green-200 via-blue-200 to-slate-200 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">

            {/* STEP 1: Completed */}
            <div className="bg-white rounded-2xl p-6 border-2 border-green-500 shadow-lg shadow-green-500/10 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                <CheckCircle className="text-white" size={24} />
              </div>

              <div className="mt-6 text-center">
                <div className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold mb-3">
                  ✅ ERLEDIGT
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">COI berechnet</h3>
                <p className="text-sm text-slate-600">
                  Sie wissen jetzt, was Stillstand kostet.
                </p>
              </div>
            </div>

            {/* STEP 2: Current (Highlighted) */}
            <div className="bg-gradient-to-br from-brand-accent to-brand-cyan rounded-2xl p-6 border-2 border-brand-accent shadow-2xl shadow-brand-accent/30 relative md:transform md:scale-110">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-brand-accent">
                <Calendar className="text-brand-accent" size={24} />
              </div>

              <div className="mt-6 text-center">
                <div className="inline-flex items-center gap-1 px-3 py-1 bg-white/20 backdrop-blur-md text-white rounded-full text-xs font-bold mb-3">
                  👉 NÄCHSTER SCHRITT
                </div>
                <h3 className="text-lg font-bold text-white mb-2">30-Min-Strategiegespräch</h3>
                <p className="text-sm text-white/90 mb-4">
                  Wir zeigen Ihnen 3 konkrete Quick Wins – kostenlos, unverbindlich.
                </p>
                <Button
                  variant="secondary"
                  className="w-full bg-white text-brand-accent hover:bg-white/90 border-0"
                  onClick={() => {
                    window.history.pushState({}, '', '/termin?source=coi');
                    window.dispatchEvent(new Event('popstate'));
                    window.scrollTo(0, 0);
                  }}
                >
                  Termin buchen
                </Button>
                <p className="text-xs text-white/75 mt-3">
                  ⏱️ Diese Woche noch 3 Slots frei
                </p>
              </div>
            </div>

            {/* STEP 3: Next */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg shadow-slate-200/50 relative opacity-90">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center shadow-lg border-2 border-slate-200">
                <Microscope className="text-slate-600" size={24} />
              </div>

              <div className="mt-6 text-center">
                <div className="inline-flex items-center gap-1 px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold mb-3">
                  SCHRITT 3
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">KI-Roadmap</h3>
                <p className="text-xs text-slate-500 mb-2">Analyse · Strategie · Umsetzungsplan</p>
                <p className="text-sm text-slate-600 mb-2">
                  Tiefe Analyse aller Prozesse, ROI-Berechnung, konkreter Aktionsplan.
                </p>
                <p className="text-xs text-brand-accent font-bold">
                  Ab 2.000 € (50% BAFA-förderbar)
                </p>
              </div>
            </div>

            {/* STEP 4: Future */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg shadow-slate-200/50 relative opacity-75">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center shadow-lg border-2 border-slate-200">
                <Settings className="text-slate-600" size={24} />
              </div>

              <div className="mt-6 text-center">
                <div className="inline-flex items-center gap-1 px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold mb-3">
                  SCHRITT 4
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Implementierung</h3>
                <p className="text-sm text-slate-600">
                  Quick Win in 30 Tagen live. Vollständige Automatisierung in 30-90 Tagen.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Trust/Disclaimer */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center">
            <p className="text-sm text-slate-700 leading-relaxed">
              💡 <strong className="text-slate-900">Keine Verpflichtung.</strong> Das Strategiegespräch ist komplett kostenlos
              und unverbindlich. Wir verkaufen Ihnen nichts, was Sie nicht brauchen. Versprochen.
            </p>
          </div>
        </div>


      </div>
    </section>
  );
};

export default NextSteps;
