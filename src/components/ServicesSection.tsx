import React, { useState } from 'react';
import {
  ClipboardCheck,
  Siren,
  Ambulance,
  FlaskConical,
  Pill,
  Droplet,
  Activity,
  Scissors,
  Syringe,
  Home,
  Video,
  FileText,
  Clock,
  CheckCircle2,
  PhoneCall
} from 'lucide-react';
import { SERVICES, HOSPITAL_INFO } from '../data/hospitalData';
import { Service } from '../types';

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ClipboardCheck':
        return <ClipboardCheck className="w-6 h-6" />;
      case 'Siren':
        return <Siren className="w-6 h-6" />;
      case 'Ambulance':
        return <Ambulance className="w-6 h-6" />;
      case 'FlaskConical':
        return <FlaskConical className="w-6 h-6" />;
      case 'Pill':
        return <Pill className="w-6 h-6" />;
      case 'Droplet':
        return <Droplet className="w-6 h-6" />;
      case 'Activity':
        return <Activity className="w-6 h-6" />;
      case 'Scissors':
        return <Scissors className="w-6 h-6" />;
      case 'Syringe':
        return <Syringe className="w-6 h-6" />;
      case 'Home':
        return <Home className="w-6 h-6" />;
      case 'Video':
        return <Video className="w-6 h-6" />;
      case 'FileText':
        return <FileText className="w-6 h-6" />;
      default:
        return <Activity className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <span>Integrated Healthcare Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            12 Comprehensive Medical Services
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300 text-base">
            From 24/7 cardiac ambulance response to telemedicine consultations and cashless insurance claims.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group cursor-pointer bg-slate-50 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/80 rounded-3xl p-6 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:border-teal-500/50 transition-all duration-300 flex flex-col justify-between"
              id={`service-card-${service.id}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors shadow-sm">
                    {getIcon(service.iconName)}
                  </div>

                  {service.available24x7 ? (
                    <span className="bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 font-bold text-[11px] px-2.5 py-1 rounded-full flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      24/7 Available
                    </span>
                  ) : (
                    <span className="bg-blue-500/10 border border-blue-500/30 text-blue-600 dark:text-blue-400 font-bold text-[11px] px-2.5 py-1 rounded-full">
                      OPD & Scheduled
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors mb-2">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Features bullet list */}
                <div className="space-y-1.5 pt-3 border-t border-slate-200/60 dark:border-slate-700/60">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 text-xs font-bold text-teal-600 dark:text-teal-400 group-hover:underline flex items-center gap-1">
                <span>View Service Details & Contacts</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 max-w-xl w-full text-slate-900 dark:text-white space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                  {getIcon(selectedService.iconName)}
                </div>
                <div>
                  <h3 className="font-extrabold text-xl">{selectedService.title}</h3>
                  <span className="text-xs font-semibold text-teal-600 dark:text-teal-400">UG Multispeciality Hospital Service</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-white text-lg p-1"
                id="close-service-modal-btn"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {selectedService.description}
            </p>

            <div>
              <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300 mb-2">Key Service Highlights</h4>
              <div className="space-y-2">
                {selectedService.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-medium bg-slate-50 dark:bg-slate-800 p-2.5 rounded-xl text-slate-800 dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800/80 rounded-2xl flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-teal-800 dark:text-teal-300">Need Immediate Service Assistance?</div>
                <div className="text-xs text-slate-600 dark:text-slate-300">Call our 24/7 Hospital Control Room</div>
              </div>
              <a
                href={`tel:${HOSPITAL_INFO.phone}`}
                className="bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs px-3.5 py-2 rounded-xl flex items-center gap-1.5 shadow-sm"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call Desk</span>
              </a>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setSelectedService(null)}
                className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 font-semibold px-5 py-2.5 rounded-xl text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
