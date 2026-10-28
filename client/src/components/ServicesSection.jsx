import React from 'react';
import { motion } from 'framer-motion';
import { 
  Laptop, 
  Camera, 
  Banknote, 
  Printer, 
  CheckCircle2, 
  ArrowRight,
  ShieldAlert,
  Wrench,
  ChevronRight
} from 'lucide-react';
import { BUSINESS_INFO } from '../constants/businessInfo';

export default function ServicesSection({ onSelectService }) {
  const services = [
    {
      id: "laptop-computer-repair",
      title: "Computer & Laptop Repair",
      subtitle: "Chip-level troubleshooting, motherboard repair, and genuine screen replacements.",
      image: "/images/desktop-pc.png",
      categoryKey: "Computer & Laptop Repair",
      defaultDevice: "Laptop / Desktop",
      points: [
        "Laptop & desktop troubleshooting (Dell, HP, Lenovo, Asus, Acer)",
        "Hardware diagnostics & component-level repair",
        "Broken screen, hinge & keyboard replacement",
        "RAM & high-speed NVMe SSD speed upgrade",
        "Overheating, thermal paste & cooling fan service",
        "Operating system & software troubleshooting"
      ]
    },
    {
      id: "cctv-camera-repair",
      title: "CCTV Camera & Security Repair",
      subtitle: "Inspection, cabling repairs, and DVR/NVR diagnosis for commercial & residential setups.",
      image: "/images/cctv-setup.png",
      categoryKey: "CCTV Camera & Security Repair",
      defaultDevice: "CCTV Camera / DVR",
      points: [
        "Camera troubleshooting & video loss fault diagnosis",
        "Recording and display issue diagnosis",
        "DVR / NVR hard drive beeping and storage recovery",
        "Power supply & BNC / RJ45 connector replacement",
        "Night vision infrared (IR) sensor diagnostics",
        "Hikvision, CP Plus, Dahua equipment support"
      ]
    },
    {
      id: "currency-machine-repair",
      title: "Currency Counting Machine Service",
      subtitle: "Precision servicing, optical sensor cleaning, and note jam fixes for retail cash counters.",
      image: "/images/currency-mix-counter.png",
      categoryKey: "Currency Counting Machine Service",
      defaultDevice: "Currency Note Counter",
      points: [
        "Machine troubleshooting & mechanical servicing",
        "Counting and detection issue diagnosis",
        "Color, UV, MG & IR fake note sensor calibration",
        "Note jam rubber friction roller replacement",
        "Keypad button & display segment repair",
        "Preventative maintenance & currency dust cleaning"
      ]
    },
    {
      id: "printer-office-automation",
      title: "Printers & Office Automation",
      subtitle: "Maintenance for refill ink tank printers, laser printers, and commercial paper shredders.",
      image: "/images/brother-printer.png",
      categoryKey: "Printers & Office Automation",
      defaultDevice: "Printer / Shredder",
      points: [
        "Refill ink tank & laser printer servicing (Brother, HP, Canon, Epson)",
        "Paper pickup roller & continuous paper jam fixes",
        "Printhead nozzle unclogging & streak line cleaning",
        "Cartridge toner refilling & reset procedures",
        "Power supply & logic board diagnostics",
        "Commercial document paper shredder repair"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-royal-100 text-royal-700 text-xs font-bold rounded-full uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5 text-royal-600" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-navy-900 tracking-tight">
            Specialized Equipment Repair Services
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Deluxe Solution inspects hardware down to the component level on our workbench, delivering reliable repairs with transparent quotations before any work begins.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-canvas border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-xl hover:border-royal-300 transition-all duration-300 group"
            >
              <div>
                {/* Header inside card with image */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 pb-6 border-b border-slate-200">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 bg-white rounded-2xl border border-slate-200 p-2 flex items-center justify-center flex-shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="max-h-full max-w-full object-contain"
                      loading="lazy" 
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-royal-600">
                      Category 0{index + 1}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-navy-900 mt-0.5 group-hover:text-royal-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                {/* Common Problems / Features */}
                <div className="py-6 space-y-2.5">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Services & Problems Handled:
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {service.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start">
                        <CheckCircle2 className="w-4 h-4 text-royal-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-slate-500">
                  Bench inspection & estimate provided
                </span>

                <button
                  type="button"
                  onClick={() => onSelectService(service.categoryKey, service.defaultDevice)}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 bg-navy-900 hover:bg-royal-600 text-white rounded-xl text-xs font-bold transition-all shadow-xs group-hover:bg-royal-600"
                >
                  <span>Book this Repair</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Real Assessment Transparency Note */}
        <div className="mt-12 bg-amber-50 border border-amber-200 rounded-2xl p-4 sm:p-5 flex items-start space-x-3 text-xs sm:text-sm text-amber-900">
          <ShieldAlert className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Honest Technical Assessment:</strong> We evaluate every device transparently. If equipment is beyond economical repair or replacement parts are obsolete, we advise you honestly before you incur unnecessary expense.
          </p>
        </div>

      </div>
    </section>
  );
}
