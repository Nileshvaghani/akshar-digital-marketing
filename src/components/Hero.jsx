import React from 'react';

const Hero = () => {
  return (
    <section className="w-full bg-surface-container-lowest relative overflow-hidden py-space-xl lg:py-space-2xl">
      <div className="absolute -top-36 -right-36 w-72 h-72 md:w-96 md:h-96 rounded-full bg-surface-container/60 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 md:w-80 md:h-80 rounded-full bg-secondary-container/5 blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-gutter sm:px-gutter-mobile md:px-gutter relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          
          <div className="lg:col-span-7 flex flex-col gap-space-md">
            <div className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-surface-container-low text-primary-container font-label-md text-label-md w-fit shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-container opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary-container"></span>
              </span>
              <span className="tracking-wider uppercase font-bold text-[10px] sm:text-xs">STRATEGY • MARKETING • REAL RESULTS</span>
            </div>
            
            <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-primary font-extrabold tracking-tight leading-tight">
              Grow Your Business With <span className="text-secondary-container">Digital Marketing</span>
            </h1>
            
            <p className="font-body-md text-body-md md:font-body-lg md:text-body-lg text-on-surface-variant leading-relaxed max-w-2xl">
              We help businesses increase their online visibility, generate qualified leads, and grow through SEO, Google Ads, Meta Ads, Social Media Marketing, and high-performing websites.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-space-md pt-space-xs">
              <a className="inline-flex justify-center items-center gap-space-xs px-7 py-3.5 rounded-xl bg-secondary-container text-on-primary font-label-lg text-label-lg font-bold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200" href="#audit-session">
                <span>Get Free Consultation</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
              <a className="inline-flex justify-center items-center gap-space-xs px-6 py-3.5 rounded-xl bg-surface-container-lowest text-primary-container font-label-lg text-label-lg font-bold shadow-sm hover:bg-surface-container-low hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200" href="#services-matrix">
                <span>Explore Our Services</span>
                <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
              </a>
            </div>
            
            <div className="pt-space-sm flex flex-wrap items-center gap-x-space-md gap-y-space-xs font-label-md text-label-md text-primary-container">
              {['SEO', 'Google Ads', 'Meta Ads', 'Social Media', 'WordPress'].map((skill, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px] text-on-tertiary-container" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                  <span className="font-semibold">{skill}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-space-xs flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
              <div className="flex text-amber-500 tracking-tighter">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                ))}
              </div>
              <span className="font-medium text-primary-container">Rated 4.9/5 by 60+ Growing Businesses across Gujarat & India</span>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative">
            <div className="w-full bg-primary-container text-on-primary rounded-2xl p-space-lg shadow-xl shadow-slate-900/15 relative z-20 overflow-hidden">
              <div className="absolute -right-20 -top-20 w-44 h-44 bg-secondary-container/20 rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="flex items-center justify-between pb-space-md">
                <div className="flex items-center gap-space-xs">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
                  <span className="font-label-md text-label-md tracking-wider uppercase font-bold text-surface-container-highest">Live Campaign Analytics</span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-surface-container/10 text-on-primary font-label-md text-label-md">Past 30 Days</span>
              </div>
              
              <div className="flex items-baseline justify-between pt-space-xs pb-space-sm flex-wrap gap-2">
                <div>
                  <p className="font-label-md text-label-md text-on-primary-container uppercase text-[10px] sm:text-xs">Total Client Acquisition</p>
                  <div className="flex items-baseline gap-space-xs">
                    <span className="text-4xl md:font-metric-display md:text-metric-display font-extrabold text-on-primary">84,290</span>
                    <span className="font-label-sm md:font-label-lg text-label-sm md:text-label-lg font-bold text-tertiary-fixed-dim inline-flex items-center">
                      <span className="material-symbols-outlined text-[14px] md:text-[16px]">trending_up</span> +125% MoM
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-label-md text-label-md text-secondary-container bg-surface-container-lowest/10 px-2 py-0.5 rounded font-semibold whitespace-nowrap">ROAS: 4.8x</span>
                </div>
              </div>
              
              <div className="w-full h-36 relative py-space-xs">
                <svg className="w-full h-full overflow-visible" fill="none" viewBox="0 0 340 110" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="surgeGradient" x1="0" x2="0" y1="0" y2="100">
                      <stop stopColor="#1E90FF" stopOpacity="0.40"></stop>
                      <stop offset="1" stopColor="#1E90FF" stopOpacity="0.0"></stop>
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" id="secondaryStroke" x1="0" x2="340" y1="0" y2="0">
                      <stop stopColor="#90B4E8"></stop>
                      <stop offset="1" stopColor="#34D399"></stop>
                    </linearGradient>
                  </defs>
                  <line stroke="#90B4E8" strokeDasharray="4 4" strokeOpacity="0.2" x1="0" x2="340" y1="100" y2="100"></line>
                  <line stroke="#90B4E8" strokeDasharray="4 4" strokeOpacity="0.2" x1="0" x2="340" y1="55" y2="55"></line>
                  <path d="M0,85 Q45,80 90,65 T180,45 T260,25 T340,6 L340,105 L0,105 Z" fill="url(#surgeGradient)"></path>
                  <path d="M0,92 C60,88 120,78 180,68 C240,58 290,48 340,32" stroke="url(#secondaryStroke)" strokeLinecap="round" strokeWidth="2"></path>
                  <path d="M0,85 Q45,80 90,65 T180,45 T260,25 T340,6" stroke="#1E90FF" strokeLinecap="round" strokeWidth="3.5"></path>
                  <circle cx="340" cy="6" fill="#ffffff" r="5"></circle>
                  <circle cx="340" cy="6" r="8" stroke="#1E90FF" strokeWidth="2"></circle>
                  <circle cx="180" cy="45" fill="#34D399" r="4"></circle>
                </svg>
              </div>
              
              <div className="grid grid-cols-2 gap-space-sm pt-space-md">
                <div className="bg-surface-container/10 p-space-sm rounded-xl">
                  <span className="font-label-md text-label-md text-surface-variant">Qualified Leads</span>
                  <div className="flex items-baseline justify-between pt-0.5">
                    <span className="font-title-lg text-title-lg font-bold text-on-primary">320 Leads</span>
                    <span className="font-label-md text-label-md font-bold text-tertiary-fixed-dim">+88%</span>
                  </div>
                </div>
                <div className="bg-surface-container/10 p-space-sm rounded-xl">
                  <span className="font-label-md text-label-md text-surface-variant">Conversion Rate</span>
                  <div className="flex items-baseline justify-between pt-0.5">
                    <span className="font-title-lg text-title-lg font-bold text-on-primary">4.8%</span>
                    <span className="font-label-md text-label-md font-bold text-secondary-container">+40%</span>
                  </div>
                </div>
              </div>
              
              <div className="pt-space-md flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded-md bg-surface-container-lowest/15 font-label-md text-label-md text-surface-container-highest flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Google Ads: Active
                </span>
                <span className="px-2.5 py-1 rounded-md bg-surface-container-lowest/15 font-label-md text-label-md text-surface-container-highest flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span> Meta ROAS: 5.2x
                </span>
                <span className="px-2.5 py-1 rounded-md bg-surface-container-lowest/15 font-label-md text-label-md text-surface-container-highest flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Top 3 Rankings
                </span>
              </div>
            </div>
            
            <div className="hidden sm:flex absolute -top-6 -right-6 z-30 bg-surface-container-lowest p-space-sm rounded-xl shadow-lg shadow-slate-900/10 items-center gap-space-sm animate-bounce hover:animate-none">
              <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary-container text-[22px]">rocket</span>
              </div>
              <div>
                <p className="font-label-md text-label-md text-on-surface-variant leading-tight">Organic Traffic Surge</p>
                <div className="flex items-center gap-1.5">
                  <span className="font-title-lg text-title-lg font-bold text-primary">+125%</span>
                  <span className="font-label-md text-label-md font-bold text-on-tertiary-container bg-emerald-50 px-1 rounded">Rank #1</span>
                </div>
              </div>
            </div>
            
            <div className="hidden sm:flex absolute -bottom-6 -left-6 z-30 bg-surface-container-lowest p-space-sm rounded-xl shadow-lg shadow-slate-900/10 items-center gap-space-sm">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                <span className="material-symbols-outlined text-on-tertiary-container text-[22px]">hub</span>
              </div>
              <div>
                <p className="font-label-md text-label-md text-on-surface-variant leading-tight">Pipeline Generated</p>
                <div className="flex items-center gap-1.5">
                  <span className="font-title-lg text-title-lg font-bold text-primary">₹38.4L</span>
                  <span className="font-label-md text-label-md font-bold text-on-tertiary-container">+40% MoM</span>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-12 right-6 hidden md:flex items-center gap-1.5 font-label-md text-label-md font-bold text-secondary-container bg-surface-container-low px-3 py-1 rounded-full shadow-sm">
              <span>Ideas</span>
              <span className="material-symbols-outlined text-[14px]">arrow_right_alt</span>
              <span>Strategy</span>
              <span className="material-symbols-outlined text-[14px]">arrow_right_alt</span>
              <span className="text-on-tertiary-container font-extrabold">Predictable Growth</span>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
