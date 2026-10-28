import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
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
  Calendar,
  Loader2,
  FileText
} from 'lucide-react';
import { BUSINESS_INFO, isStoreCurrentlyOpen } from '../constants/businessInfo';
import { apiService } from '../services/api';

export default function ContactPage() {
  const location = useLocation();
  const isOpen = isStoreCurrentlyOpen();

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(null);
  const [submissionError, setSubmissionError] = useState(null);

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
      preferred_contact: 'Phone',
      preferred_date: '',
      honeypot: '', // Spam protection field
    }
  });

  // Pre-fill form if navigated from service card or troubleshooter
  useEffect(() => {
    if (location.state) {
      if (location.state.category) {
        setValue('service_category', location.state.category);
      }
      if (location.state.deviceType) {
        setValue('device_type', location.state.deviceType);
      }
      if (location.state.problemDescription) {
        setValue('problem_description', location.state.problemDescription);
      }
    }
  }, [location.state, setValue]);

  const watchedName = watch('customer_name');
  const watchedCategory = watch('service_category');
  const watchedProblem = watch('problem_description');

  const onSubmit = async (data) => {
    // Spam bot honeypot detection
    if (data.honeypot) {
      console.warn('Bot submission blocked.');
      return;
    }

    setIsSubmitting(true);
    setSubmissionError(null);

    const result = await apiService.submitEnquiry({
      customer_name: data.customer_name,
      phone: data.phone,
      email: data.email,
      service_category: data.service_category,
      device_type: data.device_type,
      brand_model: data.brand_model,
      problem_description: data.problem_description,
      preferred_contact: data.preferred_contact,
      preferred_date: data.preferred_date || null,
    });

    setIsSubmitting(false);

    if (result.success) {
      setSubmissionSuccess(result.data.enquiry || { reference_id: 'DS-CONFIRMED' });
      reset();
    } else {
      setSubmissionError(result.message || 'Unable to submit enquiry at this time.');
    }
  };

  // Direct WhatsApp fast-track helper
  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Deluxe Solution,\nI would like to enquire about repairs.\nName: ${watchedName || 'Customer'}\nCategory: ${watchedCategory || 'Equipment Repair'}\nProblem: ${watchedProblem || 'Need diagnosis'}`
    );
    window.open(`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${text}`, '_blank');
  };

  return (
    <div className="bg-canvas min-h-screen py-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-royal-100 text-royal-700 text-xs font-bold rounded-full uppercase tracking-wider mb-3">
          <MapPin className="w-3.5 h-3.5 text-royal-600" />
          <span>Sinhgad Road, Pune Workshop</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy-900 tracking-tight">
          Contact & Book a Repair
        </h1>
        <p className="mt-3 text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
          Visit our workshop, call our technician directly, or submit your repair enquiry below for a prompt diagnostic quotation.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* =========================================================================
              LEFT COLUMN: Verified Business Details & Map
             ========================================================================= */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Store Information Card */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <h2 className="text-xl font-black text-navy-900">{BUSINESS_INFO.name}</h2>
                  <p className="text-xs text-slate-500 font-medium">Professional Technical Services</p>
                </div>
                <div className={`px-2.5 py-1 rounded-full text-xs font-bold flex items-center ${
                  isOpen ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-700 border border-amber-200'
                }`}>
                  <span className={`w-2 h-2 rounded-full mr-1.5 ${isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`}></span>
                  <span>{isOpen ? 'Open Now' : 'Closed'}</span>
                </div>
              </div>

              {/* Verified Contact Items */}
              <div className="space-y-4 text-sm">
                {/* Address */}
                <div className="flex items-start space-x-3 text-slate-700">
                  <div className="p-2 rounded-xl bg-royal-50 text-royal-600 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Workshop Address</p>
                    <address className="not-italic text-sm text-slate-800 font-medium leading-relaxed mt-0.5">
                      {BUSINESS_INFO.address.shop},<br />
                      {BUSINESS_INFO.address.landmark},<br />
                      {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.city} - {BUSINESS_INFO.address.pincode}
                    </address>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-3 text-slate-700">
                  <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Direct Phone Call</p>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="text-base font-bold text-navy-900 hover:text-royal-600 transition-colors block mt-0.5"
                    >
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                    <p className="text-[11px] text-slate-500">Available 10 AM to 7 PM for immediate advice</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-3 text-slate-700">
                  <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 mt-0.5">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">WhatsApp Fast Support</p>
                    <a
                      href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Deluxe Solution, I would like to enquire about your repair services.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-emerald-700 hover:underline block mt-0.5"
                    >
                      Chat on WhatsApp (+91 98900 17975)
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3 text-slate-700">
                  <div className="p-2 rounded-xl bg-purple-50 text-purple-600 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Address</p>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="text-sm font-medium text-slate-800 hover:text-royal-600 break-all block mt-0.5"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start space-x-3 text-slate-700">
                  <div className="p-2 rounded-xl bg-amber-50 text-amber-600 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Opening Hours</p>
                    <p className="text-sm font-semibold text-slate-800 mt-0.5">
                      10:00 AM – 7:00 PM
                    </p>
                    <p className="text-[11px] text-slate-500">Monday to Sunday (All 7 Days Open)</p>
                  </div>
                </div>
              </div>

              {/* Direct Directions Action */}
              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-4 py-3 bg-navy-900 hover:bg-navy-800 text-white rounded-xl text-xs font-bold transition-all shadow-xs"
                >
                  <span>Open Directions in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                </a>
              </div>
            </div>

            {/* Map Preview Container */}
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm p-2">
              <div className="h-64 rounded-2xl overflow-hidden bg-slate-100 relative">
                <iframe
                  title="Deluxe Solution Sinhgad Road Pune Location"
                  src="https://maps.google.com/maps?q=Shop+No+6+Vithal+Heights+Sinhgad+Road+Vadgaon+Budruk+Pune&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="p-3 text-center">
                <p className="text-xs text-slate-500">
                  Landmark: Opposite Santosh Hall, Lane No. 4, Sinhgad Road
                </p>
              </div>
            </div>

          </div>

          {/* =========================================================================
              RIGHT COLUMN: Validated Repair Enquiry Form (React Hook Form)
             ========================================================================= */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm relative">
              
              <div className="mb-8">
                <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-royal-600 uppercase tracking-wider mb-1">
                  <FileText className="w-4 h-4" />
                  <span>Online Service Booking</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
                  Repair Enquiry Form
                </h2>
                <p className="mt-1 text-slate-600 text-sm">
                  Fill in your equipment details below. Our technical team will review the issue and contact you with preliminary diagnostic insights.
                </p>
              </div>

              {/* Genuine Success Banner */}
              {submissionSuccess && (
                <div className="mb-8 p-6 bg-emerald-50 border border-emerald-200 rounded-2xl animate-fadeIn">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div className="space-y-2">
                      <h3 className="text-base font-bold text-emerald-950">
                        Repair Enquiry Received Successfully!
                      </h3>
                      <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
                        Your request has been registered under Tracking Reference{' '}
                        <strong className="font-mono bg-emerald-100 px-2 py-0.5 rounded text-emerald-900">
                          {submissionSuccess.reference_id}
                        </strong>
                        . Our technician at Sinhgad Road will contact you via your preferred method shortly.
                      </p>

                      <div className="pt-2 flex flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={handleDirectWhatsApp}
                          className="inline-flex items-center px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold shadow-xs transition-colors"
                        >
                          <MessageCircle className="w-3.5 h-3.5 mr-1" />
                          <span>Speed up via WhatsApp</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setSubmissionSuccess(null)}
                          className="px-3 py-1.5 text-xs text-emerald-800 hover:text-emerald-950 underline font-medium"
                        >
                          Submit another enquiry
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Genuine Error Banner */}
              {submissionError && (
                <div className="mb-8 p-4 bg-rose-50 border border-rose-200 rounded-2xl text-rose-800 text-sm flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-bold text-rose-900">Submission Notice:</p>
                    <p className="text-xs sm:text-sm">{submissionError}</p>
                    <p className="text-xs text-rose-700 pt-1">
                      You can also reach our workshop immediately at{' '}
                      <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-bold underline">
                        +91 98900 17975
                      </a>{' '}
                      or on WhatsApp.
                    </p>
                  </div>
                </div>
              )}

              {/* The Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                {/* Honeypot field (hidden from genuine users, catches spam bots) */}
                <input
                  type="text"
                  {...register('honeypot')}
                  style={{ display: 'none' }}
                  tabIndex="-1"
                  autoComplete="off"
                  aria-hidden="true"
                />

                {/* Field 1: Customer Name */}
                <div>
                  <label htmlFor="customer_name" className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="customer_name"
                    type="text"
                    placeholder="e.g. Rahul Deshmukh"
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-800 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                      errors.customer_name ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-200 focus:ring-royal-500/30 focus:border-royal-600'
                    }`}
                    {...register('customer_name', {
                      required: 'Please enter your full name',
                      minLength: { value: 2, message: 'Name must be at least 2 characters' }
                    })}
                  />
                  {errors.customer_name && (
                    <p className="mt-1 text-xs text-rose-600 font-medium">{errors.customer_name.message}</p>
                  )}
                </div>

                {/* Grid: Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="e.g. +91 98900 17975"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-800 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                        errors.phone ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-200 focus:ring-royal-500/30 focus:border-royal-600'
                      }`}
                      {...register('phone', {
                        required: 'Please enter your contact phone number',
                        pattern: {
                          value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{8,15}$/,
                          message: 'Please enter a valid phone number (min 10 digits)'
                        }
                      })}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-rose-600 font-medium">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="e.g. rahul@example.com"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-800 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                        errors.email ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-200 focus:ring-royal-500/30 focus:border-royal-600'
                      }`}
                      {...register('email', {
                        required: 'Please enter your email address for repair tracking',
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: 'Please enter a valid email address'
                        }
                      })}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-600 font-medium">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Service Category & Device Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Category */}
                  <div>
                    <label htmlFor="service_category" className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                      Service Category <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="service_category"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-royal-500/30 focus:border-royal-600"
                      {...register('service_category', { required: 'Please select a service category' })}
                    >
                      <option value="Computer & Laptop Repair">Computer & Laptop Repair</option>
                      <option value="CCTV Camera & Security Repair">CCTV Camera & Security Repair</option>
                      <option value="Currency Counting Machine Service">Currency Counting Machine Service</option>
                      <option value="Printers & Office Automation">Printers & Office Automation</option>
                      <option value="Other Technical Diagnosis">Other Technical Diagnosis</option>
                    </select>
                  </div>

                  {/* Device / Machine Type */}
                  <div>
                    <label htmlFor="device_type" className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                      Device / Machine Type <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="device_type"
                      type="text"
                      placeholder="e.g. Laptop, Mix Note Counter, 4CH DVR"
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-800 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                        errors.device_type ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-200 focus:ring-royal-500/30 focus:border-royal-600'
                      }`}
                      {...register('device_type', { required: 'Please specify the device or machine type' })}
                    />
                    {errors.device_type && (
                      <p className="mt-1 text-xs text-rose-600 font-medium">{errors.device_type.message}</p>
                    )}
                  </div>
                </div>

                {/* Brand & Model (Optional) */}
                <div>
                  <label htmlFor="brand_model" className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                    Brand & Model <span className="text-slate-400 font-normal lowercase">(optional)</span>
                  </label>
                  <input
                    id="brand_model"
                    type="text"
                    placeholder="e.g. Dell Inspiron 15, Hikvision DS-7204, Brother DCP-T310"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-royal-500/30 focus:border-royal-600"
                    {...register('brand_model')}
                  />
                </div>

                {/* Problem Description */}
                <div>
                  <label htmlFor="problem_description" className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                    Problem Description <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="problem_description"
                    rows="4"
                    placeholder="Please describe the symptoms (e.g. No display, machine stops counting at Rs. 500 notes, CCTV Camera 2 video loss, overheating)..."
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-800 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                      errors.problem_description ? 'border-rose-400 focus:ring-rose-200' : 'border-slate-200 focus:ring-royal-500/30 focus:border-royal-600'
                    }`}
                    {...register('problem_description', {
                      required: 'Please provide a short description of the issue',
                      minLength: { value: 10, message: 'Please describe the problem in at least 10 characters' }
                    })}
                  ></textarea>
                  {errors.problem_description && (
                    <p className="mt-1 text-xs text-rose-600 font-medium">{errors.problem_description.message}</p>
                  )}
                </div>

                {/* Preferred Contact Method & Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                      Preferred Contact Method
                    </label>
                    <div className="flex items-center space-x-4 pt-1 text-sm text-slate-700">
                      <label className="flex items-center space-x-1.5 cursor-pointer">
                        <input
                          type="radio"
                          value="Phone"
                          {...register('preferred_contact')}
                          className="text-royal-600 focus:ring-royal-500"
                        />
                        <span>Phone</span>
                      </label>
                      <label className="flex items-center space-x-1.5 cursor-pointer">
                        <input
                          type="radio"
                          value="WhatsApp"
                          {...register('preferred_contact')}
                          className="text-royal-600 focus:ring-royal-500"
                        />
                        <span>WhatsApp</span>
                      </label>
                      <label className="flex items-center space-x-1.5 cursor-pointer">
                        <input
                          type="radio"
                          value="Email"
                          {...register('preferred_contact')}
                          className="text-royal-600 focus:ring-royal-500"
                        />
                        <span>Email</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="preferred_date" className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                      Preferred Service / Drop-off Date <span className="text-slate-400 font-normal lowercase">(optional)</span>
                    </label>
                    <input
                      id="preferred_date"
                      type="date"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-royal-500/30 focus:border-royal-600"
                      {...register('preferred_date')}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-navy-900 font-bold text-base rounded-xl shadow-md transition-all active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin text-navy-900" />
                        <span>Submitting to Workshop Database...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Repair Enquiry</span>
                        <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <p className="mt-2 text-center text-xs text-slate-500">
                    Your details are kept confidential. An initial diagnostic check will be performed before any work is authorized.
                  </p>
                </div>
              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
