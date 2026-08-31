import React from 'react';
import { Sparkles, Droplets, UtensilsCrossed, Award, Disc, HeartHandshake } from 'lucide-react';

export const WhyNightjar: React.FC = () => {
  const differentiators = [
    {
      icon: Droplets,
      title: "Nitro Tap Pioneers",
      description: "We engineered Dubai's first dedicated nitrogen taproom system, pouring micro-cascading cold brew and botanicals at an exact 2°C.",
      color: "text-[#00cdbc]",
      bgColor: "bg-[#00cdbc]/10",
      borderColor: "border-[#00cdbc]/20"
    },
    {
      icon: Sparkles,
      title: "100% Direct-Trade Beans",
      description: "Direct farm relationships across Rwanda, Ethiopia, Colombia, and Brazil. We pay above Fair Trade minimums to support micro-lot farmers.",
      color: "text-[#d97706]",
      bgColor: "bg-[#d97706]/10",
      borderColor: "border-[#d97706]/20"
    },
    {
      icon: UtensilsCrossed,
      title: "Legitimate Chef-Led Kitchen",
      description: "No wrapped refrigerated sandwiches. We cure our own pastrami for 14 days, source fresh oysters from Dibba Bay, and smash Wagyu beef fresh.",
      color: "text-[#f59e0b]",
      bgColor: "bg-[#f59e0b]/10",
      borderColor: "border-[#f59e0b]/20"
    },
    {
      icon: Award,
      title: "Time Out Dubai Best Café",
      description: "Recognized as Dubai's premier independent café and coffee house at the Time Out Dubai Restaurant Awards.",
      color: "text-[#e08a28]",
      bgColor: "bg-[#e08a28]/10",
      borderColor: "border-[#e08a28]/20"
    },
    {
      icon: Disc,
      title: "Vinyl & Counterculture Hub",
      description: "Set in Alserkal Avenue's Warehouse G62 with an analog record collection spinning soul, jazz, dub, and rock from open to close.",
      color: "text-[#ec4899]",
      bgColor: "bg-[#ec4899]/10",
      borderColor: "border-[#ec4899]/20"
    },
    {
      icon: HeartHandshake,
      title: "Zero-Pretension Hospitality",
      description: "Passionate, welcoming baristas who love sharing coffee knowledge without the intimidating snobbery. Everyone is welcome.",
      color: "text-emerald-400",
      bgColor: "bg-emerald-400/10",
      borderColor: "border-emerald-400/20"
    }
  ];

  return (
    <section id="why-nightjar" className="py-24 bg-[#0a0908] border-t border-[#1f1d17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#1c1914] border border-[#382f22] text-xs font-mono text-[#e8a34b]">
            <Sparkles className="w-3.5 h-3.5 text-[#d97706]" />
            <span>The Nightjar Difference</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            Why Dubai Chooses <span className="text-[#d97706]">Nightjar</span>
          </h2>
          <p className="text-base sm:text-lg text-[#a39a8c]">
            What customers and food critics repeatedly praise across 1,100+ five-star reviews.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((diff) => {
            const Icon = diff.icon;
            return (
              <div
                key={diff.title}
                className="glass-panel glass-panel-hover rounded-2xl p-7 border border-[#2b251c] space-y-4"
              >
                <div className={`w-12 h-12 rounded-xl ${diff.bgColor} border ${diff.borderColor} flex items-center justify-center ${diff.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-white">
                  {diff.title}
                </h3>
                <p className="text-sm text-[#a8a092] leading-relaxed">
                  {diff.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
