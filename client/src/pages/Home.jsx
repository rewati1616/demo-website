import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Wrench, 
  Phone, 
  ChevronRight, 
  ShieldCheck, 
  CheckCircle, 
  Cpu, 
  Clock, 
  MapPin, 
  ArrowRight,
  Sparkles,
  Search,
  CheckCircle2,
  FileCheck2,
  Settings2,
  Building2,
  Users
} from 'lucide-react';
import { BUSINESS_INFO, isStoreCurrentlyOpen } from '../constants/businessInfo';
import DiagnosticTroubleshooter from '../components/home/DiagnosticTroubleshooter';

export default function Home() {
  const isOpen = isStoreCurrentlyOpen();

  return (
    <div className="bg-canvas min-h-screen">
      {/* =========================================================================
          SECTION B: HERO SECTION (Split Layout)
         ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white pt-12 pb-20 lg:pt-20 lg:pb-28">
        {/* Subtle decorative glow elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-royal-600/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Small label */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-navy-800/80 border border-navy-700 text-xs font-semibold text-amber-400">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                <span>Reliable Technology Repair Services in Pune</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black tracking-tight leading-tight sm:leading-tight">
                Expert Repairs.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-blue-300 to-amber-300">
                  Reliable Solutions.
                </span>
              </h1>

              {/* Supporting text */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                Deluxe Solution provides professional diagnostics and repairs for laptops, desktop computers, CCTV camera security systems, printers, and currency counting machines. Located on Sinhgad Road, Pune, we deliver honest assessments, transparent quotations, and dependable technical workmanship.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-base font-bold text-navy-950 bg-amber-500 hover:bg-amber-400 rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all transform active:scale-95"
                >
                  <span>Book a Repair</span>
                  <ChevronRight className="w-5 h-5 ml-1" />
                </Link>

                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white bg-navy-800 hover:bg-navy-700 border border-slate-700 rounded-xl transition-all"
                >
                  <Phone className="w-4 h-4 mr-2 text-royal-400" />
                  <span>Call {BUSINESS_INFO.phoneDisplay}</span>
                </a>
              </div>

              {/* Small Trust-oriented supporting items */}
              <div className="pt-4 border-t border-navy-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-300">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Upfront Quotation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Cpu className="w-4 h-4 text-royal-400 flex-shrink-0" />
                  <span>Chip & Board Level Repair</span>
                </div>
                <div className="flex items-center space-x-2 col-span-2 sm:col-span-1">
                  <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Sinhgad Road, Pune Store</span>
                </div>
              </div>
            </div>

            {/* Right Column: High Quality Equipment Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Clean hero card container */}
                <div className="bg-gradient-to-tr from-navy-900 to-navy-800 p-3 sm:p-5 rounded-2xl border border-navy-700 shadow-2xl">
                  {/* Equipment Preview Frame */}
                  <div className="bg-slate-950 rounded-xl overflow-hidden border border-navy-700/60 p-4 text-center">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-navy-800 text-xs text-slate-400">
                      <span className="flex items-center font-medium">
                        <Wrench className="w-3.5 h-3.5 mr-1 text-amber-400" />
                        Deluxe Solution Workshop
                      </span>
                      <span className="bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded text-[10px] font-bold">
                        Sinhgad Road, Pune
                      </span>
                    </div>

                    {/* Featured Image */}
                    <div className="relative rounded-lg overflow-hidden bg-navy-900/60 flex items-center justify-center p-4">
                      <img
                        src="/images/currency-mix-counter.png"
                        alt="Currency Counting Machine & Hardware Repair at Deluxe Solution Pune"
                        className="h-56 sm:h-64 object-contain filter drop-shadow-md transition-transform duration-500 hover:scale-105"
                        loading="eager"
                      />
                    </div>

                    <div className="mt-3 text-left bg-navy-900/90 rounded-lg p-3 border border-navy-700">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-bold text-white">Specialized Equipment Care</p>
                        <span className="text-[10px] text-amber-400 font-semibold">Genuine Spares</span>
                      </div>
                      <p className="text-[11px] text-slate-300 mt-1">
                        Laptops • Desktops • CCTV Systems • Note Counters • Printers
                      </p>
                    </div>
                  </div>

                  {/* Micro floating info pill */}
                  <div className="mt-3 grid grid-cols-2 gap-2 text-center text-xs">
                    <div className="bg-navy-900/80 border border-navy-700/80 rounded-lg p-2">
                      <p className="text-[10px] text-slate-400">Shop Hours</p>
                      <p className="text-white font-bold text-xs">10 AM – 7 PM Daily</p>
                    </div>
                    <div className="bg-navy-900/80 border border-navy-700/80 rounded-lg p-2">
                      <p className="text-[10px] text-slate-400">Direct Contact</p>
                      <p className="text-amber-400 font-bold text-xs">+91 98900 17975</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION C: SERVICES OVERVIEW
         ========================================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-wider text-royal-600 mb-2">
              Our Technical Capabilities
            </h2>
            <h3 className="text-3xl font-extrabold text-navy-900 tracking-tight">
              Specialized Repair Services
            </h3>
            <p className="mt-3 text-slate-600 text-base">
              From individual personal laptops to commercial office machines, Deluxe Solution handles diagnostics, hardware repairs, and maintenance with precision.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Computer & Laptop Repair */}
            <div className="bg-canvas border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="h-52 bg-slate-100 overflow-hidden relative p-4 flex items-center justify-center">
                  <img
                    src="/images/desktop-pc.png"
                    alt="Computer and Laptop Repair in Sinhgad Road Pune"
                    className="max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-navy-900 font-bold text-[11px] px-2.5 py-1 rounded-md border border-slate-200 shadow-sm">
                    Laptops & Desktops
                  </span>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold text-navy-900 group-hover:text-royal-600 transition-colors">
                    Computer & Laptop Repair
                  </h4>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    Diagnostics and hardware repairs for all major laptop and desktop computer brands.
                  </p>

                  <ul className="mt-4 space-y-2 text-xs text-slate-700">
                    <li className="flex items-center">
                      <CheckCircle2 className="w-3.5 h-3.5 text-royal-600 mr-2 flex-shrink-0" />
                      <span>Laptop & desktop troubleshooting</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-3.5 h-3.5 text-royal-600 mr-2 flex-shrink-0" />
                      <span>Hardware diagnostics and component repair</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-3.5 h-3.5 text-royal-600 mr-2 flex-shrink-0" />
                      <span>Virus and malware removal</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-3.5 h-3.5 text-royal-600 mr-2 flex-shrink-0" />
                      <span>Performance optimization & SSD upgrades</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-3.5 h-3.5 text-royal-600 mr-2 flex-shrink-0" />
                      <span>Operating system & software troubleshooting</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to="/services#laptop-computer-repair"
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl border border-slate-300 hover:border-royal-600 hover:bg-royal-50 text-navy-900 hover:text-royal-600 text-sm font-bold transition-all"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Card 2: CCTV Camera Repair */}
            <div className="bg-canvas border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="h-52 bg-slate-100 overflow-hidden relative p-4 flex items-center justify-center">
                  <img
                    src="/images/cctv-setup.png"
                    alt="CCTV Camera and DVR Repair Services in Pune"
                    className="max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-navy-900 font-bold text-[11px] px-2.5 py-1 rounded-md border border-slate-200 shadow-sm">
                    Surveillance Systems
                  </span>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold text-navy-900 group-hover:text-royal-600 transition-colors">
                    CCTV Camera Repair
                  </h4>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    Inspection, cabling repairs, and DVR/NVR diagnosis for residential and commercial security systems.
                  </p>

                  <ul className="mt-4 space-y-2 text-xs text-slate-700">
                    <li className="flex items-center">
                      <CheckCircle2 className="w-3.5 h-3.5 text-royal-600 mr-2 flex-shrink-0" />
                      <span>Camera troubleshooting & video loss fix</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-3.5 h-3.5 text-royal-600 mr-2 flex-shrink-0" />
                      <span>Recording and display issue diagnosis</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-3.5 h-3.5 text-royal-600 mr-2 flex-shrink-0" />
                      <span>CCTV system fault identification</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-3.5 h-3.5 text-royal-600 mr-2 flex-shrink-0" />
                      <span>Power supply & BNC / RJ45 replacement</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-3.5 h-3.5 text-royal-600 mr-2 flex-shrink-0" />
                      <span>Repair services for supported equipment</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to="/services#cctv-camera-repair"
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl border border-slate-300 hover:border-royal-600 hover:bg-royal-50 text-navy-900 hover:text-royal-600 text-sm font-bold transition-all"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Card 3: Currency Counting Machine Repair */}
            <div className="bg-canvas border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="h-52 bg-slate-100 overflow-hidden relative p-4 flex items-center justify-center">
                  <img
                    src="/images/currency-mix-counter.png"
                    alt="Currency Counting Machine Repair and Calibration in Pune"
                    className="max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-navy-900 font-bold text-[11px] px-2.5 py-1 rounded-md border border-slate-200 shadow-sm">
                    Banking & Retail Equipment
                  </span>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold text-navy-900 group-hover:text-royal-600 transition-colors">
                    Currency Counting Machine Repair
                  </h4>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    Reliable servicing for standard note counters and advanced mix value color sensor machines.
                  </p>

                  <ul className="mt-4 space-y-2 text-xs text-slate-700">
                    <li className="flex items-center">
                      <CheckCircle2 className="w-3.5 h-3.5 text-royal-600 mr-2 flex-shrink-0" />
                      <span>Machine troubleshooting & mechanical servicing</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-3.5 h-3.5 text-royal-600 mr-2 flex-shrink-0" />
                      <span>Counting and detection issue diagnosis</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-3.5 h-3.5 text-royal-600 mr-2 flex-shrink-0" />
                      <span>Color, UV & MG sensor fault identification</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-3.5 h-3.5 text-royal-600 mr-2 flex-shrink-0" />
                      <span>Note jam rubber roller replacement</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-3.5 h-3.5 text-royal-600 mr-2 flex-shrink-0" />
                      <span>Repair services for supported machines</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to="/services#currency-machine-repair"
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl border border-slate-300 hover:border-royal-600 hover:bg-royal-50 text-navy-900 hover:text-royal-600 text-sm font-bold transition-all"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

          </div>

          {/* Secondary service callout: Printers */}
          <div className="mt-10 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-xl bg-white border border-slate-200 p-2 flex items-center justify-center flex-shrink-0">
                <img
                  src="/images/brother-printer.png"
                  alt="Brother and laser printer service"
                  className="max-h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div>
                <h4 className="text-base font-bold text-navy-900">
                  Also Servicing: Printers & Office Automation Equipment
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  Refill tank printers, laser printer maintenance, toner refilling, and commercial paper shredder repairs.
                </p>
              </div>
            </div>
            <Link
              to="/services#printer-office-automation"
              className="inline-flex items-center text-xs font-bold text-royal-600 hover:text-royal-700 uppercase tracking-wider whitespace-nowrap"
            >
              <span>View Printer Support</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE FAULT GUIDE / TROUBLESHOOTER
         ========================================================================= */}
      <DiagnosticTroubleshooter />

      {/* =========================================================================
          SECTION D: WHY CHOOSE DELUXE SOLUTION?
         ========================================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-wider text-royal-600 mb-2">
              Customer First Approach
            </h2>
            <h3 className="text-3xl font-extrabold text-navy-900 tracking-tight">
              Why Choose Deluxe Solution?
            </h3>
            <p className="mt-3 text-slate-600 text-base">
              We focus on honest advice, technical capability, and reliable solutions rather than sales pressure or unneeded replacements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-canvas border border-slate-200 p-6 rounded-2xl hover:border-slate-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-royal-100 flex items-center justify-center text-royal-600 mb-4">
                <Cpu className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-navy-900 mb-2">
                Practical Technical Support
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                We handle practical troubleshooting on the workbench, checking circuits, power lines, and software to find the root cause rather than guessing.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-canvas border border-slate-200 p-6 rounded-2xl hover:border-slate-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 mb-4">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-navy-900 mb-2">
                Clear Explanations of Repair Issues
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                No unnecessary technical jargon. We explain what happened to your laptop, camera, or counting machine in plain, straightforward terms.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-canvas border border-slate-200 p-6 rounded-2xl hover:border-slate-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-navy-900 mb-2">
                Transparent Quotations Before Approved Work
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                You receive a clear quotation following our diagnosis. We only proceed with part replacements or repairs once you give your explicit consent.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-canvas border border-slate-200 p-6 rounded-2xl hover:border-slate-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-navy-900 mb-2">
                Customer-Focused Service
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                We prioritize data privacy, cautious handling of delicate components, and honest turnaround expectations so your workflow isn't disrupted.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-canvas border border-slate-200 p-6 rounded-2xl hover:border-slate-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                <Building2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-navy-900 mb-2">
                Support for Individuals & Businesses
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Whether you need a personal student laptop fixed or corporate office CCTV & cash counting machines serviced, our center caters to both.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-canvas border border-slate-200 p-6 rounded-2xl hover:border-slate-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 mb-4">
                <MapPin className="w-6 h-6 text-amber-500" />
              </div>
              <h4 className="text-lg font-bold text-navy-900 mb-2">
                Convenient Sinhgad Road Location
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Centrally located in Vithal Heights, opposite Santosh Hall, Vadgaon Budruk, with easy access and open 7 days a week from 10:00 AM to 7:00 PM.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION E: HOW IT WORKS (Simple 4-Step Process)
         ========================================================================= */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-wider text-royal-600 mb-2">
              Straightforward Process
            </h2>
            <h3 className="text-3xl font-extrabold text-navy-900 tracking-tight">
              How It Works
            </h3>
            <p className="mt-3 text-slate-600 text-base">
              A simple, transparent 4-step repair journey from initial enquiry to equipment collection.
            </p>
          </div>

          {/* Desktop Horizontal / Mobile Vertical Stepper */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 relative shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-full bg-navy-900 text-amber-400 font-bold flex items-center justify-center text-base">
                  1
                </span>
                <Phone className="w-5 h-5 text-royal-600" />
              </div>
              <h4 className="text-base font-bold text-navy-900 mb-1.5">
                1. Contact Us
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Call our workshop, send a message on WhatsApp, or submit our online repair enquiry form.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 relative shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-full bg-navy-900 text-amber-400 font-bold flex items-center justify-center text-base">
                  2
                </span>
                <Search className="w-5 h-5 text-royal-600" />
              </div>
              <h4 className="text-base font-bold text-navy-900 mb-1.5">
                2. Explain the Problem
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Describe the symptoms or bring your device to our service center on Sinhgad Road, Pune.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 relative shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-full bg-navy-900 text-amber-400 font-bold flex items-center justify-center text-base">
                  3
                </span>
                <FileCheck2 className="w-5 h-5 text-royal-600" />
              </div>
              <h4 className="text-base font-bold text-navy-900 mb-1.5">
                3. Diagnosis & Quotation
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our technicians inspect the hardware and provide a clear quotation before any work begins.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 relative shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-full bg-navy-900 text-amber-400 font-bold flex items-center justify-center text-base">
                  4
                </span>
                <CheckCircle className="w-5 h-5 text-emerald-600" />
              </div>
              <h4 className="text-base font-bold text-navy-900 mb-1.5">
                4. Repair & Collection
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We perform the repair, test the unit thoroughly, and notify you for pickup or delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION G: CUSTOMER FEEDBACK & TRANSPARENCY NOTICE
          (Compliant with instruction: No fabricated names or fake reviews)
         ========================================================================= */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full mb-4">
            <ShieldCheck className="w-4 h-4 text-royal-600" />
            <span>Honest Customer Feedback Policy</span>
          </div>
          <h3 className="text-2xl font-bold text-navy-900">
            Trusted by Sinhgad Road Residents & Local Businesses
          </h3>
          <p className="mt-2 text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            At Deluxe Solution, we value genuine customer trust. We do not publish fake reviews or inflated ratings. If you have recently serviced your equipment with us, we welcome your honest experience!
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href={BUSINESS_INFO.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg shadow-sm transition-colors"
            >
              <span>View Location & Reviews on Google Maps</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION F: CALL-TO-ACTION BANNER
         ========================================================================= */}
      <section className="bg-navy-900 text-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-r from-navy-950 to-navy-800 border border-navy-700 rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl text-center md:text-left">
              <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">
                Fast & Dependable Turnaround
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Need Help With Your Equipment?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Contact Deluxe Solution to discuss your repair requirements. Speak directly with a technician or submit your equipment details online for a prompt response.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-navy-950 bg-amber-500 hover:bg-amber-400 rounded-xl shadow-md transition-all active:scale-95 whitespace-nowrap"
              >
                <span>Book a Repair</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-navy-800 hover:bg-navy-700 border border-slate-700 rounded-xl transition-all whitespace-nowrap"
              >
                <Phone className="w-4 h-4 mr-2 text-royal-400" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
