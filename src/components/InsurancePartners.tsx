import React, { useState } from 'react';
import { ShieldCheck, FileText, CheckCircle2, Info } from 'lucide-react';
import { INSURANCE_PARTNERS } from '../data/hospitalData';

export const InsurancePartners: React.FC = () => {
  const [showGuideModal, setShowGuideModal] = useState(false);

  return (
    <section className="py-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <span>Zero Paperwork Cashless Hospitalization</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Insurance & Corporate Cashless Tie-ups
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mt-1">
              We partner with 40+ leading insurance companies and Third Party Administrators (TPAs) for seamless pre-authorization.
            </p>
          </div>

          <button
            onClick={() => setShowGuideModal(true)}
            className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold px-4 py-2.5 rounded-xl text-xs transition-colors shrink-0"
            id="insurance-process-guide-btn"
          >
            <FileText className="w-4 h-4 text-teal-500" />
            <span>Cashless Admission Guide</span>
          </button>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {INSURANCE_PARTNERS.map((partner) => (
            <div
              key={partner.id}
              className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl p-4 text-center hover:bg-white dark:hover:bg-slate-800 hover:shadow-md transition-all flex flex-col items-center justify-center gap-2"
              id={`insurance-partner-${partner.id}`}
            >
              <ShieldCheck className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              <span className="font-bold text-xs text-slate-800 dark:text-slate-200 leading-tight">
                {partner.name}
              </span>
              <span className="text-[10px] text-slate-400 font-medium">{partner.type}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Cashless Guide Modal */}
      {showGuideModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 max-w-xl w-full text-slate-900 dark:text-white space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <h3 className="font-extrabold text-lg flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-teal-500" />
                <span>4 Simple Steps to Cashless Hospitalization</span>
              </h3>
              <button
                onClick={() => setShowGuideModal(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-white text-lg p-1"
                id="close-insurance-modal-btn"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl space-y-1">
                <span className="font-bold text-teal-600 dark:text-teal-400 block">Step 1: Present Documents</span>
                <p className="text-slate-600 dark:text-slate-300">Show Health Insurance E-card, Government Photo ID (Aadhaar/PAN), and Doctor Advice Note at the TPA Desk.</p>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl space-y-1">
                <span className="font-bold text-teal-600 dark:text-teal-400 block">Step 2: Pre-Authorization Approval</span>
                <p className="text-slate-600 dark:text-slate-300">Our Insurance Helpdesk sends the cashless request form to your insurer for instant approval.</p>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl space-y-1">
                <span className="font-bold text-teal-600 dark:text-teal-400 block">Step 3: Treatment & Hospital Stay</span>
                <p className="text-slate-600 dark:text-slate-300">Receive world-class medical treatment without making upfront cash deposits.</p>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl space-y-1">
                <span className="font-bold text-teal-600 dark:text-teal-400 block">Step 4: Discharge Settlement</span>
                <p className="text-slate-600 dark:text-slate-300">Final bills are directly settled between the hospital and your insurance company.</p>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setShowGuideModal(false)}
                className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-5 py-2 rounded-xl text-xs font-bold"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
