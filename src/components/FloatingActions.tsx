import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../data/nightjarData';
import { Phone, MessageSquare, ShoppingBag, ArrowUp } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop Back to Top Button */}
      {showBackToTop && (
        <button
          id="floating-back-to-top"
          onClick={scrollToTop}
          className="fixed bottom-20 sm:bottom-8 right-6 z-40 p-3 rounded-full bg-[#1c1914]/90 backdrop-blur-md text-[#d97706] hover:bg-[#d97706] hover:text-white border border-[#382f22] shadow-2xl transition-all hover:scale-110 active:scale-95 hidden sm:flex items-center justify-center animate-in fade-in"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Sticky Mobile Bottom Bar */}
      <div
        id="mobile-sticky-action-bar"
        className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0e0c0a]/95 backdrop-blur-xl border-t border-[#262017] px-4 py-2.5 flex items-center justify-between gap-2 shadow-2xl"
      >
        {/* Call */}
        <a
          href={`tel:${BUSINESS_INFO.phoneE164}`}
          className="flex-1 flex items-center justify-center space-x-1.5 py-2.5 rounded-xl bg-[#1c1914] border border-[#2e261c] text-white text-xs font-mono font-bold"
        >
          <Phone className="w-3.5 h-3.5 text-[#d97706]" />
          <span>Call</span>
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${BUSINESS_INFO.whatsappE164}?text=Hi%20Nightjar%20team,%20I'd%20like%20to%20order%20or%20inquire`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center space-x-1.5 py-2.5 rounded-xl bg-[#132b1d] border border-[#1b422a] text-[#25D366] text-xs font-mono font-bold"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        {/* Deliveroo */}
        <a
          href={BUSINESS_INFO.deliverooUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center space-x-1.5 py-2.5 rounded-xl bg-[#00cdbc] text-black text-xs font-bold shadow-md"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>Deliveroo</span>
        </a>
      </div>
    </>
  );
};
