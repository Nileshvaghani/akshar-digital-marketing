import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { servicesList } from '../data/servicesData';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change during render
  const [prevPathname, setPrevPathname] = useState(location.pathname);
  if (location.pathname !== prevPathname) {
    setPrevPathname(location.pathname);
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    setIsMobileServicesOpen(false);
  }

  // Click outside to close desktop dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isServicesActive = location.pathname.startsWith('/services');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300 border-b ${
        isScrolled
          ? 'border-slate-200 shadow-sm shadow-slate-900/5'
          : 'border-slate-100 shadow-none'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 shrink-0 group"
          aria-label="Akshar Digital Marketing — Home"
        >
          <img
            alt="Akshar Digital Marketing"
            className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
            src="/logo.jpeg"
            width="180"
            height="48"
            loading="eager"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {/* Home */}
          <Link
            to="/"
            className={`text-sm font-semibold transition-colors py-2 relative ${
              location.pathname === '/'
                ? 'text-blue-600 after:content-[""] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 after:rounded-full'
                : 'text-slate-700 hover:text-blue-600'
            }`}
          >
            Home
          </Link>

          {/* About Us */}
          <Link
            to="/about"
            className={`text-sm font-semibold transition-colors py-2 relative ${
              location.pathname === '/about' || location.pathname === '/about-us'
                ? 'text-blue-600 after:content-[""] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 after:rounded-full'
                : 'text-slate-700 hover:text-blue-600'
            }`}
          >
            About Us
          </Link>

          {/* Our Services (with dropdown) */}
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
          >
            <div className="flex items-center gap-1">
              <Link
                to="/services"
                className={`text-sm font-semibold transition-colors py-2 ${
                  isServicesActive ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'
                }`}
              >
                Our Services
              </Link>
              <button
                type="button"
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                className="text-slate-500 hover:text-blue-600 transition-colors p-1"
                aria-expanded={isServicesDropdownOpen}
                aria-label="Toggle services dropdown"
              >
                <span
                  className={`material-symbols-outlined text-[18px] transition-transform duration-200 ${
                    isServicesDropdownOpen ? 'rotate-180 text-blue-600' : ''
                  }`}
                >
                  expand_more
                </span>
              </button>
            </div>

            {/* Dropdown Menu */}
            {isServicesDropdownOpen && (
              <div className="absolute top-full left-0 w-80 bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-900/10 py-3 px-2 transition-all duration-200 z-50">
                <div className="px-3 py-1.5 mb-1 border-b border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Services
                  </span>
                  <Link
                    to="/services"
                    className="text-xs font-semibold text-blue-600 hover:underline"
                    onClick={() => setIsServicesDropdownOpen(false)}
                  >
                    View All →
                  </Link>
                </div>
                <div className="flex flex-col gap-1">
                  {servicesList.map((service) => (
                    <Link
                      key={service.id}
                      to={service.path}
                      className={`flex items-start gap-3 p-2.5 rounded-xl transition-all ${
                        location.pathname === service.path
                          ? 'bg-blue-50 text-blue-700 font-semibold'
                          : 'hover:bg-slate-50 text-slate-700 hover:text-blue-600'
                      }`}
                      onClick={() => setIsServicesDropdownOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[18px]">
                          {service.icon}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold leading-snug">
                          {service.shortTitle}
                        </span>
                        <span className="text-xs text-slate-500 line-clamp-1">
                          {service.shortDesc}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Contact Us */}
          <Link
            to="/contact"
            className={`text-sm font-semibold transition-colors py-2 relative ${
              location.pathname === '/contact' || location.pathname === '/contact-us'
                ? 'text-blue-600 after:content-[""] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 after:rounded-full'
                : 'text-slate-700 hover:text-blue-600'
            }`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Desktop CTAs */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-slate-700 hover:text-blue-600 hover:bg-slate-50 border border-slate-200 text-sm font-semibold transition-all"
            href="https://wa.me/918758835700"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Direct WhatsApp Consultation"
          >
            <span className="material-symbols-outlined text-emerald-600 text-[18px]">chat</span>
            <span>+91 87588 35700</span>
          </a>

          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold shadow-sm hover:shadow-md hover:shadow-blue-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all"
          >
            <span>Get Free Consultation</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-800 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="material-symbols-outlined">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden border-b border-slate-200 bg-white shadow-xl px-4 py-4 max-h-[85vh] overflow-y-auto"
        >
          <nav className="flex flex-col gap-1 pb-4" aria-label="Mobile navigation">
            <Link
              to="/"
              className={`px-3 py-2.5 rounded-xl font-semibold text-base ${
                location.pathname === '/'
                  ? 'bg-blue-50 text-blue-600 font-bold'
                  : 'text-slate-800 hover:bg-slate-50'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`px-3 py-2.5 rounded-xl font-semibold text-base ${
                location.pathname === '/about' || location.pathname === '/about-us'
                  ? 'bg-blue-50 text-blue-600 font-bold'
                  : 'text-slate-800 hover:bg-slate-50'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>

            {/* Mobile Services Accordion */}
            <div className="flex flex-col">
              <div className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-slate-50">
                <Link
                  to="/services"
                  className={`font-semibold text-base ${
                    isServicesActive ? 'text-blue-600 font-bold' : 'text-slate-800'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Our Services
                </Link>
                <button
                  type="button"
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="p-1 text-slate-500 hover:text-blue-600"
                  aria-label="Toggle mobile services"
                >
                  <span
                    className={`material-symbols-outlined transition-transform duration-200 ${
                      isMobileServicesOpen ? 'rotate-180' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </button>
              </div>

              {isMobileServicesOpen && (
                <div className="pl-4 pr-2 py-1 flex flex-col gap-1 border-l-2 border-blue-100 ml-3 mt-1">
                  {servicesList.map((service) => (
                    <Link
                      key={service.id}
                      to={service.path}
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium ${
                        location.pathname === service.path
                          ? 'bg-blue-50 text-blue-600 font-bold'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="material-symbols-outlined text-[18px] text-blue-500">
                        {service.icon}
                      </span>
                      <span>{service.shortTitle}</span>
                    </Link>
                  ))}
                  <Link
                    to="/services"
                    className="text-xs font-bold text-blue-600 px-3 py-2 hover:underline"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    View All Services Overview →
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`px-3 py-2.5 rounded-xl font-semibold text-base ${
                location.pathname === '/contact' || location.pathname === '/contact-us'
                  ? 'bg-blue-50 text-blue-600 font-bold'
                  : 'text-slate-800 hover:bg-slate-50'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <a
              href="https://wa.me/918758835700"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50"
            >
              <span className="material-symbols-outlined text-emerald-600 text-[18px]">chat</span>
              <span>WhatsApp: +91 87588 35700</span>
            </a>
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 text-white font-bold text-sm shadow-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Get Free Consultation</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
