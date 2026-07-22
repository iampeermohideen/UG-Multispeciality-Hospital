import React, { useState } from 'react';
import {
  Award,
  CheckCircle,
  Eye,
  Target,
  Heart,
  ShieldCheck,
  Building,
  Users,
  Activity,
  Play
} from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'mission' | 'vision' | 'values'>('overview');
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image Stack & Video Trigger */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=80"
                alt="UG Multispeciality Hospital Interior Suite"
                className="w-full h-[400px] sm:h-[480px] object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Floating Video Tour Play Overlay */}
              <div className="absolute inset-0 bg-slate-950/30 flex items-center justify-center">
                <button
                  onClick={() => setShowVideoModal(true)}
                  className="w-20 h-20 rounded-full bg-teal-500 hover:bg-teal-600 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group"
                  aria-label="Play virtual hospital tour video"
                  id="about-play-video-btn"
                >
                  <Play className="w-8 h-8 fill-current ml-1 group-hover:scale-110 transition-transform" />
                </button>
              </div>

              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 bg-slate-900/90 backdrop-blur-md text-white p-4 rounded-2xl border border-slate-700/80 shadow-xl max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-sm">NABH & JCI Certified</div>
                    <div className="text-xs text-slate-300">Highest National & International Safety Standards</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative background shape */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-tr from-blue-600/20 to-teal-500/20 rounded-3xl -z-0 blur-xl" />
          </div>

          {/* Right Column: Text, Story & Tabs */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <span>About UG Multispeciality Hospital</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              25 Years of Healing Hearts, Saving Lives & Building Trust
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              Established in 2001, UG Multispeciality Hospital has grown into one of the region’s premier healthcare institutions. Spread across a state-of-the-art campus with 300+ beds, 50 critical care units, and 18 specialized departments, we blend clinical expertise with empathetic patient care.
            </p>

            {/* Tabs for Mission, Vision, Values, Overview */}
            <div className="flex border-b border-slate-200 dark:border-slate-800 gap-2">
              <button
                onClick={() => setActiveTab('overview')}
                className={`pb-3 px-3 text-sm font-bold border-b-2 transition-colors ${
                  activeTab === 'overview'
                    ? 'border-teal-500 text-teal-600 dark:text-teal-400'
                    : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
                id="about-tab-overview"
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('mission')}
                className={`pb-3 px-3 text-sm font-bold border-b-2 transition-colors ${
                  activeTab === 'mission'
                    ? 'border-teal-500 text-teal-600 dark:text-teal-400'
                    : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
                id="about-tab-mission"
              >
                Mission
              </button>
              <button
                onClick={() => setActiveTab('vision')}
                className={`pb-3 px-3 text-sm font-bold border-b-2 transition-colors ${
                  activeTab === 'vision'
                    ? 'border-teal-500 text-teal-600 dark:text-teal-400'
                    : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
                id="about-tab-vision"
              >
                Vision
              </button>
              <button
                onClick={() => setActiveTab('values')}
                className={`pb-3 px-3 text-sm font-bold border-b-2 transition-colors ${
                  activeTab === 'values'
                    ? 'border-teal-500 text-teal-600 dark:text-teal-400'
                    : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
                id="about-tab-values"
              >
                Core Values
              </button>
            </div>

            {/* Tab Content */}
            <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm text-sm text-slate-600 dark:text-slate-300">
              {activeTab === 'overview' && (
                <div className="space-y-3">
                  <p>
                    UG Hospital is equipped with flat-panel digital Cath Lab, 3T Silent MRI, 128-slice Cardiac CT, 6 modular OTs, and NABL accredited laboratories.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-slate-700 dark:text-slate-200 pt-1">
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500" /> 24/7 Level-1 Trauma Care</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500" /> Robotic & Computer Navigated Surgeries</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500" /> Level-3 NICU & Pediatric ICU</li>
                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500" /> 40+ Cashless TPA Partnerships</li>
                  </ul>
                </div>
              )}

              {activeTab === 'mission' && (
                <div className="flex items-start gap-3">
                  <Target className="w-8 h-8 text-teal-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">Our Mission</h4>
                    <p>To deliver world-class, affordable, and evidence-based healthcare with utmost compassion, ethical practice, and patient safety standard at every touchpoint.</p>
                  </div>
                </div>
              )}

              {activeTab === 'vision' && (
                <div className="flex items-start gap-3">
                  <Eye className="w-8 h-8 text-blue-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">Our Vision</h4>
                    <p>To be recognized as the most trusted healthcare institution globally, pioneering advanced medical research, minimally invasive therapies, and compassionate patient recovery.</p>
                  </div>
                </div>
              )}

              {activeTab === 'values' && (
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                    <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5"><Heart className="w-4 h-4 text-rose-500" /> Compassion</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Empathy and respect in every patient interaction.</div>
                  </div>
                  <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                    <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-teal-500" /> Integrity</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Transparent pricing & ethical treatment protocols.</div>
                  </div>
                </div>
              )}
            </div>

            {/* Statistics Banner */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 text-center">
                <div className="text-2xl font-extrabold text-teal-600 dark:text-teal-400">25+</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Years Experience</div>
              </div>
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 text-center">
                <div className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">100+</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Doctor Experts</div>
              </div>
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 text-center">
                <div className="text-2xl font-extrabold text-cyan-600 dark:text-cyan-400">300+</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Modern Beds</div>
              </div>
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 text-center">
                <div className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">100,000+</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Happy Patients</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Tour Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 max-w-3xl w-full text-white space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <Play className="w-5 h-5 text-teal-400" />
                <span>UG Multispeciality Hospital - Virtual Campus Tour</span>
              </h3>
              <button
                onClick={() => setShowVideoModal(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg"
                id="close-video-modal-btn"
              >
                ✕
              </button>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center border border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1200&q=80"
                alt="Hospital Tour Preview"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent">
                <div className="w-16 h-16 rounded-full bg-teal-500 text-white flex items-center justify-center mb-3 shadow-2xl">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
                <p className="font-bold text-lg text-white">Experience World-Class Healthcare Infrastructure</p>
                <p className="text-xs text-slate-300 mt-1 max-w-md">300 Beds • 50 ICU Suites • 6 Modular Surgical Theatres • Flat Panel Cath Lab • 3T MRI</p>
              </div>
            </div>
            <div className="flex justify-end pt-2">
              <button
                onClick={() => setShowVideoModal(false)}
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-5 py-2 rounded-xl text-sm font-semibold"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
