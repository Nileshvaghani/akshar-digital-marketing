import React from 'react';

const Methodology = () => {
  const steps = [
    {
      num: '01',
      icon: 'manage_search',
      title: 'Audit & Discovery',
      desc: 'Deep dive into your competitors, current search positions, technical website leaks, and historic ad spend efficiency.',
      bullet: 'Full Gap Analysis',
      numColor: 'text-secondary-container',
      bulletColor: 'text-primary-container',
      checkColor: 'text-secondary-container'
    },
    {
      num: '02',
      icon: 'route',
      title: 'Custom Growth Roadmap',
      desc: 'Crafting a tailored multi-channel architecture across SEO keyword clusters, Google intent bidding, and Meta funnels.',
      bullet: 'Tailored Funnel Spec',
      numColor: 'text-secondary-container',
      bulletColor: 'text-primary-container',
      checkColor: 'text-secondary-container'
    },
    {
      num: '03',
      icon: 'speed',
      title: 'Precision Execution',
      desc: 'Rapid rollout of high-converting creative ad variations, copy hooks, on-page optimization, and CRM WhatsApp integrations.',
      bullet: 'Live Testing Engine',
      numColor: 'text-secondary-container',
      bulletColor: 'text-primary-container',
      checkColor: 'text-secondary-container'
    },
    {
      num: '04',
      icon: 'trending_up',
      title: 'Scale & Continuous ROI',
      desc: 'Lowering CPA, scaling winning campaigns, improving conversion ratios, and delivering real-time weekly performance reports.',
      bullet: 'Predictable Compounding',
      numColor: 'text-on-tertiary-container',
      bulletColor: 'text-on-tertiary-container',
      checkColor: 'text-on-tertiary-container'
    }
  ];

  return (
    <section className="w-full bg-surface-container-lowest py-space-xl md:py-space-2xl">
      <div className="max-w-7xl mx-auto px-gutter sm:px-gutter-mobile md:px-gutter">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto pb-space-lg md:pb-space-xl">
          <span className="font-label-md text-label-md font-bold tracking-widest text-secondary-container uppercase">OUR METHODOLOGY</span>
          <h2 className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-primary font-extrabold mt-1">From Strategy to Measurable Revenue</h2>
          <p className="font-body-md md:font-body-lg text-body-md md:text-body-lg text-on-surface-variant pt-space-xs px-4 md:px-0">
            A methodical, four-phase execution framework designed to eliminate marketing waste and scale pipeline volume.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md relative">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-surface-container-low p-space-lg rounded-2xl flex flex-col justify-between relative group hover:shadow-md transition-all">
              <div>
                <div className="flex items-center justify-between pb-space-sm">
                  <span className={`font-headline-md text-headline-md font-black ${step.numColor} opacity-80`}>{step.num}</span>
                  <div className={`w-9 h-9 rounded-full bg-surface-container-lowest flex items-center justify-center ${idx === 3 ? 'text-on-tertiary-container' : 'text-primary-container'} shadow-sm`}>
                    <span className="material-symbols-outlined text-[20px]">{step.icon}</span>
                  </div>
                </div>
                <h3 className="font-title-lg text-title-lg font-bold text-primary">{step.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant pt-space-xs leading-relaxed">
                  {step.desc}
                </p>
              </div>
              <div className="pt-space-md">
                <span className={`inline-flex items-center gap-1 font-label-md text-label-md ${step.bulletColor} font-semibold`}>
                  <span className={`material-symbols-outlined text-[16px] ${step.checkColor}`}>done</span> {step.bullet}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
