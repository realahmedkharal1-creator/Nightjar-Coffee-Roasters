import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../data/nightjarData';
import { getDubaiBusinessStatus, BusinessStatus } from '../utils/timeHelper';
import { Phone, Clock, ShoppingBag, Menu as MenuIcon, X, MapPin, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: (type?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [businessStatus, setBusinessStatus] = useState<BusinessStatus | null>(null);

  useEffect(() => {
    setBusinessStatus(getDubaiBusinessStatus());
    const interval = setInterval(() => {
      setBusinessStatus(getDubaiBusinessStatus());
    }, 60000);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { label: "Nitro Taps", href: "#nitro-taps" },
    { label: "Craft Menu", href: "#menu" },
    { label: "Roast Blends", href: "#roastery" },
    { label: "Our Story", href: "#about" },
    { label: "Reviews", href: "#reviews" },
    { label: "Gallery", href: "#gallery" },
    { label: "Location & Hours", href: "#location" },
    { label: "FAQ", href: "#faq" }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top micro-bar for opening status & quick contact */}
      <div id="top-announcement-bar" className="bg-[#0a0908] border-b border-[#26231e] text-xs py-1.5 px-4 text-[#a8a196] hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <span className={`inline-block w-2 h-2 rounded-full ${businessStatus?.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-600'}`}></span>
              <span className="font-mono text-white font-medium">{businessStatus?.statusText}</span>
              <span className="text-[#878075]">({businessStatus?.subText})</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#d97706]" />
              <span>Warehouse G62, Alserkal Avenue, Al Quoz 1, Dubai</span>
            </div>
          </div>

          <div className="flex items-center space-x-5">
            <span className="font-mono text-[#d97706] font-medium flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Time Out Dubai Best Café Winner
            </span>
            <a href={`tel:${BUSINESS_INFO.phoneE164}`} className="hover:text-white flex items-center gap-1 transition-colors">
              <Phone className="w-3 h-3 text-[#d97706]" />
              <span>{BUSINESS_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        id="main-navigation-header"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0f0e0cd9] backdrop-blur-md border-b border-[#2b2720] shadow-2xl py-3'
            : 'bg-[#0f0e0c]/90 backdrop-blur-sm border-b border-[#1f1d19] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Wordmark */}
          <a
            id="brand-logo-button"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center space-x-3 group"
          >
            {/* Custom SVG Nightjar Bird Mark */}
            <div className="w-10 h-10 rounded-lg bg-[#1e1b16] border border-[#38332a] flex items-center justify-center p-2 group-hover:border-[#d97706] transition-colors">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M10 28L20 8L30 28L24 28L20 18L16 28H10Z" fill="#D97706" />
                <circle cx="20" cy="23" r="2.5" fill="#FAF7F2" />
              </svg>
            </div>
            <div>
              <div className="font-display font-extrabold text-lg sm:text-xl tracking-wider text-white uppercase flex items-center gap-1.5">
                Nightjar <span className="text-[#d97706] font-normal text-xs px-1.5 py-0.5 rounded bg-[#d97706]/15 border border-[#d97706]/30">DXB</span>
              </div>
              <p className="text-[10px] text-[#9c9488] tracking-widest uppercase font-mono">Coffee Roasters • Alserkal</p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-1.5 text-sm font-medium text-[#c4bdaf] hover:text-white hover:bg-[#1f1d19] rounded-md transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              id="header-deliveroo-cta"
              href={BUSINESS_INFO.deliverooUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs font-semibold px-3.5 py-2 rounded-lg bg-[#1c1a16] text-[#e8e2d8] border border-[#332f28] hover:border-[#00cdbc] hover:text-[#00cdbc] transition-colors"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#00cdbc]" />
              <span>Order Delivery</span>
            </a>

            <button
              id="header-book-table-cta"
              onClick={() => onOpenBooking("Table Reservation")}
              className="inline-flex items-center space-x-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-[#d97706] hover:bg-[#b45309] text-white shadow-lg shadow-amber-950/40 transition-all active:scale-95"
            >
              <Clock className="w-3.5 h-3.5" />
              <span>Book / Inquire</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#1c1a16] border border-[#2b2720] text-[#ded8cc] hover:text-white"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div id="mobile-menu-drawer" className="lg:hidden bg-[#12110e] border-b border-[#29251f] px-4 pt-3 pb-6 space-y-3 animate-in fade-in duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-[#221f1a]">
              <div className="flex items-center space-x-2">
                <span className={`w-2 h-2 rounded-full ${businessStatus?.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-600'}`}></span>
                <span className="text-xs font-mono text-white">{businessStatus?.statusText}</span>
              </div>
              <a href={`tel:${BUSINESS_INFO.phoneE164}`} className="text-xs text-[#d97706] font-mono flex items-center gap-1">
                <Phone className="w-3 h-3" /> {BUSINESS_INFO.phoneFormatted}
              </a>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2.5 rounded-lg bg-[#1a1814] text-sm font-medium text-[#d9d3c7] hover:text-white hover:bg-[#26231e]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col space-y-2">
              <a
                href={BUSINESS_INFO.deliverooUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 py-3 rounded-lg bg-[#00cdbc]/15 border border-[#00cdbc]/40 text-[#00cdbc] text-sm font-semibold"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Order on Deliveroo (Al Quoz 1)</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking("Table Reservation");
                }}
                className="w-full flex items-center justify-center space-x-2 py-3 rounded-lg bg-[#d97706] text-white text-sm font-semibold shadow-lg"
              >
                <Clock className="w-4 h-4" />
                <span>Reserve a Table or Inquire</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
