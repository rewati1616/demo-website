import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Wrench, 
  Search, 
  Filter, 
  Phone, 
  MessageCircle, 
  Mail, 
  Calendar, 
  Clock, 
  LogOut, 
  RefreshCw, 
  CheckCircle2, 
  AlertCircle, 
  ChevronRight, 
  Trash2, 
  X, 
  Save, 
  User, 
  Laptop, 
  ShieldCheck, 
  FileEdit,
  ExternalLink
} from 'lucide-react';
import { apiService } from '../services/api';
import { BUSINESS_INFO } from '../constants/businessInfo';

export default function AdminDashboardPage() {
  const [enquiries, setEnquiries] = useState([]);
  const [stats, setStats] = useState({ total: 0, new: 0, inProgress: 0, quotationSent: 0, completed: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Modal / Detail state
  const [activeEnquiry, setActiveEnquiry] = useState(null);
  const [modalStatus, setModalStatus] = useState('');
  const [modalNotes, setModalNotes] = useState('');
  const [modalFollowUp, setModalFollowUp] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [actionNotice, setActionNotice] = useState('');

  const navigate = useNavigate();

  const statusesList = [
    'New',
    'Contacted',
    'Diagnosis Pending',
    'Quotation Sent',
    'Approved',
    'In Progress',
    'Completed',
    'Cancelled'
  ];

  // Fetch enquiries
  const loadData = async () => {
    setIsLoading(true);
    const res = await apiService.getEnquiries({
      search: searchTerm,
      status: selectedStatus,
      category: selectedCategory
    });
    setIsLoading(false);

    if (res.success) {
      setEnquiries(res.data || []);
      if (res.stats) {
        setStats(res.stats);
      }
    } else {
      if (res.message?.includes('Authentication') || res.message?.includes('expired')) {
        apiService.logoutAdmin();
        navigate('/admin/login');
      }
    }
  };

  useEffect(() => {
    const admin = apiService.getStoredAdmin();
    if (!admin) {
      navigate('/admin/login');
      return;
    }
    loadData();
  }, [selectedStatus, selectedCategory]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    loadData();
  };

  const handleOpenDetail = (item) => {
    setActiveEnquiry(item);
    setModalStatus(item.status);
    setModalNotes(item.notes || '');
    setModalFollowUp(item.follow_up_date ? item.follow_up_date.split('T')[0] : '');
    setActionNotice('');
  };

  const handleSaveDetail = async () => {
    if (!activeEnquiry) return;
    setIsUpdating(true);
    setActionNotice('');

    // Update status if changed
    if (modalStatus !== activeEnquiry.status) {
      await apiService.updateEnquiryStatus(activeEnquiry.id, modalStatus);
    }

    // Update notes and follow up
    await apiService.addEnquiryNote(activeEnquiry.id, {
      notes: modalNotes,
      follow_up_date: modalFollowUp || null
    });

    setIsUpdating(false);
    setActionNotice('Changes saved successfully!');
    
    // Refresh table data
    loadData();

    // Auto dismiss active modal after 1.5s
    setTimeout(() => {
      setActiveEnquiry(null);
    }, 1200);
  };

  const handleDeleteEnquiry = async (id) => {
    if (window.confirm('Are you sure you want to delete this enquiry record?')) {
      await apiService.deleteEnquiry(id);
      setActiveEnquiry(null);
      loadData();
    }
  };

  const handleLogout = () => {
    apiService.logoutAdmin();
    navigate('/');
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'New':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Contacted':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Diagnosis Pending':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Quotation Sent':
        return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      case 'Approved':
      case 'In Progress':
        return 'bg-teal-100 text-teal-800 border-teal-200';
      case 'Completed':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Cancelled':
        return 'bg-slate-100 text-slate-600 border-slate-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Top Header */}
      <header className="bg-navy-900 text-white shadow-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-royal-600 flex items-center justify-center">
              <Wrench className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <span className="font-extrabold text-base tracking-tight">DELUXE SOLUTION</span>
              <span className="text-xs text-slate-400 ml-2 hidden sm:inline">Admin Management</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link 
              to="/" 
              target="_blank"
              className="text-xs text-slate-300 hover:text-white flex items-center"
            >
              <span>View Public Site</span>
              <ExternalLink className="w-3 h-3 ml-1" />
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center text-xs text-rose-300 hover:text-rose-100 bg-rose-950/60 border border-rose-800 px-3 py-1.5 rounded-lg transition-colors"
            >
              <LogOut className="w-3.5 h-3.5 mr-1" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Dashboard Workspace */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        
        {/* Statistics Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
            <p className="text-xs font-bold text-slate-400 uppercase">Total Enquiries</p>
            <p className="text-2xl font-black text-navy-900 mt-1">{stats.total || enquiries.length}</p>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
            <p className="text-xs font-bold text-blue-600 uppercase">New Requests</p>
            <p className="text-2xl font-black text-blue-700 mt-1">{stats.new || 0}</p>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
            <p className="text-xs font-bold text-amber-600 uppercase">In Progress</p>
            <p className="text-2xl font-black text-amber-700 mt-1">{stats.inProgress || 0}</p>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
            <p className="text-xs font-bold text-indigo-600 uppercase">Quotes Sent</p>
            <p className="text-2xl font-black text-indigo-700 mt-1">{stats.quotationSent || 0}</p>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs col-span-2 sm:col-span-1">
            <p className="text-xs font-bold text-emerald-600 uppercase">Completed</p>
            <p className="text-2xl font-black text-emerald-700 mt-1">{stats.completed || 0}</p>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Form */}
          <form onSubmit={handleSearchSubmit} className="w-full md:w-80 relative">
            <input
              type="text"
              placeholder="Search by customer, phone, Ref ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-royal-500/30 focus:border-royal-600"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          </form>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            {/* Status Filter */}
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-royal-500/30"
            >
              <option value="all">All Statuses</option>
              {statusesList.map((st) => (
                <option key={st} value={st}>{st}</option>
              ))}
            </select>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-royal-500/30"
            >
              <option value="all">All Categories</option>
              <option value="Computer & Laptop Repair">Computer & Laptop Repair</option>
              <option value="CCTV Camera & Security Repair">CCTV Camera Repair</option>
              <option value="Currency Counting Machine Service">Currency Machine</option>
              <option value="Printers & Office Automation">Printers & Automation</option>
            </select>

            <button
              onClick={loadData}
              className="p-2 text-slate-600 hover:text-navy-900 hover:bg-slate-100 rounded-xl transition-colors"
              title="Refresh Enquiries"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>

        {/* Enquiries Table Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase text-[11px] tracking-wider">
                  <th className="py-3.5 px-4">Ref ID</th>
                  <th className="py-3.5 px-4">Customer</th>
                  <th className="py-3.5 px-4">Device & Category</th>
                  <th className="py-3.5 px-4">Date</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {isLoading ? (
                  <tr>
                    <td colSpan="6" className="py-12 text-center text-slate-400">
                      <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-royal-600" />
                      Loading enquiries...
                    </td>
                  </tr>
                ) : enquiries.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="py-12 text-center text-slate-400">
                      No repair enquiries found matching your query.
                    </td>
                  </tr>
                ) : (
                  enquiries.map((item) => (
                    <tr 
                      key={item.id} 
                      className="hover:bg-slate-50/80 transition-colors cursor-pointer"
                      onClick={() => handleOpenDetail(item)}
                    >
                      <td className="py-3.5 px-4 font-mono font-bold text-royal-600">
                        {item.reference_id}
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-navy-900">
                        <div>{item.customer_name}</div>
                        <div className="text-[11px] text-slate-500 font-normal">{item.phone}</div>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="font-medium text-slate-800">{item.device_type}</div>
                        <div className="text-[11px] text-slate-500">{item.service_category}</div>
                      </td>
                      <td className="py-3.5 px-4 text-slate-500 text-xs">
                        {new Date(item.created_at).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </td>
                      <td className="py-3.5 px-4">
                        <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${getStatusBadge(item.status)}`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOpenDetail(item);
                          }}
                          className="px-3 py-1.5 bg-slate-100 hover:bg-royal-50 hover:text-royal-600 text-slate-700 rounded-lg text-xs font-bold transition-colors inline-flex items-center"
                        >
                          <span>Manage</span>
                          <ChevronRight className="w-3.5 h-3.5 ml-1" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* =========================================================================
          ENQUIRY DETAIL & MANAGEMENT MODAL
         ========================================================================= */}
      {activeEnquiry && (
        <div className="fixed inset-0 z-50 bg-navy-950/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl border border-slate-200 max-w-2xl w-full shadow-2xl p-6 sm:p-8 space-y-6 animate-scaleIn my-8">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center space-x-3">
                <span className="font-mono text-xs font-bold bg-royal-100 text-royal-800 px-2.5 py-1 rounded-md">
                  {activeEnquiry.reference_id}
                </span>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${getStatusBadge(modalStatus)}`}>
                  {modalStatus}
                </span>
              </div>
              <button
                onClick={() => setActiveEnquiry(null)}
                className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {actionNotice && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold rounded-xl flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{actionNotice}</span>
              </div>
            )}

            {/* Customer Details & Quick Contact */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-400">Customer Info</p>
                <p className="font-bold text-sm text-navy-900 mt-0.5">{activeEnquiry.customer_name}</p>
                <p className="text-slate-600">{activeEnquiry.email}</p>
                <p className="text-slate-600">{activeEnquiry.phone}</p>
                <p className="text-slate-500 mt-1">Preferred: <strong>{activeEnquiry.preferred_contact}</strong></p>
              </div>

              {/* Fast action dials */}
              <div className="flex flex-col justify-center space-y-2">
                <a
                  href={`tel:${activeEnquiry.phone}`}
                  className="inline-flex items-center justify-center px-3 py-2 bg-white hover:bg-royal-50 text-slate-800 hover:text-royal-700 font-bold rounded-xl border border-slate-200 transition-colors shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5 mr-1.5 text-royal-600" />
                  Call Customer
                </a>

                <a
                  href={`https://wa.me/${activeEnquiry.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                    `Hello ${activeEnquiry.customer_name}, this is Deluxe Solution regarding your repair enquiry (${activeEnquiry.reference_id}) for ${activeEnquiry.device_type}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-colors shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5 mr-1.5 fill-white stroke-none" />
                  WhatsApp Customer
                </a>
              </div>
            </div>

            {/* Device & Issue */}
            <div className="space-y-2 text-xs">
              <div className="grid grid-cols-2 gap-2 text-slate-600 bg-slate-50/50 p-3 rounded-xl border border-slate-100">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Category:</span>
                  <span className="font-medium text-slate-800">{activeEnquiry.service_category}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Device & Model:</span>
                  <span className="font-medium text-slate-800">
                    {activeEnquiry.device_type} {activeEnquiry.brand_model && `(${activeEnquiry.brand_model})`}
                  </span>
                </div>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Customer Reported Problem:</span>
                <p className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-800 leading-relaxed text-xs">
                  {activeEnquiry.problem_description}
                </p>
              </div>
            </div>

            {/* Technician Status & Internal Notes Form */}
            <div className="space-y-4 pt-2 border-t border-slate-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Status selector */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Update Enquiry Status
                  </label>
                  <select
                    value={modalStatus}
                    onChange={(e) => setModalStatus(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-royal-500/30"
                  >
                    {statusesList.map((st) => (
                      <option key={st} value={st}>{st}</option>
                    ))}
                  </select>
                </div>

                {/* Follow up date */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Next Follow-up Date
                  </label>
                  <input
                    type="date"
                    value={modalFollowUp}
                    onChange={(e) => setModalFollowUp(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-royal-500/30"
                  >
                  </input>
                </div>
              </div>

              {/* Internal Notes */}
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Internal Technician Notes & Bench Findings
                </label>
                <textarea
                  rows="3"
                  value={modalNotes}
                  onChange={(e) => setModalNotes(e.target.value)}
                  placeholder="Record diagnostics findings, part quotes given, customer approvals, or pending part orders..."
                  className="w-full p-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-royal-500/30"
                ></textarea>
              </div>
            </div>

            {/* Actions Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => handleDeleteEnquiry(activeEnquiry.id)}
                className="inline-flex items-center text-xs text-rose-600 hover:text-rose-800 font-semibold"
              >
                <Trash2 className="w-3.5 h-3.5 mr-1" />
                <span>Delete Enquiry</span>
              </button>

              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={() => setActiveEnquiry(null)}
                  className="px-4 py-2 border border-slate-200 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  disabled={isUpdating}
                  onClick={handleSaveDetail}
                  className="px-5 py-2 bg-royal-600 hover:bg-royal-500 text-white rounded-xl text-xs font-bold shadow-sm transition-all flex items-center space-x-1.5 disabled:opacity-50"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>{isUpdating ? 'Saving...' : 'Save Updates'}</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
