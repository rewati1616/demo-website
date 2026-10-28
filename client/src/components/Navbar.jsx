import React, { useState, useEffect } from 'react';
import { 
  Wrench, 
  Phone, 
  Menu, 
  X, 
  Clock, 
  MapPin, 
  ChevronRight,
  MessageCircle,
  Sparkles
} from 'lucide-react';
import { BUSINESS_INFO, isStoreCurrentlyOpen } from '../constants/businessInfo';

export default function Navbar({ onSelectCategory }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const isOpen = isStoreCurrentlyOpen();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['home', 'services', 'diagnostics', 'why-us', 'about', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Fault Guide', id: 'diagnostics' },
    { name: 'Why Us', id: 'why-us' },
    { name: 'About', id: 'about' },
    { name: 'Contact & Enquiry', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-2.5' 
        : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-3.5'
    }`}>
      {/* Top Announcement Bar (Subtle) */}
      <div className="hidden lg:block bg-navy-950 text-slate-300 text-xs py-1.5 px-4 mb-2 -mt-3.5 border-b border-navy-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center">
              <MapPin className="w-3.5 h-3.5 mr-1.5 text-amber-500" />
              Sinhgad Road, Vadgaon Budruk, Pune - 411051
            </span>
            <span className="flex items-center">
              <Clock className="w-3.5 h-3.5 mr-1.5 text-amber-500" />
              10:00 AM – 7:00 PM (Monday – Sunday)
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1.5">
              <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`}></span>
              <span className={isOpen ? 'text-emerald-400 font-semibold' : 'text-amber-300 font-semibold'}>
                {isOpen ? 'Store Open Now' : 'Closed • Opens 10 AM'}
              </span>
            </div>
            <span className="text-slate-600">|</span>
            <a 
              href={`tel:${BUSINESS_INFO.phoneRaw}`} 
              className="text-white hover:text-amber-400 font-bold transition-colors flex items-center"
            >
              <Phone className="w-3 h-3 mr-1 text-royal-400" />
              {BUSINESS_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button 
            onClick={() => scrollTo('home')}
            className="flex items-center space-x-3 text-left group focus:outline-none"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-navy-900 flex items-center justify-center text-white shadow-md shadow-navy-900/15 group-hover:bg-royal-600 transition-all transform group-hover:scale-105">
              <Wrench className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" />
            </div>
            <div>
              <div className="flex items-center space-x-1">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-navy-900">
                  DELUXE
                </span>
                <span className="text-xl sm:text-2xl font-medium tracking-tight text-royal-600">
                  SOLUTION
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] font-medium tracking-wider text-slate-500 uppercase">
                Tech & Equipment Repairs • Pune
              </p>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-1 bg-slate-100/70 p-1 rounded-xl border border-slate-200/60">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  activeSection === item.id
                    ? 'bg-white text-royal-600 shadow-xs'
                    : 'text-slate-600 hover:text-navy-900 hover:bg-white/50'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center space-x-1.5 text-slate-700 hover:text-navy-900 px-3 py-2 text-xs font-bold rounded-xl hover:bg-slate-100 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-royal-600" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>

            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center px-4 py-2 text-xs font-bold text-navy-950 bg-amber-500 hover:bg-amber-400 rounded-xl shadow-sm hover:shadow transition-all transform active:scale-95"
            >
              <span>Book a Repair</span>
              <ChevronRight className="w-3.5 h-3.5 ml-1" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              aria-label="Direct Call"
              className="p-2 text-royal-600 bg-royal-50 rounded-lg hover:bg-royal-100"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-navy-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl space-y-2 mt-2">
          <div className="p-3 bg-slate-50 rounded-xl flex items-center justify-between text-xs text-slate-600 mb-2">
            <span className="flex items-center">
              <MapPin className="w-3.5 h-3.5 mr-1 text-royal-600" />
              Sinhgad Road, Pune
            </span>
            <span className={isOpen ? 'text-emerald-600 font-bold' : 'text-amber-600 font-bold'}>
              {isOpen ? '● Open (10 AM - 7 PM)' : '○ Closed (Opens 10 AM)'}
            </span>
          </div>

          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                activeSection === item.id
                  ? 'bg-royal-50 text-royal-600 font-bold'
                  : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              {item.name}
            </button>
          ))}

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <button
              onClick={() => scrollTo('contact')}
              className="w-full flex items-center justify-center py-3 bg-amber-500 hover:bg-amber-400 text-navy-950 rounded-xl text-xs font-bold shadow-xs"
            >
              Book a Repair Online
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full flex items-center justify-center py-2.5 bg-slate-100 text-slate-800 rounded-xl text-xs font-bold"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-royal-600" />
              Call +91 98900 17975
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
