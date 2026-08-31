import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/nightjarData';
import { Phone, Mail, MessageSquare, Send, CheckCircle, Sparkles, Clock, AlertCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Table Reservation',
    guests: '2',
    date: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      setErrorMessage('Please fill in your name and email address.');
      return;
    }

    setIsSubmitting(true);
    // Simulate real-time form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  return (
    <section id="contact" className="py-24 bg-[#0d0c0a] border-t border-[#1f1d17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Methods & Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#1c1914] border border-[#382f22] text-xs font-mono text-[#e8a34b] mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#d97706]" />
                <span>Get in Touch</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
                Connect With <span className="text-[#d97706]">The Roastery</span>
              </h2>
              <p className="text-[#a1998b] text-base mt-2">
                Whether planning a group gathering at Warehouse G62, inquiring about wholesale beans, or discussing a nitro tap installation—we’re here.
              </p>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-4">
              {/* Phone */}
              <a
                href={`tel:${BUSINESS_INFO.phoneE164}`}
                className="flex items-center space-x-4 p-4 rounded-2xl bg-[#14120e] border border-[#262017] hover:border-[#d97706]/60 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#211d16] text-[#d97706] flex items-center justify-center shrink-0 border border-[#332b20] group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono text-[#8a8174]">Call Café & Roastery</span>
                  <p className="text-sm sm:text-base font-bold text-white font-mono group-hover:text-[#d97706] transition-colors">
                    {BUSINESS_INFO.phoneFormatted}
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappE164}?text=Hi%20Nightjar%20team,%20I'd%20like%20to%20get%20in%20touch`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-2xl bg-[#14120e] border border-[#262017] hover:border-[#25D366]/60 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#132b1d] text-[#25D366] flex items-center justify-center shrink-0 border border-[#1b422a] group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono text-[#8a8174]">Instant WhatsApp</span>
                  <p className="text-sm sm:text-base font-bold text-white font-mono group-hover:text-[#25D366] transition-colors">
                    +971 50 365 1120 (Chat Now)
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center space-x-4 p-4 rounded-2xl bg-[#14120e] border border-[#262017] hover:border-[#00cdbc]/60 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#132626] text-[#00cdbc] flex items-center justify-center shrink-0 border border-[#1d3d3d] group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono text-[#8a8174]">General & B2B Inquiries</span>
                  <p className="text-sm sm:text-base font-bold text-white font-mono group-hover:text-[#00cdbc] transition-colors">
                    {BUSINESS_INFO.email}
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Working Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-[#382f22] relative shadow-2xl">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display">
                    Message Received!
                  </h3>
                  <p className="text-sm text-[#a8a092] max-w-md mx-auto">
                    Thanks for reaching out, <span className="text-white font-semibold">{formData.name}</span>. 
                    Our team at Warehouse G62 will get back to you promptly at {formData.email}.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        inquiryType: 'Table Reservation',
                        guests: '2',
                        date: '',
                        message: ''
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-[#1f1b15] text-[#d97706] text-xs font-mono font-bold hover:bg-[#2e271d] transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-[#29231c] pb-4 mb-4">
                    <h3 className="font-display font-bold text-xl text-white">
                      Direct Roastery Inquiry
                    </h3>
                    <p className="text-xs text-[#8a8174] mt-0.5">
                      Fast response within 2 hours during roastery operating hours.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-red-950/40 border border-red-800 text-red-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#a39a8c] mb-1.5 uppercase">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#14120e] border border-[#2b251c] text-white text-sm focus:outline-none focus:border-[#d97706] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#a39a8c] mb-1.5 uppercase">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. sarah@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#14120e] border border-[#2b251c] text-white text-sm focus:outline-none focus:border-[#d97706] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#a39a8c] mb-1.5 uppercase">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+971 50 000 0000"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#14120e] border border-[#2b251c] text-white text-sm focus:outline-none focus:border-[#d97706] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#a39a8c] mb-1.5 uppercase">
                        Inquiry Type
                      </label>
                      <select
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#14120e] border border-[#2b251c] text-white text-sm focus:outline-none focus:border-[#d97706] transition-colors"
                      >
                        <option value="Table Reservation">Table Reservation (6+ Guests)</option>
                        <option value="Wholesale Beans Supply">Wholesale Coffee & Beans Supply</option>
                        <option value="Nitro Taproom Installation">Nitro Taproom Installation (B2B)</option>
                        <option value="Event & Roastery Buyout">Private Event & Roastery Buyout</option>
                        <option value="General Question">General Feedback / Inquiries</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#a39a8c] mb-1.5 uppercase">
                      Message / Special Requests
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your date, party size, coffee requirements, or dietary preferences..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#14120e] border border-[#2b251c] text-white text-sm focus:outline-none focus:border-[#d97706] transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center space-x-2 py-3.5 rounded-xl bg-[#d97706] hover:bg-[#b45309] disabled:opacity-50 text-white font-bold text-sm shadow-xl shadow-amber-950/50 transition-all active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <span>Sending note to roastery...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message to Nightjar</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
