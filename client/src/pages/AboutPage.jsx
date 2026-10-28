import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Wrench, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Cpu, 
  FileCheck2, 
  Phone, 
  ChevronRight,
  HardDrive,
  Users
} from 'lucide-react';
import { BUSINESS_INFO } from '../constants/businessInfo';

export default function AboutPage() {
  return (
    <div className="bg-canvas min-h-screen py-12">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-royal-100 text-royal-700 text-xs font-bold rounded-full uppercase tracking-wider mb-3">
          <Wrench className="w-3.5 h-3.5 text-royal-600" />
          <span>About Deluxe Solution</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy-900 tracking-tight">
          Reliable Technology Repair on Sinhgad Road, Pune
        </h1>
        <p className="mt-3 text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
          Dedicated to practical diagnostics, honest advice, and quality servicing for computers, surveillance equipment, and banking machines.
        </p>
      </section>

      {/* Main Narrative Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
              Our Business Focus & Philosophy
            </h2>
            
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Deluxe Solution is a specialized technical repair and equipment service center situated in Vithal Heights, opposite Santosh Hall, Vadgaon Budruk, along Pune's bustling Sinhgad Road.
            </p>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Our core objective is straightforward: provide clear, competent, and honest technical support. In an industry where customers often encounter confusing explanations, unexpected charges, or premature advice to discard repairable equipment, Deluxe Solution offers a transparent alternative.
            </p>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              We focus on solving equipment faults at the root cause. Whether a laptop motherboard has a shorted power capacitor, a society's CCTV system has suffered an SMPS failure, or a local business's currency counting machine is encountering optical sensor errors, we inspect the hardware on our workbench before recommending any action.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <div className="inline-flex items-center space-x-2 bg-slate-100 px-3.5 py-2 rounded-lg text-xs font-semibold text-navy-900">
                <MapPin className="w-4 h-4 text-royal-600" />
                <span>Sinhgad Road, Vadgaon Budruk, Pune</span>
              </div>
              <div className="inline-flex items-center space-x-2 bg-slate-100 px-3.5 py-2 rounded-lg text-xs font-semibold text-navy-900">
                <Clock className="w-4 h-4 text-amber-500" />
                <span>Open 7 Days (10 AM - 7 PM)</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center space-y-4">
              <div className="w-20 h-20 bg-navy-900 text-amber-400 rounded-2xl mx-auto flex items-center justify-center shadow-md">
                <Wrench className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy-900">Workshop & Service Center</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Shop No. 6, Vithal Heights, Lane No. 4, Vadgaon Budruk, Pune
                </p>
              </div>

              <div className="border-t border-slate-200 pt-4 text-xs text-slate-600 text-left space-y-2">
                <div className="flex items-center">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                  <span>Transparent quotations prior to starting repair</span>
                </div>
                <div className="flex items-center">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                  <span>Customer data privacy & confidentiality respected</span>
                </div>
                <div className="flex items-center">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                  <span>Support for both individuals and commercial enterprises</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Core Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-xs font-bold uppercase tracking-wider text-royal-600 mb-1">
            Our Commitment
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
            How We Approach Customer Service
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-royal-100 text-royal-600 flex items-center justify-center mb-4">
              <FileCheck2 className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-navy-900 mb-2">
              Clear & Upfront Communication
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We inform you about the exact issue we find during diagnostic testing. If a repair is not cost-effective compared to buying replacement hardware, we tell you openly.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-4">
              <HardDrive className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-navy-900 mb-2">
              Data Privacy & Safe Handling
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We handle personal computers and office storage with high regard for confidential data. Storage drives are handled strictly within diagnostic protocols.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-navy-900 mb-2">
              Quality Spare Parts & Testing
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We source reliable replacement components from reputable supply chains, test them thoroughly after installation, and ensure proper thermal & functional performance.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy-900 text-white rounded-3xl p-8 sm:p-10 text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-left space-y-1">
            <h3 className="text-xl sm:text-2xl font-bold">Have a Question About Your Equipment?</h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Speak directly with our technician on Sinhgad Road or send us an enquiry online.
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Link
              to="/contact"
              className="px-5 py-3 bg-amber-500 hover:bg-amber-400 text-navy-900 font-bold text-xs sm:text-sm rounded-xl transition-all whitespace-nowrap shadow-sm"
            >
              Book a Repair
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-5 py-3 bg-navy-800 hover:bg-navy-700 border border-slate-700 text-white font-semibold text-xs sm:text-sm rounded-xl transition-all whitespace-nowrap"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
