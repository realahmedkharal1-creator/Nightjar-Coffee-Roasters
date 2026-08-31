import React from 'react';
import { BUSINESS_INFO } from '../data/nightjarData';
import { getDubaiBusinessStatus } from '../utils/timeHelper';
import { Star, MapPin, ArrowUpRight, Flame, Disc, CheckCircle2, Navigation, Award } from 'lucide-react';

interface HeroProps {
  onOpenBooking: (type?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const status = getDubaiBusinessStatus();

  return (
    <section id="hero-section" className="relative min-h-[90vh] lg:min-h-[94vh] flex items-center justify-center overflow-hidden bg-[#0a0908] pt-8 pb-16">
      {/* Background Graphic & Dark Tint Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=2000&q=85"
          alt="Nightjar Coffee Roastery Warehouse G62 Alserkal Avenue Dubai"
          className="w-full h-full object-cover object-center opacity-25 filter grayscale contrast-125"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908] via-[#0a0908]/85 to-[#0a0908]/50"></div>
        <div className="absolute inset-0 bg-radial from-transparent via-[#0a0908]/60 to-[#0a0908]"></div>
      </div>

      {/* Decorative Grid & Accent Lines */}
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Badges Row */}
        <div className="flex flex-wrap items-center gap-3 mb-6 animate-in fade-in slide-in-from-bottom-3 duration-500">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#1e1a14] border border-[#3b3223] text-xs font-mono text-[#e8a34b]">
            <Award className="w-3.5 h-3.5 text-[#d97706]" />
            <span>Time Out Dubai: Best Café in Dubai</span>
          </div>

          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#181612] border border-[#2b2720] text-xs font-mono text-[#c4bdaf]">
            <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-600'}`}></span>
            <span>{status.statusText} • {status.subText}</span>
          </div>

          <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#181612] border border-[#2b2720] text-xs text-[#a8a196]">
            <Disc className="w-3.5 h-3.5 text-[#d97706] animate-spin" style={{ animationDuration: '8s' }} />
            <span>Analog Vinyl & Roasting on Site</span>
          </div>
        </div>

        {/* Main Editorial Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Bold Typography & CTAs */}
          <div className="lg:col-span-8 space-y-6">
            <h1 className="font-display text-4xl sm:text-6xl xl:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
              Specialty Coffee, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#fbbf24]">
                Craft Nitro on Tap
              </span> <br />
              & Unapologetic Food.
            </h1>

            <p className="text-base sm:text-xl text-[#b8b0a2] max-w-2xl font-normal leading-relaxed">
              Founded in 2017 in Dubai’s creative heart at <span className="text-white font-medium">Warehouse G62, Alserkal Avenue</span>. 
              We roast single-origin lots with uncompromising traceability and pull ice-cold nitrogen cold brews straight from custom draft taps.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                id="hero-explore-menu-cta"
                href="#menu"
                className="inline-flex items-center justify-center space-x-2 px-7 py-4 rounded-xl bg-[#d97706] hover:bg-[#b45309] text-white font-semibold text-base shadow-xl shadow-amber-950/50 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Menu & Nitro Taps</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>

              <a
                id="hero-get-directions-cta"
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-xl bg-[#1a1713] hover:bg-[#26221c] text-[#ede7dc] font-semibold text-base border border-[#383227] hover:border-[#d97706]/60 transition-all"
              >
                <Navigation className="w-5 h-5 text-[#d97706]" />
                <span>Get Directions (Alserkal)</span>
              </a>

              <button
                id="hero-reserve-cta"
                onClick={() => onOpenBooking("Table Reservation")}
                className="inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-xl bg-[#14120f] hover:bg-[#1f1b16] text-[#c9c1b3] hover:text-white font-medium text-sm border border-[#2b2720] transition-colors"
              >
                <span>Reserve Table / Wholesale</span>
              </button>
            </div>

            {/* Micro Trust Strip */}
            <div className="pt-6 border-t border-[#221f1a] grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <div className="flex items-center space-x-1 text-[#fbbf24]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="text-white font-bold text-sm ml-1">4.7</span>
                </div>
                <p className="text-xs text-[#8f877a] mt-0.5 font-mono">1,100+ Verified Reviews</p>
              </div>

              <div>
                <div className="font-bold text-white text-sm font-mono flex items-center gap-1">
                  <Flame className="w-4 h-4 text-[#d97706]" /> In-House Roastery
                </div>
                <p className="text-xs text-[#8f877a] mt-0.5">Fresh roasted weekly</p>
              </div>

              <div>
                <div className="font-bold text-white text-sm font-mono flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Direct Trade
                </div>
                <p className="text-xs text-[#8f877a] mt-0.5">100% Farm Traceable</p>
              </div>

              <div>
                <div className="font-bold text-white text-sm font-mono flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-[#d97706]" /> Warehouse G62
                </div>
                <p className="text-xs text-[#8f877a] mt-0.5">Alserkal Avenue, Dubai</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quick Card / Feature Preview */}
          <div className="lg:col-span-4">
            <div className="glass-panel rounded-2xl p-6 border border-[#3b3223] relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#d97706]/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className="flex items-center justify-between pb-4 border-b border-[#29251e]">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#d97706]">Mothership Flagship</span>
                  <h2 className="text-lg font-bold text-white font-display">Alserkal Taproom & Kitchen</h2>
                </div>
                <span className="px-2 py-1 rounded bg-[#d97706]/20 border border-[#d97706]/40 text-[#f59e0b] font-mono text-[10px] uppercase font-bold">
                  Live
                </span>
              </div>

              <div className="py-4 space-y-3.5 text-sm">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-[#221e18] flex items-center justify-center text-[#d97706] shrink-0 border border-[#332c22]">
                    <Flame className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-xs">Today's Roasting Batch</h4>
                    <p className="text-[#a39a8c] text-xs">Ethiopia Yirgacheffe & Rwanda Bumbogo lots</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-[#221e18] flex items-center justify-center text-[#00cdbc] shrink-0 border border-[#332c22]">
                    <Disc className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-xs">Nitro Tap Highlight</h4>
                    <p className="text-[#a39a8c] text-xs">Original Cold Brew & Blood Orange Botanical</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-[#221e18] flex items-center justify-center text-[#f59e0b] shrink-0 border border-[#332c22]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-xs">Open 7 Days a Week</h4>
                    <p className="text-[#a39a8c] text-xs font-mono">09:00 AM – 10:00 PM (Gulf Standard Time)</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#29251e] flex items-center justify-between">
                <a
                  href={`tel:${BUSINESS_INFO.phoneE164}`}
                  className="text-xs text-[#c2b9aa] hover:text-white font-mono flex items-center gap-1.5 transition-colors"
                >
                  <span>📞 {BUSINESS_INFO.phoneFormatted}</span>
                </a>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappE164}?text=Hi%20Nightjar%20team,%20I'd%20like%20to%20inquire%20about%20a%20table%20or%20coffee%20order`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#25D366] hover:underline font-mono font-medium flex items-center gap-1"
                >
                  WhatsApp Direct →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
