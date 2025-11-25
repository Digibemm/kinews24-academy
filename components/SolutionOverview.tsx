import React from 'react';
import { Target, Zap, Infinity as InfinityIcon } from 'lucide-react';
import Button from './Button';

const SolutionOverview: React.FC = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-8">Warum Unternehmen uns wählen:</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
             <div className="bg-red-50 border border-red-100 p-8 rounded-3xl">
                <div className="text-red-500 font-bold mb-2 text-xs uppercase tracking-wider bg-red-100 inline-block px-2 py-1 rounded">❌ Andere KI-Berater</div>
                <p className="text-2xl text-slate-800 font-display font-medium mt-2">"Hier ist eine Strategie-Präsentation."</p>
             </div>
             <div className="bg-green-50 border border-green-100 p-8 rounded-3xl shadow-sm">
                <div className="text-green-600 font-bold mb-2 text-xs uppercase tracking-wider bg-green-100 inline-block px-2 py-1 rounded">✅ KINEWS24-Academy</div>
                <p className="text-2xl text-slate-800 font-display font-medium mt-2">"Hier läuft Ihr erster automatisierter Prozess."</p>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: Target,
              title: "1️⃣ AUDIT FIRST",
              desc: "Wir quantifizieren Ihren Cost of Inaction – und zeigen, wo KI den größten Hebel hat."
            },
            {
              icon: Zap,
              title: "2️⃣ QUICK WINS",
              desc: "Erste messbare Ergebnisse in 30 Tagen. Nicht 12 Monate ohne Zwischenerfolg."
            },
            {
              icon: InfinityIcon,
              title: "3️⃣ LANGFRISTIG",
              desc: "Keine Hit-and-Run-Beratung. Wir bleiben, bis es läuft."
            }
          ].map((item, idx) => (
             <div key={idx} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/40 group hover:-translate-y-1 transition-transform duration-300">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-50 text-slate-900 group-hover:bg-brand-accent group-hover:text-white transition-colors">
                   <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionOverview;