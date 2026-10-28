import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Laptop, 
  Camera, 
  Banknote, 
  Printer, 
  HelpCircle, 
  CheckCircle2, 
  ArrowRight,
  AlertCircle
} from 'lucide-react';

export default function DiagnosticSection({ onBookWithDiagnosis }) {
  const [selectedDevice, setSelectedDevice] = useState('laptop');
  const [selectedSymptom, setSelectedSymptom] = useState(0);

  const categories = [
    {
      id: 'laptop',
      name: 'Laptop / PC',
      icon: Laptop,
      symptoms: [
        {
          problem: 'Won’t turn on / Completely dead power',
          cause: 'Power adapter fault, charging socket breakdown, or motherboard power rail short circuit.',
          category: 'Computer & Laptop Repair',
          device: 'Laptop'
        },
        {
          problem: 'Screen flickering / Broken display panel',
          cause: 'Loose LVDS video ribbon cable, damaged IPS panel, or failed display backlight controller.',
          category: 'Computer & Laptop Repair',
          device: 'Laptop'
        },
        {
          problem: 'Extremely slow / Freezing / Blue Screen (BSOD)',
          cause: 'Failing hard drive with bad sectors, RAM mismatch, or corrupted Windows system registry.',
          category: 'Computer & Laptop Repair',
          device: 'Desktop / Laptop'
        },
        {
          problem: 'Overheating / Fan loud rattling noise',
          cause: 'Dried thermal paste, clogged copper heatsink fins, or worn-out exhaust bearing.',
          category: 'Computer & Laptop Repair',
          device: 'Laptop'
        }
      ]
    },
    {
      id: 'cctv',
      name: 'CCTV Surveillance',
      icon: Camera,
      symptoms: [
        {
          problem: 'Black screen / Video loss on specific channels',
          cause: 'Damaged 12V SMPS channel, loose BNC connector, or faulty camera image sensor.',
          category: 'CCTV Camera & Security Repair',
          device: 'CCTV Camera'
        },
        {
          problem: 'DVR beeping continuously / Not recording footage',
          cause: 'Hard disk drive bad sectors, unformatted storage drive, or internal power surge in DVR board.',
          category: 'CCTV Camera & Security Repair',
          device: 'DVR Recorder'
        },
        {
          problem: 'No remote view on smartphone mobile app',
          cause: 'LAN router IP gateway misconfiguration or offline Hik-Connect / DMSS cloud port.',
          category: 'CCTV Camera & Security Repair',
          device: 'CCTV System'
        }
      ]
    },
    {
      id: 'currency',
      name: 'Currency Counter',
      icon: Banknote,
      symptoms: [
        {
          problem: 'Notes getting jammed / Stacking issues',
          cause: 'Worn-out rubber friction rollers or improper hopper thickness gap adjustment.',
          category: 'Currency Counting Machine Service',
          device: 'Currency Counter'
        },
        {
          problem: 'False fake-note alarm (Error UV / MG / IR)',
          cause: 'Accumulated currency paper dust on optical sensors, color sensor drift, or magnetic head misalignment.',
          category: 'Currency Counting Machine Service',
          device: 'Mix Note Counter'
        },
        {
          problem: 'Total amount counting discrepancy',
          cause: 'Sensor calibration required for new RBI currency note dimensions and denominations.',
          category: 'Currency Counting Machine Service',
          device: 'Currency Machine'
        }
      ]
    },
    {
      id: 'printer',
      name: 'Printer / Peripherals',
      icon: Printer,
      symptoms: [
        {
          problem: 'Paper feed jam / Multiple sheets pulled',
          cause: 'Dried paper pickup roller rubber or small foreign object trapped in the paper path.',
          category: 'Printers & Office Automation',
          device: 'Printer'
        },
        {
          problem: 'Faded printouts / Missing color lines',
          cause: 'Clogged printhead nozzles, air bubbles in ink tubes, or empty toner drum unit.',
          category: 'Printers & Office Automation',
          device: 'Printer'
        }
      ]
    }
  ];

  const currentCategory = categories.find((c) => c.id === selectedDevice) || categories[0];
  const activeSymptom = currentCategory.symptoms[selectedSymptom] || currentCategory.symptoms[0];

  return (
    <section id="diagnostics" className="py-24 bg-slate-50 border-y border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-royal-100 text-royal-700 text-xs font-bold rounded-full uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Interactive Fault Guide</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-navy-900 tracking-tight">
            Identify Your Equipment Issue
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Select your equipment and common symptoms below to understand typical diagnostic procedures before booking.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedDevice === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedDevice(cat.id);
                  setSelectedSymptom(0);
                }}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-xs ${
                  isSelected
                    ? 'bg-navy-900 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-amber-400' : 'text-royal-600'}`} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Diagnosis Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-md p-6 sm:p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* Symptoms list */}
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Common Symptoms in {currentCategory.name}:
              </p>
              <div className="space-y-2">
                {currentCategory.symptoms.map((item, idx) => {
                  const isActive = selectedSymptom === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedSymptom(idx)}
                      className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-start justify-between ${
                        isActive
                          ? 'border-royal-600 bg-royal-50/70 text-navy-900 font-bold shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                      }`}
                    >
                      <span>{item.problem}</span>
                      {isActive && <CheckCircle2 className="w-4 h-4 text-royal-600 flex-shrink-0 mt-0.5 ml-2" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Diagnosis Result Box */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 h-full flex flex-col justify-between space-y-5">
              <div>
                <div className="flex items-center space-x-2 text-royal-700 text-xs font-bold uppercase tracking-wide mb-2">
                  <AlertCircle className="w-4 h-4 text-amber-500" />
                  <span>Workbench Insight</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-navy-900">
                  {activeSymptom.problem}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                  {activeSymptom.cause}
                </p>

                <div className="mt-4 bg-white rounded-xl p-3.5 border border-slate-200 text-xs text-slate-600 space-y-1">
                  <p className="font-bold text-navy-900">Deluxe Solution Protocol:</p>
                  <p>1. Physical inspection on our diagnostic bench</p>
                  <p>2. Clear quotation provided to you</p>
                  <p>3. Repair performed only after your approval</p>
                </div>
              </div>

              <button
                onClick={() => onBookWithDiagnosis(activeSymptom.category, activeSymptom.device, activeSymptom.problem)}
                className="w-full inline-flex items-center justify-center px-4 py-3 bg-amber-500 hover:bg-amber-400 text-navy-950 font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-transform active:scale-95 group"
              >
                <span>Book Repair for this Issue</span>
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
