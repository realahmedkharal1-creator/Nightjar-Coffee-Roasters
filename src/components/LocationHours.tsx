import React from 'react';
import { BUSINESS_INFO } from '../data/nightjarData';
import { getDubaiBusinessStatus } from '../utils/timeHelper';
import { MapPin, Navigation, Clock, Phone, Mail, Car, ExternalLink, Sparkles } from 'lucide-react';

export const LocationHours: React.FC = () => {
  const status = getDubaiBusinessStatus();

  return (
    <section id="location" className="py-24 bg-[#0a0908] border-t border-[#1f1d17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#1c1914] border border-[#382f22] text-xs font-mono text-[#e8a34b]">
            <MapPin className="w-3.5 h-3.5 text-[#d97706]" />
            <span>Alserkal Avenue Flagship</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            Location & <span className="text-[#d97706]">Opening Hours</span>
          </h2>
          <p className="text-base sm:text-lg text-[#a1998b]">
            Find us in Dubai's premier arts and cultural warehouse district.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Opening Schedule & Address Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Live Status Header Card */}
            <div className="glass-panel rounded-2xl p-6 border border-[#382f22] space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <span className={`w-3 h-3 rounded-full ${status.isOpen ? 'bg-emerald-500 animate-ping' : 'bg-amber-600'}`}></span>
                  <div>
                    <h3 className="font-bold text-white text-base">{status.statusText}</h3>
                    <p className="text-xs text-[#8f8677] font-mono">{status.subText}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono uppercase text-[#d97706] block">Local Time</span>
                  <span className="text-xs font-mono font-bold text-white">{status.currentDubaiTime}</span>
                </div>
              </div>

              {/* 7-Day Hours Table */}
              <div className="pt-4 border-t border-[#262017] space-y-2">
                <span className="text-xs font-mono uppercase text-[#8a8174] tracking-wider block mb-2">
                  Weekly Schedule (GST)
                </span>
                {BUSINESS_INFO.openingHours.map((item) => {
                  const isToday = item.day === status.currentDayName;
                  return (
                    <div
                      key={item.day}
                      className={`flex items-center justify-between py-1.5 px-3 rounded-lg text-xs font-mono ${
                        isToday
                          ? 'bg-[#d97706]/15 border border-[#d97706]/40 text-white font-bold'
                          : 'text-[#a8a092]'
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        {item.day}
                        {isToday && <span className="text-[10px] px-1 py-0.2 bg-[#d97706] text-black font-sans font-bold rounded">TODAY</span>}
                      </span>
                      <span>{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Address & Parking Details */}
            <div className="p-6 rounded-2xl bg-[#14120e] border border-[#2b251c] space-y-4 text-xs sm:text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#d97706] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white font-sans text-sm">Warehouse G62</h4>
                  <p className="text-[#a39a8c] mt-0.5">
                    Alserkal Avenue Arts & Cultural District, 8th Street, Al Quoz Industrial Area 1, Dubai, UAE.
                  </p>
                  <p className="text-[11px] text-[#787063] font-mono mt-1">
                    Plus Code: {BUSINESS_INFO.plusCode}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 pt-3 border-t border-[#211d16]">
                <Car className="w-5 h-5 text-[#00cdbc] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white font-sans text-sm">Parking & Access</h4>
                  <p className="text-[#a39a8c] mt-0.5 text-xs">
                    Free parking bays inside Alserkal Avenue for visitors, plus extensive paid RTA parking directly along 8th and 17th street.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  id="location-get-directions-btn"
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center space-x-2 px-4 py-3 rounded-xl bg-[#d97706] hover:bg-[#b45309] text-white font-bold text-xs transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Navigate with Google Maps</span>
                </a>

                <a
                  href={`tel:${BUSINESS_INFO.phoneE164}`}
                  className="px-4 py-3 rounded-xl bg-[#1c1914] text-white border border-[#332a1e] hover:border-[#d97706] text-xs font-mono font-bold flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#d97706]" />
                  <span>Call Roastery</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Embed Frame */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl overflow-hidden border border-[#382f22] bg-[#14120e] shadow-2xl relative">
              {/* Responsive Google Maps Embed centered at Alserkal Avenue */}
              <iframe
                title="Nightjar Coffee Roasters Alserkal Avenue Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.890697920387!2d55.22501131500851!3d25.14120008392348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6bdc46132711%3A0xbcf0caec6149a4ba!2sNightjar%20Coffee%20Roasters!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                width="100%"
                height="460"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(85%) contrast(110%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>

              {/* Floating Quick Pin Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs p-4 rounded-xl bg-[#0a0908]/95 backdrop-blur-md border border-[#383023] shadow-xl">
                <div className="flex items-center space-x-2 text-[#d97706] text-xs font-mono font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Warehouse G62, Alserkal Avenue</span>
                </div>
                <p className="text-xs text-[#a39a8c] mt-1">
                  Step in for fresh roast aroma, vinyl spins, and cold nitro pours on draft.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
