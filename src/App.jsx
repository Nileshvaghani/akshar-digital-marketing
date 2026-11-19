import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

import SeoServicesPage from './pages/services/SeoServicesPage';
import PpcAdvertisingPage from './pages/services/PpcAdvertisingPage';
import SocialMediaPage from './pages/services/SocialMediaPage';
import MetaAdsPage from './pages/services/MetaAdsPage';
import GraphicDesignPage from './pages/services/GraphicDesignPage';
import VideoEditingPage from './pages/services/VideoEditingPage';

import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 antialiased font-sans">
        <Header />
        
        {/* Main Content Area - padded below fixed 80px header */}
        <main className="flex-grow pt-20 w-full" id="main-content">
          <Routes>
            {/* 1. Home */}
            <Route path="/" element={<HomePage />} />

            {/* 2. About Us */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/about-us" element={<AboutPage />} />

            {/* 3. Services Hub */}
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/" element={<ServicesPage />} />

            {/* 6 Individual Service Pages */}
            <Route path="/services/seo-services" element={<SeoServicesPage />} />
            <Route path="/services/seo-services/" element={<SeoServicesPage />} />

            <Route path="/services/ppc-advertising" element={<PpcAdvertisingPage />} />
            <Route path="/services/ppc-advertising/" element={<PpcAdvertisingPage />} />

            <Route path="/services/social-media-management" element={<SocialMediaPage />} />
            <Route path="/services/social-media-management/" element={<SocialMediaPage />} />

            <Route path="/services/meta-ads-management" element={<MetaAdsPage />} />
            <Route path="/services/meta-ads-management/" element={<MetaAdsPage />} />

            <Route path="/services/graphic-design" element={<GraphicDesignPage />} />
            <Route path="/services/graphic-design/" element={<GraphicDesignPage />} />

            <Route path="/services/video-editing" element={<VideoEditingPage />} />
            <Route path="/services/video-editing/" element={<VideoEditingPage />} />

            {/* 4. Contact Us */}
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/contact-us" element={<ContactPage />} />

            {/* Legacy Redirect */}
            <Route path="/case-studies" element={<Navigate to="/services" replace />} />

            {/* Legal */}
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-and-conditions" element={<TermsPage />} />

            {/* 404 Catch-All */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
