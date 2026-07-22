import React, { useState } from 'react';
import {
  Scan,
  Cpu,
  HeartPulse,
  Baby,
  Bed,
  CheckCircle2,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { FACILITIES } from '../data/hospitalData';
import { Facility } from '../types';

export const FacilitiesSection: React.FC = () => {
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);

  return (
    <section id="facilities" className="py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <span>World-Class Medical Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            12 Advanced Clinical & Diagnostic Facilities
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300 text-base">
            Equipped with cutting-edge medical technology, digital imaging equipment, and comfortable inpatient suites.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACILITIES.map((facility) => (
            <div
              key={facility.id}
              onClick={() => setSelectedFacility(facility)}
              className="group cursor-pointer bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-teal-500/50 transition-all duration-300 flex flex-col justify-between"
              id={`facility-card-${facility.id}`}
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 bg-slate-900/90 text-teal-400 font-bold text-[11px] px-2.5 py-1 rounded-lg border border-slate-700 backdrop-blur-md">
                    {facility.category}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors mb-2">
                    {facility.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed mb-3">
                    {facility.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                    {facility.highlights.map((hl, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                        <span className="truncate">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 text-xs font-bold text-teal-600 dark:text-teal-400 flex items-center justify-between">
                <span>View Technical Specs</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Facility Detail Modal */}
      {selectedFacility && (
        <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 max-w-xl w-full text-slate-900 dark:text-white space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">{selectedFacility.category}</span>
                <h3 className="font-extrabold text-xl">{selectedFacility.title}</h3>
              </div>
              <button
                onClick={() => setSelectedFacility(null)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-white text-lg p-1"
                id="close-facility-modal-btn"
              >
                ✕
              </button>
            </div>

            <div className="rounded-2xl overflow-hidden h-52">
              <img
                src={selectedFacility.image}
                alt={selectedFacility.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {selectedFacility.description}
            </p>

            <div>
              <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300 mb-2">Facility Specifications & Features</h4>
              <div className="space-y-2">
                {selectedFacility.highlights.map((hl, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-medium bg-slate-50 dark:bg-slate-800 p-2.5 rounded-xl text-slate-800 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setSelectedFacility(null)}
                className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 font-semibold px-5 py-2.5 rounded-xl text-sm"
              >
                Close Facility Overview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
