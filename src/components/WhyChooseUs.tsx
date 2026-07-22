import React from 'react';
import {
  Ambulance,
  UserCheck,
  Cpu,
  ShieldCheck,
  Activity,
  Microscope,
  FlaskConical,
  HeartHandshake,
  CheckCircle2
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/hospitalData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Ambulance':
        return <Ambulance className="w-6 h-6" />;
      case 'UserCheck':
        return <UserCheck className="w-6 h-6" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6" />;
      case 'Activity':
        return <Activity className="w-6 h-6" />;
      case 'Microscope':
        return <Microscope className="w-6 h-6" />;
      case 'FlaskConical':
        return <FlaskConical className="w-6 h-6" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6" />;
      default:
        return <CheckCircle2 className="w-6 h-6" />;
    }
  };

  return (
    <section className="py-16 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <span>Why Choose UG Hospital</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Setting the Benchmark in Patient-First Clinical Excellence
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300 text-base">
            We combine world-class medical expertise, cutting-edge surgical technology, and compassionate care to ensure the best clinical outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.id}
              className="group bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 rounded-2xl p-6 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:border-teal-500/50 transition-all duration-300"
              id={`why-choose-card-${item.id}`}
            >
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors shadow-sm">
                {getIcon(item.icon)}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
