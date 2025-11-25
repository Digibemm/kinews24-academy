import React from 'react';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Die Köpfe hinter KINEWS24-Academy</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
           {/* Oliver Welling */}
           <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-lg shadow-slate-200/30 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                 <img
                   src="/team-photos/oliver-welling.jpg"
                   alt="Oliver Welling"
                   className="w-32 h-32 rounded-full object-cover shadow-inner shrink-0 mb-6 bg-slate-200"
                   onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }}
                 />
                 <div className="w-32 h-32 rounded-full bg-slate-200 shadow-inner shrink-0 mb-6 hidden"></div>
                 <h3 className="text-xl font-bold text-slate-900 mb-1">Oliver Welling</h3>
                 <p className="text-brand-accent font-bold text-sm mb-4">CEO & Gründer</p>
                 <p className="text-slate-600 text-sm leading-relaxed">
                   Digital-Pionier mit Leib und Seele. Als Gründer einer der führenden Digital-Agenturen Hamburgs und späterer Vorstand gestaltete er die digitale Landschaft entscheidend mit. Heute gibt der Gründer von KINEWS24.de und von KINEWS24-Academy seine jahrzehntelange Erfahrung weiter: In praxisnahen Vorträgen und Workshops übersetzt er komplexe KI-Themen in verständliche, gewinnbringende Strategien für den unternehmerischen Alltag.
                 </p>
              </div>
           </div>

           {/* Markus Mühlich */}
           <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-lg shadow-slate-200/30 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                 <img
                   src="/team-photos/markus-muehlich.jpg"
                   alt="Markus Mühlich"
                   className="w-32 h-32 rounded-full object-cover shadow-inner shrink-0 mb-6 bg-slate-200"
                   onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }}
                 />
                 <div className="w-32 h-32 rounded-full bg-slate-200 shadow-inner shrink-0 mb-6 hidden"></div>
                 <h3 className="text-xl font-bold text-slate-900 mb-1">Markus Mühlich</h3>
                 <p className="text-brand-cyan font-bold text-sm mb-4">CMO & Gründer</p>
                 <p className="text-slate-600 text-sm leading-relaxed">
                   Der Brückenbauer zwischen Technik und unternehmerischem Erfolg. Mit seiner einzigartigen Erfahrung vom Handwerk bis zur KI-Strategie entwickelt er für KMUs und Selbstständige pragmatische Lösungen, die wirken. Sein Fokus: Effiziente Marketing-Funnels, Prozessautomatisierung und die passenden Fördermittel, damit aus digitalen Werkzeugen ein klarer Plan für nachhaltiges Wachstum wird.
                 </p>
              </div>
           </div>

           {/* Dr. Bettina Kähler */}
           <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-lg shadow-slate-200/30 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                 <img
                   src="/team-photos/bettina-kaehler.jpg"
                   alt="Dr. Bettina Kähler"
                   className="w-32 h-32 rounded-full object-cover shadow-inner shrink-0 mb-6 bg-slate-200"
                   onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }}
                 />
                 <div className="w-32 h-32 rounded-full bg-slate-200 shadow-inner shrink-0 mb-6 hidden"></div>
                 <h3 className="text-xl font-bold text-slate-900 mb-1">Dr. Bettina Kähler</h3>
                 <p className="text-purple-600 font-bold text-sm mb-4">Rechtsanwältin</p>
                 <p className="text-slate-600 text-sm leading-relaxed">
                   Rechtsanwältin und eine der führenden Expertinnen für Datenschutz und Informationssicherheit. Mit über 20 Jahren Erfahrung macht sie komplexe Themen wie DSGVO und den EU AI Act praxistauglich. Als Buchautorin und Beraterin schafft sie rechtliche Sicherheit und ermöglicht es Unternehmen, Compliance als strategischen Vorteil zu nutzen.
                 </p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Team;