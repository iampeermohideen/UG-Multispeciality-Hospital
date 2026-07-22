import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, ShieldAlert } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

export const ContactSection: React.FC = () => {
  const whatsappChatUrl = `https://wa.me/${HOSPITAL_INFO.whatsapp}?text=${encodeURIComponent(
    'Hello UG Hospital, I have an inquiry regarding OPD doctor consultation / services.'
  )}`;

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <span>Location & Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Contact UG Multispeciality Hospital
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300 text-base">
            We are strategically situated in City Central with quick access ramps for emergency ambulances.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <h3 className="font-extrabold text-xl text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3">
                Hospital Contact Info
              </h3>

              <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider text-teal-600">Address</div>
                    <div className="text-sm font-medium leading-relaxed">{HOSPITAL_INFO.address}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider text-rose-600">24/7 Emergency Helpline</div>
                    <a href={`tel:${HOSPITAL_INFO.emergencyPhone}`} className="text-sm font-extrabold text-rose-600 dark:text-rose-400 hover:underline">
                      {HOSPITAL_INFO.emergencyPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider text-blue-600">OPD & Reception Line</div>
                    <a href={`tel:${HOSPITAL_INFO.phone}`} className="text-sm font-bold text-slate-800 dark:text-slate-200 hover:underline">
                      {HOSPITAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider text-cyan-600">Email Inquiry</div>
                    <a href={`mailto:${HOSPITAL_INFO.email}`} className="text-sm font-medium text-slate-800 dark:text-slate-200 hover:underline">
                      {HOSPITAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider text-amber-600">Operating Hours</div>
                    <div className="text-sm font-medium">{HOSPITAL_INFO.workingHours}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Trigger */}
            <a
              href={whatsappChatUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm"
              id="contact-whatsapp-btn"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Chat With Hospital Representative on WhatsApp</span>
            </a>
          </div>

          {/* Embedded Google Map Frame */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl overflow-hidden shadow-xl min-h-[420px] relative flex flex-col">
            <div className="p-4 bg-slate-100 dark:bg-slate-800 flex items-center justify-between border-b border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-teal-500" />
                <span>Live Location Map: UG Hospital Campus</span>
              </span>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:underline"
              >
                Open in Google Maps ↗
              </a>
            </div>

            <iframe
              title="UG Multispeciality Hospital Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.00169213727!2d77.59456271482205!3d12.971598790855877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8380f5385e01086!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1689000000000!5m2!1sen!2sin"
              className="w-full h-full min-h-[380px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
