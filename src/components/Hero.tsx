import React, { useState } from 'react';
import {
  CalendarCheck,
  Search,
  Phone,
  User,
  ShieldCheck,
  Clock,
  Award,
  Users,
  Building,
  HeartHandshake,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { HOSPITAL_INFO, DEPARTMENTS, DOCTORS } from '../data/hospitalData';

interface HeroProps {
  onOpenBooking: (dept?: string, doctor?: string) => void;
  onOpenDoctorModal: (docId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenDoctorModal }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDeptFilter, setSelectedDeptFilter] = useState('');

  const handleQuickSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedDeptFilter) {
      onOpenBooking(selectedDeptFilter);
    } else {
      const targetElem = document.getElementById('doctors');
      if (targetElem) {
        targetElem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="home" className="relative min-h-[85vh] flex flex-col justify-between overflow-hidden pt-4 pb-12 bg-slate-900 text-white">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1920&q=80"
          alt="UG Multispeciality Hospital Building"
          className="w-full h-full object-cover object-center opacity-25 scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/60" />
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Hero Text */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500/20 to-blue-500/20 border border-teal-500/40 text-teal-300 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>24×7 Emergency Available | NABH & JCI Accredited</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Advanced Healthcare With <span className="bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">Compassion</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Providing world-class medical care with board-certified senior specialists, 3T MRI & 128-Slice CT diagnostics, 24/7 trauma response, and affordable patient-first treatment.
            </p>

            {/* Main CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-bold px-6 py-3.5 rounded-2xl shadow-xl shadow-teal-500/20 hover:shadow-teal-500/30 transition-all text-sm sm:text-base group"
                id="hero-book-appointment-btn"
              >
                <CalendarCheck className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Book Appointment</span>
              </button>

              <a
                href="#doctors"
                className="flex items-center gap-2 bg-slate-800/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 font-semibold px-5 py-3.5 rounded-2xl transition-all text-sm sm:text-base backdrop-blur-sm"
                id="hero-find-doctor-btn"
              >
                <User className="w-5 h-5 text-teal-400" />
                <span>Find Doctor</span>
              </a>

              <a
                href={`tel:${HOSPITAL_INFO.emergencyPhone}`}
                className="flex items-center gap-2 bg-rose-600/90 hover:bg-rose-600 text-white font-semibold px-5 py-3.5 rounded-2xl transition-all text-sm sm:text-base animate-pulse-subtle"
                id="hero-emergency-call-btn"
              >
                <Phone className="w-5 h-5" />
                <span>Emergency: {HOSPITAL_INFO.emergencyPhone}</span>
              </a>
            </div>

            {/* Quick trust bullet points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 text-xs sm:text-sm text-slate-300 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Zero-Wait Emergency</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>40+ Cashless Insurances</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Sub-Specialty Experts</span>
              </div>
            </div>
          </div>

          {/* Quick Doctor / Department Search Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-800/90 border border-slate-700/80 rounded-3xl p-6 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center">
                  <Search className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">Instant OPD Booking</h3>
                  <p className="text-xs text-slate-400">Select department or specialist to check availability</p>
                </div>
              </div>

              <form onSubmit={handleQuickSearchSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Select Department
                  </label>
                  <select
                    value={selectedDeptFilter}
                    onChange={(e) => setSelectedDeptFilter(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 text-slate-100 rounded-xl px-3.5 py-3 text-sm focus:outline-none focus:border-teal-500 transition-colors"
                    id="hero-dept-select"
                  >
                    <option value="">-- Choose Speciality Department --</option>
                    {DEPARTMENTS.map((dept) => (
                      <option key={dept.id} value={dept.id}>
                        {dept.name} ({dept.headDoctor})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Or Search Doctor Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="e.g. Dr. Ananya Sharma, Dr. Ramesh..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 text-slate-100 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-teal-500 transition-colors"
                      id="hero-doctor-search-input"
                    />
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  </div>
                </div>

                {/* Quick Doctor Recommendations */}
                {searchQuery.trim().length > 0 && (
                  <div className="max-h-40 overflow-y-auto bg-slate-900 rounded-xl border border-slate-700 p-2 space-y-1">
                    {DOCTORS.filter(
                      (d) =>
                        d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        d.departmentName.toLowerCase().includes(searchQuery.toLowerCase())
                    ).map((doc) => (
                      <div
                        key={doc.id}
                        onClick={() => onOpenDoctorModal(doc.id)}
                        className="flex items-center justify-between p-2 hover:bg-slate-800 rounded-lg cursor-pointer transition-colors text-xs"
                      >
                        <div className="flex items-center gap-2">
                          <img
                            src={doc.photo}
                            alt={doc.name}
                            className="w-7 h-7 rounded-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                          <div>
                            <div className="font-semibold text-white">{doc.name}</div>
                            <div className="text-slate-400 text-[10px]">{doc.departmentName}</div>
                          </div>
                        </div>
                        <span className="text-teal-400 font-medium text-[10px]">View Profile</span>
                      </div>
                    ))}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-bold py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm"
                  id="hero-quick-search-submit"
                >
                  <span>Proceed to Appointment Slot</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Counter Statistics Strip */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-slate-800/70 border border-slate-700/60 rounded-2xl p-4 sm:p-6 backdrop-blur-md">
          {HOSPITAL_INFO.stats.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-3 p-2">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600/30 to-teal-500/30 border border-teal-500/30 flex items-center justify-center text-teal-400 shrink-0">
                {idx === 0 && <Award className="w-6 h-6" />}
                {idx === 1 && <Users className="w-6 h-6" />}
                {idx === 2 && <Building className="w-6 h-6" />}
                {idx === 3 && <HeartHandshake className="w-6 h-6" />}
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {stat.value.toLocaleString()}
                  <span className="text-teal-400">{stat.suffix}</span>
                </div>
                <div className="text-xs sm:text-sm text-slate-300 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
