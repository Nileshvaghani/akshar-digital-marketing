import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-primary-container text-surface-container-highest">
      <div className="max-w-7xl mx-auto px-gutter py-space-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl">

          <div className="flex flex-col gap-space-md">
            <Link to="/" className="flex items-center gap-space-sm cursor-pointer hover:opacity-90 transition-opacity w-fit">
              <div className="w-9 h-9 rounded-lg bg-surface-container-lowest flex items-center justify-center p-1 shadow-sm overflow-hidden">
                <img src="/logo1.jpeg" className="w-full h-full object-contain" alt="Akshar Digital Marketing Icon" />
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-on-primary font-bold tracking-tight leading-none">AKSHAR</span>
                <span className="font-label-md text-label-md text-secondary-container tracking-wider font-semibold uppercase">DIGITAL MARKETING</span>
              </div>
            </Link>
            <p className="font-body-sm text-body-sm text-surface-variant/90 leading-relaxed">
              “Your Digital Growth, Our Strategy.” Premium performance marketing, ROI architecture, and strategic lead generation engine.
            </p>
            <div className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-surface-container/10 border border-outline-variant/30 text-surface-container-lowest font-label-md text-label-md w-fit">
              <span className="material-symbols-outlined text-[16px] text-secondary-container">location_on</span>
              <span>Vadodara, Gujarat, India</span>
            </div>
            <div className="font-body-sm text-body-sm text-surface-variant/80">
              <span className="font-label-sm font-semibold text-on-primary">Founder:</span> Nilesh Vaghani
            </div>
            <div className="flex items-center gap-space-sm pt-space-xs">
              <a aria-label="LinkedIn" className="w-9 h-9 rounded-lg bg-surface-container/10 hover:bg-secondary-container text-surface-container-lowest hover:text-on-primary flex items-center justify-center transition-colors" href="#">
                <span className="material-symbols-outlined text-[18px]">share</span>
              </a>
              <a aria-label="Instagram" className="w-9 h-9 rounded-lg bg-surface-container/10 hover:bg-secondary-container text-surface-container-lowest hover:text-on-primary flex items-center justify-center transition-colors" href="#">
                <span className="material-symbols-outlined text-[18px]">photo_camera</span>
              </a>
              <a aria-label="WhatsApp" className="w-9 h-9 rounded-lg bg-surface-container/10 hover:bg-secondary-container text-surface-container-lowest hover:text-on-primary flex items-center justify-center transition-colors" href="#">
                <span className="material-symbols-outlined text-[18px]">chat</span>
              </a>
              <a aria-label="Twitter" className="w-9 h-9 rounded-lg bg-surface-container/10 hover:bg-secondary-container text-surface-container-lowest hover:text-on-primary flex items-center justify-center transition-colors" href="#">
                <span className="material-symbols-outlined text-[18px]">tag</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-space-md">
            <h3 className="font-title-lg text-title-lg text-on-primary font-bold relative after:content-[''] after:block after:w-8 after:h-0.5 after:bg-secondary-container after:mt-2">Core Services</h3>
            <ul className="flex flex-col gap-space-sm font-body-sm text-body-sm text-surface-variant/90">
              <li className="hover:text-on-primary transition-colors">
                <a className="inline-flex items-center gap-space-xs" href="#">
                  <span className="material-symbols-outlined text-[16px] text-secondary-container">trending_up</span>Search Engine Optimization (SEO)
                </a>
              </li>
              <li className="hover:text-on-primary transition-colors">
                <a className="inline-flex items-center gap-space-xs" href="#">
                  <span className="material-symbols-outlined text-[16px] text-secondary-container">ads_click</span>Google Ads PPC Campaigns
                </a>
              </li>
              <li className="hover:text-on-primary transition-colors">
                <a className="inline-flex items-center gap-space-xs" href="#">
                  <span className="material-symbols-outlined text-[16px] text-secondary-container">forum</span>Meta & WhatsApp Performance Ads
                </a>
              </li>
              <li className="hover:text-on-primary transition-colors">
                <a className="inline-flex items-center gap-space-xs" href="#">
                  <span className="material-symbols-outlined text-[16px] text-secondary-container">campaign</span>Social Media Management
                </a>
              </li>
              <li className="hover:text-on-primary transition-colors">
                <a className="inline-flex items-center gap-space-xs" href="#">
                  <span className="material-symbols-outlined text-[16px] text-secondary-container">web</span>High-Converting WordPress Development
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-space-md">
            <h3 className="font-title-lg text-title-lg text-on-primary font-bold relative after:content-[''] after:block after:w-8 after:h-0.5 after:bg-secondary-container after:mt-2">Quick Links</h3>
            <ul className="flex flex-col gap-space-sm font-body-sm text-body-sm text-surface-variant/90">
              <li><Link className="hover:text-on-primary transition-colors" to="/">Home Overview</Link></li>
              <li><Link className="hover:text-on-primary transition-colors" to="/services">Our Full Suite Services</Link></li>
              <li><Link className="hover:text-on-primary transition-colors" to="/case-studies">Proven Case Studies</Link></li>
              <li><Link className="hover:text-on-primary transition-colors" to="/about-us">About Nilesh Vaghani</Link></li>
              <li><Link className="hover:text-on-primary transition-colors" to="/contact-us">Claim Free Digital Audit</Link></li>
              <li><Link className="hover:text-on-primary transition-colors" to="/contact-us">Contact Our Strategists</Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-space-md">
            <h3 className="font-title-lg text-title-lg text-on-primary font-bold relative after:content-[''] after:block after:w-8 after:h-0.5 after:bg-secondary-container after:mt-2">Free Strategy Call</h3>
            <div className="p-space-md rounded-xl bg-surface-container/5 border border-outline-variant/20 flex flex-col gap-space-sm">
              <p className="font-body-sm text-body-sm text-surface-variant/90 leading-normal">Scale your inbound acquisition channels with bespoke digital strategy.</p>
              <a className="inline-flex items-center gap-space-xs font-label-md text-label-md text-on-primary hover:text-secondary-container transition-colors" href="mailto:hello@akshardigital.com">
                <span className="material-symbols-outlined text-[18px] text-secondary-container">mail</span>
                <span>hello@akshardigital.com</span>
              </a>
              <a className="inline-flex items-center gap-space-xs font-label-md text-label-md text-on-primary hover:text-secondary-container transition-colors" href="tel:+918758835700">
                <span className="material-symbols-outlined text-[18px] text-secondary-container">call</span>
                <span>+91 87588 35700</span>
              </a>
              <div className="inline-flex items-center gap-space-xs font-label-md text-label-md text-surface-variant/80">
                <span className="material-symbols-outlined text-[18px] text-secondary-container">pin_drop</span>
                <span>Vadodara, Gujarat</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="w-full border-t border-outline-variant/20 py-space-md">
        <div className="max-w-7xl mx-auto px-gutter flex flex-col sm:flex-row items-center justify-between gap-space-sm font-label-md text-label-md text-surface-variant/80 text-center sm:text-left">
          <span>Copyright © {new Date().getFullYear()} Akshar Digital Marketing. All rights reserved.</span>
          <span className="text-secondary-container font-medium">Designed for ROI-focused growth.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
