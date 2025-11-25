import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const faqs = [
    { q: "Brauchen wir wirklich KI – oder ist das nur Hype?", a: "Es ist ein technologischer Wandel vergleichbar mit dem Internet. Unsere Kunden sparen im Schnitt 20-30% Prozesskosten im ersten Jahr." },
    { q: "Was kostet eine KI-Roadmap?", a: "Startet ab 2.000 €. Durch die BAFA-Förderung können Sie bis zu 50% der Kosten erstattet bekommen." },
    { q: "Wie lange dauert es, bis wir Ergebnisse sehen?", a: "Wir fokussieren uns auf Quick Wins. Die erste Automatisierung steht oft schon nach 30 Tagen." },
    { q: "Was ist, wenn unser Team überfordert ist?", a: "Change Management ist Teil unseres Prozesses. Wir nehmen Ihr Team mit, statt Lösungen überzustülpen." }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-slate-900">Häufige Fragen</h2>
        </div>

        <div className="space-y-4">
           {faqs.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                 <button 
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="w-full px-8 py-6 flex justify-between items-center text-left focus:outline-none"
                 >
                    <span className={`font-bold text-lg ${openIndex === idx ? 'text-brand-accent' : 'text-slate-800'}`}>{item.q}</span>
                    {openIndex === idx ? <ChevronUp className="text-brand-accent" /> : <ChevronDown className="text-slate-400" />}
                 </button>
                 {openIndex === idx && (
                    <div className="px-8 pb-8 text-slate-600 leading-relaxed animate-fade-in">
                       {item.a}
                    </div>
                 )}
              </div>
           ))}
        </div>
        
        <div className="text-center mt-10">
           <a
             href="/faq"
             onClick={(e) => {
               e.preventDefault();
               window.history.pushState({}, '', '/faq');
               window.dispatchEvent(new Event('popstate'));
               window.scrollTo(0, 0);
             }}
             className="text-sm text-brand-accent hover:text-brand-dark underline font-medium"
           >
             Alle FAQs ansehen
           </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;