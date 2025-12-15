import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import Button from './Button';
import Tooltip from './Tooltip';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showRoadmap, setShowRoadmap] = useState(false);
  const [showAcademy, setShowAcademy] = useState(false);
  const [mobileRoadmapOpen, setMobileRoadmapOpen] = useState(false);
  const [mobileAcademyOpen, setMobileAcademyOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const roadmapTimeout = React.useRef<NodeJS.Timeout | null>(null);
  const academyTimeout = React.useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handlePathChange = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handlePathChange);
    return () => window.removeEventListener('popstate', handlePathChange);
  }, []);

  const handleRoadmapEnter = () => {
    if (roadmapTimeout.current) {
      clearTimeout(roadmapTimeout.current);
    }
    setShowRoadmap(true);
    setShowAcademy(false);
  };

  const handleRoadmapLeave = () => {
    roadmapTimeout.current = setTimeout(() => {
      setShowRoadmap(false);
    }, 300);
  };

  const handleAcademyEnter = () => {
    if (academyTimeout.current) {
      clearTimeout(academyTimeout.current);
    }
    setShowAcademy(true);
    setShowRoadmap(false);
  };

  const handleAcademyLeave = () => {
    academyTimeout.current = setTimeout(() => {
      setShowAcademy(false);
    }, 300);
  };

  const roadmapItems = [
    {
      icon: '🔍',
      title: 'KI-Roadmap',
      subtitle: 'Analyse · Strategie · Umsetzungsplan',
      description: 'Wir analysieren Ihre Prozesse und erstellen einen konkreten Aktionsplan.',
      href: '/roadmap'
    }
    // Implementierung und Beratung kommen später
  ];

  const academyItems = [
    {
      icon: '🎯',
      title: 'Academy Übersicht',
      subtitle: 'Alle Angebote im Überblick',
      description: 'Entdecken Sie unser komplettes Weiterbildungs-Portfolio.',
      href: '/academy',
      featured: true
    },
    {
      icon: '🎓',
      title: 'KI-Experte Weiterbildung',
      subtitle: 'Online-Kurs · Selbstlern-Tempo',
      description: 'Unser Flagship-Kurs für Trainer:innen, Berater:innen und Coaches.',
      href: '/ki-experte-weiterbildung'
    },
    {
      icon: '👥',
      title: '1:1 Coaching',
      subtitle: 'Individuelle Begleitung',
      description: 'Persönliches Coaching für Ihre spezifischen Herausforderungen.',
      href: '/academy#coaching'
    },
    {
      icon: '🎤',
      title: 'Keynotes & Vorträge',
      subtitle: 'Events · Tagungen · Verbände',
      description: 'Inspirierende Vorträge für Ihr Event oder Ihre Organisation.',
      href: '/keynotes'
    },
    {
      icon: '🏢',
      title: 'Firmen-Workshops',
      subtitle: 'Tagesweise buchbar',
      description: 'Maßgeschneiderte Workshops direkt bei Ihnen vor Ort.',
      href: '/academy#workshops'
    }
  ];

  const mainNavLinks = [
    { label: 'COI-Rechner', href: '/coi-calculator' },
    { label: 'Referenzen', href: '#case-studies' },
    { label: 'Über uns', href: '#team' },
  ];

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    if (href.startsWith('/')) {
      // Handle route change
      window.history.pushState({}, '', href);
      window.dispatchEvent(new Event('popstate'));
      setIsOpen(false);
      window.scrollTo(0, 0);
    } else if (href.startsWith('#')) {
      // Handle hash link
      if (window.location.pathname !== '/') {
        window.history.pushState({}, '', '/' + href);
        window.dispatchEvent(new Event('popstate'));
        setIsOpen(false);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
      }
    }
  };

  // Calculate navbar height for mobile menu positioning
  const navbarHeight = scrolled ? '64px' : '80px';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-dark/95 backdrop-blur-xl border-b border-white/10 py-3' : 'bg-brand-dark/80 backdrop-blur-md py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <div className="flex items-center">
            <a
              href="/"
              onClick={(e) => handleNavigation(e, '/')}
              className="flex items-center group"
            >
              <img
                src="/Logo-kinews24-white.png"
                alt="KINEWS24 Academy"
                className="h-10 w-auto transition-opacity group-hover:opacity-80"
              />
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">

            {/* Roadmap & Agentur Mega Menu */}
            <div
              className="relative"
              onMouseEnter={handleRoadmapEnter}
              onMouseLeave={handleRoadmapLeave}
            >
              <button className="text-sm font-medium text-brand-muted hover:text-white transition-colors flex items-center gap-1">
                Roadmap & Agentur
                <ChevronDown size={14} className="opacity-50" />
              </button>

              {/* Mega Menu Dropdown */}
              {showRoadmap && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[450px] bg-white rounded-2xl shadow-2xl border border-slate-200 p-8 animate-fade-in"
                  onMouseEnter={handleRoadmapEnter}
                  onMouseLeave={handleRoadmapLeave}
                >
                  <div className="space-y-4">
                    {roadmapItems.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        onClick={(e) => handleNavigation(e, item.href)}
                        className="group p-6 rounded-xl hover:bg-slate-50 transition-all duration-200 border border-transparent hover:border-brand-accent/20 block"
                      >
                        <div className="flex items-start gap-4">
                          <div className="text-3xl">{item.icon}</div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-brand-accent transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-xs text-brand-accent font-medium mb-2">
                              {item.subtitle}
                            </p>
                            <p className="text-sm text-slate-600 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                          <ChevronRight className="text-slate-400 group-hover:text-brand-accent group-hover:translate-x-1 transition-all" size={20} />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Academy Mega Menu */}
            <div
              className="relative"
              onMouseEnter={handleAcademyEnter}
              onMouseLeave={handleAcademyLeave}
            >
              <button className="text-sm font-medium text-brand-muted hover:text-white transition-colors flex items-center gap-1">
                Academy
                <ChevronDown size={14} className="opacity-50" />
              </button>

              {/* Mega Menu Dropdown */}
              {showAcademy && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] bg-white rounded-2xl shadow-2xl border border-slate-200 p-8 animate-fade-in"
                  onMouseEnter={handleAcademyEnter}
                  onMouseLeave={handleAcademyLeave}
                >
                  {/* Featured: Academy Übersicht */}
                  {academyItems[0] && academyItems[0].featured && (
                    <a
                      href={academyItems[0].href}
                      onClick={(e) => handleNavigation(e, academyItems[0].href)}
                      className="group block p-6 mb-6 rounded-xl bg-gradient-to-br from-brand-cyan/5 to-brand-accent/5 hover:from-brand-cyan/10 hover:to-brand-accent/10 transition-all duration-200 border-2 border-brand-cyan/20 hover:border-brand-cyan/40"
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-4xl">{academyItems[0].icon}</div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-brand-cyan transition-colors">
                            {academyItems[0].title}
                          </h3>
                          <p className="text-sm text-brand-cyan font-medium mb-2">
                            {academyItems[0].subtitle}
                          </p>
                          <p className="text-sm text-slate-600 leading-relaxed">
                            {academyItems[0].description}
                          </p>
                        </div>
                        <ChevronRight className="text-brand-cyan group-hover:translate-x-1 transition-all" size={24} />
                      </div>
                    </a>
                  )}

                  {/* Einzelangebote */}
                  <div className="grid grid-cols-2 gap-4">
                    {academyItems.slice(1).map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        onClick={(e) => handleNavigation(e, item.href)}
                        className="group p-5 rounded-xl hover:bg-slate-50 transition-all duration-200 border border-transparent hover:border-brand-cyan/20"
                      >
                        <div className="flex items-start gap-3">
                          <div className="text-2xl">{item.icon}</div>
                          <div className="flex-1">
                            <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-brand-cyan transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-xs text-brand-cyan font-medium mb-2">
                              {item.subtitle}
                            </p>
                            <p className="text-xs text-slate-600 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                          <ChevronRight className="text-slate-400 group-hover:text-brand-cyan group-hover:translate-x-1 transition-all" size={18} />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Other Nav Links */}
            {mainNavLinks.map((link) => {
              const isActive = currentPath === link.href;

              if (link.label === 'COI-Rechner') {
                return (
                  <Tooltip key={link.label} text="Berechnen Sie Ihre Stillstandskosten in 2 Minuten" position="bottom">
                    <a
                      href={link.href}
                      onClick={(e) => handleNavigation(e, link.href)}
                      className={`text-sm font-medium transition-colors ${
                        isActive ? 'text-brand-cyan' : 'text-brand-muted hover:text-white'
                      }`}
                    >
                      {link.label}
                    </a>
                  </Tooltip>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavigation(e, link.href)}
                  className={`text-sm font-medium transition-colors ${
                    isActive ? 'text-white' : 'text-brand-muted hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}

            <Button variant="primary" size="sm" onClick={() => {
              window.history.pushState({}, '', '/termin?source=roadmap');
              window.dispatchEvent(new Event('popstate'));
              window.scrollTo(0, 0);
            }}>
              ROADMAP BUCHEN
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-3 -mr-3 hover:bg-white/10 rounded-lg transition-colors active:bg-white/20"
              aria-label={isOpen ? 'Menü schließen' : 'Menü öffnen'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Fullscreen Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-brand-dark z-40 overflow-y-auto"
          style={{ top: navbarHeight }}
        >
          <div className="px-4 py-6 space-y-2">

            {/* Roadmap & Agentur Akkordeon */}
            <div className="border-b border-white/10 pb-2">
              <button
                onClick={() => setMobileRoadmapOpen(!mobileRoadmapOpen)}
                className="w-full flex items-center justify-between px-4 py-4 text-base font-medium text-white hover:bg-white/5 rounded-md transition-colors active:bg-white/10"
                aria-expanded={mobileRoadmapOpen}
              >
                <span>Roadmap & Agentur</span>
                <ChevronDown className={`transition-transform ${mobileRoadmapOpen ? 'rotate-180' : ''}`} size={20} />
              </button>

              {mobileRoadmapOpen && (
                <div className="mt-2 space-y-2 bg-white/5 rounded-lg p-3 animate-fade-in">
                  {roadmapItems.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      onClick={(e) => {
                        handleNavigation(e, item.href);
                        setIsOpen(false);
                      }}
                      className="block p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-2xl">{item.icon}</div>
                        <div>
                          <h4 className="text-white font-bold mb-1">{item.title}</h4>
                          <p className="text-xs text-brand-accent mb-2">{item.subtitle}</p>
                          <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Academy Akkordeon */}
            <div className="border-b border-white/10 pb-2">
              <button
                onClick={() => setMobileAcademyOpen(!mobileAcademyOpen)}
                className="w-full flex items-center justify-between px-4 py-4 text-base font-medium text-white hover:bg-white/5 rounded-md transition-colors active:bg-white/10"
                aria-expanded={mobileAcademyOpen}
              >
                <span>Academy</span>
                <ChevronDown className={`transition-transform ${mobileAcademyOpen ? 'rotate-180' : ''}`} size={20} />
              </button>

              {mobileAcademyOpen && (
                <div className="mt-2 space-y-2 bg-white/5 rounded-lg p-3 animate-fade-in">
                  {academyItems.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      onClick={(e) => {
                        handleNavigation(e, item.href);
                        setIsOpen(false);
                      }}
                      className="block p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-2xl">{item.icon}</div>
                        <div>
                          <h4 className="text-white font-bold mb-1">{item.title}</h4>
                          <p className="text-xs text-brand-cyan mb-2">{item.subtitle}</p>
                          <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Other Links */}
            {mainNavLinks.map((link) => {
              const isActive = currentPath === link.href;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    handleNavigation(e, link.href);
                    setIsOpen(false);
                  }}
                  className={`block px-4 py-4 text-base font-medium rounded-md transition-colors active:bg-white/10 ${
                    isActive
                      ? 'text-white bg-white/10'
                      : link.label === 'COI-Rechner'
                      ? 'text-brand-cyan hover:text-white hover:bg-white/5'
                      : 'text-brand-muted hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}

            {/* CTA Button */}
            <div className="pt-4 mt-4 border-t border-white/10">
              <Button
                className="w-full justify-center"
                onClick={() => {
                  setIsOpen(false);
                  window.history.pushState({}, '', '/termin?source=roadmap');
                  window.dispatchEvent(new Event('popstate'));
                  window.scrollTo(0, 0);
                }}
              >
                KI-Roadmap buchen ⭐
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
