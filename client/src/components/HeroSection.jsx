import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Wrench, 
  Phone, 
  ChevronRight, 
  ShieldCheck, 
  Cpu, 
  MapPin, 
  Clock, 
  Sparkles,
  CheckCircle2,
  Layers
} from 'lucide-react';
import { BUSINESS_INFO } from '../constants/businessInfo';

export default function HeroSection({ onBookRepair }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const showcaseItems = [
    {
      title: "Currency Counting Machine",
      tag: "Mix Value & Fake Note Detectors",
      image: "/images/currency-mix-counter.png",
      desc: "Color sensor calibration, note jam fixes & optical maintenance."
    },
    {
      title: "Computer & Laptop Repair",
      tag: "Motherboard & Chip-Level Fixes",
      image: "/images/desktop-pc.png",
      desc: "Screen, battery, hinge, RAM/SSD upgrades & Windows repair."
    },
    {
      title: "CCTV Surveillance Systems",
      tag: "HD Cameras & DVR/NVR Recorders",
      image: "/images/cctv-setup.png",
      desc: "Video loss troubleshooting, hard drive recovery & mobile viewing."
    },
    {
      title: "Printers & Office Automation",
      tag: "Refill Tank & Laser Printers",
      image: "/images/brother-printer.png",
      desc: "Paper feed repair, printhead cleaning & toner servicing."
    }
  ];

  const currentItem = showcaseItems[activeImageIndex];

  return (
    <section id="home" className="relative pt-28 lg:pt-36 pb-20 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white overflow-hidden">
      {/* Decorative ambient radial glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-royal-600/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Text & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Location Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-navy-800/90 border border-navy-700/80 text-xs font-semibold text-amber-400">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              <span>Reliable Technology Repair Services in Pune</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black tracking-tight leading-tight sm:leading-tight">
              Expert Repairs.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-sky-500 to-amber-300">
                Reliable Solutions.
              </span>
            </h1>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
              Deluxe Solution is Sinhgad Road's trusted technical service workshop for <strong>computers, laptops, CCTV security systems, and currency counting machines</strong>. We provide transparent upfront quotes, accurate bench diagnostics, and dependable technical workmanship.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <button
                onClick={onBookRepair}
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm sm:text-base font-bold text-navy-950 bg-amber-500 hover:bg-amber-400 rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all transform hover:-translate-y-0.5 active:scale-95 group"
              >
                <span>Book a Repair</span>
                <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-navy-800/90 hover:bg-navy-800 border border-slate-700 rounded-xl transition-all hover:border-slate-500"
              >
                <Phone className="w-4 h-4 mr-2 text-royal-400" />
                <span>Call {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-navy-800/90 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-300">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Transparent Quotes</span>
              </div>
              <div className="flex items-center space-x-2">
                <Cpu className="w-4 h-4 text-royal-400 flex-shrink-0" />
                <span>Chip-Level Repair</span>
              </div>
              <div className="flex items-center space-x-2 col-span-2 sm:col-span-1">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Sinhgad Road Walk-in Store</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Hardware Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="bg-gradient-to-tr from-navy-900 via-navy-850 to-navy-800 border border-navy-700 rounded-3xl p-4 sm:p-6 shadow-2xl relative">
              
              {/* Header inside showcase */}
              <div className="flex items-center justify-between pb-3 border-b border-navy-800 text-xs">
                <span className="font-bold text-slate-300 flex items-center">
                  <Wrench className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
                  Workshop Diagnostic Bench
                </span>
                <span className="bg-emerald-950/80 text-emerald-400 border border-emerald-800/80 px-2.5 py-0.5 rounded-full text-[10px] font-bold">
                  Sinhgad Road, Pune
                </span>
              </div>

              {/* Main Image Showcase */}
              <div className="relative mt-4 h-64 sm:h-72 bg-navy-950/70 rounded-2xl border border-navy-700/60 flex items-center justify-center p-6 overflow-hidden">
                <motion.img
                  key={currentItem.image}
                  src={currentItem.image}
                  alt={currentItem.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="max-h-full max-w-full object-contain filter drop-shadow-xl"
                  loading="eager"
                />

                {/* Floating pill over image */}
                <div className="absolute bottom-3 left-3 bg-navy-900/90 backdrop-blur-md px-3 py-1 rounded-lg border border-navy-700 text-[11px] text-amber-300 font-bold">
                  {currentItem.tag}
                </div>
              </div>

              {/* Selected Equipment Description */}
              <div className="mt-4 bg-navy-900/90 rounded-xl p-3 border border-navy-700/80">
                <h3 className="text-xs font-bold text-white">{currentItem.title}</h3>
                <p className="text-[11px] text-slate-300 mt-0.5">{currentItem.desc}</p>
              </div>

              {/* Equipment Thumbnails Selector */}
              <div className="mt-4 pt-3 border-t border-navy-800/80">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Select Equipment Category:
                </p>
                <div className="grid grid-cols-4 gap-2">
                  {showcaseItems.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`p-2 rounded-xl border text-center transition-all flex flex-col items-center justify-center h-14 ${
                        activeImageIndex === idx
                          ? 'border-amber-400 bg-amber-500/10 text-amber-400 shadow-xs'
                          : 'border-navy-700 bg-navy-950/50 hover:border-slate-500 text-slate-400'
                      }`}
                    >
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="h-7 w-auto object-contain mb-1" 
                      />
                      <span className="text-[9px] font-bold line-clamp-1">{item.title.split(' ')[0]}</span>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
