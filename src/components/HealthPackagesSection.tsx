import React, { useState } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  CalendarCheck,
  Tag,
  Clock,
  Sparkles,
  Info
} from 'lucide-react';
import { HEALTH_PACKAGES } from '../data/hospitalData';
import { HealthPackage } from '../types';

interface HealthPackagesProps {
  onOpenBooking: (dept?: string, docId?: string, pkgTitle?: string) => void;
}

export const HealthPackagesSection: React.FC<HealthPackagesProps> = ({ onOpenBooking }) => {
  const [selectedPkgModal, setSelectedPkgModal] = useState<HealthPackage | null>(null);

  return (
    <section id="packages" className="py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <span>Preventive Wellness Screening</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Preventive Master Health Checkup Packages
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300 text-base">
            Early detection is the best cure. Save up to 60% on comprehensive full-body health screening.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HEALTH_PACKAGES.map((pkg) => {
            const discountPct = Math.round(
              ((pkg.originalPrice - pkg.discountedPrice) / pkg.originalPrice) * 100
            );

            return (
              <div
                key={pkg.id}
                className={`relative bg-slate-50 dark:bg-slate-800/80 border rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 ${
                  pkg.isPopular
                    ? 'border-2 border-teal-500 ring-4 ring-teal-500/10 dark:ring-teal-500/20'
                    : 'border-slate-200/80 dark:border-slate-700/80'
                }`}
                id={`pkg-card-${pkg.id}`}
              >
                {pkg.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-teal-500 to-blue-600 text-white text-[11px] font-extrabold uppercase tracking-wider px-4 py-1 rounded-full shadow-md flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/80 px-3 py-1 rounded-full">
                      {pkg.totalTests} Diagnostic Parameters
                    </span>

                    <span className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold px-2.5 py-0.5 rounded-md">
                      Save {discountPct}%
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-1">
                    {pkg.title}
                  </h3>

                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 min-h-[36px]">
                    {pkg.tagline}
                  </p>

                  {/* Pricing Box */}
                  <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 mb-5">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-extrabold text-slate-900 dark:text-white">
                        ₹{pkg.discountedPrice}
                      </span>
                      <span className="text-sm line-through text-slate-400 font-medium">
                        ₹{pkg.originalPrice}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-500" />
                      <span>{pkg.fastingRequired ? '10-12 hrs fasting required' : 'No fasting required'}</span>
                    </div>
                  </div>

                  {/* Included Tests Preview */}
                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      Package Highlights:
                    </div>
                    {pkg.testsList.slice(0, 4).map((test, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                        <span>{test}</span>
                      </div>
                    ))}
                    {pkg.testsList.length > 4 && (
                      <button
                        onClick={() => setSelectedPkgModal(pkg)}
                        className="text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline pt-1"
                      >
                        + View all {pkg.testsList.length} tests included
                      </button>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={() => setSelectedPkgModal(pkg)}
                    className="p-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 rounded-2xl transition-colors"
                    title="Package details"
                    aria-label="Package details"
                  >
                    <Info className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onOpenBooking(undefined, undefined, pkg.title)}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-bold py-3 rounded-2xl text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
                    id={`pkg-book-now-${pkg.id}`}
                  >
                    <CalendarCheck className="w-4 h-4" />
                    <span>Book Checkup Now</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Package Detail Modal */}
      {selectedPkgModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 max-w-2xl w-full text-slate-900 dark:text-white space-y-5 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">Health Checkup Details</span>
                <h3 className="font-extrabold text-xl">{selectedPkgModal.title}</h3>
              </div>
              <button
                onClick={() => setSelectedPkgModal(null)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-white text-lg p-1"
                id="close-pkg-modal-btn"
              >
                ✕
              </button>
            </div>

            <div className="flex items-baseline gap-3 bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl">
              <span className="text-3xl font-extrabold text-teal-600 dark:text-teal-400">₹{selectedPkgModal.discountedPrice}</span>
              <span className="text-sm line-through text-slate-400">Original ₹{selectedPkgModal.originalPrice}</span>
              <span className="ml-auto text-xs font-bold text-slate-500">Recommended for: {selectedPkgModal.recommendedFor}</span>
            </div>

            <div>
              <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300 mb-2">Complete Test Breakdown ({selectedPkgModal.totalTests} Parameters)</h4>
              <div className="space-y-2">
                {selectedPkgModal.testsList.map((testItem, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-medium bg-slate-50 dark:bg-slate-800 p-2.5 rounded-xl text-slate-800 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                    <span>{testItem}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/80 rounded-2xl text-xs text-amber-800 dark:text-amber-300">
              <span className="font-bold block mb-1">Preparation Guidelines:</span>
              • Fasting required for 10-12 hours prior to blood sample draw.<br />
              • Please bring all previous medical reports and prescription cards.<br />
              • Complimentary breakfast coupon provided at hospital cafeteria after blood draw.
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={() => setSelectedPkgModal(null)}
                className="px-4 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl"
              >
                Close
              </button>

              <button
                onClick={() => {
                  const pkgTitle = selectedPkgModal.title;
                  setSelectedPkgModal(null);
                  onOpenBooking(undefined, undefined, pkgTitle);
                }}
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm shadow-md flex items-center gap-2"
                id="modal-pkg-book-now-btn"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Book This Package</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
