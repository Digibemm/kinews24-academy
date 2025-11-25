import React, { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import Button from './Button';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show banner after a short delay
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
    // Enable analytics/tracking here if needed
    console.log('Cookies accepted');
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
    // Disable analytics/tracking here if needed
    console.log('Cookies declined');
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[9998]" />

      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6 animate-fade-in-up">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl border-2 border-slate-200">
          <div className="p-6 md:p-8">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center shrink-0">
                  <Cookie className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Cookie-Einstellungen</h3>
                  <p className="text-sm text-slate-600">Wir respektieren Ihre Privatsphäre</p>
                </div>
              </div>
              <button
                onClick={handleDecline}
                className="text-slate-400 hover:text-slate-600 transition-colors p-1"
                aria-label="Schließen"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="mb-6">
              <p className="text-slate-700 leading-relaxed mb-4">
                Wir verwenden Cookies und ähnliche Technologien, um Ihnen das beste Nutzererlebnis zu bieten
                und um unsere Website zu verbessern. Einige Cookies sind notwendig für den Betrieb der Website,
                andere helfen uns, die Nutzung zu analysieren.
              </p>

              {/* Details Section */}
              {showDetails && (
                <div className="bg-slate-50 rounded-xl p-4 space-y-4 mb-4 animate-fade-in">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                      Notwendige Cookies
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht
                      deaktiviert werden. Sie speichern z.B. Ihre Cookie-Einstellungen.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                      Analyse-Cookies (Optional)
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren.
                      Alle Informationen werden anonymisiert erfasst und ausgewertet.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                      Calendly-Widget
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Für unsere Terminbuchung nutzen wir Calendly. Beim Öffnen des Buchungskalenders werden
                      Verbindungen zu Calendly-Servern hergestellt.
                    </p>
                  </div>
                </div>
              )}

              <button
                onClick={() => setShowDetails(!showDetails)}
                className="text-sm text-brand-accent hover:underline font-medium"
              >
                {showDetails ? '▼ Weniger anzeigen' : '▶ Mehr erfahren'}
              </button>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="primary"
                size="lg"
                onClick={handleAccept}
                className="flex-1"
              >
                Alle akzeptieren
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleDecline}
                className="flex-1"
              >
                Nur notwendige
              </Button>
            </div>

            {/* Footer Link */}
            <p className="text-xs text-slate-500 text-center mt-4">
              Mehr Informationen in unserer{' '}
              <a
                href="/datenschutz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-accent hover:underline font-medium"
              >
                Datenschutzerklärung
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookieConsent;
