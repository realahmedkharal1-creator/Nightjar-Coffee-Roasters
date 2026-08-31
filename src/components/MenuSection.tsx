import React, { useState } from 'react';
import { MENU_ITEMS, BUSINESS_INFO } from '../data/nightjarData';
import { ShoppingBag, Search, Sparkles, Flame } from 'lucide-react';

export const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'kitchen', label: 'Kitchen & Brunch' },
    { id: 'tap', label: 'On Tap (Nitro & Fizz)' },
    { id: 'hot-coffee', label: 'Espresso & Filter' },
    { id: 'cold-coffee', label: 'Cold Bar' },
    { id: 'beans', label: 'Retail Beans (Bagged)' }
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.tags && item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-24 bg-[#0d0c0a] border-t border-[#1f1c16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#1c1813] border border-[#382e20] text-xs font-mono text-[#e8a34b] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#d97706]" />
              <span>Full Roastery & Kitchen Roster</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
              Artisanal Menu & <span className="text-[#d97706]">Daily Bakes</span>
            </h2>
            <p className="text-[#a1998b] text-base mt-2 max-w-xl">
              From our 20-hour cold-steeped nitro brews to house-cured pastrami and Dibba Bay oysters—everything is crafted in-house with zero compromises.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#8a8173] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search dishes, coffee, beans..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#171410] border border-[#2b251c] text-sm text-white placeholder-[#736c61] focus:outline-none focus:border-[#d97706] transition-colors"
            />
          </div>
        </div>

        {/* Category Pill Filters */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all border ${
                activeCategory === cat.id
                  ? 'bg-[#d97706] text-white border-[#d97706] shadow-md shadow-amber-950/40'
                  : 'bg-[#14120f] text-[#a8a094] border-[#29231b] hover:border-[#3d3427] hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden border border-[#2b251c] flex flex-col justify-between group"
            >
              {/* Optional Item Image */}
              {item.image && (
                <div className="relative aspect-16/10 overflow-hidden bg-[#1a1713]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161411] via-transparent to-transparent opacity-80"></div>
                  
                  {/* Category & Popular Tag */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    {item.popular && (
                      <span className="px-2.5 py-1 rounded-md bg-[#d97706] text-white font-mono text-[10px] uppercase font-bold flex items-center gap-1 shadow-md">
                        <Flame className="w-3 h-3" /> Icon
                      </span>
                    )}
                  </div>

                  {/* Price Tag Overlay */}
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-lg bg-[#0a0908]/90 backdrop-blur-md border border-[#383024] font-mono text-sm font-bold text-white">
                    AED {item.priceAED}
                  </div>
                </div>
              )}

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display font-bold text-lg text-white group-hover:text-[#d97706] transition-colors">
                      {item.name}
                    </h3>
                    {!item.image && (
                      <span className="font-mono text-sm font-bold text-white shrink-0">
                        AED {item.priceAED}
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-[#aba395] leading-relaxed">
                    {item.description}
                  </p>

                  {item.origin && (
                    <p className="text-xs text-[#d97706] font-mono">
                      📍 Origin: {item.origin}
                    </p>
                  )}
                </div>

                {/* Tags & Order on Deliveroo Link */}
                <div className="pt-3 border-t border-[#262118] flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1">
                    {item.tags?.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-[#1f1b15] text-[10px] font-mono text-[#8a8174] border border-[#2e271d]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={BUSINESS_INFO.deliverooUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-xs font-semibold text-[#00cdbc] hover:text-white transition-colors"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Order</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16 p-8 rounded-2xl bg-[#14120f] border border-[#29231c]">
            <p className="text-[#a1998b] text-sm">No items found matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-3 text-xs text-[#d97706] underline font-semibold"
            >
              Clear filters and search
            </button>
          </div>
        )}

        {/* Deliveroo Live Order Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#171410] to-[#1e1a14] border border-[#382f22] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold text-white font-display">
              Craving Nightjar in Al Quoz, Downtown, or Marina?
            </h3>
            <p className="text-sm text-[#a39a8c]">
              We deliver our fresh roasted beans, iced cold brews, and hot kitchen specials straight to your door via Deliveroo.
            </p>
          </div>
          <a
            id="menu-deliveroo-bottom-cta"
            href={BUSINESS_INFO.deliverooUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-[#00cdbc] hover:bg-[#00b3a4] text-[#0a0908] font-bold text-sm shadow-xl transition-all"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Open Deliveroo Menu</span>
          </a>
        </div>
      </div>
    </section>
  );
};
