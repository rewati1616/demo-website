import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Laptop, 
  Monitor, 
  Camera, 
  Banknote, 
  Printer, 
  ShieldAlert, 
  CheckCircle2, 
  ArrowRight, 
  Wrench, 
  ChevronRight,
  Sparkles,
  HelpCircle,
  Clock
} from 'lucide-react';
import { BUSINESS_INFO } from '../constants/businessInfo';

export default function ServicesPage() {
  const navigate = useNavigate();

  const handleBookService = (categoryName, defaultDevice) => {
    navigate('/contact', {
      state: {
        category: categoryName,
        deviceType: defaultDevice,
      }
    });
  };

  const detailedServices = [
    {
      id: "laptop-computer-repair",
      title: "Computer & Laptop Repair",
      subtitle: "Diagnostic troubleshooting, chip-level motherboard repair, and genuine screen replacements.",
      image: "/images/desktop-pc.png",
      categoryKey: "Computer & Laptop Repair",
      defaultDevice: "Laptop",
      overview: "Laptops are compact, tightly engineered machines where small heat build-ups or loose connectors can cause severe faults. At Deluxe Solution, we inspect both hardware power rails and software integrity to accurately diagnose laptop faults before suggesting any part replacements.",
      commonProblems: [
        "No power / laptop dead / charging port loose or damaged",
        "Screen cracked, blank display, horizontal lines, or damaged hinges",
        "Keyboard keys not responding, sticky keys, or trackpad failure",
        "Battery not charging or draining unusually quickly",
        "Overheating, thermal throttling, and cooling fan rattling",
        "Liquid spill diagnosis and component corrosion cleaning"
      ],
      process: [
        { title: "Physical Inspection", desc: "Checking power adapter, charging rails, and internal thermal paste integrity." },
        { title: "Chip-Level Diagnosis", desc: "Testing capacitors, MOSFETs, and display cables using digital multimeter bench tools." },
        { title: "Transparent Quote", desc: "Customer is notified of the exact fault and cost of repair prior to proceeding." },
        { title: "Stress Testing", desc: "Thermal and memory burn-in tests to confirm system stability before handover." }
      ],
      benefits: "Avoids costly premature motherboard replacements when only a minor power capacitor or loose ribbon cable is at fault."
    },
    {
      id: "desktop-pc",
      title: "Desktop Computer Troubleshooting & Upgrades",
      subtitle: "Custom desktop diagnostics, power supply testing, and high-speed SSD/RAM enhancements.",
      image: "/images/desktop-pc.png",
      categoryKey: "Computer & Laptop Repair",
      defaultDevice: "Desktop PC",
      overview: "Desktop computers in homes and commercial offices face dust buildup, power surges, and thermal paste drying. We provide bench diagnostics for office towers, custom workstations, and educational systems.",
      commonProblems: [
        "PC turns on with fans spinning but produces no display (No POST)",
        "Frequent random shutdowns, blue screen of death (BSOD) crashes",
        "SMPS power supply failure or burnt smell",
        "Continuous reboot loops after Windows or driver updates",
        "Extreme boot slowness on older mechanical hard drives",
        "Cabinet deep cleaning and thermal paste replacement"
      ],
      process: [
        { title: "Power Rail Check", desc: "Testing SMPS 12V, 5V, and 3.3V power rails under artificial load." },
        { title: "Component Isolation", desc: "Testing RAM modules, graphics card, and storage individually on diagnostic testbenches." },
        { title: "Clean & Upgrade", desc: "Ultrasonic dust clean-up, premium thermal paste application, and NVMe SSD cloning." }
      ],
      benefits: "Extends your computer's functional life by years at a fraction of the cost of purchasing a brand-new desktop."
    },
    {
      id: "cctv-camera-repair",
      title: "CCTV Camera & Security Surveillance Repair",
      subtitle: "Troubleshooting for HD analog, IP network cameras, DVR/NVR recorders, and mobile viewing.",
      image: "/images/cctv-setup.png",
      categoryKey: "CCTV Camera & Security Repair",
      defaultDevice: "CCTV Camera / DVR",
      overview: "Security cameras are critical for residential societies, shops, and offices. Our technicians handle faulty wiring, camera sensors, power supplies, and recording glitches for leading brands including Hikvision, CP Plus, and Dahua.",
      commonProblems: [
        "Blank screen or 'Video Loss' error on specific camera channels",
        "DVR continuously beeping or reporting 'No HDD Found' / recording error",
        "Poor night vision infrared (IR) LED visibility or foggy lens",
        "Damaged 3+1 coaxial cabling, loose BNC connectors, or power drop",
        "Loss of live streaming on mobile apps (Hik-Connect / gDMSS) after Wi-Fi router changes",
        "SMPS centralized 4/8/16 channel power supply breakdown"
      ],
      process: [
        { title: "Circuit & Voltage Check", desc: "Measuring 12V DC power drop across long cable runs." },
        { title: "DVR/NVR Storage Check", desc: "Checking SATA hard drive health, sector errors, and recording schedule." },
        { title: "Signal & Lens Tuning", desc: "Testing sensor output, cleaning optical glass, and aligning viewing angle." }
      ],
      benefits: "Restores perimeter security and ensures critical footage is actively recorded without silent DVR failures."
    },
    {
      id: "currency-machine-repair",
      title: "Currency Counting Machine Service & Calibration",
      subtitle: "Precision maintenance for retail and banking note counters with counterfeit detection.",
      image: "/images/currency-mix-counter.png",
      categoryKey: "Currency Counting Machine Service",
      defaultDevice: "Currency Counter",
      overview: "Note counting machines operate with sensitive optical sensors and high-speed friction rollers. Paper dust, note wrinkles, and mechanical wear frequently lead to counting discrepancies and false counterfeit alarms.",
      commonProblems: [
        "Notes jamming in hopper or stacker during fast counting",
        "False counterfeit alerts (UV / MG / IR sensor error codes)",
        "Discrepancies in total value calculation on mix note counters",
        "Display screen segment dead or keypad buttons unresponsive",
        "Worn-out rubber friction rollers causing multiple notes to pull through",
        "Machine failing to power on or internal motor motor belt slipping"
      ],
      process: [
        { title: "Optical & Magnetic Cleaning", desc: "Removing compacted currency dust from optical, infrared, and magnetic sensors." },
        { title: "Roller & Belt Servicing", desc: "Replacing or resurfacing feed rubber rollers and adjusting hopper gap screws." },
        { title: "Sensor Calibration", desc: "Calibrating color sensors against genuine Indian Rupee currency standards." }
      ],
      benefits: "Prevents costly cash tally discrepancies, avoids customer delays at retail cash counters, and ensures reliable counterfeit detection."
    },
    {
      id: "printer-office-automation",
      title: "Printers & Office Automation Repair",
      subtitle: "Maintenance for refill ink tank printers, laserjet printers, and commercial paper shredders.",
      image: "/images/brother-printer.png",
      categoryKey: "Printers & Office Automation",
      defaultDevice: "Printer",
      overview: "Printers suffer from dried ink in printheads, worn paper feed rollers, and toner cartridge sensor errors. Deluxe Solution services popular tank and laser models like Brother, HP, Canon, and Epson.",
      commonProblems: [
        "Paper jam or multiple sheets feeding simultaneously",
        "Printout has missing lines, faded colors, or white horizontal bands",
        "Printer offline error or communication USB driver failure",
        "Ink absorber pad full / waste ink counter reset requirement",
        "Laser printer paper crinkling or toner smudging on printed pages",
        "Paper shredder blade jamming on office documents"
      ],
      process: [
        { title: "Mechanical Path Inspection", desc: "Clearing foreign objects, inspecting pickup gears and separator pads." },
        { title: "Printhead / Laser Diagnostics", desc: "Flushing dried pigment ink or cleaning laser scanner mirror assembly." },
        { title: "Alignment & Test Print", desc: "Running test patterns to verify sharp text density and clean output." }
      ],
      benefits: "Restores crisp document output without forcing expensive whole-unit printer replacements."
    },
    {
      id: "virus-software",
      title: "Virus Removal & Performance Optimization",
      subtitle: "Safe malware eradication, clean OS installation, and system optimization.",
      image: "/images/desktop-pc.png",
      categoryKey: "Computer & Laptop Repair",
      defaultDevice: "PC / Laptop",
      overview: "Malware, spyware, and background bloatware can severely degrade computer speed and put sensitive personal or business files at risk. We perform thorough offline diagnostics to sanitize your operating system.",
      commonProblems: [
        "Unexpected pop-ups, browser redirects, and search engine hijacking",
        "High CPU / RAM usage causing constant fan spin even when idle",
        "Ransomware or encrypted files alert",
        "Windows failing to update or corrupted system registry",
        "Data backup before clean operating system reinstallation"
      ],
      process: [
        { title: "Offline Scan", desc: "Scanning drive using bootable diagnostic utilities to detect stealth rootkits." },
        { title: "System Cleanup", desc: "Removing startup junk, rogue background services, and temp caches." },
        { title: "Optimization", desc: "Configuring security patches, verified drivers, and performance tweaks." }
      ],
      benefits: "Restores fast, secure operation without losing important customer documents."
    }
  ];

  return (
    <div className="bg-canvas min-h-screen py-12">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 bg-royal-100 text-royal-700 text-xs font-bold rounded-full uppercase tracking-wider mb-3">
          <Wrench className="w-3.5 h-3.5 text-royal-600" />
          <span>Professional Technical Services</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy-900 tracking-tight">
          Comprehensive Repair Capabilities
        </h1>
        <p className="mt-3 text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
          Deluxe Solution delivers reliable, bench-tested repairs for computing, surveillance, and office currency equipment on Sinhgad Road, Pune.
        </p>

        {/* Realistic repair disclaimer as required */}
        <div className="mt-6 inline-flex items-center space-x-2 bg-amber-50 border border-amber-200 text-amber-900 px-4 py-2 rounded-xl text-xs sm:text-sm text-left max-w-2xl mx-auto">
          <ShieldAlert className="w-4 h-4 text-amber-600 flex-shrink-0" />
          <span>
            <strong>Honest Technical Assessment:</strong> We evaluate every device transparently. If a component is beyond economical repair or parts are obsolete, we advise you honestly before you incur unnecessary expense.
          </span>
        </div>
      </section>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {detailedServices.map((service, index) => (
          <div
            key={service.id}
            id={service.id}
            className={`bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-12 gap-8 items-start scroll-mt-28`}
          >
            {/* Left/Main Column: Description & Issues */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-royal-600">
                  Category 0{index + 1}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mt-1">
                  {service.title}
                </h2>
                <p className="text-sm font-semibold text-royal-600 mt-1">
                  {service.subtitle}
                </p>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  {service.overview}
                </p>
              </div>

              {/* Common Problems Handled */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
                <h3 className="text-xs font-bold text-navy-900 uppercase tracking-wider mb-3">
                  Common Issues We Diagnose & Fix:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {service.commonProblems.map((prob, pIdx) => (
                    <div key={pIdx} className="flex items-start text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-royal-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{prob}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Repair Process */}
              <div>
                <h3 className="text-xs font-bold text-navy-900 uppercase tracking-wider mb-3">
                  Our Bench Repair Process:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {service.process.map((step, sIdx) => (
                    <div key={sIdx} className="bg-white border border-slate-200 rounded-xl p-3.5 shadow-xs">
                      <p className="text-xs font-bold text-navy-900 flex items-center">
                        <span className="w-4 h-4 rounded-full bg-navy-900 text-amber-400 text-[10px] flex items-center justify-center mr-1.5 font-bold">
                          {sIdx + 1}
                        </span>
                        {step.title}
                      </p>
                      <p className="text-[11px] text-slate-500 mt-1.5 leading-snug">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefit Note */}
              <div className="border-l-4 border-amber-500 pl-4 py-1 text-xs text-slate-600 italic">
                <strong>Why Professional Diagnosis Matters:</strong> {service.benefits}
              </div>
            </div>

            {/* Right Column: Visual & Direct CTA */}
            <div className="lg:col-span-4 bg-slate-50 rounded-2xl border border-slate-200 p-6 flex flex-col justify-between h-full space-y-6">
              <div className="bg-white rounded-xl p-4 border border-slate-200 flex items-center justify-center h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.title} at Deluxe Solution Pune`}
                  className="max-h-full object-contain filter drop-shadow-sm"
                  loading="lazy"
                />
              </div>

              <div className="space-y-3">
                <div className="text-xs text-slate-500 space-y-1">
                  <div className="flex justify-between">
                    <span>Typical Inspection:</span>
                    <span className="font-semibold text-slate-800">Same Day / 24 Hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Parts Guarantee:</span>
                    <span className="font-semibold text-slate-800">Genuine / Manufacturer</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Service Location:</span>
                    <span className="font-semibold text-slate-800">Sinhgad Road Center</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleBookService(service.categoryKey, service.defaultDevice)}
                  className="w-full inline-flex items-center justify-center px-4 py-3 bg-amber-500 hover:bg-amber-400 text-navy-900 font-bold text-sm rounded-xl shadow-sm transition-all transform active:scale-95 group"
                >
                  <span>Book this Repair</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="w-full inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-slate-700 hover:text-navy-900 bg-white border border-slate-200 hover:bg-slate-100 rounded-xl transition-colors"
                >
                  Call +91 98900 17975
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-navy-900 text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Not Sure Which Service Matches Your Issue?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-6">
            Bring your equipment to our workshop on Sinhgad Road, Pune or describe the symptoms to our technician. We will guide you on the best course of action.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-navy-900 font-bold text-sm rounded-xl shadow-md transition-all active:scale-95"
            >
              Submit an Online Repair Enquiry
            </Link>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Deluxe Solution, I need assistance with a device repair.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl transition-all"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
