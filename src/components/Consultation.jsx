import React from 'react';

const Consultation = () => {
  return (
    <section className="w-full bg-primary-container text-on-primary py-space-2xl relative overflow-hidden" id="audit-session">
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-secondary-container/15 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-surface-container/10 blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-gutter relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          
          <div className="lg:col-span-6 flex flex-col gap-space-md">
            <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container/15 text-surface-container-highest font-label-md text-label-md w-fit">
              <span className="material-symbols-outlined text-[16px] text-secondary-container">bolt</span>
              <span className="tracking-wider uppercase font-bold text-[10px] sm:text-xs">LIMITED TIME COMPLIMENTARY SESSION</span>
            </div>
            <h2 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl font-extrabold tracking-tight text-on-primary leading-tight">
              Ready to Accelerate Your <span className="text-secondary-container">Digital Growth?</span>
            </h2>
            <p className="font-body-md text-body-md md:font-body-lg md:text-body-lg text-surface-container-highest leading-relaxed">
              Claim your free 30-minute growth audit with founder Nilesh Vaghani. We’ll analyze your current rankings, ad spend efficiency, and website conversion leaks — zero obligation, pure strategic value.
            </p>
            
            <div className="flex flex-col gap-space-sm pt-space-xs">
              <div className="flex items-center gap-space-sm">
                <div className="w-7 h-7 rounded-full bg-surface-container/20 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim font-bold">check</span>
                </div>
                <span className="font-body-md text-body-md font-semibold text-on-primary">Free In-Depth Competitor Benchmark Report</span>
              </div>
              <div className="flex items-center gap-space-sm">
                <div className="w-7 h-7 rounded-full bg-surface-container/20 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim font-bold">check</span>
                </div>
                <span className="font-body-md text-body-md font-semibold text-on-primary">Actionable 90-Day Step-by-Step Acquisition Plan</span>
              </div>
              <div className="flex items-center gap-space-sm">
                <div className="w-7 h-7 rounded-full bg-surface-container/20 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim font-bold">check</span>
                </div>
                <span className="font-body-md text-body-md font-semibold text-on-primary">Strictly Zero High-Pressure Sales Tactics</span>
              </div>
            </div>
            
            <div className="pt-space-md flex items-center gap-space-md text-surface-variant font-body-sm text-body-sm">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-secondary-container text-[18px]">domain</span>
                <span>Based in Vadodara, Gujarat</span>
              </div>
              <div className="h-4 w-px bg-surface-container/20"></div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-tertiary-fixed-dim text-[18px]">verified_user</span>
                <span>Direct Senior Strategy</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-6">
            <div className="bg-surface-container-lowest text-primary-container p-space-lg md:p-space-xl rounded-2xl shadow-2xl relative">
              <h3 className="font-title-lg text-title-lg font-bold text-primary pb-1">Claim Your Free Strategy Session</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant pb-space-md">Fill out the quick details below and our lead strategist will respond within 2 hours.</p>
              
              <form className="flex flex-col gap-space-md" onSubmit={(e) => { e.preventDefault(); alert('Thank you! Nilesh Vaghani will review your inquiry and connect via WhatsApp shortly.'); }}>
                <div className="flex flex-col gap-1">
                  <label className="font-label-md text-label-md font-semibold text-primary" htmlFor="lead_name">Your Full Name *</label>
                  <input className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-primary-container placeholder-slate-400 font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none transition-colors" id="lead_name" placeholder="e.g. Rahul Sharma" required type="text" />
                </div>
                
                <div className="flex flex-col gap-1">
                  <label className="font-label-md text-label-md font-semibold text-primary" htmlFor="lead_phone">Phone / WhatsApp Number *</label>
                  <input className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-primary-container placeholder-slate-400 font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none transition-colors" id="lead_phone" placeholder="+91 98765 43210" required type="tel" />
                </div>
                
                <div className="flex flex-col gap-1">
                  <label className="font-label-md text-label-md font-semibold text-primary" htmlFor="lead_website">Website URL or Business Name *</label>
                  <input className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-primary-container placeholder-slate-400 font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none transition-colors" id="lead_website" placeholder="yourbusiness.com" required type="text" />
                </div>
                
                <div className="flex flex-col gap-1">
                  <label className="font-label-md text-label-md font-semibold text-primary" htmlFor="lead_service">Primary Service Needed *</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-primary-container font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none transition-colors cursor-pointer" id="lead_service" required defaultValue="seo">
                    <option value="seo">Search Engine Optimization (SEO)</option>
                    <option value="google-ads">Google Ads PPC Campaigns</option>
                    <option value="meta-ads">Meta & WhatsApp Performance Ads</option>
                    <option value="wordpress">WordPress Web Design & Dev</option>
                    <option value="all-in-one">Comprehensive Growth Retainer (Full Stack)</option>
                  </select>
                </div>
                
                <div className="pt-space-xs">
                  <button className="w-full py-4 rounded-xl bg-secondary-container text-on-primary font-label-lg text-label-lg font-bold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-space-xs" type="submit">
                    <span>Claim My Free Strategy Session</span>
                    <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                  </button>
                </div>
                
                <div className="flex items-center justify-center gap-1.5 pt-1 text-center font-label-md text-label-md text-on-surface-variant">
                  <span className="material-symbols-outlined text-[16px] text-on-tertiary-container">lock</span>
                  <span>We respect your privacy. Direct WhatsApp reply within 2 hours.</span>
                </div>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Consultation;
