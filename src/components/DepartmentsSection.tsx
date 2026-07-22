import React, { useState } from 'react';
import {
  Stethoscope,
  Scissors,
  HeartPulse,
  Brain,
  Bone,
  Baby,
  UserPlus,
  Eye,
  Sparkles,
  Smile,
  Activity,
  Droplet,
  Wind,
  Cross,
  Scan,
  Heart,
  Dumbbell,
  Search,
  ArrowRight,
  MapPin,
  CheckCircle2,
  CalendarCheck
} from 'lucide-react';
import { DEPARTMENTS } from '../data/hospitalData';
import { Department } from '../types';

interface DepartmentsProps {
  onOpenBooking: (dept?: string) => void;
}

export const DepartmentsSection: React.FC<DepartmentsProps> = ({ onOpenBooking }) => {
  const [filterQuery, setFilterQuery] = useState('');
  const [selectedDeptModal, setSelectedDeptModal] = useState<Department | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope':
        return <Stethoscope className="w-5 h-5" />;
      case 'Scissors':
        return <Scissors className="w-5 h-5" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5" />;
      case 'Brain':
        return <Brain className="w-5 h-5" />;
      case 'Bone':
        return <Bone className="w-5 h-5" />;
      case 'Baby':
        return <Baby className="w-5 h-5" />;
      case 'UserPlus':
        return <UserPlus className="w-5 h-5" />;
      case 'Eye':
        return <Eye className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Smile':
        return <Smile className="w-5 h-5" />;
      case 'Activity':
        return <Activity className="w-5 h-5" />;
      case 'Droplet':
        return <Droplet className="w-5 h-5" />;
      case 'Wind':
        return <Wind className="w-5 h-5" />;
      case 'Cross':
        return <Cross className="w-5 h-5" />;
      case 'Scan':
        return <Scan className="w-5 h-5" />;
      case 'Heart':
        return <Heart className="w-5 h-5" />;
      case 'Dumbbell':
        return <Dumbbell className="w-5 h-5" />;
      default:
        return <Stethoscope className="w-5 h-5" />;
    }
  };

  const filteredDepts = DEPARTMENTS.filter(
    (dept) =>
      dept.name.toLowerCase().includes(filterQuery.toLowerCase()) ||
      dept.shortDesc.toLowerCase().includes(filterQuery.toLowerCase()) ||
      dept.headDoctor.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <section id="departments" className="py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <span>Center of Excellence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              18 Speciality Medical Departments
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-xl">
              Equipped with dedicated outpatient clinics, specialized operation theatres, diagnostic facilities, and senior clinical heads.
            </p>
          </div>

          {/* Search Filter */}
          <div className="w-full md:w-80 relative">
            <input
              type="text"
              placeholder="Search department or specialty..."
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
              id="department-search-input"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          </div>
        </div>

        {/* 18 Department Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDepts.map((dept) => (
            <div
              key={dept.id}
              className="group bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl overflow-hidden hover:shadow-xl hover:border-teal-500/50 transition-all duration-300 flex flex-col justify-between"
              id={`dept-card-${dept.id}`}
            >
              <div>
                {/* Department Image Header */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={dept.image}
                    alt={dept.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                    <span className="text-xs font-semibold bg-teal-600/90 backdrop-blur-md px-2.5 py-1 rounded-lg">
                      {dept.headDoctor}
                    </span>
                    {dept.bedCount && (
                      <span className="text-[11px] font-medium bg-slate-900/80 backdrop-blur-md px-2 py-0.5 rounded text-slate-300">
                        {dept.bedCount} Beds
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
                      {getIcon(dept.iconName)}
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {dept.name}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 mb-3 leading-relaxed">
                    {dept.shortDesc}
                  </p>

                  {/* Treatments list preview */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
                    {dept.treatments.slice(0, 2).map((tr, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                        <span className="truncate">{tr}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="p-5 pt-0 flex items-center justify-between gap-2 border-t border-slate-100 dark:border-slate-800/80 mt-2">
                <button
                  onClick={() => setSelectedDeptModal(dept)}
                  className="text-xs font-bold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 flex items-center gap-1 py-2"
                  id={`dept-learn-more-${dept.id}`}
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenBooking(dept.id)}
                  className="bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs px-3 py-1.5 rounded-lg shadow-sm transition-colors flex items-center gap-1"
                  id={`dept-book-btn-${dept.id}`}
                >
                  <CalendarCheck className="w-3.5 h-3.5" />
                  <span>Book</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredDepts.length === 0 && (
          <div className="text-center py-12 text-slate-500 dark:text-slate-400">
            No department found matching &quot;{filterQuery}&quot;. Please check spelling or search for another speciality.
          </div>
        )}
      </div>

      {/* Department Detail Modal */}
      {selectedDeptModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 max-w-2xl w-full text-slate-900 dark:text-white space-y-5 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                  {getIcon(selectedDeptModal.iconName)}
                </div>
                <div>
                  <h3 className="font-extrabold text-xl">{selectedDeptModal.name}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-teal-500" />
                    <span>Location: {selectedDeptModal.location}</span>
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedDeptModal(null)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-white text-lg p-1"
                id="close-dept-modal-btn"
              >
                ✕
              </button>
            </div>

            <div className="rounded-2xl overflow-hidden h-48">
              <img
                src={selectedDeptModal.image}
                alt={selectedDeptModal.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div>
              <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300 mb-1">Department Overview</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {selectedDeptModal.fullDesc}
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/80 p-4 rounded-xl space-y-2">
              <div className="font-bold text-sm text-teal-600 dark:text-teal-400">
                Department Head: {selectedDeptModal.headDoctor}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Supervising senior consultants, resident medical officers, and specialized nursing team.
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300 mb-2">Key Treatments & Procedures</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedDeptModal.treatments.map((tr, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-medium bg-slate-100 dark:bg-slate-800 p-2.5 rounded-lg text-slate-800 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                    <span>{tr}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={() => setSelectedDeptModal(null)}
                className="px-4 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl"
              >
                Close
              </button>

              <button
                onClick={() => {
                  const deptId = selectedDeptModal.id;
                  setSelectedDeptModal(null);
                  onOpenBooking(deptId);
                }}
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm shadow-md flex items-center gap-2"
                id="modal-dept-book-appointment-btn"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Book Appointment in {selectedDeptModal.name}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
