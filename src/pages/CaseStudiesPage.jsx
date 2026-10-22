import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CaseStudiesPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Work (4)' },
    { id: 'ecommerce', label: 'E-Commerce & D2C' },
    { id: 'b2b', label: 'B2B & Manufacturing (Gujarat)' },
    { id: 'healthcare', label: 'Healthcare & Clinics' },
    { id: 'education', label: 'Education & EdTech' }
  ];

  return (
    <>
      {/* Top Ambient Banner & Header Intro */}
      <section className="relative w-full bg-surface-container-lowest overflow-hidden">
        {/* Subtle Background Glows */}
        <div className="absolute -top-32 -left-20 w-96 h-96 bg-secondary-container/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-10 right-0 w-[30rem] h-[30rem] bg-primary-container/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-gutter py-space-2xl relative z-10">
          {/* Eyebrow & Live Pulse Badge */}
          <div className="flex flex-wrap items-center gap-space-sm mb-space-md">
            <span className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-secondary-container/10 text-secondary-container font-label-md text-label-md uppercase tracking-wider font-bold">
              <span className="w-2 h-2 rounded-full bg-secondary-container animate-ping"></span>
              Proven Client Results
            </span>
            <span className="inline-flex items-center gap-1.5 px-space-md py-1 rounded-full bg-surface-container text-on-surface-variant font-label-md text-label-md">
              <span className="material-symbols-outlined text-[16px] text-on-tertiary-container">verified</span>
              100% Audited Revenue Data
            </span>
          </div>
          {/* Main Headline & Subtitle Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end mb-space-2xl">
            <div className="lg:col-span-8">
              <h1 className="font-headline-xl text-headline-xl text-primary-container font-extrabold tracking-tight leading-[1.08]">
                Real Revenue. <br />
                Scaled Pipelines. <br />
                <span className="text-secondary-container">Verifiable Growth.</span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Explore how our strategic SEO, precision Google Ads, hyper-targeted Meta funnels, and conversion-focused web architecture delivered compounding capital returns for enterprise and growth brands.
              </p>
            </div>
          </div>
          {/* Aggregated KPI Ticker Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md p-space-lg rounded-2xl bg-surface-container-low shadow-sm">
            <div className="flex flex-col gap-1 p-space-sm">
              <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant font-semibold">Total Pipeline Driven</span>
              <span className="font-metric-display text-metric-display text-primary-container font-extrabold">₹48.6 Cr+</span>
              <span className="inline-flex items-center gap-1 font-label-sm text-on-tertiary-container font-bold">
                <span className="material-symbols-outlined text-[16px]">trending_up</span> +142% YoY avg
              </span>
            </div>
            <div className="flex flex-col gap-1 p-space-sm">
              <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant font-semibold">Average Blended ROAS</span>
              <span className="font-metric-display text-metric-display text-primary-container font-extrabold">5.2x</span>
              <span className="inline-flex items-center gap-1 font-label-sm text-on-tertiary-container font-bold">
                <span className="material-symbols-outlined text-[16px]">trending_up</span> Meta & Google Search
              </span>
            </div>
            <div className="flex flex-col gap-1 p-space-sm">
              <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant font-semibold">Qualified Leads Captured</span>
              <span className="font-metric-display text-metric-display text-primary-container font-extrabold">128,400+</span>
              <span className="inline-flex items-center gap-1 font-label-sm text-on-tertiary-container font-bold">
                <span className="material-symbols-outlined text-[16px]">verified_user</span> CRM & WhatsApp sync
              </span>
            </div>
            <div className="flex flex-col gap-1 p-space-sm">
              <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant font-semibold">Retention & Client NPS</span>
              <span className="font-metric-display text-metric-display text-secondary-container font-extrabold">94.8%</span>
              <span className="inline-flex items-center gap-1 font-label-sm text-on-surface-variant font-semibold">
                Managed by Nilesh Vaghani
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Filter Controls Bar */}
      <section className="sticky top-20 z-30 bg-surface-container-lowest/95 backdrop-blur-md shadow-sm py-space-md">
        <div className="max-w-7xl mx-auto px-gutter flex items-center justify-between gap-space-md overflow-x-auto">
          <div className="flex items-center gap-space-xs shrink-0" id="filterContainer">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`filter-btn px-space-md py-2 rounded-full font-label-lg text-label-lg transition-all ${
                  activeCategory === cat.id
                    ? 'font-bold bg-primary-container text-on-primary shadow-sm'
                    : 'font-semibold bg-surface-container-low text-on-surface-variant hover:text-primary-container'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md shrink-0">
            <span className="material-symbols-outlined text-[18px] text-secondary-container">tune</span>
            <span>Showing audited ROI results</span>
          </div>
        </div>
      </section>

      {/* Main Case Studies Stack */}
      <section className="max-w-7xl mx-auto px-gutter py-space-2xl flex flex-col gap-space-2xl w-full">
        {/* CASE STUDY 1: E-Commerce & Lifestyle Apparel */}
        <article className={`case-study-card rounded-2xl bg-surface-container-lowest shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl ${activeCategory === 'all' || activeCategory === 'ecommerce' ? 'block animate-fadeIn' : 'hidden'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Visual & Data Column */}
            <div className="lg:col-span-5 p-space-xl bg-surface-container-low flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-space-md">
                  <span className="inline-flex items-center px-space-sm py-1 rounded-full bg-surface-container-highest text-primary-container font-label-md text-label-md font-bold tracking-wide">
                    E-COMMERCE & D2C
                  </span>
                  <span className="inline-flex items-center gap-1 px-space-sm py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md font-bold">
                    <span className="material-symbols-outlined text-[16px]">trending_up</span> +312% Growth
                  </span>
                </div>
                <h2 className="font-headline-md text-headline-md text-primary-container font-extrabold mb-space-xs">
                  AuraStyle Apparel
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
                  National D2C Fashion & Athleisure Retailer
                </p>
              </div>
              {/* Rich Visual Mock / Growth Sparkline Card */}
              <div className="relative z-10 rounded-xl bg-surface-container-lowest p-space-md shadow-sm mb-space-md">
                <div className="flex items-center justify-between mb-space-sm">
                  <span className="font-label-md text-label-md text-on-surface-variant font-bold uppercase tracking-wider">Organic Revenue Scaled</span>
                  <span className="font-title-lg text-title-lg text-primary-container font-extrabold">₹38.4L / mo</span>
                </div>
                {/* Custom Clean SVG Area Curve Graphic */}
                <div className="w-full h-32 relative">
                  <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 360 120">
                    <defs>
                      <linearGradient id="gradEcom" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#fd761a" stopOpacity="0.35"></stop>
                        <stop offset="100%" stopColor="#fd761a" stopOpacity="0.0"></stop>
                      </linearGradient>
                    </defs>
                    <path d="M0,105 Q60,95 110,80 T210,50 T290,28 T360,10 L360,120 L0,120 Z" fill="url(#gradEcom)"></path>
                    <path d="M0,105 Q60,95 110,80 T210,50 T290,28 T360,10" fill="none" stroke="#fd761a" strokeLinecap="round" strokeWidth="3"></path>
                    <circle cx="360" cy="10" fill="#fd761a" r="5"></circle>
                    <circle cx="210" cy="50" fill="#0b2345" r="4"></circle>
                  </svg>
                </div>
                <div className="flex justify-between items-center pt-space-xs font-label-md text-label-md text-on-surface-variant">
                  <span>Month 1 (₹9.3L)</span>
                  <span className="text-secondary-container font-bold">Month 6 (₹38.4L)</span>
                </div>
              </div>
              {/* Featured Context Photography Placeholder */}
              <div className="relative h-44 rounded-xl overflow-hidden shadow-inner">
                <img className="w-full h-full object-cover" alt="High-end apparel warehouse and digital marketing specialist reviewing sales dashboards on modern screens, commercial studio lighting, deep navy ambient tones with warm orange accents, high production quality." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZcIrHzP14plH_UukcyUx-Dm8H8_I0vAb7DPdO0phkClSqCprAwExqIJRQ0kgJEyXRj2nto9i0gppDObNx5SziJjOm1qVVpbBGGek5Coua65IPYMJbQmMo4MQfoVIZ7zeRNVoci_Xpkq1Wlo_xHFb-Wc2TQ6BX5wmFavNAjK5UiOJo8_16zqq4X4hEIFW5rxwb0fmMJK1j1r6mm_DJsB5tX7dz_zSBFLy54-FvkpAVm_2l3SL8_LA35g" />
                <div className="absolute inset-0 bg-primary-container/20 mix-blend-multiply"></div>
                <div className="absolute bottom-2 left-2 px-space-sm py-1 rounded bg-surface-container-lowest/90 backdrop-blur-sm text-primary-container font-label-md text-label-md font-bold">
                  Shopify Plus Integration
                </div>
              </div>
            </div>
            {/* Strategy, Breakdown & Verifiable KPIs Column */}
            <div className="lg:col-span-7 p-space-xl flex flex-col justify-between gap-space-lg">
              <div>
                {/* Triple KPI Highlights */}
                <div className="grid grid-cols-3 gap-space-sm p-space-md rounded-xl bg-surface-container mb-space-lg">
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-on-surface-variant font-semibold">Organic Revenue</span>
                    <span className="font-headline-sm text-headline-sm text-primary-container font-extrabold">+312%</span>
                    <span className="font-label-md text-label-md text-on-tertiary-container font-bold">Within 6 months</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-on-surface-variant font-semibold">Blended ROAS</span>
                    <span className="font-headline-sm text-headline-sm text-secondary-container font-extrabold">5.4x</span>
                    <span className="font-label-md text-label-md text-on-surface-variant">Up from 1.8x</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-on-surface-variant font-semibold">CPA Reduction</span>
                    <span className="font-headline-sm text-headline-sm text-on-tertiary-container font-extrabold">-38%</span>
                    <span className="font-label-md text-label-md text-on-surface-variant">Optimized spend</span>
                  </div>
                </div>
                {/* Problem vs Solution Structural Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md mb-space-lg">
                  <div className="p-space-md rounded-xl bg-surface-container-low">
                    <div className="flex items-center gap-space-xs mb-space-xs text-error font-title-lg text-title-lg font-bold">
                      <span className="material-symbols-outlined text-[20px]">warning</span>
                      The Challenge
                    </div>
                    <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
                      <li className="flex items-start gap-2">
                        <span className="text-error font-bold">•</span>
                        Stagnant organic rankings due to rampant category keyword cannibalization.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-error font-bold">•</span>
                        Surging Meta CPA (₹820/order) leaving zero margin on first-time buyers.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-error font-bold">•</span>
                        Mobile checkout drop-off rate of 74% on heavy product listing pages.
                      </li>
                    </ul>
                  </div>
                  <div className="p-space-md rounded-xl bg-surface-container-low">
                    <div className="flex items-center gap-space-xs mb-space-xs text-on-tertiary-container font-title-lg text-title-lg font-bold">
                      <span className="material-symbols-outlined text-[20px]">psychology</span>
                      Akshar Strategy
                    </div>
                    <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
                      <li className="flex items-start gap-2">
                        <span className="text-on-tertiary-container font-bold">✓</span>
                        Full technical rewrite: canonicalized faceted navigation and schema injections.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-on-tertiary-container font-bold">✓</span>
                        Segmented Google Shopping Ads targeting high-intent long-tail apparel searches.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-on-tertiary-container font-bold">✓</span>
                        Dynamic Catalog Meta Retargeting with 3-day urgency discount coupons.
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Before vs After Diagnostic Table */}
                <div className="rounded-xl overflow-hidden bg-surface-container-lowest shadow-sm">
                  <div className="grid grid-cols-3 bg-primary-container text-on-primary px-space-md py-2.5 font-label-md text-label-md font-bold uppercase tracking-wider">
                    <span>Metric Index</span>
                    <span>Before Akshar</span>
                    <span className="text-secondary-fixed">After 180 Days</span>
                  </div>
                  <div className="divide-y divide-surface-container">
                    <div className="grid grid-cols-3 px-space-md py-2.5 font-body-sm text-body-sm">
                      <span className="font-semibold text-primary-container">Top 3 Google Keywords</span>
                      <span className="text-on-surface-variant">14 terms</span>
                      <span className="font-bold text-on-tertiary-container">218 terms (+1,457%)</span>
                    </div>
                    <div className="grid grid-cols-3 px-space-md py-2.5 font-body-sm text-body-sm bg-surface-container-lowest">
                      <span className="font-semibold text-primary-container">Mobile Conversion Rate</span>
                      <span className="text-on-surface-variant">1.12%</span>
                      <span className="font-bold text-on-tertiary-container">3.48% (+210%)</span>
                    </div>
                    <div className="grid grid-cols-3 px-space-md py-2.5 font-body-sm text-body-sm">
                      <span className="font-semibold text-primary-container">Blended Customer Acq Cost</span>
                      <span className="text-on-surface-variant">₹820 / purchase</span>
                      <span className="font-bold text-secondary-container">₹508 / purchase (-38%)</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Bottom Action Row */}
              <div className="flex flex-wrap items-center justify-between gap-space-md pt-space-sm">
                <div className="flex items-center gap-space-sm">
                  <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-bold text-xs">
                    NV
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Lead Architect: <strong className="text-primary-container">Nilesh Vaghani</strong>
                  </span>
                </div>
                <Link to="/contact-us" className="inline-flex items-center gap-space-xs font-label-lg text-label-lg font-bold text-secondary-container hover:text-secondary hover:translate-x-1 transition-all">
                  <span>View Full Diagnostic Architecture</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* CASE STUDY 2: B2B Industrial Valve Manufacturer (Vadodara) */}
        <article className={`case-study-card rounded-2xl bg-surface-container-lowest shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl ${activeCategory === 'all' || activeCategory === 'b2b' ? 'block animate-fadeIn' : 'hidden'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Visual & Data Column */}
            <div className="lg:col-span-5 p-space-xl bg-surface-container-low flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-space-md">
                  <span className="inline-flex items-center px-space-sm py-1 rounded-full bg-primary-container text-on-primary font-label-md text-label-md font-bold tracking-wide">
                    B2B & MANUFACTURING
                  </span>
                  <span className="inline-flex items-center gap-1 px-space-sm py-1 rounded-full bg-secondary-container text-on-primary font-label-md text-label-md font-bold">
                    <span className="material-symbols-outlined text-[16px]">location_on</span> Vadodara, Gujarat
                  </span>
                </div>
                <h2 className="font-headline-md text-headline-md text-primary-container font-extrabold mb-space-xs">
                  Apex Flowtech Valves Ltd.
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
                  Heavy Industrial Forged & Cast Valve Manufacturer
                </p>
              </div>
              {/* Rich Lead Metric Container */}
              <div className="relative z-10 rounded-xl bg-surface-container-lowest p-space-md shadow-sm mb-space-md">
                <div className="flex items-center justify-between mb-space-sm">
                  <span className="font-label-md text-label-md text-on-surface-variant font-bold uppercase tracking-wider">Qualified Sales Pipeline</span>
                  <span className="font-headline-sm text-headline-sm text-primary-container font-extrabold">₹1.80 Crore</span>
                </div>
                {/* Custom B2B Funnel SVG Progress Bars */}
                <div className="space-y-2 py-2">
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-on-surface-variant">Inbound Inquiries</span>
                      <span className="text-primary-container font-bold">140+ / month</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-surface-container overflow-hidden">
                      <div className="h-full bg-primary-container rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-on-surface-variant">WhatsApp Qualified Leads</span>
                      <span className="text-secondary-container font-bold">84% response rate</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-surface-container overflow-hidden">
                      <div className="h-full bg-secondary-container rounded-full" style={{ width: '84%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-on-surface-variant">Cost Reduction per SQL</span>
                      <span className="text-on-tertiary-container font-bold">-46% cost cut</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-surface-container overflow-hidden">
                      <div className="h-full bg-on-tertiary-container rounded-full" style={{ width: '76%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Featured Facility Image Placeholder */}
              <div className="relative h-44 rounded-xl overflow-hidden shadow-inner">
                <img className="w-full h-full object-cover" alt="Heavy industrial valve CNC machining manufacturing floor in Gujarat, clean engineering workspace with metallic equipment, blue architectural lighting, crisp professional photography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-WE9hfi2b4saan-3C-sTWBGlNMDPT-QBFkwC0_CVx170edScM3XpXLKbPCu4wmmnZoLn41FSmkfjiFWS7VTpzQcrJy66-ETBX-DHCpJRWboaGZzDdYaNxkrZAbzVSKtwpW3JCoLJf4UQ68riTc8HBdqEFJ28R_ByEFBK-1q1jky90WMwoc8Gmf1RN6x3SSeq9in9N3aRw1KL6b_DoilxnoQbvQaKFb2wYTV0A5LLg0NdWeAPdFmqGiA" />
                <div className="absolute inset-0 bg-primary-container/25 mix-blend-multiply"></div>
                <div className="absolute bottom-2 left-2 px-space-sm py-1 rounded bg-surface-container-lowest/90 backdrop-blur-sm text-primary-container font-label-md text-label-md font-bold">
                  GIDC Makarpura, Vadodara
                </div>
              </div>
            </div>
            {/* Strategy & Execution Breakdown */}
            <div className="lg:col-span-7 p-space-xl flex flex-col justify-between gap-space-lg">
              <div>
                {/* Top Metric Tiles */}
                <div className="grid grid-cols-3 gap-space-sm p-space-md rounded-xl bg-surface-container mb-space-lg">
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-on-surface-variant font-semibold">Monthly Inquiries</span>
                    <span className="font-headline-sm text-headline-sm text-primary-container font-extrabold">140+ /mo</span>
                    <span className="font-label-md text-label-md text-on-tertiary-container font-bold">From strictly zero</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-on-surface-variant font-semibold">New Pipeline Value</span>
                    <span className="font-headline-sm text-headline-sm text-secondary-container font-extrabold">₹1.8 Cr</span>
                    <span className="font-label-md text-label-md text-on-surface-variant">In audited bids</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-on-surface-variant font-semibold">Cost Per SQL</span>
                    <span className="font-headline-sm text-headline-sm text-on-tertiary-container font-extrabold">-46%</span>
                    <span className="font-label-md text-label-md text-on-surface-variant">Frictionless funnel</span>
                  </div>
                </div>
                {/* The Problem vs The Akshar Playbook */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md mb-space-lg">
                  <div className="p-space-md rounded-xl bg-surface-container-low">
                    <div className="flex items-center gap-space-xs mb-space-xs text-error font-title-lg text-title-lg font-bold">
                      <span className="material-symbols-outlined text-[20px]">error_outline</span>
                      The Challenge
                    </div>
                    <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
                      <li className="flex items-start gap-2">
                        <span className="text-error font-bold">•</span>
                        30-year legacy factory dependent 100% on trade expos and broker referrals.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-error font-bold">•</span>
                        Zero inbound digital presence; missing procurement heads in refinery and chemical clusters.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-error font-bold">•</span>
                        Long 9-month sales cycles with untracked qualification pipelines.
                      </li>
                    </ul>
                  </div>
                  <div className="p-space-md rounded-xl bg-surface-container-low">
                    <div className="flex items-center gap-space-xs mb-space-xs text-on-tertiary-container font-title-lg text-title-lg font-bold">
                      <span className="material-symbols-outlined text-[20px]">engineering</span>
                      Akshar Strategy
                    </div>
                    <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
                      <li className="flex items-start gap-2">
                        <span className="text-on-tertiary-container font-bold">✓</span>
                        Google Search PPC with 850+ strict negative keywords to weed out low-ticket retail buyers.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-on-tertiary-container font-bold">✓</span>
                        Direct-to-WhatsApp engineering qualification webhook; technical spec sheet delivery in under 15 seconds.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-on-tertiary-container font-bold">✓</span>
                        Bespoke WordPress catalog landing page built with sub-second mobile page loads.
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Client Quote Callout */}
                <div className="p-space-md rounded-xl bg-primary-container text-on-primary flex items-start gap-space-md">
                  <span className="material-symbols-outlined text-[32px] text-secondary-container shrink-0">format_quote</span>
                  <div>
                    <p className="font-body-sm text-body-sm italic leading-relaxed text-surface-variant mb-1">
                      "Nilesh completely transformed how our sales division operates. We previously had zero inbound web inquiries. Today, procurement officers from Gulf refineries and Hazira industrial belts contact us directly over WhatsApp."
                    </p>
                    <span className="font-label-md text-label-md font-bold text-on-primary">
                      — Rajesh Patel, Managing Director, Apex Flowtech
                    </span>
                  </div>
                </div>
              </div>
              {/* Bottom Action Row */}
              <div className="flex flex-wrap items-center justify-between gap-space-md pt-space-sm">
                <div className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant">
                  <span className="inline-flex items-center gap-1 font-bold text-primary-container">
                    <span className="material-symbols-outlined text-[16px] text-on-tertiary-container">done_all</span> Verified B2B Procurement Leads
                  </span>
                </div>
                <Link to="/contact-us" className="inline-flex items-center gap-space-xs font-label-lg text-label-lg font-bold text-secondary-container hover:text-secondary hover:translate-x-1 transition-all">
                  <span>Request B2B Manufacturer Case Deck</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* CASE STUDY 3: Multi-Speciality Dental & Aesthetic Clinic */}
        <article className={`case-study-card rounded-2xl bg-surface-container-lowest shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl ${activeCategory === 'all' || activeCategory === 'healthcare' ? 'block animate-fadeIn' : 'hidden'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Visual & Data Column */}
            <div className="lg:col-span-5 p-space-xl bg-surface-container-low flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-space-md">
                  <span className="inline-flex items-center px-space-sm py-1 rounded-full bg-surface-container-highest text-primary-container font-label-md text-label-md font-bold tracking-wide">
                    HEALTHCARE & CLINICS
                  </span>
                  <span className="inline-flex items-center gap-1 px-space-sm py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md font-bold">
                    <span className="material-symbols-outlined text-[16px]">stars</span> #1 Google Maps Dominance
                  </span>
                </div>
                <h2 className="font-headline-md text-headline-md text-primary-container font-extrabold mb-space-xs">
                  Dr. Sancheti Aesthetic & Implant Center
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
                  Premium Multi-Speciality Dental Clinic, Alkapuri & Vasna Road
                </p>
              </div>
              {/* Local Pack Metric Badge Box */}
              <div className="relative z-10 rounded-xl bg-surface-container-lowest p-space-md shadow-sm mb-space-md">
                <div className="flex items-center justify-between mb-space-xs">
                  <span className="font-label-md text-label-md text-on-surface-variant font-bold uppercase tracking-wider">Patient Bookings (90 Days)</span>
                  <span className="font-title-lg text-title-lg text-on-tertiary-container font-extrabold">320+ Patients</span>
                </div>
                <div className="grid grid-cols-2 gap-space-sm py-2">
                  <div className="p-2 rounded-lg bg-surface-container-low">
                    <span className="block font-label-md text-label-md text-on-surface-variant font-semibold">Localities Ranked #1</span>
                    <span className="font-headline-sm text-headline-sm text-primary-container font-extrabold">14 Localities</span>
                  </div>
                  <div className="p-2 rounded-lg bg-surface-container-low">
                    <span className="block font-label-md text-label-md text-on-surface-variant font-semibold">Consultation Calls</span>
                    <span className="font-headline-sm text-headline-sm text-secondary-container font-extrabold">4.8x Lift</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-on-surface-variant pt-1">
                  <span className="material-symbols-outlined text-[16px] text-on-tertiary-container">pin_drop</span>
                  Targeting Alkapuri, Akota, Gotri, Vasna Road, and Manjalpur
                </div>
              </div>
              {/* Featured Clinical Imagery Placeholder */}
              <div className="relative h-44 rounded-xl overflow-hidden shadow-inner">
                <img className="w-full h-full object-cover" alt="Modern aesthetic dental clinic interior in India, state-of-the-art dental equipment, sterile bright ambient lighting, confident dental specialist in background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDAQN726luy9a-EBhiwIbH_5d73k8sA3U0-LXzMf-9ovEKF6zYsqhdcJAgPuDvk0pd8jKhxqVKHpkhNgg7q36s1I0M5aEIqn2oH-7keh_rr7vTLvRIFWDKNe1fqbBwR-XuGFhDdXGN0q5tv-Fsg2wp3tPJm4Cn79D5sdNtA7TPqzH7MvuoJZ-wTcJrZFjWV_2tiJZKOdcQHKe7YwYo2PQ2VHc3ZiyA-9vaMUYza73MWO_Jw8O70kYNBA" />
                <div className="absolute inset-0 bg-primary-container/20 mix-blend-multiply"></div>
                <div className="absolute bottom-2 left-2 px-space-sm py-1 rounded bg-surface-container-lowest/90 backdrop-blur-sm text-primary-container font-label-md text-label-md font-bold">
                  Automated Review Funnel Installed
                </div>
              </div>
            </div>
            {/* Strategy, Implementation & Verifiable Results */}
            <div className="lg:col-span-7 p-space-xl flex flex-col justify-between gap-space-lg">
              <div>
                {/* Triple KPI Highlight */}
                <div className="grid grid-cols-3 gap-space-sm p-space-md rounded-xl bg-surface-container mb-space-lg">
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-on-surface-variant font-semibold">Google Map Pack</span>
                    <span className="font-headline-sm text-headline-sm text-primary-container font-extrabold">Rank #1</span>
                    <span className="font-label-md text-label-md text-on-tertiary-container font-bold">Across 14 pincodes</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-on-surface-variant font-semibold">Inbound Consults</span>
                    <span className="font-headline-sm text-headline-sm text-secondary-container font-extrabold">4.8x</span>
                    <span className="font-label-md text-label-md text-on-surface-variant">Phone & WhatsApp</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-on-surface-variant font-semibold">New Patients</span>
                    <span className="font-headline-sm text-headline-sm text-on-tertiary-container font-extrabold">320+</span>
                    <span className="font-label-md text-label-md text-on-surface-variant">In first 90 days</span>
                  </div>
                </div>
                {/* Problem vs Strategy */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md mb-space-lg">
                  <div className="p-space-md rounded-xl bg-surface-container-low">
                    <div className="flex items-center gap-space-xs mb-space-xs text-error font-title-lg text-title-lg font-bold">
                      <span className="material-symbols-outlined text-[20px]">location_off</span>
                      The Challenge
                    </div>
                    <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
                      <li className="flex items-start gap-2">
                        <span className="text-error font-bold">•</span>
                        Virtually invisible in local Vadodara searches outside a 500m clinic radius.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-error font-bold">•</span>
                        Aggressive chain dental clinics dominating the top 3 Google local map positions.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-error font-bold">•</span>
                        Only 18 outdated Google reviews despite serving 1,000+ happy patients.
                      </li>
                    </ul>
                  </div>
                  <div className="p-space-md rounded-xl bg-surface-container-low">
                    <div className="flex items-center gap-space-xs mb-space-xs text-on-tertiary-container font-title-lg text-title-lg font-bold">
                      <span className="material-symbols-outlined text-[20px]">map</span>
                      Akshar Local Domination
                    </div>
                    <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
                      <li className="flex items-start gap-2">
                        <span className="text-on-tertiary-container font-bold">✓</span>
                        Complete GMB re-architecture: primary category tuning and localized service catalogs.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-on-tertiary-container font-bold">✓</span>
                        Automated SMS/WhatsApp review trigger right after clinical checkout (generated 240+ 5-star reviews).
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-on-tertiary-container font-bold">✓</span>
                        Geo-tagged high-resolution photography and hyper-localized suburb landing pages.
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Visual Ranking Badge Table */}
                <div className="p-space-md rounded-xl bg-surface-container-low flex flex-wrap items-center justify-between gap-space-md">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-secondary-container shadow-sm">
                      <span className="material-symbols-outlined text-[24px]">verified</span>
                    </div>
                    <div>
                      <span className="font-title-lg text-title-lg text-primary-container font-bold block">Verified Google My Business Growth</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">4.9 Star Rating with 260+ authentic patient testimonials</span>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1 px-space-md py-1.5 rounded-full bg-surface-container-lowest text-primary-container font-label-md text-label-md font-bold shadow-sm">
                    <span className="text-secondary-container">★ 4.9</span> / 5.0 Rating
                  </div>
                </div>
              </div>
              {/* Bottom Action Row */}
              <div className="flex flex-wrap items-center justify-between gap-space-md pt-space-sm">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-[18px] text-secondary-container">local_hospital</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Vertical: <strong className="text-primary-container">Local Healthcare & Medical Aesthetic</strong>
                  </span>
                </div>
                <Link to="/contact-us" className="inline-flex items-center gap-space-xs font-label-lg text-label-lg font-bold text-secondary-container hover:text-secondary hover:translate-x-1 transition-all">
                  <span>View Local SEO Playbook</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* CASE STUDY 4: Educational Coaching Institute */}
        <article className={`case-study-card rounded-2xl bg-surface-container-lowest shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl ${activeCategory === 'all' || activeCategory === 'education' ? 'block animate-fadeIn' : 'hidden'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Visual & Data Column */}
            <div className="lg:col-span-5 p-space-xl bg-surface-container-low flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-space-md">
                  <span className="inline-flex items-center px-space-sm py-1 rounded-full bg-surface-container-highest text-primary-container font-label-md text-label-md font-bold tracking-wide">
                    EDUCATION & EDTECH
                  </span>
                  <span className="inline-flex items-center gap-1 px-space-sm py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md font-bold">
                    <span className="material-symbols-outlined text-[16px]">school</span> 5.0x ROAS Recorded
                  </span>
                </div>
                <h2 className="font-headline-md text-headline-md text-primary-container font-extrabold mb-space-xs">
                  Pinnacle Career Academy
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
                  Competitive Exam & Professional Degree Prep Institute
                </p>
              </div>
              {/* Rich Enrollment Dashboard Card */}
              <div className="relative z-10 rounded-xl bg-surface-container-lowest p-space-md shadow-sm mb-space-md">
                <div className="flex items-center justify-between mb-space-xs">
                  <span className="font-label-md text-label-md text-on-surface-variant font-bold uppercase tracking-wider">Tuition Fees Generated</span>
                  <span className="font-title-lg text-title-lg text-primary-container font-extrabold">₹1.10 Crore</span>
                </div>
                <div className="grid grid-cols-2 gap-space-sm py-2">
                  <div className="p-2 rounded-lg bg-surface-container-low">
                    <span className="block font-label-md text-label-md text-on-surface-variant font-semibold">Total Paid Spend</span>
                    <span className="font-headline-sm text-headline-sm text-secondary-container font-extrabold">₹22.0 Lakhs</span>
                  </div>
                  <div className="p-2 rounded-lg bg-surface-container-low">
                    <span className="block font-label-md text-label-md text-on-surface-variant font-semibold">Verified Enrollments</span>
                    <span className="font-headline-sm text-headline-sm text-on-tertiary-container font-extrabold">850+ Students</span>
                  </div>
                </div>
                {/* ROAS Progress Indicator */}
                <div className="pt-2">
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-on-surface-variant">Campaign Capital Multiplier</span>
                    <span className="text-primary-container font-bold">5.0x Yield</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-surface-container overflow-hidden">
                    <div className="h-full bg-secondary-container rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>
              {/* Featured Campus Image Placeholder */}
              <div className="relative h-44 rounded-xl overflow-hidden shadow-inner">
                <img className="w-full h-full object-cover" alt="Modern technology coaching classroom with ambitious Indian students engaged in professional study, ambient warm room light, clean corporate academic environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGj8WAhOl-oRuRWbxi5j-vK0iGQ0MrbudK7muz6fgLriLv7YbGhQnbDaFcV7I1HzuIcS-lAN3M_q-C6hPKLW5zQJUkIlgIugI8te6mMaEosG0ILXyDJpEL5Yux3wDuspB7EJJFWV4YwHPzH8Qbc_QSPvJDuZmaMHJ7Cy41sFFjpHTEyKnShV4yRIp-Kcl5ZC2Wl8pQl4vu3TUHH-57AuZdpgIgSGHFfIes2orWcBvdTiqg7Kl-3fjckQ" />
                <div className="absolute inset-0 bg-primary-container/20 mix-blend-multiply"></div>
                <div className="absolute bottom-2 left-2 px-space-sm py-1 rounded bg-surface-container-lowest/90 backdrop-blur-sm text-primary-container font-label-md text-label-md font-bold">
                  Gujarat & Western India Campaign
                </div>
              </div>
            </div>
            {/* Strategy, Implementation & Breakdown */}
            <div className="lg:col-span-7 p-space-xl flex flex-col justify-between gap-space-lg">
              <div>
                {/* Triple KPI Highlight */}
                <div className="grid grid-cols-3 gap-space-sm p-space-md rounded-xl bg-surface-container mb-space-lg">
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-on-surface-variant font-semibold">Total Enrollments</span>
                    <span className="font-headline-sm text-headline-sm text-primary-container font-extrabold">850+</span>
                    <span className="font-label-md text-label-md text-on-tertiary-container font-bold">Audited admissions</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-on-surface-variant font-semibold">Gross Revenue</span>
                    <span className="font-headline-sm text-headline-sm text-secondary-container font-extrabold">₹1.1 Cr</span>
                    <span className="font-label-md text-label-md text-on-surface-variant">On ₹22L spend</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-on-surface-variant font-semibold">Effective ROAS</span>
                    <span className="font-headline-sm text-headline-sm text-on-tertiary-container font-extrabold">5.0x</span>
                    <span className="font-label-md text-label-md text-on-surface-variant">Zero wasted clicks</span>
                  </div>
                </div>
                {/* Problem vs Strategy */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md mb-space-lg">
                  <div className="p-space-md rounded-xl bg-surface-container-low">
                    <div className="flex items-center gap-space-xs mb-space-xs text-error font-title-lg text-title-lg font-bold">
                      <span className="material-symbols-outlined text-[20px]">cancel</span>
                      The Challenge
                    </div>
                    <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
                      <li className="flex items-start gap-2">
                        <span className="text-error font-bold">•</span>
                        Ad costs were draining budget with high numbers of non-serious window shoppers.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-error font-bold">•</span>
                        Counsellors took over 48 hours to contact prospects, causing lead leakage.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-error font-bold">•</span>
                        Seasonal admission window left zero room for prolonged campaign trial-and-error.
                      </li>
                    </ul>
                  </div>
                  <div className="p-space-md rounded-xl bg-surface-container-low">
                    <div className="flex items-center gap-space-xs mb-space-xs text-on-tertiary-container font-title-lg text-title-lg font-bold">
                      <span className="material-symbols-outlined text-[20px]">bolt</span>
                      Akshar Conversion Funnel
                    </div>
                    <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
                      <li className="flex items-start gap-2">
                        <span className="text-on-tertiary-container font-bold">✓</span>
                        Interactive 3-question eligibility assessment quiz filtering high-intent students.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-on-tertiary-container font-bold">✓</span>
                        Instant WhatsApp counseling slot booking directly synced to counselor Google Calendars.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-on-tertiary-container font-bold">✓</span>
                        Geo-fenced Meta Lead Generation targeting college graduates and parents within 25km radius.
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Comparative Summary Strip */}
                <div className="p-space-md rounded-xl bg-primary-container text-on-primary flex items-center justify-between">
                  <div className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-[24px] text-secondary-container">auto_graph</span>
                    <span className="font-body-sm text-body-sm text-surface-variant">
                      Average cost per enrolled student dropped from <strong className="text-on-primary">₹7,200</strong> to <strong className="text-secondary-container">₹2,588</strong>.
                    </span>
                  </div>
                  <span className="hidden sm:inline-flex px-space-sm py-1 rounded bg-secondary-container text-on-primary font-label-md text-label-md font-bold">
                    64% CPL Reduction
                  </span>
                </div>
              </div>
              {/* Bottom Action Row */}
              <div className="flex flex-wrap items-center justify-between gap-space-md pt-space-sm">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-[18px] text-secondary-container">verified</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Ad Accounts: <strong className="text-primary-container">Google Ads & Meta Verified Partner</strong>
                  </span>
                </div>
                <Link to="/contact-us" className="inline-flex items-center gap-space-xs font-label-lg text-label-lg font-bold text-secondary-container hover:text-secondary hover:translate-x-1 transition-all">
                  <span>Explore EdTech Acquisition Stack</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* Verified Testimonials Section: Business Leaders from Gujarat & Mumbai */}
      <section className="w-full bg-surface-container-low py-space-2xl overflow-hidden">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
            <div>
              <span className="font-label-md text-label-md uppercase tracking-wider text-secondary-container font-bold block mb-space-xs">
                Direct Feedback & Partnerships
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary-container font-extrabold tracking-tight">
                Trusted by Business Owners & Founders
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Read candid feedback from managing directors and founders across Vadodara, Ahmedabad, and Mumbai who rely on Nilesh Vaghani's hands-on governance.
            </p>
          </div>
          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            {/* Card 1: Vadodara Industrial Leader */}
            <div className="p-space-xl rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center gap-1 text-secondary-container mb-space-md">
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface leading-relaxed mb-space-lg italic">
                  "Unlike other agencies that send generic junior managers, Nilesh Vaghani personally audited our B2B industrial keywords and Google Ads bids. His weekly transparent video reviews and WhatsApp updates give our management complete clarity on where our marketing rupees are yielding returns."
                </p>
              </div>
              <div className="pt-space-md flex items-center gap-space-md">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 shadow-sm bg-surface-container">
                  <img className="w-full h-full object-cover" alt="Portrait of an Indian senior male corporate executive in business suit, clean modern office background, warm lighting, professional headshot." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUOimvMcby2FlDSD0IA5vI85h8G2pSzhJi6h8zN3L7Y3-8eOTjBtdjvkCjSzxayTTKF9uOvWEPFSrsaP2ILMmLM3WyXffoLxvwoYCRTs5NrVl0vze6QWMSpXMHOekUqjj9Bd0UgM5o3i6ai1wad0U29PGi7FcoNFzDCXZbAhao9799eyod8Fr1z-YtQOpgrYysDtt6IinxPX4PqTDGo_wJRYhUPWGSTtq_0ridJYrHhVVkjtL9ISNQ0A" />
                </div>
                <div>
                  <h3 className="font-title-lg text-title-lg text-primary-container font-bold leading-tight">Bhaven Shah</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Director, Shah Petrochem Components</p>
                  <span className="font-label-md text-label-md text-secondary-container font-semibold">Vadodara, Gujarat</span>
                </div>
              </div>
            </div>
            {/* Card 2: Ahmedabad D2C Founder */}
            <div className="p-space-xl rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center gap-1 text-secondary-container mb-space-md">
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface leading-relaxed mb-space-lg italic">
                  "We scaled from ₹3 Lakh to ₹18 Lakh monthly revenue in under 5 months. Akshar Digital didn't just run ads—they redesigned our checkout flow, fixed our product schema, and brought our blended ROAS to a dependable 5.4x. Absolute partners in our company's survival and growth."
                </p>
              </div>
              <div className="pt-space-md flex items-center gap-space-md">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 shadow-sm bg-surface-container">
                  <img className="w-full h-full object-cover" alt="Portrait of an Indian female startup founder in smart business casual, smiling confidently, modern high-tech Ahmedabad coworking office in background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-70g0Ou4LxENDbuFQJN1C2yQOe7WOxmoRaVLTgcnNzDlMxMtBCSIyqUMVfgUujnyNj2lDO53T__6GIMtRHf6OMjrvO-QWuMB7EU5emx1ge49mNWBAdPqU2JWFt3VsOVXtCLOTDaMU4YLRKvFdvcA5AnwnNVez4alQM_Iq9fESnCC-s7e3O2yM6tAI07sXt_pcvFsXQe_Mjb2OpgqToEy9jkCfwgi9JE_YqIC7eWxYzlKG_jnKaJrk0w" />
                </div>
                <div>
                  <h3 className="font-title-lg text-title-lg text-primary-container font-bold leading-tight">Pooja Trivedi</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Co-Founder, Botanica Organics</p>
                  <span className="font-label-md text-label-md text-secondary-container font-semibold">Ahmedabad, Gujarat</span>
                </div>
              </div>
            </div>
            {/* Card 3: Mumbai Clinical & Healthcare Specialist */}
            <div className="p-space-xl rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center gap-1 text-secondary-container mb-space-md">
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface leading-relaxed mb-space-lg italic">
                  "The local SEO and GMB engineering that Akshar deployed completely crowded out our competition in suburban Mumbai. Our clinic reception receives over 20 qualified WhatsApp appointment inquiries every single morning. Best ROI of any marketing expense we've made."
                </p>
              </div>
              <div className="pt-space-md flex items-center gap-space-md">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 shadow-sm bg-surface-container">
                  <img className="w-full h-full object-cover" alt="Portrait of an Indian male doctor in professional medical attire with stethoscope, modern healthcare clinic reception in background, warm approachable lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCakfUDvuZHpMJ-XF2fLQqGtiuH5tLi0W9F73ihfSJlGAD6nBkHlPnWSQmZ_ATeAjIGWSjPea53nYkXxC9pQOU-l3qurX2813P03phtBgq5VeJFq0Di83zcB0tJKeTrSkSpsRWeeHkiYoTEUUU9_xOhu59XjkUdJF-SNrlVPUQzhJ-N6aBSw6V5Z913JRXw6axT_YRODnJSWVeHl2byjk93TIAuy9SMLGYfzJf2Tq1JY7xJqM7hs_NCNg" />
                </div>
                <div>
                  <h3 className="font-title-lg text-title-lg text-primary-container font-bold leading-tight">Dr. Aniket Mehta</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Chief Surgeon, Skin & Hair Matrix</p>
                  <span className="font-label-md text-label-md text-secondary-container font-semibold">Bandra, Mumbai</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audited Performance Methodology (Bento Section) */}
      <section className="max-w-7xl mx-auto px-gutter py-space-2xl w-full">
        <div className="text-center max-w-2xl mx-auto mb-space-xl">
          <span className="font-label-md text-label-md uppercase tracking-wider text-secondary-container font-bold block mb-space-xs">
            The Akshar Standard
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary-container font-extrabold tracking-tight">
            Why Our Case Studies Are Verifiable
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
            No inflated vanity metrics. We link every rupee spent directly to closed deals, customer cart receipts, and certified CRM records.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm">
            <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary-container">
              <span className="material-symbols-outlined text-[26px]">database</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary-container font-bold">1st-Party CRM Verification</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              We install direct webhooks into HubSpot, Zoho, or WhatsApp CRM so client sales leaders review identical figures in real time without discrepancies.
            </p>
          </div>
          <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm">
            <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary-container">
              <span className="material-symbols-outlined text-[26px]">query_stats</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary-container font-bold">Strict Blended ROAS Tracking</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Platform ad dashboards take double-credit. We isolate Google Ads, Meta, and Organic Search through multi-touch attribution models to report real net profit.
            </p>
          </div>
          <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm">
            <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-on-tertiary-container">
              <span className="material-symbols-outlined text-[26px]">shield_person</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary-container font-bold">Founder-Led Optimization</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Nilesh Vaghani architecturally directs campaigns personally. We limit active client intake to ensure institutional rigor across every deployment.
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Conversion CTA Section */}
      <section className="max-w-7xl mx-auto px-gutter pb-space-2xl w-full">
        <div className="relative rounded-2xl bg-primary-container text-on-primary p-space-xl md:p-space-2xl overflow-hidden shadow-xl">
          {/* Decorative Backdrop Geometry */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none"></div>
          <div className="absolute top-0 right-1/4 w-64 h-64 rounded-full bg-surface-container-high/10 blur-2xl pointer-events-none"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            <div className="lg:col-span-8 flex flex-col gap-space-md">
              <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container/10 text-secondary-container font-label-md text-label-md font-bold uppercase tracking-wider w-fit">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                Zero Obligation Diagnostic Call
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-primary font-extrabold tracking-tight leading-[1.1]">
                Want Similar Results for Your Business?
              </h2>
              <p className="font-body-lg text-body-lg text-surface-variant max-w-2xl leading-relaxed">
                Stop burning marketing capital on disjointed tactics. Schedule a complimentary 30-minute growth audit with Nilesh Vaghani. We'll examine your current ads, search visibility, and conversion funnels to identify immediate revenue leaks.
              </p>
              <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                <div className="flex items-center gap-1 font-label-md text-label-md text-surface-container-lowest">
                  <span className="material-symbols-outlined text-[18px] text-on-tertiary-container">check_circle</span>
                  Full Account Audit
                </div>
                <div className="flex items-center gap-1 font-label-md text-label-md text-surface-container-lowest">
                  <span className="material-symbols-outlined text-[18px] text-on-tertiary-container">check_circle</span>
                  Competitor Keyword Intelligence
                </div>
                <div className="flex items-center gap-1 font-label-md text-label-md text-surface-container-lowest">
                  <span className="material-symbols-outlined text-[18px] text-on-tertiary-container">check_circle</span>
                  Custom 90-Day Pipeline Roadmap
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-space-md items-start lg:items-end">
              <Link to="/contact-us" className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-xl py-4 rounded-lg bg-secondary-container text-on-primary font-label-lg text-label-lg font-bold shadow-[0_6px_20px_rgba(253,118,26,0.4)] hover:shadow-[0_8px_28px_rgba(253,118,26,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all text-center">
                <span>Request a Custom Growth Audit</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </Link>
              <div className="flex items-center gap-space-xs text-surface-variant font-label-md text-label-md">
                <span className="material-symbols-outlined text-[16px] text-on-tertiary-container">schedule</span>
                <span>Takes under 60 seconds to book</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudiesPage;
