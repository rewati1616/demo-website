import React from 'react';
import { 
  Wrench, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  HardDrive, 
  Phone,
  ArrowRight
} from 'lucide-react';
import { BUSINESS_INFO } from '../constants/businessInfo';

export default function AboutSection({ onBookRepair }) {
  return (
    <section id="about" className="py-24 bg-slate-50 border-t border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-royal-100 text-royal-700 text-xs font-bold rounded-full uppercase tracking-wider">
              <Wrench className="w-3.5 h-3.5" />
              <span>About Our Center</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-navy-900 tracking-tight">
              Deluxe Solution — Dedicated Tech Repairs on Sinhgad Road, Pune
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Located in Vithal Heights, opposite Santosh Hall, Vadgaon Budruk, Deluxe Solution provides specialized hardware troubleshooting and maintenance for computers, laptops, surveillance setups, and banking note-counting equipment.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Our workshop is built on technical transparency: we inspect devices on the testbench to identify the root component fault rather than recommending unnecessary, expensive board replacements. We provide clear upfront quotes and keep you informed at each step.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <div className="inline-flex items-center space-x-2 bg-slate-100 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-800">
                <MapPin className="w-4 h-4 text-royal-600" />
                <span>Sinhgad Road, Vadgaon Budruk, Pune</span>
              </div>
              <div className="inline-flex items-center space-x-2 bg-slate-100 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-800">
                <Clock className="w-4 h-4 text-amber-500" />
                <span>Open 7 Days a Week (10 AM - 7 PM)</span>
              </div>
            </div>
          </div>

          {/* Right Card / Trust Pillars */}
          <div className="lg:col-span-5 bg-navy-900 text-white rounded-3xl p-6 sm:p-8 space-y-5 shadow-xl">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-royal-600 flex items-center justify-center text-white">
                <Wrench className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Workshop Standards</h3>
                <p className="text-xs text-slate-400">Sinhgad Road, Pune</p>
              </div>
            </div>

            <div className="space-y-3.5 text-xs text-slate-300">
              <div className="flex items-start">
                <ShieldCheck className="w-4 h-4 text-emerald-400 mr-2.5 flex-shrink-0 mt-0.5" />
                <span><strong>No Surprise Invoices:</strong> Diagnostic quotes provided prior to starting repair work.</span>
              </div>
              <div className="flex items-start">
                <HardDrive className="w-4 h-4 text-amber-400 mr-2.5 flex-shrink-0 mt-0.5" />
                <span><strong>Customer Data Privacy:</strong> Hard drives and storage handled with strict confidentiality.</span>
              </div>
              <div className="flex items-start">
                <ShieldCheck className="w-4 h-4 text-royal-400 mr-2.5 flex-shrink-0 mt-0.5" />
                <span><strong>Support for All Clients:</strong> From personal laptops to commercial retail cash counters.</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onBookRepair}
                className="w-full inline-flex items-center justify-center py-3 px-4 bg-amber-500 hover:bg-amber-400 text-navy-950 font-bold text-xs rounded-xl shadow-xs transition-all active:scale-95"
              >
                <span>Book an Equipment Inspection</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
