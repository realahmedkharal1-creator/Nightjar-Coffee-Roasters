import React from 'react';
import { BUSINESS_INFO } from '../data/nightjarData';
import { Disc, Sparkles, Flame, ShieldCheck, Heart } from 'lucide-react';

export const AboutStory: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0d0c0a] border-t border-[#1f1d17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image Stack */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden aspect-4/3 border border-[#382f22] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80"
                alt="Nightjar Coffee Roasters Alserkal Avenue Warehouse Atmosphere"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908] via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Overlapping Floating Quote Card */}
            <div className="mt-[-40px] sm:mt-[-50px] ml-4 sm:ml-8 relative z-10 max-w-md p-5 rounded-2xl glass-panel border border-[#3d3324] shadow-2xl space-y-2">
              <div className="flex items-center space-x-2 text-[#d97706] text-xs font-mono">
                <Disc className="w-3.5 h-3.5" />
                <span>The Counterculture Ethos</span>
              </div>
              <p className="text-xs sm:text-sm text-[#e6decb] italic leading-relaxed">
                "We started in 2017 with cold-brew experiments and zero desire for pretentious coffee snobbery. Just world-class direct-trade roasting, loud music, and killer honest food."
              </p>
              <div className="pt-2 border-t border-[#2d271e] flex items-center justify-between text-[11px] text-[#9c9386]">
                <span className="font-bold text-white">Leon Surynt</span>
                <span className="font-mono">Founder & Managing Director</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Story & Roastery Ethics */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#1e1b15] border border-[#3d3322] text-xs font-mono text-[#e8a34b]">
              <Sparkles className="w-3.5 h-3.5 text-[#d97706]" />
              <span>Est. 2017 • Alserkal Avenue, Dubai</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
              Good Coffee. Good Folk. <br />
              <span className="text-[#d97706]">Zero Pretension.</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#aba294] leading-relaxed">
              <p>
                Nightjar was founded in 2017 by a crew of counterculture coffee and music devotees in Dubai. 
                What started as a pioneering wholesale cold-brew venture quickly grew into our sprawling roastery and craft kitchen inside <span className="text-white font-medium">Warehouse G62 at Alserkal Avenue</span>.
              </p>
              <p>
                We travel directly to origin to shake hands with farmers across Rwanda, Colombia, Ethiopia, and Brazil. 
                By cutting out middlemen, we pay fair premiums and ensure absolute transparency from green crop to your cup.
              </p>
              <p>
                Inside the warehouse, we roast multiple days a week on our custom-tuned roaster, spin vinyl all day, and serve an eclectic menu of chef-crafted comfort food that redefines what a café can be.
              </p>
            </div>

            {/* Core Values Grid */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#14120f] border border-[#262118] space-y-1.5">
                <div className="flex items-center space-x-2 text-white font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Direct Trade</span>
                </div>
                <p className="text-xs text-[#8f877a]">
                  Direct relationships with smallholder farms and co-ops worldwide.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#14120f] border border-[#262118] space-y-1.5">
                <div className="flex items-center space-x-2 text-white font-bold text-sm">
                  <Flame className="w-4 h-4 text-[#d97706]" />
                  <span>Craft Kitchen</span>
                </div>
                <p className="text-xs text-[#8f877a]">
                  House-cured meats, fresh local oysters, and wood-roasted classics.
                </p>
              </div>
            </div>

            {/* Supported Stats Row */}
            <div className="pt-6 border-t border-[#262118] grid grid-cols-2 sm:grid-cols-4 gap-4">
              {BUSINESS_INFO.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl sm:text-3xl font-extrabold text-white font-display text-[#d97706]">
                    {stat.value}
                  </p>
                  <p className="text-[11px] text-[#8a8174] font-mono uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
