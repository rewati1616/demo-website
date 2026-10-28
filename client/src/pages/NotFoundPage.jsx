import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Home, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-canvas px-4 py-16">
      <div className="text-center max-w-md mx-auto space-y-5">
        <div className="w-16 h-16 rounded-3xl bg-royal-50 text-royal-600 flex items-center justify-center mx-auto border border-royal-200 shadow-sm">
          <Wrench className="w-8 h-8 text-royal-600" />
        </div>
        <h1 className="text-5xl font-black text-navy-900">404</h1>
        <h2 className="text-xl font-bold text-slate-800">Page Not Found</h2>
        <p className="text-sm text-slate-600">
          The page you are looking for does not exist or may have moved. You can return to our homepage or explore our repair services.
        </p>
        <div className="pt-2 flex items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center px-5 py-2.5 bg-royal-600 hover:bg-royal-700 text-white font-bold text-xs rounded-xl shadow-sm transition-colors"
          >
            <Home className="w-3.5 h-3.5 mr-1.5" />
            <span>Go to Homepage</span>
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center px-5 py-2.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-xs rounded-xl transition-colors"
          >
            <span>View Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
