import React from 'react';
import { Linkedin, Youtube, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-darker border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-16 border-b border-white/5 pb-12">
           <div className="px-4 py-2 bg-white/5 rounded-full flex items-center gap-2 text-sm text-brand-muted">
              🔒 DSGVO-konform
           </div>
           <div className="px-4 py-2 bg-white/5 rounded-full flex items-center gap-2 text-sm text-brand-muted">
              ⭐ 4.9/5.0 (32 Bew.)
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
           <div className="col-span-1 md:col-span-1">
              <a href="/" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/'); window.dispatchEvent(new Event('popstate')); window.scrollTo(0, 0); }} className="block mb-6">
                <img
                  src="/Logo-kinews24-white.png"
                  alt="KINEWS24 Academy"
                  className="h-10 w-auto hover:opacity-80 transition-opacity"
                />
              </a>
              <p className="text-brand-muted text-sm leading-relaxed">
                 Die KI-Transformationsagentur für den deutschen Mittelstand.
              </p>
           </div>
           
           <div>
              <h4 className="text-white font-bold mb-6">LEISTUNGEN</h4>
              <ul className="space-y-3 text-sm text-brand-muted">
                 <li><a href="/roadmap" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/roadmap'); window.dispatchEvent(new Event('popstate')); }} className="hover:text-brand-cyan transition-colors">KI-Roadmap</a></li>
                 <li><a href="/academy" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/academy'); window.dispatchEvent(new Event('popstate')); }} className="hover:text-brand-cyan transition-colors">Academy</a></li>
                 <li><a href="/ki-experte-weiterbildung" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/ki-experte-weiterbildung'); window.dispatchEvent(new Event('popstate')); }} className="hover:text-brand-cyan transition-colors">ThinkAI Weiterbildung</a></li>
                 <li><a href="/keynotes" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/keynotes'); window.dispatchEvent(new Event('popstate')); }} className="hover:text-brand-cyan transition-colors">Keynotes</a></li>
              </ul>
           </div>

           <div>
              <h4 className="text-white font-bold mb-6">RESSOURCEN</h4>
              <ul className="space-y-3 text-sm text-brand-muted">
                 <li><span className="text-slate-600 cursor-not-allowed">Blog (demnächst)</span></li>
                 <li><a href="/faq" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/faq'); window.dispatchEvent(new Event('popstate')); window.scrollTo(0, 0); }} className="hover:text-brand-cyan transition-colors">FAQ</a></li>
                 <li><a href="/coi-calculator" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/coi-calculator'); window.dispatchEvent(new Event('popstate')); }} className="hover:text-brand-cyan transition-colors">COI Rechner</a></li>
                 <li><a href="#case-studies" onClick={(e) => { e.preventDefault(); const el = document.querySelector('#case-studies'); if (el) { if (window.location.pathname !== '/') { window.history.pushState({}, '', '/#case-studies'); window.dispatchEvent(new Event('popstate')); setTimeout(() => { const element = document.querySelector('#case-studies'); element?.scrollIntoView({ behavior: 'smooth' }); }, 100); } else { el.scrollIntoView({ behavior: 'smooth' }); } } }} className="hover:text-brand-cyan transition-colors">Referenzen</a></li>
              </ul>
           </div>

           <div>
              <h4 className="text-white font-bold mb-6">KONTAKT</h4>
              <div className="space-y-2 mb-3">
                <p className="text-sm text-brand-muted">📍 Hamburg, DE</p>
                <div className="relative group inline-block">
                  <p className="text-sm text-brand-muted cursor-help">📍 Tutzing, DE</p>
                  <div className="absolute left-0 bottom-full mb-2 hidden group-hover:block bg-slate-800 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap shadow-xl border border-white/10 z-50">
                    Waxensteinstraße 4, 82327 Tutzing
                    <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-slate-800"></div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-brand-muted">📧 kontakt@kinews24-academy.de</p>
           </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-brand-muted">
           <p>© 2025 KINEWS24-Academy | Alle Rechte vorbehalten</p>
           <div className="flex gap-6 mt-4 md:mt-0">
              <a href="/impressum" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/impressum'); window.dispatchEvent(new Event('popstate')); window.scrollTo(0, 0); }} className="hover:text-white">Impressum</a>
              <a href="/datenschutz" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/datenschutz'); window.dispatchEvent(new Event('popstate')); window.scrollTo(0, 0); }} className="hover:text-white">Datenschutz</a>
              <a href="/agb" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/agb'); window.dispatchEvent(new Event('popstate')); window.scrollTo(0, 0); }} className="hover:text-white">AGB</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;