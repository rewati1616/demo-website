import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  ChevronRight, 
  Cpu, 
  FileCheck2, 
  Wrench, 
  Users, 
  MapPin, 
  Phone 
} from 'lucide-react';
import { BUSINESS_INFO } from '../constants/businessInfo';

export default function WhyUsPage() {
  const comparisonItems = [
    {
      feature: "Cost Estimation",
      standard: "Hidden inspection fees or vague estimates provided after work starts.",
      deluxe: "Clear quotation provided after diagnosis, work begins only after your approval."
    },
    {
      feature: "Repair Approach",
      standard: "Quick push to replace entire expensive boards without component check.",
      deluxe: "Chip & circuit level diagnosis to fix the specific faulty component when viable."
    },
    {
      feature: "Customer Communication",
      standard: "Confusing technical jargon that makes customers feel uninformed.",
      deluxe: "Plain-language explanation of what caused the fault and how it is being repaired."
    },
    {
      feature: "Equipment Diversity",
      standard: "Limited to computers only, unable to service CCTV or note counters.",
      deluxe: "Expertise across laptops, desktop PCs, CCTV surveillance, printers, and currency counting machines."
    },
    {
      feature: "Data Safety Consideration",
      standard: "Frequent factory resets without checking if customer data is backed up.",
      deluxe: "Respect for customer documents and personal data with precautions taken before OS work."
    }
  ];

  const faqs = [
    {
      q: "How long does a typical diagnosis take?",
      a: "Most computer, laptop, and currency counting machine diagnostic checks are completed within 24 to 48 hours depending on bench workload and fault complexity."
    },
    {
      q: "Will you charge me if my device cannot be repaired?",
      a: "We inspect your device and advise you honestly. If replacement components are obsolete or repair costs exceed the equipment's value, we communicate this upfront so you can make an informed choice."
    },
    {
      q: "Do I need to take an appointment before visiting your workshop?",
      a: "Walk-ins are always welcome during our working hours (10:00 AM to 7:00 PM, Monday to Sunday). You can also submit an online enquiry or call in advance to ensure a technician is immediately ready for your device."
    },
    {
      q: "Do you repair both individual computers and business equipment?",
      a: "Yes. We support personal laptops and desktops for students and professionals, as well as commercial note counters, CCTV systems, and printers for retail shops, offices, and residential societies."
    }
  ];

  return (
    <div className="bg-canvas min-h-screen py-12">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-royal-100 text-royal-700 text-xs font-bold rounded-full uppercase tracking-wider mb-3">
          <ShieldCheck className="w-3.5 h-3.5 text-royal-600" />
          <span>Trust & Transparency</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy-900 tracking-tight">
          Why Choose Deluxe Solution?
        </h1>
        <p className="mt-3 text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
          Honest diagnostics, fair pricing, and reliable technical workmanship for Pune residents and local businesses.
        </p>
      </section>

      {/* Comparison Table Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-navy-900">
            A Transparent Comparison
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            See how Deluxe Solution's customer-first approach differs from standard repair shops.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wider text-slate-600">
                  <th className="py-4 px-6 font-bold">Aspect</th>
                  <th className="py-4 px-6 font-bold text-slate-400">Typical Repair Experience</th>
                  <th className="py-4 px-6 font-bold text-royal-600 bg-royal-50/50">Deluxe Solution Service</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {comparisonItems.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-4 px-6 font-semibold text-navy-900 align-top w-1/4">
                      {item.feature}
                    </td>
                    <td className="py-4 px-6 text-slate-500 align-top w-3/8">
                      <div className="flex items-start">
                        <XCircle className="w-4 h-4 text-rose-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{item.standard}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-800 bg-royal-50/30 font-medium align-top w-3/8">
                      <div className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{item.deluxe}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-1 px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-royal-600 mr-1" />
            <span>Common Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="text-base font-bold text-navy-900 mb-2">
                {faq.q}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Direct Contact Action */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy-900 text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Ready to Discuss Your Repair?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-6">
            Get in touch with our team on Sinhgad Road, Pune. We will diagnose your issue and provide an honest estimate.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-navy-900 font-bold text-sm rounded-xl shadow-md transition-all active:scale-95"
            >
              Book a Repair Now
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-6 py-3.5 bg-navy-800 hover:bg-navy-700 border border-slate-700 text-white font-semibold text-sm rounded-xl transition-all"
            >
              Call +91 98900 17975
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
