import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink,
  ShieldCheck,
  FileText,
  Loader2,
  X,
  Sparkles
} from 'lucide-react';
import { BUSINESS_INFO, isStoreCurrentlyOpen } from '../constants/businessInfo';
import { apiService } from '../services/api';

export default function ContactSection({ initialCategory, initialDevice, initialProblem }) {
  const isOpen = isStoreCurrentlyOpen();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: {
      customer_name: '',
      phone: '',
      email: '',
      service_category: 'Computer & Laptop Repair',
      device_type: '',
      brand_model: '',
      problem_description: '',
      preferred_contact: 'WhatsApp',
      honeypot: ''
    }
  });

  // Handle passed props from services or diagnostic tool
  useEffect(() => {
    if (initialCategory) setValue('service_category', initialCategory);
    if (initialDevice) setValue('device_type', initialDevice);
    if (initialProblem) setValue('problem_description', initialProblem);
  }, [initialCategory, initialDevice, initialProblem, setValue]);

  const watchedData = watch();

  const onSubmit = async (data) => {
    if (data.honeypot) return;

    setIsSubmitting(true);

    const refId = `DS-${Math.floor(1000 + Math.random() * 9000)}`;

    const enquiryRecord = {
      id: `ds-${Date.now()}`,
      reference_id: refId,
      customer_name: data.customer_name.trim(),
      phone: data.phone.trim(),
      email: data.email.trim(),
      service_category: data.service_category,
      device_type: data.device_type.trim(),
      brand_model: data.brand_model?.trim() || 'Not specified',
      problem_description: data.problem_description.trim(),
      preferred_contact: data.preferred_contact,
      created_at: new Date().toISOString()
    };

    // Save to browser localStorage so it's persisted on the device
    try {
      const stored = JSON.parse(localStorage.getItem('deluxe_user_enquiries') || '[]');
      stored.unshift(enquiryRecord);
      localStorage.setItem('deluxe_user_enquiries', JSON.stringify(stored));
    } catch (e) {
      // ignore
    }

    // Attempt backend sync if API exists (non-blocking)
    try {
      await apiService.submitEnquiry(enquiryRecord).catch(() => {});
    } catch (e) {
      // graceful fallback
    }

    // Simulate brief smooth processing animation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionSuccess(enquiryRecord);
      reset({
        customer_name: '',
        phone: '',
        email: '',
        service_category: 'Computer & Laptop Repair',
        device_type: '',
        brand_model: '',
        problem_description: '',
        preferred_contact: 'WhatsApp',
        honeypot: ''
      });
    }, 600);
  };

  // WhatsApp fast message generator
  const getWhatsAppEnquiryUrl = (record) => {
    const r = record || watchedData;
    const msg = 
`*Deluxe Solution Repair Enquiry*
Ref ID: ${r.reference_id || 'NEW'}
Customer: ${r.customer_name || 'Customer'}
Phone: ${r.phone || 'N/A'}
Service: ${r.service_category}
Device: ${r.device_type || 'Equipment'}
Problem: ${r.problem_description || 'Need diagnosis'}
Preferred Contact: ${r.preferred_contact || 'WhatsApp'}`;

    return `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="contact" className="py-24 bg-canvas scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-royal-100 text-royal-700 text-xs font-bold rounded-full uppercase tracking-wider mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>Sinhgad Road, Pune</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-navy-900 tracking-tight">
            Book a Repair / Contact Us
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
            Fill in your equipment details below for a quick quotation, or contact our workshop directly via phone or WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* =========================================================================
              LEFT COLUMN: Store Information & Live Status
             ========================================================================= */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-lg font-black text-navy-900">{BUSINESS_INFO.name}</h3>
                  <p className="text-xs text-slate-500">Professional Technical Services</p>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-bold flex items-center ${
                  isOpen ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-700 border border-amber-200'
                }`}>
                  <span className={`w-2 h-2 rounded-full mr-1.5 ${isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`}></span>
                  <span>{isOpen ? 'Open Now' : 'Closed'}</span>
                </div>
              </div>

              {/* Verified Contact Details */}
              <div className="space-y-4 text-xs sm:text-sm">
                {/* Address */}
                <div className="flex items-start space-x-3 text-slate-700">
                  <div className="p-2 rounded-xl bg-royal-50 text-royal-600 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Workshop Address</p>
                    <address className="not-italic text-slate-800 font-medium leading-relaxed mt-0.5">
                      {BUSINESS_INFO.address.shop},<br />
                      {BUSINESS_INFO.address.landmark},<br />
                      {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.city} - {BUSINESS_INFO.address.pincode}
                    </address>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-3 text-slate-700">
                  <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Telephone Call</p>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="text-base font-bold text-navy-900 hover:text-royal-600 transition-colors block mt-0.5"
                    >
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                    <p className="text-[11px] text-slate-500">Mon - Sun: 10:00 AM – 7:00 PM</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-3 text-slate-700">
                  <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 mt-0.5">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">WhatsApp Fast Support</p>
                    <a
                      href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Deluxe Solution, I would like to enquire about your repair services.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 font-bold hover:underline block mt-0.5"
                    >
                      Chat on WhatsApp (+91 98900 17975)
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3 text-slate-700">
                  <div className="p-2 rounded-xl bg-purple-50 text-purple-600 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email Inquiries</p>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="text-slate-800 hover:text-royal-600 break-all block mt-0.5"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Map Link */}
              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center py-2.5 px-4 bg-navy-900 hover:bg-navy-800 text-white rounded-xl text-xs font-bold transition-all shadow-xs"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                </a>
              </div>
            </div>

            {/* Embedded Google Map Preview */}
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden p-2 shadow-xs">
              <div className="h-52 rounded-2xl overflow-hidden bg-slate-100">
                <iframe
                  title="Deluxe Solution Sinhgad Road Pune Location"
                  src="https://maps.google.com/maps?q=Shop+No+6+Vithal+Heights+Sinhgad+Road+Vadgaon+Budruk+Pune&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
              <p className="text-[11px] text-center text-slate-400 mt-2">
                Landmark: Opposite Santosh Hall, Lane 4, Vadgaon Budruk
              </p>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: Simple & Attractive Enquiry Form
             ========================================================================= */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm relative">
              
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-royal-600">
                  Quick Diagnostic Request
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-navy-900 mt-0.5">
                  Send Repair Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Describe your device issue. We will review it and get in touch with preliminary advice and cost estimation.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                {/* Honeypot field for bot protection */}
                <input type="text" {...register('honeypot')} className="hidden" tabIndex="-1" />

                {/* Name */}
                <div>
                  <label className="block text-[11px] font-bold text-navy-900 uppercase tracking-wider mb-1">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Rahul Deshmukh"
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-800 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                      errors.customer_name ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-200 focus:ring-royal-500/20 focus:border-royal-600'
                    }`}
                    {...register('customer_name', {
                      required: 'Please enter your full name',
                      minLength: { value: 2, message: 'Name must be at least 2 characters' }
                    })}
                  />
                  {errors.customer_name && (
                    <p className="mt-1 text-xs text-rose-600">{errors.customer_name.message}</p>
                  )}
                </div>

                {/* Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-navy-900 uppercase tracking-wider mb-1">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 98900 17975"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-800 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                        errors.phone ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-200 focus:ring-royal-500/20 focus:border-royal-600'
                      }`}
                      {...register('phone', {
                        required: 'Please enter your phone number',
                        pattern: {
                          value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{8,15}$/,
                          message: 'Please enter a valid phone number (min 10 digits)'
                        }
                      })}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-rose-600">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-navy-900 uppercase tracking-wider mb-1">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. rahul@example.com"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-800 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                        errors.email ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-200 focus:ring-royal-500/20 focus:border-royal-600'
                      }`}
                      {...register('email', {
                        required: 'Please enter your email',
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: 'Please enter a valid email address'
                        }
                      })}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-600">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Service Category & Device */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-navy-900 uppercase tracking-wider mb-1">
                      Service Category <span className="text-rose-500">*</span>
                    </label>
                    <select
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-royal-500/20 focus:border-royal-600"
                      {...register('service_category')}
                    >
                      <option value="Computer & Laptop Repair">Computer & Laptop Repair</option>
                      <option value="CCTV Camera & Security Repair">CCTV Camera & Security Repair</option>
                      <option value="Currency Counting Machine Service">Currency Counting Machine Service</option>
                      <option value="Printers & Office Automation">Printers & Office Automation</option>
                      <option value="Other Diagnostic Service">Other Diagnostic Service</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-navy-900 uppercase tracking-wider mb-1">
                      Device / Machine Type <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Laptop, CCTV DVR, Note Counter"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-800 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                        errors.device_type ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-200 focus:ring-royal-500/20 focus:border-royal-600'
                      }`}
                      {...register('device_type', { required: 'Please specify the device' })}
                    />
                    {errors.device_type && (
                      <p className="mt-1 text-xs text-rose-600">{errors.device_type.message}</p>
                    )}
                  </div>
                </div>

                {/* Problem Description */}
                <div>
                  <label className="block text-[11px] font-bold text-navy-900 uppercase tracking-wider mb-1">
                    Describe the Fault or Symptoms <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows="3"
                    placeholder="e.g. Laptop not powering on after rain, camera 2 video loss, currency machine error E03, paper jam..."
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-800 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                      errors.problem_description ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-200 focus:ring-royal-500/20 focus:border-royal-600'
                    }`}
                    {...register('problem_description', {
                      required: 'Please provide a short description',
                      minLength: { value: 8, message: 'Please write at least 8 characters' }
                    })}
                  ></textarea>
                  {errors.problem_description && (
                    <p className="mt-1 text-xs text-rose-600">{errors.problem_description.message}</p>
                  )}
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <label className="block text-[11px] font-bold text-navy-900 uppercase tracking-wider mb-1">
                    Preferred Contact Method
                  </label>
                  <div className="flex items-center space-x-6 pt-1 text-xs text-slate-700">
                    <label className="flex items-center space-x-1.5 cursor-pointer">
                      <input type="radio" value="WhatsApp" {...register('preferred_contact')} className="text-royal-600 focus:ring-royal-500" />
                      <span>WhatsApp</span>
                    </label>
                    <label className="flex items-center space-x-1.5 cursor-pointer">
                      <input type="radio" value="Phone" {...register('preferred_contact')} className="text-royal-600 focus:ring-royal-500" />
                      <span>Phone Call</span>
                    </label>
                    <label className="flex items-center space-x-1.5 cursor-pointer">
                      <input type="radio" value="Email" {...register('preferred_contact')} className="text-royal-600 focus:ring-royal-500" />
                      <span>Email</span>
                    </label>
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center py-3.5 px-6 bg-amber-500 hover:bg-amber-400 text-navy-950 font-bold text-sm rounded-xl shadow-md transition-all active:scale-95 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        <span>Registering Enquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Repair Enquiry</span>
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-400 mt-2">
                    Transparent diagnostics • No work is started without your prior quote approval.
                  </p>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>

      {/* =========================================================================
          ANIMATED SUCCESS MODAL (With 1-Click WhatsApp Send)
         ========================================================================= */}
      <AnimatePresence>
        {submissionSuccess && (
          <div className="fixed inset-0 z-50 bg-navy-950/70 backdrop-blur-xs flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-3xl border border-slate-200 max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-5 text-center relative"
            >
              <button
                onClick={() => setSubmissionSuccess(null)}
                className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-600 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h3 className="text-xl font-black text-navy-900">
                  Enquiry Registered!
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Tracking Reference:{' '}
                  <span className="font-mono font-bold text-royal-600 bg-royal-50 px-2 py-0.5 rounded">
                    {submissionSuccess.reference_id}
                  </span>
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Thank you <strong>{submissionSuccess.customer_name}</strong>. Your repair enquiry for <strong>{submissionSuccess.device_type}</strong> has been recorded. Our technician at Sinhgad Road, Pune will review the symptoms and reach out to you shortly.
              </p>

              {/* Fast track WhatsApp action */}
              <div className="pt-2 space-y-2">
                <a
                  href={getWhatsAppEnquiryUrl(submissionSuccess)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4 mr-2 fill-white stroke-none" />
                  <span>Send Enquiry via WhatsApp for Instant Reply</span>
                </a>

                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="w-full inline-flex items-center justify-center py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition-all"
                >
                  <Phone className="w-3.5 h-3.5 mr-1.5 text-royal-600" />
                  <span>Call Technician directly (+91 98900 17975)</span>
                </a>
              </div>

              <button
                onClick={() => setSubmissionSuccess(null)}
                className="text-xs text-slate-400 hover:text-slate-600 underline"
              >
                Close and return to page
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
