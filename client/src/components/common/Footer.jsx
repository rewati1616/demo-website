import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Wrench, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ChevronRight, 
  ExternalLink,
  ShieldAlert,
  Lock
} from 'lucide-react';
import { BUSINESS_INFO } from '../../constants/businessInfo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-slate-300 border-t border-navy-800">
      {/* Upper Footer: Main columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-royal-600 flex items-center justify-center text-white">
                <Wrench className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <span className="text-xl font-black tracking-tight text-white">DELUXE</span>{' '}
                <span className="text-xl font-light text-royal-400">SOLUTION</span>
              </div>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed">
              Specialized technical repair and maintenance services for computers, laptops, CCTV security systems, printers, and currency counting machines on Sinhgad Road, Pune.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-navy-800 border border-navy-700 text-xs text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Transparent Quotes • Genuine Diagnostics</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 border-b border-navy-800 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white flex items-center group transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 mr-1 text-royal-500 group-hover:translate-x-0.5 transition-transform" />
                  Home Page
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white flex items-center group transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 mr-1 text-royal-500 group-hover:translate-x-0.5 transition-transform" />
                  All Repair Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white flex items-center group transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 mr-1 text-royal-500 group-hover:translate-x-0.5 transition-transform" />
                  About Our Center
                </Link>
              </li>
              <li>
                <Link to="/why-us" className="text-slate-400 hover:text-white flex items-center group transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 mr-1 text-royal-500 group-hover:translate-x-0.5 transition-transform" />
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white flex items-center group transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 mr-1 text-royal-500 group-hover:translate-x-0.5 transition-transform" />
                  Book a Repair / Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-slate-400 hover:text-white flex items-center group transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 mr-1 text-royal-500 group-hover:translate-x-0.5 transition-transform" />
                  Privacy & Repair Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services Offered */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 border-b border-navy-800 pb-2">
              Services Handled
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services#laptop-computer-repair" className="text-slate-400 hover:text-white flex items-center group">
                  <ChevronRight className="w-3.5 h-3.5 mr-1 text-amber-500 group-hover:translate-x-0.5 transition-transform" />
                  Laptop Hardware & Screen Repair
                </Link>
              </li>
              <li>
                <Link to="/services#desktop-pc" className="text-slate-400 hover:text-white flex items-center group">
                  <ChevronRight className="w-3.5 h-3.5 mr-1 text-amber-500 group-hover:translate-x-0.5 transition-transform" />
                  Desktop PC Diagnosis & Upgrades
                </Link>
              </li>
              <li>
                <Link to="/services#cctv-camera-repair" className="text-slate-400 hover:text-white flex items-center group">
                  <ChevronRight className="w-3.5 h-3.5 mr-1 text-amber-500 group-hover:translate-x-0.5 transition-transform" />
                  CCTV Camera & DVR Diagnostics
                </Link>
              </li>
              <li>
                <Link to="/services#currency-machine-repair" className="text-slate-400 hover:text-white flex items-center group">
                  <ChevronRight className="w-3.5 h-3.5 mr-1 text-amber-500 group-hover:translate-x-0.5 transition-transform" />
                  Currency Counting Machine Service
                </Link>
              </li>
              <li>
                <Link to="/services#printer-office-automation" className="text-slate-400 hover:text-white flex items-center group">
                  <ChevronRight className="w-3.5 h-3.5 mr-1 text-amber-500 group-hover:translate-x-0.5 transition-transform" />
                  Printer Repair & Paper Jam Fix
                </Link>
              </li>
              <li>
                <Link to="/services#virus-software" className="text-slate-400 hover:text-white flex items-center group">
                  <ChevronRight className="w-3.5 h-3.5 mr-1 text-amber-500 group-hover:translate-x-0.5 transition-transform" />
                  OS Installation & Virus Removal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Workshop Location */}
          <div className="space-y-3.5">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 border-b border-navy-800 pb-2">
              Workshop Location
            </h4>
            
            <div className="flex items-start space-x-3 text-sm text-slate-300">
              <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <address className="not-italic leading-relaxed">
                {BUSINESS_INFO.address.shop},<br />
                {BUSINESS_INFO.address.landmark},<br />
                {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.city} - {BUSINESS_INFO.address.pincode}
              </address>
            </div>

            <div className="flex items-center space-x-3 text-sm">
              <Phone className="w-4 h-4 text-royal-400 flex-shrink-0" />
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-slate-300 hover:text-white font-medium">
                {BUSINESS_INFO.phoneDisplay}
              </a>
            </div>

            <div className="flex items-center space-x-3 text-sm">
              <Mail className="w-4 h-4 text-royal-400 flex-shrink-0" />
              <a href={`mailto:${BUSINESS_INFO.email}`} className="text-slate-300 hover:text-white break-all">
                {BUSINESS_INFO.email}
              </a>
            </div>

            <div className="flex items-start space-x-3 text-sm">
              <Clock className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-slate-200 font-medium">10:00 AM – 7:00 PM</p>
                <p className="text-xs text-slate-400">Monday to Sunday</p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={BUSINESS_INFO.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-semibold text-royal-400 hover:text-royal-300 underline underline-offset-4"
              >
                <span>Open Google Maps Directions</span>
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Admin link */}
      <div className="border-t border-navy-800 bg-navy-950 py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 space-y-3 sm:space-y-0">
          <p>
            © {currentYear} Deluxe Solution. All rights reserved. Sinhgad Road, Pune, Maharashtra.
          </p>
          <div className="flex items-center space-x-4">
            <Link to="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">
              Support
            </Link>
            <span>•</span>
            <Link 
              to="/admin/login" 
              className="inline-flex items-center text-slate-500 hover:text-amber-400 transition-colors"
              title="Technician / Admin Portal"
            >
              <Lock className="w-3 h-3 mr-1" />
              Staff Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
