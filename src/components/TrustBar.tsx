import React from 'react';
import { BUSINESS_INFO } from '../data/nightjarData';
import { Award, ShieldCheck, Coffee, Star, CreditCard, Sparkles } from 'lucide-react';

export const TrustBar: React.FC = () => {
  return (
    <section id="trust-bar" className="bg-[#12110e] border-y border-[#26221c] py-6 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {/* Item 1 */}
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-[#1c1914] text-[#d97706] shrink-0 border border-[#302a20]">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">Best Café</p>
              <p className="text-[11px] text-[#8e8679]">Time Out Dubai Awards</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-[#1c1914] text-[#fbbf24] shrink-0 border border-[#302a20]">
              <Star className="w-4 h-4 fill-current" />
            </div>
            <div>
              <p className="text-xs font-bold text-white font-mono">4.7 / 5.0 Rating</p>
              <p className="text-[11px] text-[#8e8679]">1,100+ Total Reviews</p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-[#1c1914] text-emerald-400 shrink-0 border border-[#302a20]">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">100% Direct Trade</p>
              <p className="text-[11px] text-[#8e8679]">Single Origin Traceable</p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-[#1c1914] text-[#00cdbc] shrink-0 border border-[#302a20]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">Nitro Pioneers</p>
              <p className="text-[11px] text-[#8e8679]">Draft Cold Brew Taps</p>
            </div>
          </div>

          {/* Item 5 */}
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-[#1c1914] text-[#e08a28] shrink-0 border border-[#302a20]">
              <Coffee className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">Alserkal Flagship</p>
              <p className="text-[11px] text-[#8e8679]">Warehouse G62 Roastery</p>
            </div>
          </div>

          {/* Item 6 */}
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-[#1c1914] text-[#a39a8c] shrink-0 border border-[#302a20]">
              <CreditCard className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">Cards & Apple Pay</p>
              <p className="text-[11px] text-[#8e8679]">All Payments Accepted</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
