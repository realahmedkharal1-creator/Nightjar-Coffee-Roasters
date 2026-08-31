import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/nightjarData';
import { X, Calendar, Clock, Users, CheckCircle, Sparkles, Send, Phone } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, initialType = 'Table Reservation' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '12:00 PM',
    guests: '2',
    type: initialType,
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div
      id="booking-modal-overlay"
      className="fixed inset-0 z-50 bg-[#0a0908]/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="glass-panel rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-[#3d3324] shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#1c1914] text-[#a8a092] hover:text-white border border-[#30281e] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white font-display">
              Request Received!
            </h3>
            <p className="text-xs sm:text-sm text-[#a8a092]">
              Thank you, <span className="text-white font-semibold">{formData.name}</span>. Our host at Warehouse G62 will confirm your table for {formData.guests} guests on {formData.date || 'your selected date'}.
            </p>
            <div className="pt-2">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-[#d97706] text-white text-xs font-mono font-bold hover:bg-[#b45309] transition-colors"
              >
                Close & Return
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="border-b border-[#29231c] pb-3">
              <div className="flex items-center space-x-1.5 text-xs font-mono text-[#d97706]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Warehouse G62 Table & Event Desk</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white font-display mt-1">
                {formData.type === 'Table Reservation' ? 'Reserve a Table' : 'Wholesale / Event Inquiry'}
              </h3>
              <p className="text-xs text-[#8a8174] mt-0.5">
                Alserkal Avenue, Al Quoz Industrial Area 1, Dubai
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-mono text-[#a39a8c] mb-1 uppercase">Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Full Name"
                  className="w-full px-3.5 py-2 rounded-xl bg-[#14120e] border border-[#2b251c] text-white text-xs focus:outline-none focus:border-[#d97706]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#a39a8c] mb-1 uppercase">Phone / WhatsApp *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+971 50 ..."
                  className="w-full px-3.5 py-2 rounded-xl bg-[#14120e] border border-[#2b251c] text-white text-xs focus:outline-none focus:border-[#d97706]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-mono text-[#a39a8c] mb-1 uppercase">Guests</label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#14120e] border border-[#2b251c] text-white text-xs focus:outline-none focus:border-[#d97706]"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 Guests</option>
                  <option value="3-4">3–4 Guests</option>
                  <option value="5-8">5–8 Guests</option>
                  <option value="9+">9+ (Group / Event)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#a39a8c] mb-1 uppercase">Date</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#14120e] border border-[#2b251c] text-white text-xs focus:outline-none focus:border-[#d97706]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#a39a8c] mb-1 uppercase">Time</label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#14120e] border border-[#2b251c] text-white text-xs focus:outline-none focus:border-[#d97706]"
                >
                  <option value="09:00 AM">09:00 AM</option>
                  <option value="10:30 AM">10:30 AM</option>
                  <option value="12:00 PM">12:00 PM (Brunch)</option>
                  <option value="02:00 PM">02:00 PM</option>
                  <option value="04:30 PM">04:30 PM (Vinyl Hour)</option>
                  <option value="07:00 PM">07:00 PM (Dinner)</option>
                  <option value="08:30 PM">08:30 PM</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-[#a39a8c] mb-1 uppercase">Special Requests</label>
              <textarea
                rows={2}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Dietary preferences, birthday notes, roastery tour interest..."
                className="w-full px-3.5 py-2 rounded-xl bg-[#14120e] border border-[#2b251c] text-white text-xs focus:outline-none focus:border-[#d97706] resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#d97706] hover:bg-[#b45309] text-white font-bold text-xs shadow-xl transition-all"
            >
              Confirm Request
            </button>

            <p className="text-[11px] text-center text-[#787063] font-mono">
              Or chat directly via WhatsApp: <a href={`https://wa.me/${BUSINESS_INFO.whatsappE164}`} target="_blank" rel="noopener noreferrer" className="text-[#25D366] underline">+{BUSINESS_INFO.whatsappE164}</a>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
