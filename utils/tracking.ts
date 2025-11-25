/**
 * Tracking Utilities for Adsfox Integration
 *
 * Diese Datei wird später mit dem echten Adsfox Tracking Script erweitert.
 * Alle Lead-Events werden hier zentralisiert.
 */

import { LeadType } from '../components/ContactModal';

export interface LeadData {
  leadType: LeadType;
  email: string;
  name: string;
  phone?: string;
  message?: string;
  page: string;
  timestamp: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
}

/**
 * Track Lead Submission
 * Wird aufgerufen wenn ein Lead-Formular abgeschickt wird
 */
export function trackLeadSubmission(data: LeadData): void {
  console.log('📊 Lead Submission Tracked:', data);

  // TODO: Hier kommt das Adsfox Tracking Script
  // Beispiel:
  // if (window.adsfox) {
  //   window.adsfox.track('lead_submission', {
  //     email: data.email,
  //     lead_type: data.leadType,
  //     value: getLeadValue(data.leadType)
  //   });
  // }

  // Optional: Auch an Google Analytics senden
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'lead_submission', {
      event_category: 'Lead',
      event_label: data.leadType,
      value: getLeadValue(data.leadType)
    });
  }
}

/**
 * Track CTA Click
 * Wird aufgerufen wenn ein User auf einen CTA Button klickt
 */
export function trackCTAClick(leadType: LeadType, ctaLabel: string, page: string): void {
  console.log('🖱️ CTA Click Tracked:', { leadType, ctaLabel, page });

  // TODO: Hier kommt das Adsfox Tracking Script
  // if (window.adsfox) {
  //   window.adsfox.track('cta_click', {
  //     lead_type: leadType,
  //     cta_label: ctaLabel,
  //     page: page
  //   });
  // }

  // Optional: Google Analytics
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'cta_click', {
      event_category: 'Engagement',
      event_label: `${leadType} - ${ctaLabel}`,
      page_path: page
    });
  }
}

/**
 * Track Modal Open
 * Wird aufgerufen wenn das Kontaktformular Modal geöffnet wird
 */
export function trackModalOpen(leadType: LeadType, page: string): void {
  console.log('📖 Modal Open Tracked:', { leadType, page });

  // TODO: Hier kommt das Adsfox Tracking Script
  // if (window.adsfox) {
  //   window.adsfox.track('modal_open', {
  //     lead_type: leadType,
  //     page: page
  //   });
  // }

  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'modal_open', {
      event_category: 'Engagement',
      event_label: leadType,
      page_path: page
    });
  }
}

/**
 * Track COI Calculator Completion
 * Wird aufgerufen wenn jemand den COI Calculator abschließt
 */
export function trackCOICalculation(coiResult: number, email: string): void {
  console.log('💰 COI Calculation Tracked:', { coiResult, email });

  // TODO: Hier kommt das Adsfox Tracking Script
  // if (window.adsfox) {
  //   window.adsfox.track('coi_calculation', {
  //     email: email,
  //     coi_result: coiResult
  //   });
  // }

  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'coi_calculation', {
      event_category: 'Calculator',
      event_label: 'COI Completed',
      value: coiResult
    });
  }
}

/**
 * Helper: Get estimated lead value based on lead type
 * Für Tracking-Zwecke können wir jedem Lead-Typ einen geschätzten Wert zuordnen
 */
function getLeadValue(leadType: LeadType): number {
  const leadValues: Record<LeadType, number> = {
    roadmap: 5000, // KI-Roadmap ~ 5.000€
    thinkai: 4200, // ThinkAI Weiterbildung = 4.200€
    coaching: 1200, // 1:1 Coaching = 1.200€
    keynote: 1280, // Keynote = 1.280€
    workshop: 1750, // Workshop = 1.750€
    coi: 5000 // COI Lead ~ potenzielle Roadmap
  };

  return leadValues[leadType] || 1000;
}

/**
 * Collect UTM Parameters from URL
 */
export function getUTMParameters(): { utm_source?: string; utm_medium?: string; utm_campaign?: string } {
  if (typeof window === 'undefined') return {};

  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source') || undefined,
    utm_medium: params.get('utm_medium') || undefined,
    utm_campaign: params.get('utm_campaign') || undefined
  };
}
