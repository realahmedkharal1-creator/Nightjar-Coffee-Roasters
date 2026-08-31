import React, { useState } from 'react';
import { REVIEWS, BUSINESS_INFO } from '../data/nightjarData';
import { Star, MessageSquareQuote, CheckCircle2, ArrowUpRight, Sparkles } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Google Reviews' | 'Deliveroo'>('All');

  const filteredReviews = filter === 'All'
    ? REVIEWS
    : REVIEWS.filter(r => r.source === filter);

  return (
    <section id="reviews" className="py-24 bg-[#0a0908] border-t border-[#1f1d17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#1c1914] border border-[#382f22] text-xs font-mono text-[#e8a34b] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#d97706]" />
              <span>Real Customer Words</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
              Community & <span className="text-[#d97706]">Critic Praise</span>
            </h2>
            <p className="text-[#a1998b] text-base mt-2 max-w-xl">
              Authentic reviews pulled directly from Google Maps and Deliveroo diners who visit Warehouse G62 weekly.
            </p>
          </div>

          {/* Aggregate Rating Score Box */}
          <div className="flex items-center space-x-4 p-4 rounded-2xl bg-[#14120f] border border-[#2b251c] shrink-0">
            <div className="text-3xl font-extrabold text-white font-mono">4.7</div>
            <div className="space-y-0.5">
              <div className="flex items-center space-x-1 text-[#fbbf24]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs text-[#8f8677] font-mono">1,100+ Total Verified Reviews</p>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="glass-panel rounded-2xl p-6 border border-[#2b251c] flex flex-col justify-between space-y-6 relative group"
            >
              <div className="space-y-4">
                {/* Header: Avatar, Name & Rating */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-[#262118] border border-[#3d3425] flex items-center justify-center font-mono font-bold text-xs text-[#d97706]">
                      {rev.avatarText}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white flex items-center gap-1">
                        {rev.name}
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00cdbc]" />
                      </h3>
                      <span className="text-[11px] text-[#7d7568] font-mono">{rev.source} • {rev.date}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-0.5 text-[#fbbf24] shrink-0">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-[#c9c1b3] leading-relaxed italic relative">
                  "{rev.comment}"
                </p>
              </div>

              {/* Footer: Dish Recommended */}
              {rev.dishRecommended && (
                <div className="pt-3 border-t border-[#262017] flex items-center justify-between text-[11px]">
                  <span className="text-[#80776a] font-mono">Ordered:</span>
                  <span className="font-semibold text-[#e08a28] truncate max-w-[200px]">
                    {rev.dishRecommended}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Link to Google Maps Reviews */}
        <div className="mt-12 text-center">
          <a
            id="read-all-google-reviews-cta"
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-[#171410] hover:bg-[#241f18] text-[#d9d3c7] hover:text-white border border-[#2e271d] font-semibold text-xs transition-all"
          >
            <span>Read all 580+ reviews on Google Maps</span>
            <ArrowUpRight className="w-4 h-4 text-[#d97706]" />
          </a>
        </div>
      </div>
    </section>
  );
};
