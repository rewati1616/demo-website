import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  FileCheck2, 
  Cpu, 
  Users, 
  Building2, 
  MapPin, 
  Phone, 
  CheckCircle, 
  Search, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { BUSINESS_INFO } from '../constants/businessInfo';

export default function WhyUsSection() {
  const steps = [
    {
      num: "01",
      icon: Phone,
      title: "Contact Us",
      desc: "Call, message on WhatsApp, or submit your repair request online."
    },
    {
      num: "02",
      icon: Search,
      title: "Explain the Problem",
      desc: "Describe the symptoms or bring your device to our Sinhgad Road workshop."
    },
    {
      num: "03",
      icon: FileCheck2,
      title: "Diagnosis & Quotation",
      desc: "Our technicians inspect the hardware and provide a clear upfront estimate."
    },
    {
      num: "04",
      icon: CheckCircle,
      title: "Repair & Collection",
      desc: "Work is carried out with quality parts, tested, and handed over to you."
    }
  ];

  const features = [
    {
      icon: Cpu,
      title: "Practical Technical Support",
      desc: "We diagnose hardware on the workbench, checking circuits, voltages, and components rather than blindly replacing entire expensive boards."
    },
    {
      icon: FileCheck2,
      title: "Clear Explanations",
      desc: "No confusing technical jargon. We explain in plain language what caused the equipment fault and what is needed to restore it."
    },
    {
      icon: ShieldCheck,
      title: "Transparent Quotations",
      desc: "You receive a clear cost estimate following our diagnosis. We only proceed with repairs after your explicit approval."
    },
    {
      icon: Users,
      title: "Customer-Focused Service",
      desc: "We treat your equipment and personal documents with strict confidentiality, ensuring safe data handling during all repairs."
    },
    {
      icon: Building2,
      title: "Individual & Business Support",
      desc: "From individual laptops and home PCs to commercial retail note counters, printers, and CCTV setups, we serve both sectors."
    },
    {
      icon: MapPin,
      title: "Convenient Sinhgad Road Center",
      desc: "Centrally located at Vithal Heights, opposite Santosh Hall, Vadgaon Budruk, with walk-in access 7 days a week."
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================================
            HOW IT WORKS: 4-STEP PROCESS
           ========================================================================= */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-royal-600">
              Simple & Transparent
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-navy-900 tracking-tight mt-1">
              How It Works
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              A straightforward 4-step repair journey from enquiry to equipment collection.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div 
                  key={idx}
                  className="bg-canvas border border-slate-200 rounded-3xl p-6 shadow-xs relative hover:border-royal-400 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-slate-300">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-royal-50 text-royal-600 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-navy-900 mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            WHY CHOOSE US: 6 PILLARS
           ========================================================================= */}
        <div className="border-t border-slate-200 pt-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-royal-600">
              Customer First Approach
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-navy-900 tracking-tight mt-1">
              Why Choose Deluxe Solution?
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              We focus on honest technical diagnosis, fair quotes, and dependable repairs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div 
                  key={idx}
                  className="bg-canvas border border-slate-200 rounded-3xl p-6 hover:shadow-md hover:border-slate-300 transition-all"
                >
                  <div className="w-11 h-11 rounded-2xl bg-royal-100 text-royal-600 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-navy-900 mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Genuine Reviews Policy Notice */}
          <div className="mt-12 bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center max-w-3xl mx-auto">
            <h3 className="text-sm font-bold text-navy-900 mb-1">
              Genuine Customer Feedback Policy
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              We do not publish fabricated ratings or artificial customer testimonials. We invite every customer to share their honest review directly on Google Maps after their repair.
            </p>
            <a
              href={BUSINESS_INFO.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs font-bold text-royal-600 hover:text-royal-800"
            >
              <span>View Workshop Location & Reviews on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
