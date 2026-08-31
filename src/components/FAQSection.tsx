import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/nightjarData';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#0d0c0a] border-t border-[#1f1d17] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#1c1914] border border-[#382f22] text-xs font-mono text-[#e8a34b]">
            <HelpCircle className="w-3.5 h-3.5 text-[#d97706]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            Frequently Asked <span className="text-[#d97706]">Questions</span>
          </h2>
          <p className="text-base sm:text-lg text-[#a1998b]">
            Everything you need to know before visiting Warehouse G62 in Alserkal Avenue.
          </p>
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="rounded-2xl border border-[#2b251c] bg-[#14120e] overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-[#1a1712] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-base sm:text-lg text-white">
                    {item.question}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-[#211d17] border border-[#332b20] text-[#d97706] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#b0a798] leading-relaxed border-t border-[#211d16] animate-in fade-in duration-200">
                    <p>{item.answer}</p>
                    <span className="inline-block mt-3 px-2.5 py-0.5 rounded bg-[#1e1a14] border border-[#332a1e] text-[10px] font-mono text-[#8a8174]">
                      Category: {item.category}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
