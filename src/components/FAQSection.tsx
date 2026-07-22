import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/hospitalData';

export const FAQSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQS.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <span>Patient Knowledge Base</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Frequently Asked Questions (FAQ)
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300 text-base">
            Find immediate answers regarding appointments, cashless insurance, emergency services, and visiting guidelines.
          </p>
        </div>

        {/* Search FAQ */}
        <div className="max-w-xl mx-auto mb-10 relative">
          <input
            type="text"
            placeholder="Search FAQ questions (e.g. insurance, visiting hours, emergency)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white rounded-2xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm"
            id="faq-search-input"
          />
          <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl overflow-hidden transition-all duration-200"
                id={`faq-item-${faq.id}`}
              >
                <button
                  onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-base text-slate-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                  id={`faq-btn-${faq.id}`}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-teal-500 shrink-0" />
                    <span>{faq.question}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-teal-500' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/50 dark:border-slate-700/50">
                    <span className="inline-block bg-teal-50 dark:bg-teal-950/80 text-teal-700 dark:text-teal-300 text-[10px] font-bold px-2 py-0.5 rounded mb-2">
                      Category: {faq.category}
                    </span>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredFaqs.length === 0 && (
          <div className="text-center py-8 text-slate-500">
            No matching questions found for &quot;{searchQuery}&quot;. Call our 24/7 helpdesk at +91 98765 43210 for personal assistance.
          </div>
        )}
      </div>
    </section>
  );
};
