import React from 'react';

const CaseStudies = () => {
  const cases = [
    {
      type: 'E-Commerce Retailer',
      duration: '6-Month Engagement',
      title: '312% Growth in Organic Revenue via SEO & Search Ads',
      desc: 'Restructured product category architectures, fixed severe canonical loops, and matched high-intent search ads with bespoke landing pages.',
      stat1Label: 'Revenue Increase',
      stat1Value: '+312%',
      stat1Color: 'text-on-tertiary-container',
      stat2Label: 'Blended ROAS',
      stat2Value: '5.4x',
      stat2Color: 'text-primary'
    },
    {
      type: 'B2B Industrial (Gujarat)',
      duration: 'Manufacturing',
      title: '140+ High-Ticket Inquiries via Meta & WhatsApp Ads',
      desc: 'Engineered a frictionless WhatsApp qualification funnel that connected decision-makers directly with the plant technical sales team.',
      stat1Label: 'Inquiries / Mo',
      stat1Value: '140+ Leads',
      stat1Color: 'text-on-tertiary-container',
      stat2Label: 'CPA Reduction',
      stat2Value: '-46%',
      stat2Color: 'text-primary'
    },
    {
      type: 'Healthcare Center',
      duration: 'Vadodara, Gujarat',
      title: '#1 Google Maps Ranking & 4.8x Patient Inquiries',
      desc: 'Optimized localized healthcare keywords, built citation authority, and instituted automated verified patient review collection.',
      stat1Label: 'Google Rank',
      stat1Value: '#1 in Map Pack',
      stat1Color: 'text-on-tertiary-container',
      stat2Label: 'Phone Consults',
      stat2Value: '4.8x Lift',
      stat2Color: 'text-primary'
    }
  ];

  return (
    <section className="w-full bg-surface-container-low py-space-2xl">
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto pb-space-xl">
          <span className="font-label-md text-label-md font-bold tracking-widest text-secondary-container uppercase">PROVEN OUTCOMES</span>
          <h2 className="font-headline-lg text-headline-lg text-primary font-extrabold mt-1">Real Businesses. Verifiable Growth.</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant pt-space-xs">
            Take a look at how our strategic digital roadmaps translate into high-ticket revenue and market authority.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg">
          {cases.map((cs, idx) => (
            <div key={idx} className="bg-surface-container-lowest p-space-xl rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer border border-transparent hover:border-outline-variant/30">
              <div>
                <div className="flex items-center justify-between pb-space-sm">
                  <span className="px-2.5 py-1 rounded-full bg-surface-container text-primary-container font-label-md text-label-md font-bold">{cs.type}</span>
                  <span className="font-label-md text-label-md text-on-surface-variant font-medium">{cs.duration}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold pt-space-xs">
                  {cs.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant pt-space-sm leading-relaxed">
                  {cs.desc}
                </p>
              </div>
              <div className="pt-space-lg">
                <div className="p-space-sm rounded-xl bg-surface-container-low grid grid-cols-2 gap-space-xs mb-space-md">
                  <div>
                    <span className="font-label-md text-label-md text-on-surface-variant">{cs.stat1Label}</span>
                    <p className={`font-headline-sm text-headline-sm font-extrabold ${cs.stat1Color}`}>{cs.stat1Value}</p>
                  </div>
                  <div>
                    <span className="font-label-md text-label-md text-on-surface-variant">{cs.stat2Label}</span>
                    <p className={`font-headline-sm text-headline-sm font-extrabold ${cs.stat2Color}`}>{cs.stat2Value}</p>
                  </div>
                </div>
                <a className="inline-flex items-center gap-space-xs font-label-md text-label-md font-bold text-secondary-container transition-all duration-300" href="#audit-session">
                  <span>Request Full Case Study</span>
                  <span className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
