import React from 'react';
import { BUSINESS_INFO } from '../data/nightjarData';
import { Instagram, ShoppingBag, MapPin, Phone, Mail, ArrowUp, Sparkles, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#080706] border-t border-[#1f1b15] text-[#a39a8c] pt-16 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1f1b15]">
          {/* Col 1: Brand & Manifesto */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-[#1a1713] border border-[#383023] flex items-center justify-center p-1.5">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M10 28L20 8L30 28L24 28L20 18L16 28H10Z" fill="#D97706" />
                  <circle cx="20" cy="23" r="2.5" fill="#FAF7F2" />
                </svg>
              </div>
              <span className="font-display font-bold text-xl text-white tracking-wider uppercase">
                Nightjar DXB
              </span>
            </div>

            <p className="text-xs text-[#8f8677] leading-relaxed max-w-sm">
              Independent specialty coffee roastery, craft kitchen, and nitro draft taproom. Born in 2017 inside Warehouse G62, Alserkal Avenue, Dubai.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              {/* Instagram */}
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile @nightjar.coffee"
                className="w-9 h-9 rounded-xl bg-[#14120e] border border-[#29231b] flex items-center justify-center text-[#d97706] hover:bg-[#d97706] hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>

              {/* Deliveroo */}
              <a
                href={BUSINESS_INFO.deliverooUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Deliveroo Menu"
                className="w-9 h-9 rounded-xl bg-[#14120e] border border-[#29231b] flex items-center justify-center text-[#00cdbc] hover:bg-[#00cdbc] hover:text-black transition-colors"
              >
                <ShoppingBag className="w-4 h-4" />
              </a>

              {/* Google Maps */}
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps Listing"
                className="w-9 h-9 rounded-xl bg-[#14120e] border border-[#29231b] flex items-center justify-center text-[#fbbf24] hover:bg-[#fbbf24] hover:text-black transition-colors"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-white font-bold">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#nitro-taps" className="hover:text-white transition-colors">Nitro Taps</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Craft Menu</a></li>
              <li><a href="#roastery" className="hover:text-white transition-colors">Roastery Beans</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Our Story & Ethos</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Customer Reviews</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Warehouse Visuals</a></li>
            </ul>
          </div>

          {/* Col 3: Hours Summary */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-white font-bold">
              Operating Hours
            </h4>
            <div className="text-xs space-y-1.5 font-mono">
              <p className="text-white font-semibold">Monday – Sunday</p>
              <p className="text-[#8f8677]">09:00 AM – 10:00 PM GST</p>
              <div className="pt-2 text-[11px] text-[#00cdbc] flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Vinyl Spinning & Kitchen Open All Day
              </div>
            </div>
          </div>

          {/* Col 4: Location & Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-white font-bold">
              Location & Tel
            </h4>
            <div className="text-xs space-y-2">
              <p className="text-[#8f8677] leading-relaxed">
                Warehouse G62, Alserkal Avenue, 8th Street, Al Quoz 1, Dubai, UAE
              </p>
              <p className="font-mono text-white">
                <a href={`tel:${BUSINESS_INFO.phoneE164}`} className="hover:text-[#d97706] transition-colors">
                  📞 {BUSINESS_INFO.phoneFormatted}
                </a>
              </p>
              <p className="font-mono text-[#25D366]">
                <a href={`https://wa.me/${BUSINESS_INFO.whatsappE164}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  💬 WhatsApp: +{BUSINESS_INFO.whatsappE164}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Agency Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-[#787063] font-mono">
            © {new Date().getFullYear()} Nightjar Coffee Roasters. All rights reserved.
          </p>

          <div className="flex items-center space-x-4">
            <span className="text-[#787063] text-[11px]">
              Sales Pitch Demo Website crafted for <strong className="text-white">Nightjar Coffee</strong>
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#14120e] hover:bg-[#211d17] text-[#a39a8c] hover:text-white border border-[#2b251c] transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
