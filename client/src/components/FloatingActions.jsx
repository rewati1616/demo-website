import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp, X } from 'lucide-react';
import { BUSINESS_INFO } from '../constants/businessInfo';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage = encodeURIComponent(
    "Hello Deluxe Solution, I would like to enquire about your repair services."
  );
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${whatsappMessage}`;

  return (
    <>
      {/* Floating Action Stack (Bottom Right) */}
      <aside aria-label="Quick Actions" className="fixed bottom-6 right-5 z-40 flex flex-col items-end space-y-2.5">
        {/* Tooltip on desktop */}
        {showTooltip && (
          <div className="hidden sm:flex items-center space-x-2 bg-white text-navy-950 px-3.5 py-1.5 rounded-xl shadow-lg border border-slate-200 text-xs font-bold animate-bounce duration-1000">
            <span>Need repair advice?</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-slate-600 p-0.5 rounded-full"
              aria-label="Dismiss"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        )}

        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="flex items-center justify-center w-11 h-11 bg-navy-900 hover:bg-navy-800 text-white rounded-full shadow-md border border-slate-700 transition-all transform hover:-translate-y-1"
          >
            <ArrowUp className="w-5 h-5 text-amber-400" />
          </button>
        )}

        {/* WhatsApp Floating Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="group relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg shadow-emerald-500/30 transition-all transform hover:scale-110 active:scale-95"
        >
          <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-25 group-hover:opacity-50 animate-ping pointer-events-none"></span>
          <MessageCircle className="w-7 h-7 fill-white stroke-none relative z-10" />

          {/* Desktop Hover Label */}
          <span className="hidden group-hover:block absolute right-16 bg-navy-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-md">
            Chat on WhatsApp
          </span>
        </a>
      </aside>

      {/* Mobile Sticky Quick Action Bar */}
      <nav aria-label="Mobile Quick Bar" className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-slate-200 px-4 py-2.5 flex items-center justify-between shadow-2xl">
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex-1 mr-2 flex items-center justify-center py-2.5 px-3 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs active:bg-slate-200"
        >
          <Phone className="w-4 h-4 mr-1.5 text-royal-600" />
          Call Workshop
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 ml-2 flex items-center justify-center py-2.5 px-3 rounded-xl bg-emerald-600 text-white font-bold text-xs active:bg-emerald-700"
        >
          <MessageCircle className="w-4 h-4 mr-1.5 fill-white stroke-none" />
          WhatsApp
        </a>
      </nav>
    </>
  );
}
