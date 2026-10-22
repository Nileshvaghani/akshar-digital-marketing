import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';

import CaseStudiesPage from './pages/CaseStudiesPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <Header />
      <main className="w-full pt-20 bg-background min-h-[calc(100vh-80px)]">
        <div className="flex flex-col w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/contact-us" element={<ContactPage />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
