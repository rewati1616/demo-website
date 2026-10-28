import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, FileText, ArrowLeft, Mail } from 'lucide-react';
import { BUSINESS_INFO } from '../constants/businessInfo';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-canvas min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-xs font-semibold text-royal-600 hover:text-royal-800 mb-4">
            <ArrowLeft className="w-3.5 h-3.5 mr-1" />
            <span>Back to Home</span>
          </Link>
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-royal-100 text-royal-700 text-xs font-bold rounded-full mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Service Ethics & Data Protection</span>
          </div>
          <h1 className="text-3xl font-black text-navy-900 tracking-tight">
            Privacy Policy & Service Terms
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            Last Updated: October 2026 • Deluxe Solution, Sinhgad Road, Pune
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm space-y-8 text-sm text-slate-700 leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-navy-900 flex items-center">
              <Lock className="w-4 h-4 mr-2 text-royal-600" />
              1. Customer Data Privacy on Repaired Devices
            </h2>
            <p>
              At Deluxe Solution, we recognize that computers, hard drives, and office systems contain sensitive personal photos, financial records, or proprietary business documents. 
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 text-xs sm:text-sm">
              <li>Our technicians access file systems strictly to verify hardware functionality, operating system bootability, or data recovery as requested by the client.</li>
              <li>We never copy, transfer, or disclose customer files to third parties without explicit written consent.</li>
              <li>Customers are always encouraged to back up personal data before submitting devices for OS reinstallation or storage replacements whenever feasible.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-navy-900 flex items-center">
              <FileText className="w-4 h-4 mr-2 text-royal-600" />
              2. Information Collected via this Website
            </h2>
            <p>
              When you submit a repair enquiry on our website, we collect your name, phone number, email address, service category, and device details. This information is used exclusively to:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 text-xs sm:text-sm">
              <li>Contact you with diagnostic estimates and repair status updates.</li>
              <li>Track your equipment under a unique reference ID.</li>
              <li>We do not sell, rent, or trade your contact information for commercial marketing.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-navy-900 flex items-center">
              <ShieldCheck className="w-4 h-4 mr-2 text-royal-600" />
              3. Diagnostic Quotes & Work Authorization
            </h2>
            <p>
              Repair work is initiated only after providing a clear quotation and receiving your approval. If upon detailed bench inspection an internal component cannot be repaired or replacement parts are unavailable, you will be notified promptly.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-navy-900 flex items-center">
              <Mail className="w-4 h-4 mr-2 text-royal-600" />
              4. Questions and Inquiries
            </h2>
            <p>
              If you have any questions regarding how your data or equipment is handled at our workshop, please contact us:
            </p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-1">
              <p><strong>Business:</strong> {BUSINESS_INFO.name}</p>
              <p><strong>Address:</strong> {BUSINESS_INFO.address.full}</p>
              <p><strong>Email:</strong> {BUSINESS_INFO.email}</p>
              <p><strong>Phone:</strong> {BUSINESS_INFO.phoneDisplay}</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
