import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemAwareness from './components/ProblemAwareness';
import CostOfInaction from './components/CostOfInaction';
import NextSteps from './components/NextSteps';
import SolutionOverview from './components/SolutionOverview';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Team from './components/Team';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Button from './components/Button';
import ContactModal, { LeadType } from './components/ContactModal';
import CookieConsent from './components/CookieConsent';
import RoadmapPage from './pages/RoadmapPage';
import AcademyPage from './pages/AcademyPage';
import ThinkAIPage from './pages/ThinkAIPage';
import KeynotesPage from './pages/KeynotesPage';
import ThankYouPage from './pages/ThankYouPage';
import ImpressumPage from './pages/ImpressumPage';
import DatenschutzPage from './pages/DatenschutzPage';
import AGBPage from './pages/AGBPage';
import TerminPage from './pages/TerminPage';
import FAQPage from './pages/FAQPage';
import { useDocumentTitle, PAGE_META } from './hooks/useDocumentTitle';

// Global function to open contact modal
declare global {
  interface Window {
    openContactModal: (leadType: LeadType, message?: string) => void;
  }
}

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [contactModal, setContactModal] = useState<{ isOpen: boolean; leadType: LeadType; message?: string }>({
    isOpen: false,
    leadType: 'roadmap',
    message: ''
  });

  // Update document title and meta tags based on current route
  useDocumentTitle(PAGE_META[currentPath] || PAGE_META['/']);

  // Global function to open contact modal from anywhere
  useEffect(() => {
    window.openContactModal = (leadType: LeadType, message?: string) => {
      setContactModal({ isOpen: true, leadType, message });
    };
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      // Start transition effect
      setIsTransitioning(true);

      // Short delay for visual feedback
      setTimeout(() => {
        setCurrentPath(window.location.pathname);
        // Scroll to top on route change
        window.scrollTo(0, 0);

        // End transition effect
        setTimeout(() => {
          setIsTransitioning(false);

          // Handle hash scrolling after navigation if present
          if (window.location.hash) {
            setTimeout(() => {
              const el = document.querySelector(window.location.hash);
              el?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }
        }, 150);
      }, 150);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark text-brand-text font-sans selection:bg-brand-accent selection:text-white overflow-x-hidden">
      <Navbar />
      
      <main>
        {currentPath === '/thank-you' ? (
          <ThankYouPage />
        ) : currentPath === '/termin' ? (
          <TerminPage />
        ) : currentPath === '/impressum' ? (
          <ImpressumPage />
        ) : currentPath === '/datenschutz' ? (
          <DatenschutzPage />
        ) : currentPath === '/agb' ? (
          <AGBPage />
        ) : currentPath === '/faq' ? (
          <FAQPage />
        ) : currentPath === '/roadmap' ? (
          <RoadmapPage />
        ) : currentPath === '/academy' ? (
          <AcademyPage />
        ) : currentPath === '/ki-experte-weiterbildung' ? (
          <ThinkAIPage />
        ) : currentPath === '/keynotes' ? (
          <KeynotesPage />
        ) : currentPath === '/coi-calculator' ? (
          <div className="pt-20 min-h-screen flex flex-col bg-[#F8FAFC]">
            <CostOfInaction />
            <section className="py-16 bg-white text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Bereit für die Umsetzung?</h3>
              <Button onClick={() => {
                window.history.pushState({}, '', '/#audit');
                window.dispatchEvent(new Event('popstate'));
              }}>
                Jetzt Roadmap anfragen
              </Button>
            </section>
          </div>
        ) : (
          <>
            <Hero />
            
            {/* The Light Sheet Container */}
            <div className="bg-[#F8FAFC] relative z-20 rounded-t-[40px] md:rounded-t-[60px] -mt-12 md:-mt-20 shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden pb-24">
              <ProblemAwareness />
              <CostOfInaction />
              <NextSteps />
              <SolutionOverview />
              <CaseStudies />
              <Services />
              <Process />
              <Team />
              <FAQ />
              
              {/* Final CTA Section embedded in light theme */}
              <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/50"></div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Bereit, Klarheit zu bekommen?</h2>
                    <p className="text-xl text-slate-600 mb-10">
                      Buchen Sie Ihre KI-Roadmap – und wissen Sie danach genau, wo Sie anfangen müssen.
                    </p>

                    <Button size="lg" className="text-lg px-12 py-5 shadow-xl shadow-brand-accent/20" onClick={() => {
                      window.history.pushState({}, '', '/termin?source=roadmap');
                      window.dispatchEvent(new Event('popstate'));
                      window.scrollTo(0, 0);
                    }}>
                      KI-ROADMAP BUCHEN
                    </Button>
                    
                    <div className="mt-8 flex items-center justify-center text-sm text-slate-500">
                      <a
                        href="/coi-calculator"
                        onClick={(e) => {
                          e.preventDefault();
                          window.history.pushState({}, '', '/coi-calculator');
                          window.dispatchEvent(new Event('popstate'));
                        }}
                        className="hover:text-brand-accent underline"
                      >
                        Cost of Inaction berechnen
                      </a>
                    </div>
                </div>
              </section>
            </div>
          </>
        )}
      </main>

      <Footer />

      {/* Contact Modal */}
      <ContactModal
        isOpen={contactModal.isOpen}
        onClose={() => setContactModal({ ...contactModal, isOpen: false })}
        leadType={contactModal.leadType}
        prefillMessage={contactModal.message}
      />

      {/* Cookie Consent */}
      <CookieConsent />

      {/* Page Transition Overlay */}
      {isTransitioning && (
        <div
          className="fixed inset-0 bg-brand-dark/30 backdrop-blur-sm z-[100] pointer-events-none animate-fade-in"
          style={{
            animation: 'fadeInOut 300ms ease-in-out'
          }}
        />
      )}

    </div>
  );
};

export default App;