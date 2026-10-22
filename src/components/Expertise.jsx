import React from 'react';

const Expertise = () => {
  const cards = [
    { icon: 'search', title: 'Search Engine Optimization', desc: 'On-Page • Off-Page • Technical • Local SEO' },
    { icon: 'ads_click', title: 'Google Ads (PPC)', desc: 'Search • Display • Remarketing • Lead Gen' },
    { icon: 'view_carousel', title: 'Meta & WhatsApp Ads', desc: 'Facebook • Instagram • Instant WhatsApp Funnels' },
    { icon: 'share_reviews', title: 'Social Media Marketing', desc: 'Content • Strategy • Community Management' },
    { icon: 'devices', title: 'WordPress Web Dev', desc: 'Design • Landing Pages • Speed Optimization' },
  ];

  return (
    <section className="w-full bg-surface-container-low py-space-xl">
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="flex flex-col items-center text-center pb-space-lg">
          <span className="font-label-md text-label-md font-bold tracking-widest text-secondary-container uppercase">WHAT WE DO</span>
          <h2 className="font-headline-md text-headline-md text-primary font-bold mt-1">Digital Marketing Skills That Drive Growth</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-space-md">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group">
              <div className="w-12 h-12 rounded-lg bg-surface-container-low group-hover:bg-secondary-container group-hover:text-on-primary text-primary-container flex items-center justify-center transition-colors">
                <span className="material-symbols-outlined text-[24px]">{card.icon}</span>
              </div>
              <div className="pt-space-md">
                <h3 className="font-title-lg text-title-lg font-bold text-primary">{card.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant pt-1 leading-snug">{card.desc}</p>
              </div>
              <div className="pt-space-sm flex items-center gap-1 text-secondary-container font-label-md text-label-md font-bold group-hover:translate-x-1 transition-transform">
                <span>Learn more</span>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
