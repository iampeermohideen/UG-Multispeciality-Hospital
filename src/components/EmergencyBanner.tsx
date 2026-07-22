import React from 'react';
import { Phone, Ambulance, ShieldAlert, Clock, MapPin } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

export const EmergencyBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-rose-700 via-rose-600 to-red-800 text-white py-12 px-4 sm:px-6 relative overflow-hidden shadow-2xl">
      {/* Decorative pulse glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
        <div className="space-y-3 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-rose-100">
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            <ShieldAlert className="w-4 h-4" />
            <span>Level-1 Trauma & Emergency Care</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Need Immediate Medical Help?
          </h2>

          <p className="text-rose-100 text-sm sm:text-base max-w-2xl">
            Our 24/7 Emergency Department features dedicated cardiac resuscitation bays, golden hour stroke triage, zero-wait trauma surgeon access, and a fleet of mobile ICU cardiac ambulances.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
          <a
            href={`tel:${HOSPITAL_INFO.emergencyPhone}`}
            className="flex items-center gap-2.5 bg-white text-rose-700 hover:bg-rose-50 font-extrabold px-6 py-4 rounded-2xl shadow-2xl text-base sm:text-lg transition-transform hover:scale-105"
            id="emergency-banner-call-btn"
          >
            <Phone className="w-5 h-5 fill-current animate-bounce" />
            <span>Call ER: {HOSPITAL_INFO.emergencyPhone}</span>
          </a>

          <a
            href={`tel:${HOSPITAL_INFO.ambulancePhone}`}
            className="flex items-center gap-2.5 bg-rose-950/80 hover:bg-rose-950 text-white border border-rose-400/40 font-bold px-6 py-4 rounded-2xl backdrop-blur-md text-base sm:text-lg transition-transform hover:scale-105"
            id="emergency-banner-ambulance-btn"
          >
            <Ambulance className="w-5 h-5 text-yellow-400" />
            <span>Ambulance Hotline</span>
          </a>
        </div>
      </div>
    </section>
  );
};
