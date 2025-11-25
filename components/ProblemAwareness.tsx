import React from 'react';
import { AlertTriangle, TrendingDown, EyeOff, Clock } from 'lucide-react';
import Button from './Button';

const ProblemAwareness: React.FC = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "KI-Buzzword-Overload",
      text: '"Alle reden über KI, aber niemand sagt mir konkret, wo ich anfangen soll."'
    },
    {
      icon: TrendingDown,
      title: "Fehlinvestitions-Angst",
      text: '"50.000 € in die falsche Lösung investieren? Das können wir uns nicht leisten."'
    },
    {
      icon: EyeOff,
      title: "Wettbewerbs-Paranoia",
      text: '"Zieht mein Wettbewerber gerade mit Automatisierung an uns vorbei?"'
    },
    {
      icon: Clock,
      title: "Ressourcen-Falle",
      text: '"Wir haben weder die Zeit noch die Leute, um das Thema intern zu lösen."'
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Das kennen Sie:</h2>
          <p className="text-slate-500 text-lg">Die typischen Hürden im deutschen Mittelstand.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group">
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-slate-50 text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors">
                  <item.icon size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-500 italic text-lg leading-relaxed">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block px-8 py-4 bg-white rounded-full shadow-md border border-slate-100">
            <p className="text-xl font-medium text-slate-900">
              Jeden Tag, an dem Sie warten, kostet Sie Geld.
            </p>
          </div>
          <br />
          <div className="mt-8">
            <Button variant="primary" size="lg" onClick={() => window.location.href = '#coi-calculator'}>
              Berechnen Sie Ihren Cost of Inaction
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemAwareness;