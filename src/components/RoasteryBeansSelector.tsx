import React, { useState } from 'react';
import { ROAST_PROFILES, BUSINESS_INFO } from '../data/nightjarData';
import { Flame, ShoppingBag, Coffee, Sparkles, Check } from 'lucide-react';

export const RoasteryBeansSelector: React.FC = () => {
  const [selectedRoast, setSelectedRoast] = useState(ROAST_PROFILES[0]);
  const [selectedBagSize, setSelectedBagSize] = useState<'225g' | '1kg'>('225g');

  return (
    <section id="roastery" className="py-24 bg-[#0a0908] border-t border-[#1f1d17] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#1e1b15] border border-[#3b3223] text-xs font-mono text-[#e8a34b]">
            <Flame className="w-3.5 h-3.5 text-[#d97706]" />
            <span>In-House Micro-Roastery</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            Direct-Trade <span className="text-[#d97706]">Roast Profiles</span>
          </h2>
          <p className="text-base sm:text-lg text-[#a8a194]">
            Ethically sourced from smallholder farmers across Africa and the Americas. Roasted weekly in our Alserkal warehouse for maximum vibrance.
          </p>
        </div>

        {/* Beans Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Roast Selector Tabs */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#8a8174] font-mono block">
              Select Signature Blend
            </span>
            <div className="space-y-3">
              {ROAST_PROFILES.map((roast) => (
                <button
                  key={roast.id}
                  onClick={() => setSelectedRoast(roast)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all flex items-center justify-between ${
                    selectedRoast.id === roast.id
                      ? 'bg-[#1a1713] border-[#d97706] shadow-xl shadow-amber-950/40'
                      : 'bg-[#12100d] border-[#26221c] hover:border-[#383126]'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-display font-bold text-lg text-white">{roast.name}</span>
                      {selectedRoast.id === roast.id && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#d97706]/20 text-[#f59e0b] border border-[#d97706]/40">
                          Selected
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#a39a8c]">{roast.tagline}</p>
                  </div>
                  <div className="text-right font-mono">
                    <span className="text-xs text-[#7d7568]">from</span>
                    <p className="text-sm font-bold text-white">AED {roast.price225g}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Roastery Promise Box */}
            <div className="p-5 rounded-2xl bg-[#14120f] border border-[#262118] space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#d97706] flex items-center gap-1.5">
                <Coffee className="w-3.5 h-3.5" /> Free Custom In-Store Grinding
              </h4>
              <p className="text-xs text-[#9c9386] leading-relaxed">
                Visiting Warehouse G62? Our baristas will grind your beans on our precision Mahlkönig EK43 tailored to your home espresso, V60, or French Press machine.
              </p>
            </div>
          </div>

          {/* Right Column: Deep Sensory Radar & Specs */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border border-[#382f22] space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#29231c]">
              <div>
                <span className="text-xs font-mono text-[#d97706] uppercase tracking-widest">
                  Batch Specifications
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                  {selectedRoast.name}
                </h3>
                <p className="text-xs text-[#8f8677] font-mono mt-0.5">
                  Elevation: {selectedRoast.elevation} • Process: {selectedRoast.process}
                </p>
              </div>

              {/* Bag Size Selector */}
              <div className="flex items-center space-x-1.5 p-1 rounded-xl bg-[#14120e] border border-[#2b251d]">
                <button
                  onClick={() => setSelectedBagSize('225g')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                    selectedBagSize === '225g'
                      ? 'bg-[#d97706] text-white shadow'
                      : 'text-[#8f8677] hover:text-white'
                  }`}
                >
                  225g Bag
                </button>
                <button
                  onClick={() => setSelectedBagSize('1kg')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                    selectedBagSize === '1kg'
                      ? 'bg-[#d97706] text-white shadow'
                      : 'text-[#8f8677] hover:text-white'
                  }`}
                >
                  1kg Bag
                </button>
              </div>
            </div>

            {/* Flavor Pills */}
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#8a8174] font-mono">
                Cupping & Tasting Notes
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedRoast.flavorNotes.map((note) => (
                  <span
                    key={note}
                    className="px-3.5 py-1.5 rounded-xl bg-[#1e1b15] border border-[#382e20] text-xs font-semibold text-[#f5ebd9]"
                  >
                    ✨ {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Sensory Attribute Bars */}
            <div className="space-y-3 pt-2">
              <span className="text-xs uppercase tracking-widest text-[#8a8174] font-mono">
                Sensory Profile Index
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Sweetness */}
                <div className="p-3 rounded-xl bg-[#14120e] border border-[#242018] space-y-1.5">
                  <div className="flex justify-between text-xs text-[#a89f92] font-mono">
                    <span>Sweetness</span>
                    <span className="text-white font-bold">{selectedRoast.sweetness}/5</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#242019] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#d97706] rounded-full"
                      style={{ width: `${(selectedRoast.sweetness / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Acidity */}
                <div className="p-3 rounded-xl bg-[#14120e] border border-[#242018] space-y-1.5">
                  <div className="flex justify-between text-xs text-[#a89f92] font-mono">
                    <span>Acidity</span>
                    <span className="text-white font-bold">{selectedRoast.acidity}/5</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#242019] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#00cdbc] rounded-full"
                      style={{ width: `${(selectedRoast.acidity / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-3 rounded-xl bg-[#14120e] border border-[#242018] space-y-1.5">
                  <div className="flex justify-between text-xs text-[#a89f92] font-mono">
                    <span>Body & Crema</span>
                    <span className="text-white font-bold">{selectedRoast.body}/5</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#242019] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#f59e0b] rounded-full"
                      style={{ width: `${(selectedRoast.body / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recommended Brewing Methods */}
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#8a8174] font-mono">
                Optimized Brewing Methods
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedRoast.recommendedBrewing.map((brew) => (
                  <span
                    key={brew}
                    className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-[#14120f] border border-[#2b251d] text-xs text-[#c4bcaf]"
                  >
                    <Check className="w-3 h-3 text-[#d97706]" />
                    <span>{brew}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Price & Deliveroo Order CTA */}
            <div className="pt-4 border-t border-[#29231c] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase font-mono text-[#8a8174]">Bag Size Selected</span>
                <p className="text-xl font-bold font-mono text-white">
                  AED {selectedBagSize === '225g' ? selectedRoast.price225g : selectedRoast.price1kg}{' '}
                  <span className="text-xs text-[#8a8174] font-normal font-sans">({selectedBagSize})</span>
                </p>
              </div>

              <a
                href={BUSINESS_INFO.deliverooUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-[#d97706] hover:bg-[#b45309] text-white font-bold text-sm shadow-lg shadow-amber-950/40 transition-all"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Order {selectedRoast.name.split(' ')[0]} ({selectedBagSize})</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
