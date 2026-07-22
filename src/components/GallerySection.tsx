import React, { useState } from 'react';
import {
  Image as ImageIcon,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react';
import { GALLERY_ITEMS } from '../data/hospitalData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxItemIndex, setLightboxItemIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'building', label: 'Hospital Building' },
    { id: 'reception', label: 'Reception & Lobby' },
    { id: 'icu', label: 'ICU & Critical Care' },
    { id: 'doctors', label: 'Doctors & Team' },
    { id: 'ot', label: 'Operation Theatre' },
    { id: 'lab', label: 'Laboratory' },
    { id: 'patients', label: 'Patient Rooms' },
    { id: 'ambulance', label: 'Ambulance' }
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) =>
    activeCategory === 'all' ? true : item.category === activeCategory
  );

  const openLightbox = (item: GalleryItem) => {
    const idx = filteredItems.findIndex((i) => i.id === item.id);
    if (idx !== -1) setLightboxItemIndex(idx);
  };

  const nextLightboxImage = () => {
    if (lightboxItemIndex !== null) {
      setLightboxItemIndex((lightboxItemIndex + 1) % filteredItems.length);
    }
  };

  const prevLightboxImage = () => {
    if (lightboxItemIndex !== null) {
      setLightboxItemIndex(
        (lightboxItemIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <span>Visual Infrastructure Tour</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Hospital Gallery & Infrastructure
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300 text-base">
            Take a virtual look at our modern emergency wing, catheterization lab, ICU suites, and patient care areas.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
              id={`gallery-filter-${cat.id}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item)}
              className="group cursor-pointer relative h-64 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 bg-slate-100 dark:bg-slate-800"
              id={`gallery-item-${item.id}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">{item.caption}</p>
                <div className="absolute top-4 right-4 bg-slate-900/80 p-2 rounded-full border border-slate-700 text-teal-400">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxItemIndex !== null && filteredItems[lightboxItemIndex] && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxItemIndex(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full bg-slate-800/80 border border-slate-700 z-10"
            aria-label="Close Lightbox"
            id="lightbox-close-btn"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevLightboxImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800/80 hover:bg-teal-600 text-white border border-slate-700 z-10"
            aria-label="Previous image"
            id="lightbox-prev-btn"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextLightboxImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800/80 hover:bg-teal-600 text-white border border-slate-700 z-10"
            aria-label="Next image"
            id="lightbox-next-btn"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full text-center space-y-4">
            <div className="relative max-h-[75vh] overflow-hidden rounded-3xl border border-slate-800 inline-block shadow-2xl">
              <img
                src={filteredItems[lightboxItemIndex].image}
                alt={filteredItems[lightboxItemIndex].title}
                className="max-h-[75vh] w-auto mx-auto object-contain rounded-3xl"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="text-white max-w-lg mx-auto">
              <h3 className="font-extrabold text-xl">{filteredItems[lightboxItemIndex].title}</h3>
              <p className="text-sm text-slate-300 mt-1">{filteredItems[lightboxItemIndex].caption}</p>
              <div className="text-xs text-slate-500 mt-2">
                Photo {lightboxItemIndex + 1} of {filteredItems.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
