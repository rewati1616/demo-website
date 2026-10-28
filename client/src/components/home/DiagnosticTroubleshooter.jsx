import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Laptop, 
  Camera, 
  Banknote, 
  Printer, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight,
  HelpCircle 
} from 'lucide-react';

const TROUBLESHOOT_DATA = [
  {
    id: 'laptop',
    name: 'Laptop / Computer',
    icon: Laptop,
    symptoms: [
      {
        problem: 'Won’t turn on / Dead power',
        possibleCauses: 'Power adapter fault, charging socket breakdown, or motherboard power rail short circuit.',
        serviceCategory: 'Computer & Laptop Repair',
        deviceType: 'Laptop'
      },
      {
        problem: 'Screen flickering / Broken display',
        possibleCauses: 'Loose LVDS video cable, damaged IPS panel, or failed graphics chip.',
        serviceCategory: 'Computer & Laptop Repair',
        deviceType: 'Laptop'
      },
      {
        problem: 'Extremely slow / Freezing / Blue Screen (BSOD)',
        possibleCauses: 'Failing HDD with bad sectors, RAM mismatch, or Windows OS corruption.',
        serviceCategory: 'Computer & Laptop Repair',
        deviceType: 'Laptop'
      },
      {
        problem: 'Overheating / Fan loud noise',
        possibleCauses: 'Dried thermal paste, clogged copper heatsink, or failing exhaust bearing.',
        serviceCategory: 'Computer & Laptop Repair',
        deviceType: 'Laptop'
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
        possibleCauses: 'Damaged 12V SMPS channel, disconnected BNC connector, or faulty camera sensor.',
        serviceCategory: 'CCTV Camera & Security Repair',
        deviceType: 'CCTV Camera'
      },
      {
        problem: 'DVR beeping continuously / Not recording',
        possibleCauses: 'Hard disk drive bad sectors, full unformatted disk, or power surge in DVR board.',
        serviceCategory: 'CCTV Camera & Security Repair',
        deviceType: 'DVR / NVR Recorder'
      },
      {
        problem: 'No remote view on mobile smartphone app',
        possibleCauses: 'LAN router IP gateway misconfiguration or offline Hik-Connect / DMSS cloud port.',
        serviceCategory: 'CCTV Camera & Security Repair',
        deviceType: 'CCTV Network'
      }
    ]
  },
  {
    id: 'currency',
    name: 'Currency Counter',
    icon: Banknote,
    symptoms: [
      {
        problem: 'Notes getting jammed / Stacking issue',
        possibleCauses: 'Worn friction rubber rollers, incorrect hopper thickness gap adjustment.',
        serviceCategory: 'Currency Counting Machine Service',
        deviceType: 'Note Counting Machine'
      },
      {
        problem: 'False fake-note alarm (Error UV / MG / IR)',
        possibleCauses: 'Dust accumulation on optical sensors, color sensor drift, or magnetic head misalignment.',
        serviceCategory: 'Currency Counting Machine Service',
        deviceType: 'Mix Note Counter'
      },
      {
        problem: 'Total amount counting discrepancy',
        possibleCauses: 'Sensor calibration required for new RBI currency note dimensions.',
        serviceCategory: 'Currency Counting Machine Service',
        deviceType: 'Currency Counter'
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
        possibleCauses: 'Pickup roller rubber dried out or foreign object in the paper path.',
        serviceCategory: 'Printers & Office Automation',
        deviceType: 'Printer'
      },
      {
        problem: 'Faded printouts / Missing color lines',
        possibleCauses: 'Clogged printhead nozzles, dry ink tubes, or empty toner drum unit.',
        serviceCategory: 'Printers & Office Automation',
        deviceType: 'Printer'
      }
    ]
  }
];

export default function DiagnosticTroubleshooter() {
  const [selectedDevice, setSelectedDevice] = useState('laptop');
  const [selectedSymptom, setSelectedSymptom] = useState(0);
  const navigate = useNavigate();

  const currentCategory = TROUBLESHOOT_DATA.find((d) => d.id === selectedDevice) || TROUBLESHOOT_DATA[0];
  const activeSymptom = currentCategory.symptoms[selectedSymptom] || currentCategory.symptoms[0];

  const handleBookFromDiagnosis = () => {
    navigate('/contact', {
      state: {
        category: activeSymptom.serviceCategory,
        deviceType: activeSymptom.deviceType,
        problemDescription: `Experiencing: ${activeSymptom.problem}. Possible cause identified: ${activeSymptom.possibleCauses}`
      }
    });
  };

  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-1 px-3 py-1 bg-royal-100 text-royal-700 text-xs font-bold rounded-full uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 mr-1" />
            Interactive Fault Guide
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
            Identify Your Equipment Issue
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Select your equipment and common symptoms below to understand typical diagnostic steps before booking.
          </p>
        </div>

        {/* Device Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {TROUBLESHOOT_DATA.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedDevice === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedDevice(cat.id);
                  setSelectedSymptom(0);
                }}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm ${
                  isSelected
                    ? 'bg-navy-900 text-white shadow-navy-900/20'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-amber-400' : 'text-royal-600'}`} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Diagnostic Panel */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Symptoms list */}
            <div>
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                Common Symptoms in {currentCategory.name}
              </h3>
              <div className="space-y-2">
                {currentCategory.symptoms.map((symp, idx) => {
                  const isActive = selectedSymptom === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedSymptom(idx)}
                      className={`w-full text-left p-3.5 rounded-xl border text-sm font-medium transition-all flex items-start justify-between ${
                        isActive
                          ? 'border-royal-600 bg-royal-50/60 text-navy-900 shadow-sm'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                      }`}
                    >
                      <span>{symp.problem}</span>
                      {isActive && <CheckCircle2 className="w-4 h-4 text-royal-600 flex-shrink-0 mt-0.5 ml-2" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Diagnosis Result & Upfront Advice */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 text-royal-700 text-xs font-bold uppercase tracking-wide mb-2">
                  <AlertCircle className="w-4 h-4 text-amber-500" />
                  <span>Bench Diagnosis Insight</span>
                </div>
                <h4 className="text-lg font-bold text-navy-900 mb-2">
                  {activeSymptom.problem}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {activeSymptom.possibleCauses}
                </p>

                <div className="bg-white rounded-lg p-3.5 border border-slate-200 mb-4 text-xs text-slate-600 space-y-1.5">
                  <div className="flex items-center text-slate-700 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></span>
                    Deluxe Solution Repair Protocol:
                  </div>
                  <p>1. Physical inspection & diagnostic bench check</p>
                  <p>2. Clear cost quotation provided to you</p>
                  <p>3. Repair performed only after your explicit confirmation</p>
                </div>
              </div>

              <button
                onClick={handleBookFromDiagnosis}
                className="w-full inline-flex items-center justify-center px-4 py-3 bg-amber-500 hover:bg-amber-400 text-navy-900 font-bold text-sm rounded-xl shadow-sm transition-transform active:scale-95 group"
              >
                <span>Book Repair for this Issue</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
