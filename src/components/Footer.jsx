import React from 'react';
import { Link } from 'react-router-dom';
import { servicesList } from '../data/servicesData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0B2345] text-slate-300 pt-16 pb-8 border-t border-slate-800" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">

          {/* Column 1 – Brand (5 cols on lg) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-3 w-fit group" aria-label="Akshar Digital Marketing Home">
              <div className="h-11 px-3 py-1 bg-white rounded-xl flex items-center justify-center shadow-sm">
                <img
                  src="/logo.jpeg"
                  alt="Akshar Digital Marketing"
                  className="h-8 w-auto object-contain"
                  width="140"
                  height="32"
                  loading="lazy"
                />
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              We help businesses build a powerful online presence through SEO, PPC advertising, social media marketing and creative digital solutions. Focused on real, measurable business growth.
            </p>

            <div className="flex flex-col gap-1.5 pt-1 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-blue-400">location_on</span>
                <span>Vadodara, Gujarat, India (Serving Global Clients)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-blue-400">person</span>
                <span>Founder: <strong className="text-white font-medium">Nilesh Vaghani</strong></span>
              </div>
            </div>
          </div>

          {/* Column 2 – Quick Links (2 cols on lg) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h3 className="text-white text-sm font-bold tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 – Our Services (3 cols on lg) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h3 className="text-white text-sm font-bold tracking-wider uppercase">
              Our Services
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              {servicesList.map((service) => (
                <li key={service.id}>
                  <Link
                    to={service.path}
                    className="hover:text-white transition-colors inline-flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    <span>{service.shortTitle}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 – Follow Us & Contact (3 cols on lg) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h3 className="text-white text-sm font-bold tracking-wider uppercase">
              Follow Us & Contact
            </h3>
            <p className="text-xs text-slate-300 leading-normal">
              Connect with us for tailored marketing strategies and consultations.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 text-white flex items-center justify-center transition-colors shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-pink-600 text-white flex items-center justify-center transition-colors shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-700 text-white flex items-center justify-center transition-colors shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/918758835700"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-emerald-600 text-white flex items-center justify-center transition-colors shadow-sm"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
              </a>
            </div>

            {/* Direct Contact Links */}
            <div className="flex flex-col gap-2 pt-2 text-xs">
              <a
                href="mailto:hello@akshardigitalmarketing.com"
                className="hover:text-blue-400 transition-colors inline-flex items-center gap-1.5 text-slate-300"
              >
                <span className="material-symbols-outlined text-[16px] text-blue-400">mail</span>
                <span>hello@akshardigitalmarketing.com</span>
              </a>
              <a
                href="tel:+918758835700"
                className="hover:text-blue-400 transition-colors inline-flex items-center gap-1.5 text-slate-300"
              >
                <span className="material-symbols-outlined text-[16px] text-blue-400">call</span>
                <span>+91 87588 35700</span>
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <p>
            © {currentYear} Akshar Digital Marketing. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-700">•</span>
            <Link to="/terms-and-conditions" className="hover:text-slate-200 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
