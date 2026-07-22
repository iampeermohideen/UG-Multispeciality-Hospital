import React, { useState, useEffect } from 'react';
import {
  MessageCircle,
  Phone,
  CalendarCheck,
  ArrowUp,
  Search,
  X,
  ShieldCheck,
  Stethoscope,
  ChevronRight,
  Cookie
} from 'lucide-react';
import { HOSPITAL_INFO, DEPARTMENTS, DOCTORS } from '../data/hospitalData';

interface SpecialFeaturesProps {
  onOpenBooking: (dept?: string, doctor?: string) => void;
  searchModalOpen: boolean;
  setSearchModalOpen: (open: boolean) => void;
  onOpenDoctorModal: (docId: string) => void;
}

export const SpecialFeatures: React.FC<SpecialFeaturesProps> = ({
  onOpenBooking,
  searchModalOpen,
  setSearchModalOpen,
  onOpenDoctorModal
}) => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showCookieConsent, setShowCookieConsent] = useState(true);
  const [commandQuery, setCommandQuery] = useState('');
  const [whatsappChatOpen, setWhatsappChatOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut Ctrl+K for search command palette
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setSearchModalOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappDirectUrl = `https://wa.me/${HOSPITAL_INFO.whatsapp}?text=${encodeURIComponent(
    'Hello UG Hospital Helpdesk, I need assistance with doctor appointment / services.'
  )}`;

  // Filtered list for search command palette
  const filteredDepts = DEPARTMENTS.filter((d) =>
    d.name.toLowerCase().includes(commandQuery.toLowerCase())
  );
  const filteredDocs = DOCTORS.filter((d) =>
    d.name.toLowerCase().includes(commandQuery.toLowerCase()) ||
    d.specialization.toLowerCase().includes(commandQuery.toLowerCase())
  );

  return (
    <>
      {/* Floating Emergency Call Button */}
      <a
        href={`tel:${HOSPITAL_INFO.emergencyPhone}`}
        className="fixed bottom-24 right-5 z-30 bg-rose-600 hover:bg-rose-700 text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 animate-pulse-subtle border-2 border-white dark:border-slate-800"
        title="Call 24/7 Emergency Helpline"
        aria-label="Call 24/7 Emergency Helpline"
        id="floating-emergency-btn"
      >
        <Phone className="w-6 h-6 fill-current" />
      </a>

      {/* Floating WhatsApp Chat Button & Drawer */}
      <div className="fixed bottom-6 right-5 z-30">
        <button
          onClick={() => setWhatsappChatOpen(!whatsappChatOpen)}
          className="bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 border-2 border-white dark:border-slate-800"
          title="Chat on WhatsApp"
          aria-label="Chat on WhatsApp"
          id="floating-whatsapp-trigger-btn"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
        </button>

        {whatsappChatOpen && (
          <div className="absolute bottom-16 right-0 w-80 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-2xl space-y-3 z-40 animate-in fade-in slide-in-from-bottom-2">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-xs">
                  UG
                </div>
                <div>
                  <div className="font-bold text-xs text-slate-900 dark:text-white">UG Hospital WhatsApp</div>
                  <div className="text-[10px] text-emerald-500 font-semibold">Online • 24/7 Helpdesk</div>
                </div>
              </div>
              <button
                onClick={() => setWhatsappChatOpen(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-white p-1 text-xs"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300">
              Need instant doctor availability, address navigation, or emergency assistance? Click below to chat directly with our reception executive.
            </p>

            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition-colors"
              id="whatsapp-chat-start-btn"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Start WhatsApp Conversation</span>
            </a>
          </div>
        )}
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-5 z-30 bg-slate-800/90 hover:bg-slate-800 text-slate-200 p-3 rounded-full shadow-lg border border-slate-700 transition-all hover:scale-110 backdrop-blur-md"
          title="Back to Top"
          aria-label="Back to Top"
          id="back-to-top-btn"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Mobile Sticky Bottom Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-20 bg-white/95 dark:bg-slate-900/95 border-t border-slate-200 dark:border-slate-800 p-2.5 backdrop-blur-md flex items-center gap-2 shadow-2xl">
        <a
          href={`tel:${HOSPITAL_INFO.emergencyPhone}`}
          className="flex-1 bg-rose-600 text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-1 shadow-sm"
          id="mobile-sticky-emergency-btn"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Emergency</span>
        </a>

        <button
          onClick={() => onOpenBooking()}
          className="flex-[2] bg-gradient-to-r from-blue-600 to-teal-600 text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-1 shadow-md"
          id="mobile-sticky-book-btn"
        >
          <CalendarCheck className="w-3.5 h-3.5" />
          <span>Book Appointment</span>
        </button>
      </div>

      {/* Command Palette / Search Modal (Ctrl+K) */}
      {searchModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-start justify-center pt-20 p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 max-w-xl w-full text-slate-900 dark:text-white space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 font-bold text-sm">
                <Search className="w-4 h-4" />
                <span>UG Hospital Search Command Palette</span>
              </div>
              <button
                onClick={() => setSearchModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-white text-sm"
                id="close-search-modal-btn"
              >
                ESC
              </button>
            </div>

            <input
              type="text"
              autoFocus
              placeholder="Search departments, doctors, services..."
              value={commandQuery}
              onChange={(e) => setCommandQuery(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              id="command-palette-input"
            />

            <div className="max-h-72 overflow-y-auto space-y-3 pt-1">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Departments ({filteredDepts.length})
                </div>
                <div className="space-y-1">
                  {filteredDepts.map((d) => (
                    <div
                      key={d.id}
                      onClick={() => {
                        setSearchModalOpen(false);
                        onOpenBooking(d.id);
                      }}
                      className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer flex items-center justify-between text-xs transition-colors"
                    >
                      <span className="font-bold">{d.name}</span>
                      <span className="text-teal-500 text-[10px]">Book Dept →</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Doctors ({filteredDocs.length})
                </div>
                <div className="space-y-1">
                  {filteredDocs.map((doc) => (
                    <div
                      key={doc.id}
                      onClick={() => {
                        setSearchModalOpen(false);
                        onOpenDoctorModal(doc.id);
                      }}
                      className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer flex items-center justify-between text-xs transition-colors"
                    >
                      <div>
                        <span className="font-bold block">{doc.name}</span>
                        <span className="text-slate-400 text-[10px]">{doc.departmentName}</span>
                      </div>
                      <span className="text-blue-500 text-[10px]">View Doctor →</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Consent Banner */}
      {showCookieConsent && (
        <div className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-40 bg-slate-900/95 border border-slate-800 text-white p-4 rounded-2xl shadow-2xl backdrop-blur-md text-xs space-y-3">
          <div className="flex items-start gap-3">
            <Cookie className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <p className="text-slate-300 leading-relaxed">
              We use functional cookies to enhance your appointment booking experience and secure medical data.
            </p>
          </div>
          <div className="flex items-center gap-2 justify-end">
            <button
              onClick={() => setShowCookieConsent(false)}
              className="bg-teal-500 hover:bg-teal-600 text-white font-bold px-4 py-1.5 rounded-lg text-xs transition-colors"
              id="accept-cookie-btn"
            >
              Accept Cookies
            </button>
          </div>
        </div>
      )}
    </>
  );
};
