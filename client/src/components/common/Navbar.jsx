import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Wrench, 
  Phone, 
  Menu, 
  X, 
  Clock, 
  MapPin, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { BUSINESS_INFO, isStoreCurrentlyOpen } from '../../constants/businessInfo';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isOpen = isStoreCurrentlyOpen();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Why Choose Us', path: '/why-us' },
    { name: 'Contact & Enquiry', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all">
      {/* Top micro-bar for local business trust */}
      <div className="bg-navy-900 text-slate-300 text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-slate-300">
              <MapPin className="w-3.5 h-3.5 mr-1.5 text-amber-500" />
              Sinhgad Road, Vadgaon Budruk, Pune - 411051
            </span>
            <span className="flex items-center text-slate-300">
              <Clock className="w-3.5 h-3.5 mr-1.5 text-amber-500" />
              Mon - Sun: 10:00 AM - 7:00 PM
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1.5">
              <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`}></span>
              <span className={isOpen ? 'text-emerald-400 font-medium' : 'text-amber-300'}>
                {isOpen ? 'Store Open Now' : 'Closed • Opens 10:00 AM'}
              </span>
            </div>
            <span className="text-slate-500">|</span>
            <a 
              href={`tel:${BUSINESS_INFO.phoneRaw}`} 
              className="text-white hover:text-amber-400 font-semibold transition-colors flex items-center"
            >
              <Phone className="w-3 h-3 mr-1 text-royal-500" />
              {BUSINESS_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link 
          to="/" 
          className="flex items-center space-x-3 group"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="w-11 h-11 rounded-xl bg-navy-900 flex items-center justify-center text-white shadow-md shadow-navy-900/10 group-hover:bg-royal-600 transition-colors">
            <Wrench className="w-6 h-6 text-amber-500" />
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-navy-900">
                DELUXE
              </span>
              <span className="text-xl sm:text-2xl font-light tracking-tight text-royal-600">
                SOLUTION
              </span>
            </div>
            <p className="text-[10px] sm:text-[11px] font-medium tracking-wide text-slate-500 uppercase">
              Tech & Equipment Repairs • Pune
            </p>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-all ${
                isActive(link.path)
                  ? 'text-royal-600 bg-royal-50'
                  : 'text-slate-700 hover:text-navy-900 hover:bg-slate-100/70'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden sm:flex items-center space-x-3">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="flex items-center space-x-2 text-slate-700 hover:text-navy-900 px-3 py-2 text-sm font-semibold rounded-lg hover:bg-slate-100 transition-colors"
            title="Call Deluxe Solution"
          >
            <Phone className="w-4 h-4 text-royal-600" />
            <span className="hidden xl:inline">{BUSINESS_INFO.phoneDisplay}</span>
            <span className="xl:hidden">Call Now</span>
          </a>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-bold text-navy-900 bg-amber-500 hover:bg-amber-400 rounded-lg shadow-sm hover:shadow transition-all transform active:scale-95"
          >
            <span>Book a Repair</span>
            <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center space-x-2">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            aria-label="Direct Phone Call"
            className="p-2 text-royal-600 bg-royal-50 rounded-lg hover:bg-royal-100"
          >
            <Phone className="w-5 h-5" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:text-navy-900 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white shadow-xl animate-fadeIn">
          <div className="px-4 pt-3 pb-6 space-y-1">
            <div className="px-3 py-2 bg-slate-50 rounded-lg mb-3 flex items-center justify-between text-xs text-slate-600">
              <span className="flex items-center">
                <MapPin className="w-3.5 h-3.5 mr-1 text-royal-600" />
                Sinhgad Road, Pune
              </span>
              <span className={isOpen ? 'text-emerald-600 font-bold' : 'text-amber-600 font-bold'}>
                {isOpen ? '● Open Now' : '○ Closed (Opens 10 AM)'}
              </span>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-royal-50 text-royal-600 font-bold'
                    : 'text-slate-800 hover:bg-slate-100'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 border-t border-slate-100 space-y-2">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center px-4 py-3 text-sm font-bold text-navy-900 bg-amber-500 hover:bg-amber-400 rounded-lg shadow-sm"
              >
                Book a Repair Online
              </Link>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center px-4 py-3 text-sm font-semibold text-royal-700 bg-royal-50 hover:bg-royal-100 rounded-lg"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call +91 98900 17975
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
