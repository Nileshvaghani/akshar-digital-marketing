import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const getNavClass = (path) => {
    const isActive = location.pathname === path;
    return isActive
      ? "font-label-lg text-label-lg transition-colors py-1 text-secondary-container font-bold relative after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1.5 after:h-1.5 after:bg-secondary-container after:rounded-full"
      : "font-label-lg text-label-lg text-on-surface-variant hover:text-primary-container transition-colors py-1";
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/case-studies', label: 'Case Studies' },
    { to: '/about-us', label: 'About' },
    { to: '/contact-us', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest border-b border-outline-variant/80 transition-shadow duration-300 ${
        isScrolled ? 'shadow-[0_4px_24px_-2px_rgba(11,35,69,0.12)]' : 'shadow-[0_4px_20px_-2px_rgba(11,35,69,0.06)]'
      }`}
      role="banner"
    >
      <div className="h-20 max-w-7xl mx-auto px-gutter flex items-center justify-between gap-space-md">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-space-md shrink-0 cursor-pointer" aria-label="Akshar Digital Marketing — Home">
          <img
            alt="Akshar Digital Marketing Logo"
            className="h-16 w-auto object-contain"
            src="/logo.jpeg"
            loading="eager"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-space-lg" aria-label="Main navigation">
          {navLinks.map(({ to, label }) => (
            <Link key={to} to={to} className={getNavClass(to)}>{label}</Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="flex items-center gap-space-md shrink-0">
          <a
            className="hidden sm:inline-flex items-center gap-space-xs px-space-md py-2.5 rounded-lg border border-outline-variant/60 hover:border-tertiary-fixed-dim bg-surface-container-lowest text-on-surface hover:bg-surface-container-low transition-all"
            href="https://wa.me/918758835700"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Contact us on WhatsApp"
          >
            <span className="material-symbols-outlined text-on-tertiary-container text-[20px]">chat</span>
            <span className="font-label-lg text-label-lg font-semibold">+91 87588 35700</span>
          </a>
          <Link
            className="hidden lg:inline-flex items-center gap-space-xs px-space-lg py-2.5 rounded-lg bg-secondary-container text-on-primary font-label-lg text-label-lg font-bold shadow-[0_4px_14px_rgba(30,144,255,0.35)] hover:shadow-[0_6px_20px_rgba(30,144,255,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all"
            to="/contact-us"
            id="header-cta-btn"
          >
            <span>Free Strategy Session</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
          {/* Mobile menu toggle */}
          <button
            className="lg:hidden w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden absolute top-20 left-0 w-full bg-surface-container-lowest border-b border-outline-variant/80 shadow-lg flex flex-col py-space-md px-gutter"
        >
          <nav className="flex flex-col gap-space-md mb-space-md" aria-label="Mobile navigation">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                className={`font-title-lg text-title-lg ${location.pathname === to ? 'text-secondary-container font-bold' : 'text-on-surface-variant'}`}
                to={to}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
          <Link
            className="inline-flex justify-center items-center gap-space-xs w-full py-3 rounded-lg bg-secondary-container text-on-primary font-label-lg text-label-lg font-bold shadow-md"
            to="/contact-us"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span>Free Strategy Session →</span>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
