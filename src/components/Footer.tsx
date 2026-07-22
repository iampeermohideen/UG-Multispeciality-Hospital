import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Send,
  ShieldCheck,
  Heart,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';
import { HOSPITAL_INFO, DEPARTMENTS } from '../data/hospitalData';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'terms' | 'careers' | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 2000);
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Newsletter Strip */}
        <div className="bg-gradient-to-r from-blue-900/50 via-teal-900/40 to-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl mb-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-teal-400 text-xs font-bold uppercase tracking-wider mb-1">
              Stay Informed With Health Tips
            </div>
            <h3 className="text-2xl font-extrabold text-white">
              Subscribe to UG Hospital Monthly Health Bulletin
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Get wellness advice from our senior doctors, medical news, and upcoming checkup discounts directly in your inbox.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full md:w-auto flex items-center gap-2">
            <input
              type="email"
              required
              placeholder="Enter your email address..."
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="bg-slate-900 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-teal-500 w-full md:w-72"
              id="footer-newsletter-input"
            />
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 text-white font-bold px-5 py-3 rounded-xl text-sm transition-colors shrink-0 flex items-center gap-1.5"
              id="footer-subscribe-btn"
            >
              {subscribed ? <CheckCircle2 className="w-4 h-4" /> : <Send className="w-4 h-4" />}
              <span>{subscribed ? 'Subscribed!' : 'Subscribe'}</span>
            </button>
          </form>
        </div>

        {/* 4 Main Links Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-800/80">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-teal-500 to-cyan-400 flex items-center justify-center text-white font-extrabold text-xl shadow-md">
                UG
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight">UG Multispeciality</span>
                <span className="block text-[10px] text-teal-400 font-bold uppercase tracking-widest">Hospital & Research Centre</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              UG Multispeciality Hospital is committed to delivering world-class healthcare through advanced technology, experienced doctors, 24/7 trauma response, and ethical clinical practice.
            </p>

            <div className="space-y-2 text-xs text-slate-400 pt-2">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-rose-400" />
                <span>Emergency: <strong>{HOSPITAL_INFO.emergencyPhone}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400" />
                <span>{HOSPITAL_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="truncate">{HOSPITAL_INFO.address.split(',')[0]}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3 text-xs">
            <h4 className="font-extrabold text-white text-sm uppercase tracking-wider text-teal-400">Quick Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-teal-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-teal-400 transition-colors">About Hospital</a></li>
              <li><a href="#departments" className="hover:text-teal-400 transition-colors">Departments</a></li>
              <li><a href="#doctors" className="hover:text-teal-400 transition-colors">Find a Doctor</a></li>
              <li><a href="#facilities" className="hover:text-teal-400 transition-colors">Medical Facilities</a></li>
              <li><a href="#packages" className="hover:text-teal-400 transition-colors">Health Packages</a></li>
              <li><a href="#testimonials" className="hover:text-teal-400 transition-colors">Patient Reviews</a></li>
            </ul>
          </div>

          {/* Col 3: Key Departments */}
          <div className="space-y-3 text-xs">
            <h4 className="font-extrabold text-white text-sm uppercase tracking-wider text-teal-400">Top Departments</h4>
            <ul className="space-y-2">
              {DEPARTMENTS.slice(0, 7).map((dept) => (
                <li key={dept.id}>
                  <a href="#departments" className="hover:text-teal-400 transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-slate-600" />
                    <span>{dept.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Patient Care & Legal */}
          <div className="space-y-3 text-xs">
            <h4 className="font-extrabold text-white text-sm uppercase tracking-wider text-teal-400">Patient Resources</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-teal-400 transition-colors">Cashless Insurance</a></li>
              <li><a href="#faq" className="hover:text-teal-400 transition-colors">FAQ & Patient Guide</a></li>
              <li>
                <button
                  onClick={() => setActiveLegalModal('careers')}
                  className="hover:text-teal-400 transition-colors text-left"
                >
                  Careers & Fellowships
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveLegalModal('privacy')}
                  className="hover:text-teal-400 transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveLegalModal('terms')}
                  className="hover:text-teal-400 transition-colors text-left"
                >
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Socials & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} UG Multispeciality Hospital. All rights reserved. Built for world-class healthcare.
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900 hover:bg-teal-600 hover:text-white rounded-lg transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900 hover:bg-teal-600 hover:text-white rounded-lg transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900 hover:bg-teal-600 hover:text-white rounded-lg transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900 hover:bg-teal-600 hover:text-white rounded-lg transition-colors" aria-label="YouTube">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Modal for Privacy / Terms / Careers */}
      {activeLegalModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 max-w-xl w-full text-white space-y-4 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="font-extrabold text-lg text-teal-400 capitalize">
                {activeLegalModal === 'privacy' && 'Privacy & Data Security Policy'}
                {activeLegalModal === 'terms' && 'Hospital Terms & Conditions'}
                {activeLegalModal === 'careers' && 'Careers & Medical Fellowships'}
              </h3>
              <button
                onClick={() => setActiveLegalModal(null)}
                className="text-slate-400 hover:text-white text-lg p-1"
                id="close-legal-modal-btn"
              >
                ✕
              </button>
            </div>

            <div className="text-xs text-slate-300 space-y-3 leading-relaxed">
              {activeLegalModal === 'privacy' && (
                <>
                  <p>At UG Multispeciality Hospital, we maintain absolute confidentiality of patient health records, diagnostic reports, and medical history in strict compliance with HIPAA and Indian Digital Personal Data Protection Act.</p>
                  <p>All online doctor appointment bookings and tele-consultation data are transmitted via 256-bit SSL encryption. We do not sell or share patient contact details to third-party commercial entities.</p>
                </>
              )}

              {activeLegalModal === 'terms' && (
                <>
                  <p>1. <strong>Outpatient OPD Slots:</strong> Appointment tokens are reserved subject to doctor availability and emergency surgical calls.</p>
                  <p>2. <strong>Emergency Services:</strong> Life-saving emergency treatment is initiated immediately without delay.</p>
                  <p>3. <strong>Cashless Claims:</strong> Pre-authorization approvals depend on terms defined in your individual health insurance policy.</p>
                </>
              )}

              {activeLegalModal === 'careers' && (
                <>
                  <p>UG Multispeciality Hospital invites senior consultants, resident medical officers, staff nurses, and lab technicians to join our growing clinical family.</p>
                  <div className="p-3 bg-slate-800 rounded-xl font-medium">
                    Send your resume and medical council registration copy to: <strong className="text-teal-400">careers@ughospital.com</strong>
                  </div>
                </>
              )}
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setActiveLegalModal(null)}
                className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
