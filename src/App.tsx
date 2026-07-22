/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutSection } from './components/AboutSection';
import { DepartmentsSection } from './components/DepartmentsSection';
import { DoctorsSection } from './components/DoctorsSection';
import { ServicesSection } from './components/ServicesSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { HealthPackagesSection } from './components/HealthPackagesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GallerySection } from './components/GallerySection';
import { AppointmentSection } from './components/AppointmentSection';
import { EmergencyBanner } from './components/EmergencyBanner';
import { InsurancePartners } from './components/InsurancePartners';
import { BlogSection } from './components/BlogSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SpecialFeatures } from './components/SpecialFeatures';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [searchModalOpen, setSearchModalOpen] = useState<boolean>(false);
  const [selectedDoctorModalId, setSelectedDoctorModalId] = useState<string | null>(null);

  // Booking Modal State
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [bookingDeptId, setBookingDeptId] = useState<string>('');
  const [bookingDoctorId, setBookingDoctorId] = useState<string>('');
  const [bookingPkgTitle, setBookingPkgTitle] = useState<string>('');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleOpenBooking = (deptId?: string, doctorId?: string, pkgTitle?: string) => {
    if (deptId) setBookingDeptId(deptId);
    if (doctorId) setBookingDoctorId(doctorId);
    if (pkgTitle) setBookingPkgTitle(pkgTitle);

    // If on desktop and user requested booking, open modal or scroll to appointment section
    setIsBookingModalOpen(true);
  };

  const handleOpenDoctorModal = (docId: string) => {
    setSelectedDoctorModalId(docId);
    const docElem = document.getElementById('doctors');
    if (docElem) {
      docElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans transition-colors duration-300">
      {/* Header */}
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenBooking={handleOpenBooking}
      />

      {/* Hero Section */}
      <Hero
        onOpenBooking={handleOpenBooking}
        onOpenDoctorModal={handleOpenDoctorModal}
      />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* About Hospital */}
      <AboutSection />

      {/* Departments Section (18 Depts) */}
      <DepartmentsSection onOpenBooking={handleOpenBooking} />

      {/* Doctors Section (8 Doctors) */}
      <DoctorsSection
        onOpenBooking={handleOpenBooking}
        selectedDoctorModalId={selectedDoctorModalId}
        setSelectedDoctorModalId={setSelectedDoctorModalId}
      />

      {/* Medical Services (12 Services) */}
      <ServicesSection />

      {/* Facilities Showcase (12 Facilities) */}
      <FacilitiesSection />

      {/* Health Packages (6 Packages) */}
      <HealthPackagesSection onOpenBooking={handleOpenBooking} />

      {/* Patient Testimonials */}
      <TestimonialsSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Main Appointment Booking Form */}
      <AppointmentSection
        initialDepartmentId={bookingDeptId}
        initialDoctorId={bookingDoctorId}
        initialPackageTitle={bookingPkgTitle}
      />

      {/* Emergency CTA Banner */}
      <EmergencyBanner />

      {/* Insurance & TPA Partners */}
      <InsurancePartners />

      {/* Health Blog Section */}
      <BlogSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact & Google Maps */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Floating Buttons & Search Modal */}
      <SpecialFeatures
        onOpenBooking={handleOpenBooking}
        searchModalOpen={searchModalOpen}
        setSearchModalOpen={setSearchModalOpen}
        onOpenDoctorModal={handleOpenDoctorModal}
      />

      {/* Global Booking Modal */}
      {isBookingModalOpen && (
        <AppointmentSection
          initialDepartmentId={bookingDeptId}
          initialDoctorId={bookingDoctorId}
          initialPackageTitle={bookingPkgTitle}
          isOpenAsModal={true}
          onCloseModal={() => {
            setIsBookingModalOpen(false);
            setBookingDeptId('');
            setBookingDoctorId('');
            setBookingPkgTitle('');
          }}
        />
      )}
    </div>
  );
}
