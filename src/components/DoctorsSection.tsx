import React, { useState } from 'react';
import {
  Star,
  Clock,
  CalendarCheck,
  Search,
  Award,
  Globe,
  CheckCircle,
  UserCheck
} from 'lucide-react';
import { DOCTORS, DEPARTMENTS } from '../data/hospitalData';
import { Doctor } from '../types';

interface DoctorsProps {
  onOpenBooking: (dept?: string, doctorId?: string) => void;
  selectedDoctorModalId?: string | null;
  setSelectedDoctorModalId?: (id: string | null) => void;
}

export const DoctorsSection: React.FC<DoctorsProps> = ({
  onOpenBooking,
  selectedDoctorModalId,
  setSelectedDoctorModalId
}) => {
  const [selectedDeptFilter, setSelectedDeptFilter] = useState('all');
  const [searchDocName, setSearchDocName] = useState('');
  const [activeModalDoc, setActiveModalDoc] = useState<Doctor | null>(null);

  // Sync external selected doctor modal trigger if passed
  React.useEffect(() => {
    if (selectedDoctorModalId) {
      const doc = DOCTORS.find((d) => d.id === selectedDoctorModalId);
      if (doc) setActiveModalDoc(doc);
    }
  }, [selectedDoctorModalId]);

  const filteredDoctors = DOCTORS.filter((doc) => {
    const matchesDept = selectedDeptFilter === 'all' || doc.departmentId === selectedDeptFilter;
    const matchesName =
      doc.name.toLowerCase().includes(searchDocName.toLowerCase()) ||
      doc.specialization.toLowerCase().includes(searchDocName.toLowerCase());
    return matchesDept && matchesName;
  });

  return (
    <section id="doctors" className="py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <span>Our Renowned Medical Specialists</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Consult Experienced Doctors & Surgeons
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300 text-base">
            Board-certified senior consultants with international fellowships and decades of clinical excellence.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          {/* Department Select */}
          <div className="w-full sm:w-auto flex-1 max-w-xs">
            <select
              value={selectedDeptFilter}
              onChange={(e) => setSelectedDeptFilter(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              id="doctors-dept-filter-select"
            >
              <option value="all">All Departments ({DOCTORS.length} Doctors)</option>
              {DEPARTMENTS.map((dept) => (
                <option key={dept.id} value={dept.id}>
                  {dept.name}
                </option>
              ))}
            </select>
          </div>

          {/* Search Doctor Input */}
          <div className="w-full sm:w-auto flex-1 max-w-sm relative">
            <input
              type="text"
              placeholder="Search by doctor name or specialization..."
              value={searchDocName}
              onChange={(e) => setSearchDocName(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              id="doctor-search-input"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          </div>
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDoctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              id={`doctor-card-${doc.id}`}
            >
              <div>
                {/* Doctor Photo */}
                <div className="relative h-60 overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={doc.photo}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  {/* Availability Badge */}
                  <div className="absolute top-3 left-3 bg-teal-500 text-white font-semibold text-[11px] px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    <span>{doc.availability}</span>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute bottom-3 right-3 bg-slate-900/90 text-amber-400 font-bold text-xs px-2.5 py-1 rounded-lg backdrop-blur-md flex items-center gap-1 border border-slate-700">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{doc.rating}</span>
                    <span className="text-slate-400 font-normal">({doc.reviewCount})</span>
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-5">
                  <div className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-1">
                    {doc.departmentName}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {doc.name}
                  </h3>

                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-1 font-medium">
                    {doc.qualification}
                  </p>

                  <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-1">
                    {doc.specialization}
                  </p>

                  <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Experience:</span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">{doc.experienceYears}+ Years</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Timing:</span>
                      <span className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-teal-500" />
                        {doc.timing}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Consultation:</span>
                      <span className="font-bold text-teal-600 dark:text-teal-400">₹{doc.consultationFee}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0 flex items-center gap-2">
                <button
                  onClick={() => setActiveModalDoc(doc)}
                  className="flex-1 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold py-2.5 rounded-xl text-xs transition-colors"
                  id={`doc-view-bio-btn-${doc.id}`}
                >
                  View Profile
                </button>

                <button
                  onClick={() => onOpenBooking(doc.departmentId, doc.id)}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-bold py-2.5 rounded-xl text-xs shadow-md transition-all flex items-center justify-center gap-1"
                  id={`doc-book-appointment-btn-${doc.id}`}
                >
                  <CalendarCheck className="w-3.5 h-3.5" />
                  <span>Book Slot</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-12 text-slate-500 dark:text-slate-400">
            No doctors found matching your filters. Try selecting a different department or clear search terms.
          </div>
        )}
      </div>

      {/* Doctor Bio Modal */}
      {activeModalDoc && (
        <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 max-w-2xl w-full text-slate-900 dark:text-white space-y-5 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-4">
                <img
                  src={activeModalDoc.photo}
                  alt={activeModalDoc.name}
                  className="w-16 h-16 rounded-2xl object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
                    {activeModalDoc.departmentName}
                  </div>
                  <h3 className="font-extrabold text-xl">{activeModalDoc.name}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{activeModalDoc.qualification}</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setActiveModalDoc(null);
                  if (setSelectedDoctorModalId) setSelectedDoctorModalId(null);
                }}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-white text-lg p-1"
                id="close-doc-modal-btn"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl text-xs">
              <div>
                <span className="text-slate-500 dark:text-slate-400 block">Experience</span>
                <span className="font-bold text-slate-800 dark:text-slate-200">{activeModalDoc.experienceYears}+ Years</span>
              </div>
              <div>
                <span className="text-slate-500 dark:text-slate-400 block">Rating</span>
                <span className="font-bold text-amber-500 flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-current" /> {activeModalDoc.rating} ({activeModalDoc.reviewCount} reviews)
                </span>
              </div>
              <div>
                <span className="text-slate-500 dark:text-slate-400 block">Consultation Fee</span>
                <span className="font-bold text-teal-600 dark:text-teal-400">₹{activeModalDoc.consultationFee}</span>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300 mb-1">Biography & Expertise</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{activeModalDoc.bio}</p>
            </div>

            <div>
              <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300 mb-1">OPD Schedule Days</h4>
              <div className="flex flex-wrap gap-2 pt-1">
                {activeModalDoc.days.map((day) => (
                  <span key={day} className="bg-teal-50 dark:bg-teal-950 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-xs font-bold px-3 py-1 rounded-lg">
                    {day}
                  </span>
                ))}
                <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs px-3 py-1 rounded-lg">
                  {activeModalDoc.timing}
                </span>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300 mb-1">Languages Spoken</h4>
              <div className="flex flex-wrap gap-2 pt-1">
                {activeModalDoc.languages.map((lang) => (
                  <span key={lang} className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs px-2.5 py-1 rounded-md flex items-center gap-1">
                    <Globe className="w-3 h-3 text-slate-400" />
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={() => {
                  setActiveModalDoc(null);
                  if (setSelectedDoctorModalId) setSelectedDoctorModalId(null);
                }}
                className="px-4 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl"
              >
                Close
              </button>

              <button
                onClick={() => {
                  const deptId = activeModalDoc.departmentId;
                  const docId = activeModalDoc.id;
                  setActiveModalDoc(null);
                  if (setSelectedDoctorModalId) setSelectedDoctorModalId(null);
                  onOpenBooking(deptId, docId);
                }}
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm shadow-md flex items-center gap-2"
                id="doc-modal-book-slot-btn"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Book Appointment with {activeModalDoc.name}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
