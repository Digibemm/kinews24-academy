import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import Button from './Button';
import { trackLeadSubmission, trackModalOpen, getUTMParameters } from '../utils/tracking';

export type LeadType = 'thinkai' | 'coaching' | 'keynote' | 'workshop' | 'roadmap' | 'coi';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  leadType: LeadType;
  prefillMessage?: string;
}

const leadTypeLabels: Record<LeadType, string> = {
  thinkai: 'ThinkAI Weiterbildung',
  coaching: '1:1 KI-Coaching',
  keynote: 'Keynote & Vortrag',
  workshop: 'Firmen-Workshop',
  roadmap: 'KI-Roadmap',
  coi: 'Cost of Inaction'
};

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, leadType, prefillMessage = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: prefillMessage
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Track modal open & close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      // Track modal open
      trackModalOpen(leadType, window.location.pathname);

      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, leadType]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // UTM Parameter sammeln
    const utmParams = getUTMParameters();

    // Tracking-Daten sammeln
    const trackingData = {
      leadType,
      email: formData.email,
      name: formData.name,
      phone: formData.phone,
      message: formData.message,
      page: window.location.pathname,
      timestamp: new Date().toISOString(),
      ...utmParams
    };

    // Track Lead Submission
    trackLeadSubmission(trackingData);

    // TODO: Hier später API Call zum Speichern der Daten
    // await fetch('/api/leads', {
    //   method: 'POST',
    //   body: JSON.stringify(trackingData)
    // });

    // Simuliere API Call
    await new Promise(resolve => setTimeout(resolve, 500));

    // Redirect zur Thank You Page mit leadType parameter
    window.location.href = `/thank-you?type=${leadType}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-fade-in-up">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 transition-colors z-10"
          aria-label="Schließen"
        >
          <X className="w-5 h-5 text-slate-600" />
        </button>

        {/* Header */}
        <div className="p-6 pb-4 border-b border-slate-200">
          <div className="inline-block px-3 py-1 bg-brand-accent/10 text-brand-accent rounded-full text-xs font-bold mb-3">
            INTERESSE AN
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            {leadTypeLabels[leadType]}
          </h2>
          <p className="text-slate-600">
            Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden bei Ihnen.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-4">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all"
                placeholder="Max Mustermann"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                E-Mail *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all"
                placeholder="max@beispiel.de"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                Telefon <span className="text-slate-500 font-normal">(optional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all"
                placeholder="+49 123 456789"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                Nachricht <span className="text-slate-500 font-normal">(optional)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all resize-none"
                placeholder="Ihre Nachricht oder Fragen..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6 pt-6 border-t border-slate-200">
            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Wird gesendet...' : 'Anfrage absenden'}
            </Button>
            <p className="text-xs text-slate-500 text-center mt-3">
              Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
