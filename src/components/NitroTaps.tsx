import React, { useState } from 'react';
import { TAP_BEVERAGES, BUSINESS_INFO } from '../data/nightjarData';
import { TapBeverage } from '../types';
import { Sparkles, Thermometer, Zap, ShoppingBag, Droplets, CheckCircle } from 'lucide-react';

export const NitroTaps: React.FC = () => {
  const [selectedTap, setSelectedTap] = useState<TapBeverage>(TAP_BEVERAGES[0]);
  const [isPouring, setIsPouring] = useState(false);

  const handleSelectTap = (tap: TapBeverage) => {
    setIsPouring(true);
    setSelectedTap(tap);
    setTimeout(() => setIsPouring(false), 500);
  };

  return (
    <section id="nitro-taps" className="py-24 bg-[#0a0908] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#d97706]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#1e1b15] border border-[#3d3322] text-xs font-mono text-[#e8a34b]">
            <Droplets className="w-3.5 h-3.5 text-[#d97706]" />
            <span>The Taproom Experience</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            Craft Nitro Cold Brew <span className="text-[#d97706]">On Tap.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#a8a194]">
            Steeped for 20+ hours and charged with pure food-grade nitrogen at 2°C. 
            Experience our famous cascading head, velvety mouthfeel, and naturally sweet body with zero added dairy or sugar.
          </p>
        </div>

        {/* Tap Selection Bar */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-12">
          {TAP_BEVERAGES.map((tap, idx) => (
            <button
              key={tap.id}
              onClick={() => handleSelectTap(tap)}
              className={`px-4 sm:px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center space-x-2 border ${
                selectedTap.id === tap.id
                  ? 'bg-[#d97706] text-white border-[#d97706] shadow-lg shadow-amber-950/60 scale-105'
                  : 'bg-[#14120e] text-[#b3aaa0] border-[#29241d] hover:border-[#423a2d] hover:text-white'
              }`}
            >
              <span className="font-mono text-xs opacity-75">#{idx + 1}</span>
              <span>{tap.name}</span>
            </button>
          ))}
        </div>

        {/* Taproom Interactive Showcase Display */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-[#332c22] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Image with Cascading Effect */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden aspect-4/5 border border-[#3d3425] shadow-2xl group">
              <img
                src={selectedTap.image}
                alt={selectedTap.name}
                className={`w-full h-full object-cover transition-all duration-700 ${
                  isPouring ? 'scale-105 filter brightness-110' : 'scale-100'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908] via-transparent to-transparent"></div>

              {/* Live Tap Badge */}
              <div className="absolute top-4 left-4 flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-[#0a0908]/85 backdrop-blur-md border border-[#383023] text-xs font-mono text-white">
                <span className="w-2 h-2 rounded-full bg-[#d97706] animate-ping"></span>
                <span>Active Tap Line</span>
              </div>

              {/* Price Pill */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-xl bg-[#0a0908]/90 backdrop-blur-md border border-[#383023]">
                <div>
                  <p className="text-[10px] text-[#9c9385] uppercase tracking-wider font-mono">Price on Draft</p>
                  <p className="text-lg font-bold text-white font-mono">AED {selectedTap.priceAED}</p>
                </div>
                <a
                  href={BUSINESS_INFO.deliverooUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-[#00cdbc]/15 border border-[#00cdbc]/35 text-[#00cdbc] hover:bg-[#00cdbc]/25 text-xs font-semibold flex items-center gap-1 transition-colors"
                >
                  <ShoppingBag className="w-3.5 h-3.5" /> Order
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Flavor Matrix & Origin Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-xs font-mono text-[#d97706]">
                <span className="uppercase tracking-widest">{selectedTap.type}</span>
                <span>•</span>
                <span>{selectedTap.temp}</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
                {selectedTap.name}
              </h3>
              <p className="text-sm sm:text-base text-[#bfb7aa] leading-relaxed">
                {selectedTap.description}
              </p>
            </div>

            {/* Origin & Lot */}
            <div className="p-4 rounded-xl bg-[#171410] border border-[#2b251c] space-y-1">
              <span className="text-[11px] uppercase tracking-widest text-[#8a8174] font-mono">Origin & Bean Lot</span>
              <p className="text-sm font-semibold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#d97706]" /> {selectedTap.originLot}
              </p>
            </div>

            {/* Tasting Notes */}
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#8a8174] font-mono">Tasting Profile</span>
              <div className="flex flex-wrap gap-2">
                {selectedTap.tastingNotes.map((note) => (
                  <span
                    key={note}
                    className="px-3 py-1.5 rounded-lg bg-[#1f1b15] border border-[#382f21] text-xs font-medium text-[#f0e8dc]"
                  >
                    ✨ {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Specs Grid */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-[#14120f] border border-[#242018]">
                <div className="flex items-center space-x-1.5 text-xs text-[#8f8679] font-mono mb-1">
                  <Thermometer className="w-3.5 h-3.5 text-[#00cdbc]" />
                  <span>Draft Temp</span>
                </div>
                <p className="text-sm font-bold text-white font-mono">{selectedTap.temp}</p>
              </div>

              <div className="p-3 rounded-xl bg-[#14120f] border border-[#242018]">
                <div className="flex items-center space-x-1.5 text-xs text-[#8f8679] font-mono mb-1">
                  <Zap className="w-3.5 h-3.5 text-[#d97706]" />
                  <span>Caffeine Level</span>
                </div>
                <p className="text-sm font-bold text-white font-mono">{selectedTap.caffeine}</p>
              </div>

              <div className="p-3 rounded-xl bg-[#14120f] border border-[#242018]">
                <div className="flex items-center space-x-1.5 text-xs text-[#8f8679] font-mono mb-1">
                  <Droplets className="w-3.5 h-3.5 text-[#fbbf24]" />
                  <span>Mouthfeel</span>
                </div>
                <p className="text-sm font-bold text-white font-mono">{selectedTap.body}</p>
              </div>
            </div>

            {/* Direct Order or Visit prompt */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={BUSINESS_INFO.deliverooUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-[#00cdbc] hover:bg-[#00b3a4] text-[#0a0908] font-bold text-sm transition-all"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Order on Deliveroo (AED {selectedTap.priceAED})</span>
              </a>

              <a
                href="#location"
                className="inline-flex items-center space-x-1.5 text-xs text-[#c9c0b1] hover:text-white font-mono"
              >
                <span>Visit Warehouse G62 for Fresh Pour →</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
