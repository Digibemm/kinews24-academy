import React from 'react';
import Button from './Button';
import { Quote } from 'lucide-react';

const CaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">Das erreichen unsere Kunden</h2>
        </div>

        <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-xl shadow-slate-200/60 relative overflow-hidden border border-slate-100">
           {/* Decor */}
           <Quote className="absolute top-8 right-8 text-slate-50 w-40 h-40 -rotate-12" />
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                 <div className="inline-block px-3 py-1 rounded bg-brand-accent/10 text-brand-accent text-xs font-bold uppercase tracking-wider mb-6">
                    Maschinenbau
                 </div>
                 <h3 className="text-2xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
                    Angebotserstellung von 2h auf 15 Minuten reduziert
                 </h3>
                 <div className="space-y-6 mb-10">
                    <div className="flex items-center gap-6">
                       <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-500 font-bold text-xl shrink-0">📉</div>
                       <div>
                          <p className="text-xs uppercase font-bold text-slate-400 mb-1">Vorher</p>
                          <p className="text-slate-700 font-medium">2 Stunden pro Angebot, Fehleranfällig, Frust</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-6">
                       <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-500 font-bold text-xl shrink-0">🚀</div>
                        <div>
                          <p className="text-xs uppercase font-bold text-slate-400 mb-1">Nachher</p>
                          <p className="text-slate-900 font-bold">15 Minuten, KI-Agent prüft Plausibilität</p>
                       </div>
                    </div>
                 </div>
                 
                 <div className="grid grid-cols-2 gap-6 mb-10">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                       <p className="text-4xl font-bold text-brand-accent">96k €</p>
                       <p className="text-xs text-slate-500 uppercase font-bold mt-2">Gespart pro Jahr</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                       <p className="text-4xl font-bold text-brand-accent">+40%</p>
                       <p className="text-xs text-slate-500 uppercase font-bold mt-2">Mehr Angebote</p>
                    </div>
                 </div>
                 <Button variant="outline" className="border-slate-300 text-slate-600 hover:bg-slate-50">Case Study lesen</Button>
              </div>

              <div className="bg-slate-900 p-10 rounded-[2rem] text-white shadow-2xl shadow-slate-900/20 relative">
                 <div className="absolute -left-3 top-10 w-6 h-6 bg-slate-900 rotate-45 hidden lg:block"></div>
                 <p className="text-xl md:text-2xl font-light italic leading-relaxed mb-8 opacity-90">
                    "Wir haben in 90 Tagen mehr erreicht als in 2 Jahren Digitalisierungs-Versuche. Der Roadmap-Ansatz hat uns die Augen geöffnet."
                 </p>
                 <div className="flex items-center gap-4 pt-8 border-t border-white/10">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-accent to-brand-cyan rounded-full"></div>
                    <div>
                       <p className="font-bold text-white">Thomas M.</p>
                       <p className="text-sm text-slate-400">Geschäftsführer, 150 MA</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;