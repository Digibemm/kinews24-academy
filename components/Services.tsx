import React from 'react';
import Button from './Button';
import { Microscope, Settings, GraduationCap } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: "KI-ROADMAP",
      subtitle: "Analyse · Strategie · Umsetzungsplan",
      icon: Microscope,
      duration: "Individuell",
      price: "Ab 2.000 €",
      features: ["Potenziale identifizieren", "Priorisieren", "ROI berechnen"],
      highlight: false,
      href: '/roadmap'
    },
    {
      title: "ACADEMY",
      subtitle: "Wissen · Skills · Befähigung",
      icon: GraduationCap,
      duration: "Fortlaufend",
      price: "Auf Anfrage",
      features: ["Workshops", "Schulung", "Befähigung"],
      highlight: false,
      href: '/academy'
    }
  ];

  return (
    <section id="services" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-2">Unser System</h2>
          <p className="text-slate-600">Von der ersten Analyse bis zur unternehmensweiten Automatisierung</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className={`rounded-2xl p-6 transition-all duration-300 flex flex-col h-full ${
              service.highlight
                ? 'bg-brand-dark text-white shadow-xl shadow-brand-dark/20'
                : 'bg-white border border-slate-100 shadow-lg shadow-slate-200/50'
            }`}>
              <div className={`mb-4 p-3 rounded-xl w-14 h-14 flex items-center justify-center ${
                service.highlight ? 'bg-white/10 text-brand-cyan' : 'bg-slate-50 text-brand-accent'
              }`}>
                <service.icon size={28} />
              </div>
              <h3 className={`text-xl font-bold ${service.subtitle ? 'mb-2' : 'mb-1'} ${service.highlight ? 'text-white' : 'text-slate-900'}`}>{service.title}</h3>
              {service.subtitle && (
                <p className={`text-sm mb-2 ${service.highlight ? 'text-slate-400' : 'text-slate-500'}`}>{service.subtitle}</p>
              )}
              <p className={`text-xs font-bold uppercase tracking-wider mb-6 ${service.highlight ? 'text-brand-cyan' : 'text-brand-accent'}`}>{service.duration}</p>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className={`flex items-center ${service.highlight ? 'text-slate-300' : 'text-slate-600'}`}>
                    <span className={`w-2 h-2 rounded-full mr-3 ${service.highlight ? 'bg-brand-cyan' : 'bg-brand-accent'}`}></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className={`pt-8 mt-auto border-t ${service.highlight ? 'border-white/10' : 'border-slate-100'}`}>
                 <p className={`text-xl font-bold mb-4 ${service.highlight ? 'text-white' : 'text-slate-900'}`}>{service.price}</p>
                 <Button
                    variant={service.highlight ? 'primary' : 'outline'}
                    className={`w-full ${!service.highlight && 'border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                    onClick={() => {
                      window.history.pushState({}, '', service.href);
                      window.dispatchEvent(new Event('popstate'));
                      window.scrollTo(0, 0);
                    }}
                 >
                   Mehr erfahren
                 </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-xl p-6 text-center max-w-2xl mx-auto">
           <p className="text-slate-700 text-sm">
             💡 <span className="font-bold text-slate-900">BAFA-Förderung:</span> Bis zu 50% Ihrer Beratungskosten werden vom Staat übernommen.
           </p>
        </div>
      </div>
    </section>
  );
};

export default Services;