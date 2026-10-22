import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  const [showFeedback, setShowFeedback] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowFeedback(true);
    event.target.reset();
  };

  return (
    <>
      <section className="relative w-full bg-primary-container text-on-primary py-space-2xl overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient cx="50%" cy="0%" id="grid-glow" r="70%">
                <stop offset="0%" stopColor="#fd761a" stopOpacity="0.4"></stop>
                <stop offset="100%" stopColor="#0b2345" stopOpacity="0"></stop>
              </radialGradient>
            </defs>
            <rect fill="url(#grid-glow)" height="100" width="100"></rect>
            <path d="M0 20 H100 M0 40 H100 M0 60 H100 M0 80 H100" stroke="#d7e3ff" strokeDasharray="1 2" strokeWidth="0.05"></path>
            <path d="M20 0 V100 M40 0 V100 M60 0 V100 M80 0 V100" stroke="#d7e3ff" strokeDasharray="1 2" strokeWidth="0.05"></path>
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-gutter flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container/10 border-0 mb-space-md backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-secondary-container animate-ping"></span>
            <span className="font-label-md text-label-md text-secondary-container tracking-widest uppercase font-bold">GET IN TOUCH</span>
          </div>
          <h1 className="font-headline-xl text-headline-xl text-on-primary max-w-4xl tracking-tight leading-tight">
            Let's Discuss Your Next Phase of <span className="text-secondary-container">Digital Growth</span>
          </h1>
          <p className="font-body-lg text-body-lg text-surface-container-highest max-w-2xl mt-space-md leading-relaxed">
            Whether you need a full digital audit, high-performance ad management, or SEO that dominates your market, we are ready to build your growth engine.
          </p>
          <div className="mt-space-lg flex flex-wrap items-center justify-center gap-space-md text-surface-container-high font-label-md text-label-md">
            <span className="inline-flex items-center gap-1.5 bg-primary/40 px-3 py-1.5 rounded-full">
              <span className="material-symbols-outlined text-[18px] text-tertiary-fixed">verified</span>
              Vadodara HQ &amp; Global Execution
            </span>
            <span className="inline-flex items-center gap-1.5 bg-primary/40 px-3 py-1.5 rounded-full">
              <span className="material-symbols-outlined text-[18px] text-tertiary-fixed">bolt</span>
              2-Hour SLA Response
            </span>
            <span className="inline-flex items-center gap-1.5 bg-primary/40 px-3 py-1.5 rounded-full">
              <span className="material-symbols-outlined text-[18px] text-tertiary-fixed">account_circle</span>
              Founder-Led Strategy
            </span>
          </div>
        </div>
      </section>
      
      <section className="w-full bg-background py-space-2xl">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
            <div className="lg:col-span-5 flex flex-col gap-space-lg">
              <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm">
                <div className="flex items-center justify-between gap-space-md mb-space-md">
                  <span className="font-label-md text-label-md text-secondary-container font-bold uppercase tracking-wider">Direct Access</span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-low text-on-tertiary-container font-label-md text-label-md font-semibold">
                    <span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-pulse"></span> Available Today
                  </span>
                </div>
                <h2 className="font-headline-md text-headline-md text-primary-container leading-tight mb-space-sm">
                  Speak Directly with Senior Leadership
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
                  No sales intermediaries. Your initial consultation and revenue audit are evaluated directly by Nilesh Vaghani and key growth architects.
                </p>
                <div className="flex flex-col gap-space-md">
                  <div className="flex items-start gap-space-md p-space-md rounded-xl bg-surface-container-low/70 hover:bg-surface-container-low transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary-container shrink-0 shadow-sm">
                      <span className="material-symbols-outlined text-[22px]">location_on</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-lg text-label-lg font-bold text-primary-container">Office Address</span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 leading-snug">
                        Akshar Digital Marketing<br/>
                        Alkapuri / RC Dutt Road Commercial Hub,<br/>
                        Vadodara, Gujarat 390007, India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-space-md p-space-md rounded-xl bg-surface-container-low/70 hover:bg-surface-container-low transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-on-tertiary-container shrink-0 shadow-sm">
                      <span className="material-symbols-outlined text-[22px]">chat</span>
                    </div>
                    <div className="flex flex-col flex-grow">
                      <span className="font-label-lg text-label-lg font-bold text-primary-container">WhatsApp &amp; Direct Phone</span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Quick consultation via phone or instant WhatsApp desk.</p>
                      <div className="mt-space-sm flex flex-wrap gap-space-xs">
                        <a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container text-on-primary-container font-label-md text-label-md font-semibold hover:bg-surface-container-highest transition-colors" href="https://wa.me/918758835700" rel="noopener noreferrer" target="_blank">
                          <span className="material-symbols-outlined text-[16px] text-on-tertiary-container">forum</span> WhatsApp (+91 87588 35700)
                        </a>
                        <a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container text-on-primary-container font-label-md text-label-md font-semibold hover:bg-surface-container-highest transition-colors" href="tel:+918758835700">
                          <span className="material-symbols-outlined text-[16px] text-primary-container">call</span> Direct Line
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-space-md p-space-md rounded-xl bg-surface-container-low/70 hover:bg-surface-container-low transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-secondary-container shrink-0 shadow-sm">
                      <span className="material-symbols-outlined text-[22px]">mail</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-lg text-label-lg font-bold text-primary-container">Email Inquiries</span>
                      <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary-container transition-colors mt-0.5" href="mailto:hello@akshardigital.com">hello@akshardigital.com</a>
                      <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary-container transition-colors" href="mailto:nilesh@akshardigital.com">nilesh@akshardigital.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-space-md p-space-md rounded-xl bg-surface-container-low/70 hover:bg-surface-container-low transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary-container shrink-0 shadow-sm">
                      <span className="material-symbols-outlined text-[22px]">schedule</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-lg text-label-lg font-bold text-primary-container">Operating Desk Hours</span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Monday – Saturday: 9:30 AM – 7:00 PM IST</p>
                      <span className="font-label-md text-label-md text-on-surface-variant/80">Sunday: Closed for Strategic Account Audits</span>
                    </div>
                  </div>
                </div>
                <div className="mt-space-lg p-space-md rounded-xl bg-surface-container text-on-primary-container flex items-center gap-space-md">
                  <span className="material-symbols-outlined text-[28px] text-secondary-container shrink-0">speed</span>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md font-bold text-primary-container">Strict 2-Hour Response SLA</span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-snug">All verified website form inquiries receive tactical preliminary feedback within two working hours.</p>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-2xl overflow-hidden p-space-md shadow-sm">
                <div className="flex items-center justify-between mb-space-sm">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary-container text-[20px]">explore</span>
                    <span className="font-label-lg text-label-lg font-bold text-primary-container">Vadodara Technology Center</span>
                  </div>
                  <span className="font-label-md text-label-md text-on-surface-variant">RC Dutt Road Area</span>
                </div>
                <div className="w-full h-56 bg-cover bg-center rounded-xl relative overflow-hidden flex items-end p-space-md" data-alt="Stylized top down satellite map visual of Vadodara Alkapuri RC Dutt Road commercial corridor highlighting modern corporate towers and digital agency presence with clean blue and slate tones" data-location="Alkapuri, Vadodara, Gujarat, India" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuChuZFZreNXfP80O50qwv2pAqDugAM1zyyt8akcep6ybJFfCOVfafFSYAc4gxRB-w_LUMn4zjLPvFyWBHd3w6ygd5FYYO8lo_RbgmmCXiZuIKEJbhNmpRzwN5kN29ZJvxozP4mU68CJH6CLU9AiAQCEJJ1YJS6Bl19tOCRJRgUoV6DYUTkJ0hG4nsRz5JFGogLgkjaLg8CaYwzwnE2rSluGInXCT8zFGjzGIm2jXqUhSTdMANKJDnxOZQ')" }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-primary-container/30 to-transparent"></div>
                  <div className="relative z-10 flex items-center justify-between w-full">
                    <div>
                      <span className="font-label-lg text-label-lg font-bold text-on-primary block">Akshar Headquarters</span>
                      <span className="font-body-sm text-body-sm text-surface-container-highest">In-Person &amp; Remote Client Consultations</span>
                    </div>
                    <a className="px-3 py-1.5 rounded-lg bg-surface-container-lowest text-primary-container font-label-md text-label-md font-semibold shadow-sm hover:bg-surface-container transition-colors" href="https://maps.google.com/?q=Alkapuri+Vadodara+Gujarat" rel="noopener noreferrer" target="_blank">
                      Open Map
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <div className="bg-surface-container-lowest rounded-2xl p-space-xl shadow-md relative">
                <div className="mb-space-lg">
                  <div className="inline-block px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md font-bold mb-space-xs">
                    STRATEGY BOOKING
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-primary-container tracking-tight leading-tight">
                    Request Your In-Depth Growth Audit
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                    Fill in your brand credentials. Nilesh Vaghani and our PPC/SEO leads will analyze your website and competitors prior to your call.
                  </p>
                </div>
                <form className="flex flex-col gap-space-md" id="growth-contact-form" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-lg text-label-lg font-semibold text-primary-container" htmlFor="fullName">
                        Full Name <span className="text-secondary">*</span>
                      </label>
                      <input className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-md text-body-md shadow-sm outline-none focus:bg-surface-container-low transition-all" id="fullName" placeholder="e.g. Ramesh Patel" required type="text"/>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-lg text-label-lg font-semibold text-primary-container" htmlFor="workEmail">
                        Work Email <span className="text-secondary">*</span>
                      </label>
                      <input className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-md text-body-md shadow-sm outline-none focus:bg-surface-container-low transition-all" id="workEmail" placeholder="name@company.com" required type="email"/>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-lg text-label-lg font-semibold text-primary-container" htmlFor="phone">
                        Phone / WhatsApp Number <span className="text-secondary">*</span>
                      </label>
                      <div className="flex items-center w-full rounded-lg bg-surface-container-lowest shadow-sm overflow-hidden focus-within:bg-surface-container-low transition-all">
                        <span className="px-3 py-3 bg-surface-container text-on-primary-container font-label-md text-label-md font-bold">+91</span>
                        <input className="w-full px-3 py-3 bg-transparent text-on-surface placeholder:text-outline font-body-md text-body-md outline-none" id="phone" placeholder="98765 43210" required type="tel"/>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-lg text-label-lg font-semibold text-primary-container" htmlFor="websiteUrl">
                        Website or Brand URL <span className="text-secondary">*</span>
                      </label>
                      <input className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-md text-body-md shadow-sm outline-none focus:bg-surface-container-low transition-all" id="websiteUrl" placeholder="https://yourbrand.com" required type="url"/>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-lg text-label-lg font-semibold text-primary-container" htmlFor="budgetRange">
                        Monthly Marketing Budget
                      </label>
                      <select className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm outline-none focus:bg-surface-container-low transition-all cursor-pointer" id="budgetRange">
                        <option value="">Select realistic ad/retainer bracket</option>
                        <option value="starter">₹35,000 – ₹75,000 / month</option>
                        <option value="growth">₹75,000 – ₹2,00,000 / month</option>
                        <option value="scale">₹2,00,000 – ₹5,00,000 / month</option>
                        <option value="enterprise">₹5,00,000+ / month (Enterprise)</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-lg text-label-lg font-semibold text-primary-container" htmlFor="primaryService">
                        Primary Service Needed <span className="text-secondary">*</span>
                      </label>
                      <select className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm outline-none focus:bg-surface-container-low transition-all cursor-pointer" id="primaryService" required>
                        <option value="">Choose growth domain</option>
                        <option value="seo">High-Impact Search Engine Optimization (SEO)</option>
                        <option value="google_ads">Google Ads &amp; Intent PPC Management</option>
                        <option value="meta_ads">Meta, Instagram &amp; WhatsApp Performance Ads</option>
                        <option value="wordpress">High-Converting WordPress Development</option>
                        <option value="full_stack">Full 360° Akshar Digital Growth Stack</option>
                        <option value="audit">Standalone Digital Architecture Audit</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-lg text-label-lg font-semibold text-primary-container" htmlFor="growthGoal">
                      Tell us about your primary growth goal or current pain points
                    </label>
                    <textarea className="w-full p-4 rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-md text-body-md shadow-sm outline-none focus:bg-surface-container-low transition-all" id="growthGoal" placeholder="e.g. We are generating leads on Meta Ads but acquisition cost is too high; our organic rankings stalled after Google updates..." rows="4"></textarea>
                  </div>
                  
                  <div className="flex items-center gap-space-sm p-space-sm rounded-lg bg-surface-container-low">
                    <input className="w-4 h-4 rounded text-secondary-container focus:ring-0 cursor-pointer" id="ndaCheck" type="checkbox"/>
                    <label className="font-body-sm text-body-sm text-on-surface-variant cursor-pointer select-none" htmlFor="ndaCheck">
                      Request an NDA prior to disclosing proprietary business or analytics credentials.
                    </label>
                  </div>
                  
                  <div className="pt-space-xs flex flex-col gap-space-sm">
                    <button className="w-full py-4 px-space-lg rounded-lg bg-secondary-container text-on-primary font-headline-sm text-headline-sm font-bold shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-space-sm cursor-pointer" type="submit">
                      <span>Claim My Free Strategy Session</span>
                      <span className="material-symbols-outlined text-[24px]">arrow_forward</span>
                    </button>
                    <div className="flex items-center justify-center gap-2 text-on-surface-variant font-label-md text-label-md text-center">
                      <span className="material-symbols-outlined text-[16px] text-on-tertiary-container">lock</span>
                      <span>100% Privacy guaranteed. Zero spam or high-pressure sales calls.</span>
                    </div>
                  </div>
                  
                  {showFeedback && (
                    <div className="p-space-md rounded-xl bg-tertiary-container text-on-tertiary flex items-center gap-space-md animate-fade-in" id="form-feedback">
                      <span className="material-symbols-outlined text-[28px] text-tertiary-fixed">check_circle</span>
                      <div className="flex flex-col">
                        <span className="font-label-lg text-label-lg font-bold text-tertiary-fixed">Inquiry Received Successfully</span>
                        <span className="font-body-sm text-body-sm text-surface-variant">Nilesh Vaghani's strategy team will review your portal and respond within 2 hours.</span>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="w-full bg-surface-container-low py-space-2xl">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
            <div>
              <span className="font-label-md text-label-md text-secondary-container font-bold uppercase tracking-widest block mb-1">
                CLARITY &amp; PROCEDURES
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary-container tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Transparent insights into our operational model, service engagements, and results tracking before we begin.
            </p>
          </div>
          <FaqAccordion />
        </div>
      </section>
      
      {/* Bottom CTA Section */}
      <section className="w-full bg-primary-container py-space-xl text-on-primary">
        <div className="max-w-7xl mx-auto px-gutter flex flex-col md:flex-row items-center justify-between gap-space-lg">
          <div className="flex items-center gap-space-md text-left">
            <div className="w-14 h-14 rounded-2xl bg-surface-container/10 flex items-center justify-center text-secondary-container shrink-0">
              <span className="material-symbols-outlined text-[32px]">headset_mic</span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm font-bold text-on-primary">Need an immediate answer right now?</span>
              <span className="font-body-sm text-body-sm text-surface-container-highest">Our communications desk is active. Jump directly onto a call or chat.</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-space-md shrink-0">
            <a className="px-space-lg py-3 rounded-lg bg-surface-container/20 text-on-primary hover:bg-surface-container/30 font-label-lg text-label-lg font-bold flex items-center gap-space-xs transition-colors" href="tel:+918758835700">
              <span className="material-symbols-outlined text-[20px] text-secondary-container">call</span>
              <span>Call: +91 87588 35700</span>
            </a>
            <a className="px-space-lg py-3 rounded-lg bg-secondary-container text-on-primary hover:opacity-95 font-label-lg text-label-lg font-bold shadow-md flex items-center gap-space-xs transition-all" href="https://wa.me/918758835700" rel="noopener noreferrer" target="_blank">
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>Instant WhatsApp Message</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

// Extracted FAQ Component to handle state properly in React
const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "1. How quickly can we expect measurable results from SEO vs PPC?",
      answer: "With paid acquisition (Google Search Ads, Meta Performance Campaigns), qualified inbound lead pipelines usually generate within the first 72 to 96 hours following tracking pixel stabilization and conversion setup. For organic SEO, technical fixes and speed gains are visible within 3 weeks, while aggressive page-one keyword visibility and authority acquisition hit compounding momentum between 60 to 90 days."
    },
    {
      question: "2. Do I work directly with Nilesh Vaghani or an account manager?",
      answer: "Unlike massive generic agencies where clients are handed off to junior interns, Nilesh personally leads the core architecture of your digital campaign, keyword mapping, ad copy scrutiny, and bi-weekly strategic sprint calls. You also have direct real-time communication access through a dedicated senior technical specialist."
    },
    {
      question: "3. What is the minimum contract or commitment duration?",
      answer: "We believe client retention must be earned through verified ROI, not binding lock-in clauses. Paid advertising sprints operate on rolling 30-day arrangements with 15 days notice. Full SEO engagements require a standard 90-day execution framework simply because organic indexation algorithms demand that timeframe to reward white-hat content and link signals."
    },
    {
      question: "4. Do you work with businesses outside of Vadodara / Gujarat?",
      answer: "Yes. While our physical headquarters is rooted in Vadodara's commercial center, more than 60% of our portfolio comprises enterprise manufacturers, D2C brands, healthcare networks, and software companies across Mumbai, Bangalore, the National Capital Region (NCR), Dubai, and North America."
    },
    {
      question: "5. What does the complimentary 30-minute growth audit include?",
      answer: "The free 30-minute growth session is a structured, screen-shared performance diagnosis. It includes: (1) An organic competitor teardown highlighting missed commercial search queries, (2) An ad spend bleed check evaluating your current Meta and Google targeting wastage, and (3) A UX conversion benchmark identifying where mobile visitors are abandoning your funnel."
    }
  ];

  return (
    <div className="flex flex-col gap-space-md max-w-4xl mx-auto" id="faq-accordion-group">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="faq-card bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden transition-all duration-300">
            <button 
              className="faq-toggle w-full p-space-lg text-left flex items-center justify-between gap-space-md cursor-pointer select-none" 
              onClick={() => setOpenIndex(isOpen ? null : index)}
              type="button"
            >
              <span className="font-title-lg text-title-lg text-primary-container font-bold">
                {faq.question}
              </span>
              <span className={`faq-icon material-symbols-outlined text-secondary-container text-[24px] transform transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-45' : ''}`}>
                {isOpen ? 'cancel' : 'add_circle'}
              </span>
            </button>
            <div className={`faq-content px-space-lg pb-space-lg pt-0 text-on-surface-variant font-body-md text-body-md leading-relaxed ${isOpen ? 'block' : 'hidden'}`}>
              {faq.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContactPage;
