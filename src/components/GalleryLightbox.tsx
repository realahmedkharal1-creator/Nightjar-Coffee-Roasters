import React, { useState, useEffect } from 'react';
import { GALLERY_PHOTOS } from '../data/nightjarData';
import { GalleryPhoto } from '../types';
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from 'lucide-react';

export const GalleryLightbox: React.FC = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Interior & Vibe', 'Coffee & Nitro', 'Food & Brunch', 'Roastery & Beans'];

  const filteredPhotos = activeFilter === 'All'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter(p => p.category === activeFilter);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') setSelectedPhotoIndex(null);
      if (e.key === 'ArrowRight') {
        setSelectedPhotoIndex((prev) => (prev !== null && prev < filteredPhotos.length - 1 ? prev + 1 : 0));
      }
      if (e.key === 'ArrowLeft') {
        setSelectedPhotoIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredPhotos.length - 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, filteredPhotos.length]);

  return (
    <section id="gallery" className="py-24 bg-[#0d0c0a] border-t border-[#1f1d17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#1c1914] border border-[#382f22] text-xs font-mono text-[#e8a34b] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#d97706]" />
              <span>Warehouse G62 Visuals</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
              Life at <span className="text-[#d97706]">Nightjar</span>
            </h2>
            <p className="text-[#a1998b] text-base mt-2 max-w-xl">
              An editorial look inside our roastery floor, nitro draft faucets, artisan kitchen pass, and community space.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                  activeFilter === cat
                    ? 'bg-[#d97706] text-white border-[#d97706]'
                    : 'bg-[#14120f] text-[#a8a094] border-[#29231b] hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhotoIndex(index)}
              className="group relative rounded-2xl overflow-hidden aspect-4/3 sm:aspect-square bg-[#171410] border border-[#2b251c] cursor-pointer shadow-lg"
            >
              <img
                src={photo.url}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-95 group-hover:brightness-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908]/90 via-[#0a0908]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                <div className="flex justify-end">
                  <div className="p-2 rounded-lg bg-[#0a0908]/80 text-white backdrop-blur-sm border border-white/10">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#d97706]">
                    {photo.category}
                  </span>
                  <p className="text-xs font-bold text-white leading-snug">
                    {photo.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedPhotoIndex !== null && (
          <div
            id="gallery-lightbox-modal"
            className="fixed inset-0 z-50 bg-[#0a0908]/95 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setSelectedPhotoIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhotoIndex(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-[#1c1914] text-[#ede7dc] hover:text-white border border-[#332c21] transition-colors z-10"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPhotoIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredPhotos.length - 1));
              }}
              className="absolute left-4 sm:left-8 p-3 rounded-full bg-[#1c1914]/80 text-white hover:bg-[#2b251d] border border-[#383023] transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPhotoIndex((prev) => (prev !== null && prev < filteredPhotos.length - 1 ? prev + 1 : 0));
              }}
              className="absolute right-4 sm:right-8 p-3 rounded-full bg-[#1c1914]/80 text-white hover:bg-[#2b251d] border border-[#383023] transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <div
              className="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden border border-[#383024] shadow-2xl flex flex-col bg-[#14120e]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredPhotos[selectedPhotoIndex].url}
                alt={filteredPhotos[selectedPhotoIndex].alt}
                className="max-h-[72vh] w-auto object-contain mx-auto"
              />
              <div className="p-4 bg-[#14120e] border-t border-[#29231c] flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#d97706]">
                    {filteredPhotos[selectedPhotoIndex].category}
                  </span>
                  <p className="text-sm font-bold text-white">
                    {filteredPhotos[selectedPhotoIndex].title}
                  </p>
                </div>
                <span className="text-xs font-mono text-[#8a8174]">
                  {selectedPhotoIndex + 1} / {filteredPhotos.length}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
