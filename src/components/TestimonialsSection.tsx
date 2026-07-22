import React, { useState } from 'react';
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  BadgeCheck
} from 'lucide-react';
import { TESTIMONIALS } from '../data/hospitalData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <span>Verified Patient Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Stories of Hope, Healing & Recovery
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300 text-base">
            Read authentic feedback from patients and families who trusted UG Multispeciality Hospital.
          </p>
        </div>

        {/* Featured Testimonial Slider Card */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
            <Quote className="w-20 h-20 text-teal-500/10 dark:text-teal-400/10 absolute -top-2 -left-2 pointer-events-none" />

            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              {/* Patient Photo */}
              <div className="relative shrink-0">
                <img
                  src={TESTIMONIALS[currentIndex].patientPhoto}
                  alt={TESTIMONIALS[currentIndex].patientName}
                  className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl object-cover border-4 border-white dark:border-slate-800 shadow-md"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-2 -right-2 bg-teal-500 text-white p-1.5 rounded-full shadow-md">
                  <BadgeCheck className="w-5 h-5" />
                </div>
              </div>

              {/* Patient Review Content */}
              <div className="space-y-4 text-center md:text-left flex-1">
                {/* Star Rating */}
                <div className="flex items-center justify-center md:justify-start gap-1 text-amber-400">
                  {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                  <span className="text-xs font-bold text-slate-500 ml-2">5.0 Out of 5.0 Rating</span>
                </div>

                <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 italic leading-relaxed">
                  &quot;{TESTIMONIALS[currentIndex].reviewText}&quot;
                </p>

                <div>
                  <div className="font-extrabold text-lg text-slate-900 dark:text-white flex items-center justify-center md:justify-start gap-2">
                    <span>{TESTIMONIALS[currentIndex].patientName}</span>
                    <span className="text-xs font-normal text-slate-400">({TESTIMONIALS[currentIndex].location})</span>
                  </div>

                  <div className="text-xs font-semibold text-teal-600 dark:text-teal-400 mt-0.5">
                    Treatment: {TESTIMONIALS[currentIndex].treatmentReceived} • {TESTIMONIALS[currentIndex].doctorTreated}
                  </div>
                </div>
              </div>
            </div>

            {/* Slider Navigation Controls */}
            <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
              <div className="text-xs text-slate-400 font-medium">
                Review {currentIndex + 1} of {TESTIMONIALS.length}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-teal-500 hover:text-white text-slate-700 dark:text-slate-200 transition-colors"
                  aria-label="Previous testimonial"
                  id="testimonial-prev-btn"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-teal-500 hover:text-white text-slate-700 dark:text-slate-200 transition-colors"
                  aria-label="Next testimonial"
                  id="testimonial-next-btn"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
