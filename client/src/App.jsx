import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import FloatingActions from './components/common/FloatingActions';

// Pages
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import WhyUsPage from './pages/WhyUsPage';
import ContactPage from './pages/ContactPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import NotFoundPage from './pages/NotFoundPage';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="flex flex-col min-h-screen text-slate-800">
      <ScrollToTop />
      
      {/* Show public Navbar only on non-admin routes */}
      {!isAdminRoute && <Navbar />}

      {/* Main Content Area */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/why-us" element={<WhyUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
          
          {/* 404 Catch All */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Show public Footer and Floating Actions only on non-admin routes */}
      {!isAdminRoute && (
        <>
          <Footer />
          <FloatingActions />
        </>
      )}
    </div>
  );
}
