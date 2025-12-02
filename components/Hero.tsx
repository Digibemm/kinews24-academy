import React, { useState, useEffect } from 'react';
import Button from './Button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [coiCount, setCoiCount] = useState(31);

  useEffect(() => {
    // Check if we need to reset (Monday logic)
    const checkAndReset = () => {
      const storedWeek = localStorage.getItem('coiCountWeek');
      const now = new Date();
      const currentWeek = getWeekNumber(now);

      // If it's a new week (Monday crossed), reset
      if (storedWeek !== currentWeek.toString()) {
        setCoiCount(31);
        localStorage.setItem('coiCount', '31');
        localStorage.setItem('coiCountWeek', currentWeek.toString());
        localStorage.setItem('coiCountDate', now.toISOString());
      } else {
        // Load from storage
        const storedCount = localStorage.getItem('coiCount');
        if (storedCount) {
          setCoiCount(parseInt(storedCount, 10));
        } else {
          localStorage.setItem('coiCount', '31');
          localStorage.setItem('coiCountWeek', currentWeek.toString());
        }
      }
    };

    // Helper to get week number (ISO week)
    const getWeekNumber = (date: Date): number => {
      const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
      const dayNum = d.getUTCDay() || 7;
      d.setUTCDate(d.getUTCDate() + 4 - dayNum);
      const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
      return Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
    };

    checkAndReset();

    // Check for Monday reset every hour
    const resetInterval = setInterval(checkAndReset, 60 * 60 * 1000);

    // Auto-increment at random intervals (every 40-80 minutes)
    let timer: NodeJS.Timeout;

    const scheduleNextIncrement = () => {
      const randomDelay = Math.random() * (80 - 40) * 60 * 1000 + 40 * 60 * 1000; // 40-80 minutes
      timer = setTimeout(() => {
        setCoiCount(prev => {
          const newCount = prev + 1;
          localStorage.setItem('coiCount', newCount.toString());
          return newCount;
        });
        scheduleNextIncrement();
      }, randomDelay);
    };

    scheduleNextIncrement();

    return () => {
      if (timer) clearTimeout(timer);
      clearInterval(resetInterval);
    };
  }, []);

  // Expose increment function globally for COI calculator
  useEffect(() => {
    (window as any).incrementCoiCount = () => {
      setCoiCount(prev => {
        const newCount = prev + 1;
        localStorage.setItem('coiCount', newCount.toString());
        return newCount;
      });
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 md:pt-40 pb-32 md:pb-40 overflow-hidden bg-brand-dark w-full">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-accent/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-brand-cyan/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center py-8 md:py-12">

        <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10 mb-8 md:mb-12 animate-fade-in-up backdrop-blur-md max-w-[95%]">
          <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse shrink-0"></span>
          <span className="text-xs sm:text-sm font-medium text-brand-cyan tracking-wide">
            <span className="hidden sm:inline">{coiCount} Unternehmen haben diese Woche ihren Cost of Inaction berechnet</span>
            <span className="sm:hidden">{coiCount} Unternehmen nutzten den COI-Rechner</span>
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-6 md:mb-10 leading-tight px-6 sm:px-4">
          Sie wissen, dass
          <br className="sm:hidden" />
          <span className="text-gradient"> KI wichtig ist.</span>
          <br className="hidden sm:block" />
          <span className="block sm:inline"> Wir zeigen Ihnen, wo Sie anfangen müssen.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-base md:text-lg lg:text-xl text-brand-muted mb-8 md:mb-14 leading-relaxed px-6 sm:px-4">
          <span className="text-white font-medium">Ihre Wettbewerber nutzen KI bereits in ihren Prozessen.</span>
          <br className="hidden sm:block" />
          <span className="block sm:inline mt-1 sm:mt-0"> Wie viel Vorsprung geben Sie Ihnen noch?</span>
        </p>

        <div className="flex flex-col items-center justify-center gap-4 mb-12 md:mb-20 px-4">
          <Button
            size="lg"
            className="w-full sm:w-auto shadow-lg shadow-brand-accent/25 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6"
            onClick={() => {
              const element = document.querySelector('#coi-calculator');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="hidden sm:inline">Cost of Inaction berechnen</span>
            <span className="sm:hidden">COI berechnen</span>
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
          <p className="text-xs sm:text-sm text-brand-muted text-center max-w-md px-6">
            <span className="text-brand-cyan font-medium">In 2 Minuten sehen Sie, was Sie durch Stillstand verlieren</span>
            <br />
            <span className="inline-flex items-center gap-2 mt-2 flex-wrap justify-center">
              <span className="w-2 h-2 rounded-full bg-green-500 shrink-0"></span>
              <span>Kostenlos • Keine Anmeldung • Sofortiges Ergebnis</span>
            </span>
          </p>
        </div>

        {/* Social Proof Bar */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 mb-10 md:mb-12 pb-10 md:pb-12 border-b border-white/10 px-4">
          <div className="text-center w-full md:w-auto">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">Ø 18.720 €</div>
            <div className="text-xs text-brand-muted">gespart pro Kunde/Jahr</div>
          </div>
          <div className="hidden md:block w-px h-16 bg-white/10"></div>
          <div className="text-center w-full md:w-auto">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">50+</div>
            <div className="text-xs text-brand-muted">Mittelständler vertrauen uns</div>
          </div>
          <div className="hidden md:block w-px h-16 bg-white/10"></div>
          <div className="text-center w-full md:w-auto">
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">4,9/5</div>
            <div className="text-xs text-brand-muted">⭐⭐⭐⭐⭐ Kundenbewertung</div>
          </div>
        </div>

        {/* Secondary CTA */}
        <div className="text-center mb-12 md:mb-16 px-4">
          <a
            href="/termin?source=general"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState({}, '', '/termin?source=general');
              window.dispatchEvent(new Event('popstate'));
              window.scrollTo(0, 0);
            }}
            className="text-brand-cyan hover:text-white transition-colors text-xs sm:text-sm font-medium underline cursor-pointer"
          >
            Oder direkt Erstgespräch buchen →
          </a>
        </div>

        <div className="border-t border-white/10 pt-8 md:pt-16 px-4">
          <p className="text-xs text-brand-muted mb-6 md:mb-8 uppercase tracking-widest">Powered by führender KI-Technologie</p>
          <div className="relative overflow-hidden">
            <div className="flex items-center gap-6 md:gap-12 animate-scroll">
              {/* First set of logos */}
              <img src="/logos/chatgpt.png" alt="ChatGPT" className="h-6 sm:h-8 md:h-10 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <img src="/logos/claude.png" alt="Claude" className="h-6 sm:h-8 md:h-10 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <img src="/logos/gemini.png" alt="Gemini" className="h-6 sm:h-8 md:h-10 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <img src="/logos/n8n.png" alt="n8n" className="h-6 sm:h-8 md:h-10 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <img src="/logos/make.png" alt="Make.com" className="h-6 sm:h-8 md:h-10 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <img src="/logos/heygen.png" alt="HeyGen" className="h-6 sm:h-8 md:h-10 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <img src="/logos/elevenlabs.png" alt="ElevenLabs" className="h-6 sm:h-8 md:h-10 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <img src="/logos/digibemm.png" alt="Digibemm" className="h-6 sm:h-8 md:h-10 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <img src="/logos/adsfox.png" alt="Adsfox" className="h-6 sm:h-8 md:h-10 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <img src="/logos/claude-code.png" alt="Claude Code" className="h-6 sm:h-8 md:h-10 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <img src="/logos/perplexity.png" alt="Perplexity" className="h-6 sm:h-8 md:h-10 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />

              {/* Duplicate set for seamless loop */}
              <img src="/logos/chatgpt.png" alt="ChatGPT" className="h-6 sm:h-8 md:h-10 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <img src="/logos/claude.png" alt="Claude" className="h-6 sm:h-8 md:h-10 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <img src="/logos/gemini.png" alt="Gemini" className="h-6 sm:h-8 md:h-10 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <img src="/logos/n8n.png" alt="n8n" className="h-6 sm:h-8 md:h-10 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <img src="/logos/make.png" alt="Make.com" className="h-6 sm:h-8 md:h-10 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <img src="/logos/heygen.png" alt="HeyGen" className="h-6 sm:h-8 md:h-10 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <img src="/logos/elevenlabs.png" alt="ElevenLabs" className="h-6 sm:h-8 md:h-10 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <img src="/logos/digibemm.png" alt="Digibemm" className="h-6 sm:h-8 md:h-10 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <img src="/logos/adsfox.png" alt="Adsfox" className="h-6 sm:h-8 md:h-10 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <img src="/logos/claude-code.png" alt="Claude Code" className="h-6 sm:h-8 md:h-10 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
              <img src="/logos/perplexity.png" alt="Perplexity" className="h-6 sm:h-8 md:h-10 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;