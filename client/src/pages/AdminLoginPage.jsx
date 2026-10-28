import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Lock, User, Key, AlertCircle, ArrowLeft, Loader2, ShieldCheck, Wrench } from 'lucide-react';
import { apiService } from '../services/api';

export default function AdminLoginPage() {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin123');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    const res = await apiService.loginAdmin({ username, password });
    setIsLoading(false);

    if (res.success) {
      navigate('/admin/dashboard');
    } else {
      setErrorMessage(res.message || 'Invalid username or password.');
    }
  };

  return (
    <div className="min-h-screen bg-navy-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-royal-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="text-center">
          <Link to="/" className="inline-flex items-center space-x-2 text-slate-400 hover:text-white text-xs mb-6 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5 mr-1" />
            <span>Return to Public Website</span>
          </Link>

          <div className="w-14 h-14 rounded-2xl bg-royal-600 flex items-center justify-center text-white mx-auto shadow-lg shadow-royal-600/30">
            <Wrench className="w-7 h-7 text-amber-400" />
          </div>

          <h2 className="mt-4 text-2xl font-black text-white tracking-tight">
            Deluxe Solution Admin
          </h2>
          <p className="mt-1 text-xs text-slate-400">
            Technician & Repair Enquiry Management System
          </p>
        </div>

        <div className="mt-8 bg-white/5 backdrop-blur-xl border border-white/10 py-8 px-6 shadow-2xl rounded-3xl sm:px-10">
          {errorMessage && (
            <div className="mb-6 p-3.5 bg-rose-500/20 border border-rose-500/40 rounded-xl text-rose-200 text-xs flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                Staff Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-navy-900/80 border border-slate-700 rounded-xl text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-royal-500 focus:border-royal-500"
                  placeholder="admin"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Key className="w-4 h-4" />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-navy-900/80 border border-slate-700 rounded-xl text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-royal-500 focus:border-royal-500"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="bg-navy-900/60 p-3 rounded-xl border border-slate-800 text-[11px] text-slate-400 space-y-1">
              <div className="flex items-center text-amber-400 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 mr-1" />
                Demo / Initial Admin Credentials:
              </div>
              <p>Username: <code className="text-white bg-black/40 px-1 py-0.5 rounded">admin</code></p>
              <p>Password: <code className="text-white bg-black/40 px-1 py-0.5 rounded">admin123</code></p>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 bg-royal-600 hover:bg-royal-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-royal-600/30 transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Verifying Session...</span>
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  <span>Access Dashboard</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
