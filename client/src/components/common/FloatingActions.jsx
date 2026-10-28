import React, { useState } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';
import { BUSINESS_INFO } from '../../constants/businessInfo';

export default function FloatingActions() {
  const [showTooltip, setShowTooltip] = useState(true);

  // Pre-filled WhatsApp message as requested in the specification
  const whatsappMessage = encodeURIComponent(
    "Hello Deluxe Solution, I would like to enquire about your repair services."
  );
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${whatsappMessage}`;

  return (
    <>
      {/* Floating WhatsApp Action (Bottom Right) */}
      <aside aria-label="Quick Contact Actions" className="fixed bottom-6 right-5 z-40 flex flex-col items-end space-y-2">
        {showTooltip && (
          <div className="hidden sm:flex items-center space-x-2 bg-white text-navy-900 px-3.5 py-2 rounded-xl shadow-lg border border-slate-200 text-xs font-semibold animate-bounce duration-1000">
            <span>Need quick repair advice?</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-slate-600 ml-1 p-0.5 rounded-full"
              aria-label="Close message"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        )}

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp with Deluxe Solution"
          className="group relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg shadow-emerald-500/30 transition-all transform hover:scale-110 active:scale-95 focus:ring-4 focus:ring-emerald-300"
        >
          {/* Subtle pulse ring */}
          <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-30 group-hover:opacity-60 animate-ping"></span>
          
          <MessageCircle className="w-7 h-7 fill-white stroke-none relative z-10" />

          {/* Desktop Hover Label */}
          <span className="hidden group-hover:block absolute right-16 bg-navy-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-md">
            Chat on WhatsApp
          </span>
        </a>
      </aside>

      {/* Mobile Sticky Quick Action Bar (Bottom of screen) */}
      <nav aria-label="Mobile Quick Action Bar" className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-slate-200 px-4 py-2.5 flex items-center justify-between shadow-2xl">
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex-1 mr-2 flex items-center justify-center py-2.5 px-3 rounded-lg bg-slate-100 text-slate-800 font-bold text-xs hover:bg-slate-200 transition-colors"
        >
          <Phone className="w-4 h-4 mr-1.5 text-royal-600" />
          Call +91 98900 17975
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 ml-2 flex items-center justify-center py-2.5 px-3 rounded-lg bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-colors"
        >
          <MessageCircle className="w-4 h-4 mr-1.5 fill-white stroke-none" />
          WhatsApp
        </a>
      </nav>
    </>
  );
}
