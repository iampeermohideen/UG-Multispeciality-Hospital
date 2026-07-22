import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  Stethoscope,
  MessageSquare,
  CheckCircle2,
  CalendarCheck,
  Download,
  Share2,
  Sparkles,
  ShieldCheck,
  X
} from 'lucide-react';
import { DEPARTMENTS, DOCTORS, HOSPITAL_INFO } from '../data/hospitalData';
import { AppointmentFormData } from '../types';

interface AppointmentSectionProps {
  initialDepartmentId?: string;
  initialDoctorId?: string;
  initialPackageTitle?: string;
  isOpenAsModal?: boolean;
  onCloseModal?: () => void;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({
  initialDepartmentId = '',
  initialDoctorId = '',
  initialPackageTitle = '',
  isOpenAsModal = false,
  onCloseModal
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    patientName: '',
    phone: '',
    email: '',
    department: initialDepartmentId,
    doctor: initialDoctorId,
    preferredDate: '',
    preferredTime: '10:00 AM',
    symptoms: initialPackageTitle ? `Selected Package: ${initialPackageTitle}` : '',
    isFirstVisit: true
  });

  const [bookingConfirmedToken, setBookingConfirmedToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update when initial props change
  useEffect(() => {
    if (initialDepartmentId) {
      setFormData((prev) => ({ ...prev, department: initialDepartmentId }));
    }
    if (initialDoctorId) {
      setFormData((prev) => ({ ...prev, doctor: initialDoctorId }));
    }
    if (initialPackageTitle) {
      setFormData((prev) => ({
        ...prev,
        symptoms: `Selected Health Package: ${initialPackageTitle}`
      }));
    }
  }, [initialDepartmentId, initialDoctorId, initialPackageTitle]);

  // Available doctors filtered by department
  const availableDoctors = formData.department
    ? DOCTORS.filter((doc) => doc.departmentId === formData.department)
    : DOCTORS;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.patientName || !formData.phone || !formData.preferredDate) {
      alert('Please fill in required fields: Patient Name, Phone Number, and Preferred Date.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const generatedToken = `UGH-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      setBookingConfirmedToken(generatedToken);
    }, 800);
  };

  const selectedDeptObj = DEPARTMENTS.find((d) => d.id === formData.department);
  const selectedDocObj = DOCTORS.find((d) => d.id === formData.doctor);

  // Download .ics calendar event
  const downloadIcsCalendar = () => {
    const title = `Appointment: UG Hospital (${selectedDocObj ? selectedDocObj.name : 'Consultation'})`;
    const details = `Patient: ${formData.patientName}, Phone: ${formData.phone}, Token: ${bookingConfirmedToken}`;
    const icsContent = `BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//UG Hospital//Appointment//EN\nBEGIN:VEVENT\nSUMMARY:${title}\nDESCRIPTION:${details}\nLOCATION:${HOSPITAL_INFO.address}\nEND:VEVENT\nEND:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `UG_Hospital_Appointment_${bookingConfirmedToken}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // WhatsApp confirmation trigger
  const whatsappUrl = `https://wa.me/${HOSPITAL_INFO.whatsapp}?text=${encodeURIComponent(
    `Hello UG Hospital, I booked an appointment. Token: ${bookingConfirmedToken}, Name: ${formData.patientName}, Date: ${formData.preferredDate}, Doctor: ${selectedDocObj?.name || 'Any Consultant'}`
  )}`;

  const content = (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <span>Instant OPD & Specialist Booking</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Book Your Doctor Consultation in Seconds
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Choose your preferred department, doctor, and date. You will receive an instant token confirmation with calendar reminder and SMS notification.
          </p>

          <div className="space-y-4 pt-2">
            <div className="flex items-start gap-3 bg-slate-50 dark:bg-slate-800/80 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/80">
              <ShieldCheck className="w-6 h-6 text-teal-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">Zero Booking Surcharge</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">Pay directly at the hospital reception desk on the day of consultation.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-slate-50 dark:bg-slate-800/80 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/80">
              <CalendarCheck className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">Priority Token Allotment</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">Online bookings receive priority queue status at the doctor clinic.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column Form Card */}
        <div className="lg:col-span-7">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
            {isOpenAsModal && (
              <button
                onClick={onCloseModal}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 dark:hover:text-white p-1"
                id="close-appointment-modal-x-btn"
              >
                <X className="w-6 h-6" />
              </button>
            )}

            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <CalendarCheck className="w-6 h-6 text-teal-500" />
              <span>Outpatient Appointment Form</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              Please fill in patient details to confirm slot reservation.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Patient Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Patient Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.patientName}
                      onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                      id="appointment-patient-name-input"
                    />
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Mobile Phone Number *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                      id="appointment-phone-input"
                    />
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                      id="appointment-email-input"
                    />
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  </div>
                </div>

                {/* Department */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Department / Specialty
                  </label>
                  <select
                    value={formData.department}
                    onChange={(e) =>
                      setFormData({ ...formData, department: e.target.value, doctor: '' })
                    }
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl px-3.5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                    id="appointment-department-select"
                  >
                    <option value="">-- Any / General OPD --</option>
                    {DEPARTMENTS.map((dept) => (
                      <option key={dept.id} value={dept.id}>
                        {dept.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Doctor */}
                <div className="sm:col-span-1">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Preferred Doctor
                  </label>
                  <select
                    value={formData.doctor}
                    onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl px-3.5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                    id="appointment-doctor-select"
                  >
                    <option value="">-- Next Available Doctor --</option>
                    {availableDoctors.map((doc) => (
                      <option key={doc.id} value={doc.id}>
                        {doc.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl px-3.5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                    id="appointment-date-input"
                  />
                </div>

                {/* Time Slot */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Time Slot
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl px-3.5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                    id="appointment-time-select"
                  >
                    <option value="09:00 AM">09:00 AM - 10:00 AM</option>
                    <option value="10:00 AM">10:00 AM - 11:00 AM</option>
                    <option value="11:00 AM">11:00 AM - 12:00 PM</option>
                    <option value="02:00 PM">02:00 PM - 03:00 PM</option>
                    <option value="04:00 PM">04:00 PM - 05:00 PM</option>
                    <option value="06:00 PM">06:00 PM - 07:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Symptoms / Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Symptoms / Medical Notes
                </label>
                <div className="relative">
                  <textarea
                    rows={2}
                    placeholder="Briefly describe symptoms, health concerns, or package preference..."
                    value={formData.symptoms}
                    onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                    id="appointment-symptoms-textarea"
                  />
                  <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="firstVisitCheck"
                  checked={formData.isFirstVisit}
                  onChange={(e) => setFormData({ ...formData, isFirstVisit: e.target.checked })}
                  className="rounded text-teal-600 focus:ring-teal-500 w-4 h-4"
                />
                <label htmlFor="firstVisitCheck" className="text-xs text-slate-600 dark:text-slate-300 cursor-pointer">
                  This is a first-time consultation at UG Hospital.
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-teal-500 via-teal-600 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-bold py-4 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2 text-base mt-2"
                id="appointment-submit-btn"
              >
                {isSubmitting ? (
                  <span>Generating Token...</span>
                ) : (
                  <>
                    <CalendarCheck className="w-5 h-5" />
                    <span>Confirm & Get Booking Token</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Confirmation Dialog Modal */}
      {bookingConfirmedToken && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 max-w-lg w-full text-slate-900 dark:text-white space-y-6 shadow-2xl text-center">
            <div className="w-16 h-16 rounded-full bg-teal-500 text-white flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">Appointment Confirmed</span>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
                Token: {bookingConfirmedToken}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Show this token at the UG Hospital reception desk upon arrival.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl text-left text-xs space-y-2 border border-slate-200/80 dark:border-slate-700/80">
              <div className="flex justify-between">
                <span className="text-slate-500">Patient:</span>
                <span className="font-bold text-slate-900 dark:text-white">{formData.patientName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Department:</span>
                <span className="font-semibold text-teal-600 dark:text-teal-400">
                  {selectedDeptObj ? selectedDeptObj.name : 'General OPD'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Doctor:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  {selectedDocObj ? selectedDocObj.name : 'Duty Consultant'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Date & Time:</span>
                <span className="font-bold text-slate-900 dark:text-white">
                  {formData.preferredDate} ({formData.preferredTime})
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={downloadIcsCalendar}
                className="flex-1 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors"
                id="appointment-download-ics-btn"
              >
                <Download className="w-4 h-4 text-teal-500" />
                <span>Save Calendar (.ics)</span>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors shadow-md"
                id="appointment-whatsapp-share-btn"
              >
                <Share2 className="w-4 h-4" />
                <span>Send to WhatsApp</span>
              </a>
            </div>

            <button
              onClick={() => {
                setBookingConfirmedToken(null);
                if (onCloseModal) onCloseModal();
              }}
              className="w-full text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 py-2"
            >
              Done & Close
            </button>
          </div>
        </div>
      )}
    </div>
  );

  if (isOpenAsModal) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
        <div className="w-full max-w-5xl my-8">
          {content}
        </div>
      </div>
    );
  }

  return (
    <section id="appointment" className="py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      {content}
    </section>
  );
};
