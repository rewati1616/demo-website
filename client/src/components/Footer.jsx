import React from 'react';
import { 
  Wrench, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ChevronRight, 
  ExternalLink 
} from 'lucide-react';
import { BUSINESS_INFO } from '../constants/businessInfo';

export default function Footer({ onScrollTo }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-royal-600 flex items-center justify-center text-white">
                <Wrench className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <span className="text-xl font-black text-white">DELUXE</span>{' '}
                <span className="text-xl font-light text-royal-400">SOLUTION</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Specialized technical repair and maintenance services for computers, laptops, CCTV security systems, printers, and currency counting machines on Sinhgad Road, Pune.
            </p>

            <div className="pt-1">
              <span className="inline-flex items-center px-3 py-1 rounded-md bg-navy-900 border border-navy-800 text-[11px] text-amber-300 font-medium">
                Transparent Quotes • Bench Diagnostics
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 border-b border-navy-800 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button onClick={() => onScrollTo('home')} className="text-slate-400 hover:text-white flex items-center transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 mr-1 text-royal-500" />
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('services')} className="text-slate-400 hover:text-white flex items-center transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 mr-1 text-royal-500" />
                  Repair Services
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('diagnostics')} className="text-slate-400 hover:text-white flex items-center transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 mr-1 text-royal-500" />
                  Interactive Fault Guide
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('why-us')} className="text-slate-400 hover:text-white flex items-center transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 mr-1 text-royal-500" />
                  Why Choose Us
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('about')} className="text-slate-400 hover:text-white flex items-center transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 mr-1 text-royal-500" />
                  About Our Center
                </button>
              </li>
              <li>
                <button onClick={() => onScrollTo('contact')} className="text-slate-400 hover:text-white flex items-center transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 mr-1 text-royal-500" />
                  Book a Repair
                </button>
              </li>
            </ul>
          </div>

          {/* Services Handled */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 border-b border-navy-800 pb-2">
              Services Handled
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>Laptop Motherboard & Screen Repair</li>
              <li>Desktop PC Diagnostics & SSD Upgrade</li>
              <li>CCTV Camera & DVR Recording Fixes</li>
              <li>Currency Counting Machine Servicing</li>
              <li>Mix Value Counter Sensor Calibration</li>
              <li>Printers & Paper Jam Troubleshooting</li>
            </ul>
          </div>

          {/* Workshop Details */}
          <div className="space-y-3 text-xs sm:text-sm">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4 border-b border-navy-800 pb-2">
              Workshop Location
            </h4>

            <div className="flex items-start space-x-2.5 text-slate-300">
              <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
              <address className="not-italic leading-relaxed text-xs">
                {BUSINESS_INFO.address.shop},<br />
                {BUSINESS_INFO.address.landmark},<br />
                {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.city} - {BUSINESS_INFO.address.pincode}
              </address>
            </div>

            <div className="flex items-center space-x-2.5">
              <Phone className="w-4 h-4 text-royal-400 flex-shrink-0" />
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-slate-300 hover:text-white font-bold">
                {BUSINESS_INFO.phoneDisplay}
              </a>
            </div>

            <div className="flex items-center space-x-2.5">
              <Mail className="w-4 h-4 text-royal-400 flex-shrink-0" />
              <a href={`mailto:${BUSINESS_INFO.email}`} className="text-slate-300 hover:text-white break-all text-xs">
                {BUSINESS_INFO.email}
              </a>
            </div>

            <div className="flex items-start space-x-2.5">
              <Clock className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
              <p className="text-slate-300 text-xs">
                10:00 AM – 7:00 PM (Mon – Sun)
              </p>
            </div>

            <div className="pt-2">
              <a
                href={BUSINESS_INFO.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-bold text-royal-400 hover:text-royal-300"
              >
                <span>Google Maps Directions</span>
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-900 bg-black/40 py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 space-y-2 sm:space-y-0">
          <p>© {currentYear} Deluxe Solution. All rights reserved. Sinhgad Road, Pune.</p>
          <div className="flex items-center space-x-4">
            <span>Laptop & Desktop Repair</span>
            <span>•</span>
            <span>CCTV Security</span>
            <span>•</span>
            <span>Currency Machine</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
