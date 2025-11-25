import React from 'react';
import Button from './Button';

const Process: React.FC = () => {
  const steps = [
    { num: '1️⃣', title: "ERSTGESPRÄCH", meta: "30 Min, kostenlos", desc: "Wir verstehen Ihr Geschäft & Ihre Herausforderungen." },
    { num: '2️⃣', title: "KI-ROADMAP", meta: "Individuell", desc: "Wir analysieren, wo KI den größten Hebel hat und erstellen Ihren Aktionsplan." },
    { num: '3️⃣', title: "QUICK WIN", meta: "30 Tage", desc: "Erste automatisierte Prozesse laufen produktiv." },
    { num: '4️⃣', title: "SKALIERUNG", meta: "Fortlaufend", desc: "Weitere Prozesse, Team-Befähigung, Optimierung." },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">Von der Idee zur Umsetzung</h2>
          <p className="text-slate-500 mt-4 text-lg">In 4 Schritten zum Erfolg</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16 relative">
           {/* Connecting Line (Desktop) */}
           <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gradient-to-r from-slate-200 via-brand-accent/30 to-slate-200 z-0"></div>
           
           {steps.map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                 <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-2xl shadow-lg shadow-slate-200/50 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {step.num}
                 </div>
                 <h3 className="text-lg font-bold text-slate-900 mb-1">{step.title}</h3>
                 <p className="text-xs text-brand-accent font-bold uppercase tracking-wider mb-3">{step.meta}</p>
                 <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
           ))}
        </div>

        <div className="text-center">
           <Button
             size="lg"
             className="shadow-xl shadow-brand-accent/20"
             onClick={() => {
               window.history.pushState({}, '', '/termin?source=general');
               window.dispatchEvent(new Event('popstate'));
               window.scrollTo(0, 0);
             }}
           >
             Kostenloses Erstgespräch buchen
           </Button>
        </div>
      </div>
    </section>
  );
};

export default Process;