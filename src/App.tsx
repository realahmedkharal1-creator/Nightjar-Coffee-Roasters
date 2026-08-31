/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { NitroTaps } from './components/NitroTaps';
import { MenuSection } from './components/MenuSection';
import { RoasteryBeansSelector } from './components/RoasteryBeansSelector';
import { AboutStory } from './components/AboutStory';
import { WhyNightjar } from './components/WhyNightjar';
import { GalleryLightbox } from './components/GalleryLightbox';
import { ReviewsSection } from './components/ReviewsSection';
import { FAQSection } from './components/FAQSection';
import { LocationHours } from './components/LocationHours';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingType, setBookingType] = useState('Table Reservation');

  const handleOpenBooking = (type: string = 'Table Reservation') => {
    setBookingType(type);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0908] text-[#ede9e1] flex flex-col selection:bg-[#d97706] selection:text-white">
      {/* Header */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Content */}
      <main className="flex-1">
        <Hero onOpenBooking={handleOpenBooking} />
        <TrustBar />
        <NitroTaps />
        <MenuSection />
        <RoasteryBeansSelector />
        <AboutStory />
        <WhyNightjar />
        <GalleryLightbox />
        <ReviewsSection />
        <FAQSection />
        <LocationHours />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile Floating Actions & Back to Top */}
      <FloatingActions />

      {/* Booking & Inquiry Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialType={bookingType}
      />
    </div>
  );
}
