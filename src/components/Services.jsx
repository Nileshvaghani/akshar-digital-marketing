import React from 'react';

const Services = () => {
  const services = [
    {
      icon: 'travel_explore', badgeColor: 'bg-emerald-100', badgeText: 'text-on-tertiary-container', badge: 'High ROI',
      title: 'Search Engine Optimization (SEO)',
      desc: 'Improve your search visibility, dominate local keywords, and attract high-intent organic traffic that converts.',
      points: ['On-Page SEO', 'Technical SEO', 'Off-Page Link Building', 'Keyword Research', 'Local SEO', 'Google Business'],
      linkText: 'Explore SEO'
    },
    {
      icon: 'all_inclusive', badgeColor: 'bg-blue-100', badgeText: 'text-secondary-container', badge: 'Scale Fast',
      title: 'Performance Marketing (Meta & WhatsApp)',
      desc: 'Create targeted advertising campaigns across Instagram, Facebook, and WhatsApp designed to drive direct leads and sales.',
      points: ['Facebook Ads', 'Instagram Ads', 'WhatsApp Automation', 'Lead Generation', 'ROAS Optimization', 'Conversion API'],
      linkText: 'Explore Performance Marketing'
    },
    {
      icon: 'adjust', badgeColor: 'bg-blue-100', badgeText: 'text-primary-container', badge: 'High Intent',
      title: 'Google Ads (PPC Campaigns)',
      desc: 'Capture ready-to-buy customers the exact moment they search for your products or solutions on Google Search & Maps.',
      points: ['Search Campaigns', 'Display & Retargeting', 'YouTube Video Ads', 'Negative Keyword Filter', 'Bid Strategy & ROAS', 'CPA Reduction'],
      linkText: 'Explore Google Ads'
    },
    {
      icon: 'campaign', badgeColor: 'bg-purple-100', badgeText: 'text-primary-container', badge: 'Brand Recall',
      title: 'Social Media Management',
      desc: 'Build an engaging brand identity, grow loyal followers, and maintain consistent visual authority across social platforms.',
      points: ['Content Calendar', 'High-Converting Creatives', 'Reels & Short Video', 'Audience Engagement', 'Brand Positioning', 'Monthly Metric Reports'],
      linkText: 'Explore Social Media'
    },
    {
      icon: 'terminal', badgeColor: 'bg-emerald-100', badgeText: 'text-on-tertiary-container', badge: 'Speed & CRO',
      title: 'WordPress Web Design & Dev',
      desc: 'Fast, responsive, conversion-engineered WordPress websites built to rank natively and turn visitors into paid inquiries.',
      points: ['Custom UI/UX Theme', 'Mobile Responsive', 'Core Web Vitals Ready', 'Landing Page CRO', 'Security & Backups', 'SEO Semantic Structure'],
      linkText: 'Explore Web Development'
    },
    {
      icon: 'pin_drop', badgeColor: 'bg-blue-100', badgeText: 'text-primary-container', badge: 'Local Dominance',
      title: 'Local SEO & Google Profile',
      desc: 'Dominate local search results in Vadodara and regional markets so nearby consumers call your business before competitors.',
      points: ['GMB / GBP Setup', 'Google Map 3-Pack', 'Local Citation Building', 'Review Generation', 'NAP Consistency', 'Geotagged Asset Feeds'],
      linkText: 'Explore Local SEO'
    }
  ];

  return (
    <section className="w-full bg-surface-container-lowest py-space-xl md:py-space-2xl" id="services-matrix">
      <div className="max-w-7xl mx-auto px-gutter sm:px-gutter-mobile md:px-gutter">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto pb-space-lg md:pb-space-xl">
          <span className="font-label-md text-label-md font-bold tracking-widest text-secondary-container uppercase">OUR SERVICES</span>
          <h2 className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-primary font-extrabold mt-1">Our Digital Marketing Services</h2>
          <p className="font-body-md md:font-body-lg text-body-md md:text-body-lg text-on-surface-variant pt-space-xs px-4 md:px-0">
            Everything you need to build, grow, and strengthen your online presence with transparent, ROI-first execution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-md md:gap-space-lg">
          {services.map((service, idx) => (
            <div key={idx} className="bg-surface-container-low p-space-lg md:p-space-xl rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200 group">
              <div>
                <div className="flex items-center justify-between pb-space-md">
                  <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-xl bg-surface-container-lowest text-primary-container flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-[24px] md:text-[26px]">{service.icon}</span>
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-full ${service.badgeColor} ${service.badgeText} font-label-md text-label-md font-semibold`}>
                    {service.badge}
                  </span>
                </div>
                <h3 className="font-title-lg text-title-lg font-bold text-primary">{service.title}</h3>
                <p className="font-body-sm md:font-body-md text-body-sm md:text-body-md text-on-surface-variant pt-space-xs">{service.desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-2 pt-space-md font-body-sm text-body-sm text-primary-container">
                  {service.points.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-on-tertiary-container shrink-0">check</span>
                      <span className="leading-tight">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-space-lg">
                <a className="inline-flex items-center gap-space-xs font-label-lg text-label-lg font-bold text-secondary-container group-hover:gap-space-sm transition-all" href="#audit-session">
                  <span>{service.linkText}</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
