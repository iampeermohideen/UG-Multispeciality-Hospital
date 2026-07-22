import React, { useState, useEffect } from 'react';
import {
  Phone,
  MapPin,
  Mail,
  Search,
  Sun,
  Moon,
  Menu,
  X,
  Clock,
  ChevronRight,
  ShieldAlert,
  CalendarCheck
} from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenSearch: () => void;
  onOpenBooking: (dept?: string, doctor?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  darkMode,
  setDarkMode,
  onOpenSearch,
  onOpenBooking
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Departments', href: '#departments' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Health Packages', href: '#packages' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Blog', href: '#blog' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs sm:text-sm py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href={`tel:${HOSPITAL_INFO.emergencyPhone}`}
              className="flex items-center gap-1.5 text-rose-400 hover:text-rose-300 font-bold tracking-wide transition-colors"
              id="topbar-emergency-link"
            >
              <Phone className="w-3.5 h-3.5 animate-pulse" />
              <span>Emergency: {HOSPITAL_INFO.emergencyPhone}</span>
            </a>
            <div className="hidden md:flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-teal-400" />
              <span className="truncate max-w-xs">{HOSPITAL_INFO.address.split(',')[0]}</span>
            </div>
            <div className="hidden lg:flex items-center gap-1.5 text-slate-300">
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>{HOSPITAL_INFO.email}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 ml-auto sm:ml-0">
            {/* Quick Search trigger */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white px-2.5 py-1 rounded-md text-xs transition-colors border border-slate-700"
              title="Search site (Ctrl+K)"
              id="topbar-search-button"
            >
              <Search className="w-3.5 h-3.5 text-teal-400" />
              <span className="hidden sm:inline">Search...</span>
              <kbd className="hidden md:inline bg-slate-900 px-1 rounded text-[10px] text-slate-400">⌘K</kbd>
            </button>

            {/* Dark mode toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-1.5 bg-slate-800 hover:bg-slate-700 text-amber-400 hover:text-amber-300 rounded-md transition-colors border border-slate-700"
              aria-label="Toggle dark mode"
              id="darkmode-toggle-button"
            >
              {darkMode ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-blue-300" />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'glass-panel shadow-md py-3'
            : 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md py-4 border-b border-slate-100 dark:border-slate-800'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group" id="hospital-brand-logo">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-blue-700 via-teal-600 to-cyan-500 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <span className="font-extrabold text-xl tracking-tight">UG</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg sm:text-xl leading-tight text-slate-900 dark:text-white tracking-tight group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                UG Multispeciality
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
                Hospital & Research Centre
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${HOSPITAL_INFO.emergencyPhone}`}
              className="flex items-center gap-1.5 bg-rose-600 hover:bg-rose-700 text-white font-semibold px-3.5 py-2 rounded-xl text-xs sm:text-sm shadow-sm transition-all animate-pulse-subtle"
              id="header-emergency-btn"
            >
              <ShieldAlert className="w-4 h-4" />
              <span>Emergency</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold px-4 py-2 rounded-xl text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
              id="header-appointment-btn"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Toggle mobile navigation menu"
              id="mobile-menu-toggle-btn"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-teal-600" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col gap-1 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 text-base font-medium text-slate-800 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-50 dark:hover:bg-slate-800/80 rounded-lg transition-colors flex items-center justify-between"
                  id={`mobile-nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-2.5 pt-2 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold py-3 rounded-xl shadow-md text-sm"
                id="mobile-drawer-appointment-btn"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Book Doctor Appointment</span>
              </button>

              <a
                href={`tel:${HOSPITAL_INFO.emergencyPhone}`}
                className="w-full flex items-center justify-center gap-2 bg-rose-600 text-white font-semibold py-3 rounded-xl shadow-md text-sm"
                id="mobile-drawer-emergency-btn"
              >
                <ShieldAlert className="w-4 h-4" />
                <span>Call 24/7 Emergency ({HOSPITAL_INFO.emergencyPhone})</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
