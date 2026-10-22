import React from 'react';
import founderImg from '../assets/founder.jpg';

const Founder = () => {
  return (
    <section className="w-full bg-surface-container-low py-space-2xl">
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-primary-container rounded-3xl transform rotate-2"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-xl bg-surface-container-lowest">
                <img 
                  alt="Nilesh Vaghani, Founder of Akshar Digital Marketing" 
                  className="w-full h-auto aspect-square object-cover object-top" 
                  src={founderImg}
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-primary via-primary/80 to-transparent p-space-md text-on-primary">
                  <p className="font-title-lg text-title-lg font-bold">Nilesh Vaghani</p>
                  <div className="flex items-center gap-1 text-surface-variant font-label-md text-label-md">
                    <span className="material-symbols-outlined text-[16px] text-secondary-container">location_on</span>
                    <span>Vadodara, Gujarat, India</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-5 -right-4 bg-surface-container-lowest p-space-sm rounded-xl shadow-lg flex items-center gap-space-xs">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 text-on-tertiary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-[22px]">verified</span>
                </div>
                <div className="pr-2">
                  <span className="font-label-md text-label-md font-bold text-primary block leading-none">Founder & Strategist</span>
                  <span className="font-label-md text-label-md text-on-surface-variant">Akshar Digital</span>
                </div>
              </div>
            </div>
            
            <div className="mt-space-lg w-full max-w-md bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center justify-around text-center">
              <div>
                <p className="font-title-lg text-title-lg font-extrabold text-primary">8+ Years</p>
                <p className="font-label-md text-label-md text-on-surface-variant">Digital Strategy</p>
              </div>
              <div className="h-8 w-px bg-surface-container"></div>
              <div>
                <p className="font-title-lg text-title-lg font-extrabold text-primary">150+</p>
                <p className="font-label-md text-label-md text-on-surface-variant">Campaigns</p>
              </div>
              <div className="h-8 w-px bg-surface-container"></div>
              <div>
                <p className="font-title-lg text-title-lg font-extrabold text-on-tertiary-container">4.2x</p>
                <p className="font-label-md text-label-md text-on-surface-variant">Avg. ROAS</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 flex flex-col gap-space-md">
            <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container text-primary-container font-label-md text-label-md w-fit">
              <span className="material-symbols-outlined text-[16px] text-secondary-container">shield_person</span>
              <span className="tracking-wider uppercase font-bold">MEET THE FOUNDER</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary font-extrabold tracking-tight">
              Strategic Digital Marketing Powered by Real Business Insight
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Led by Nilesh Vaghani, Akshar Digital Marketing was founded on a singular conviction: marketing isn't about vanity impressions, it's about compounding revenue. Based in Vadodara, Gujarat, we partner with ambitious entrepreneurs, local business founders, and established enterprises across India to design custom marketing engines that reliably acquire high-value customers.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pt-space-xs">
              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-orange-50 text-secondary-container flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-[20px]">insights</span>
                </div>
                <h4 className="font-label-lg text-label-lg font-bold text-primary">Data-Backed Strategy</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant pt-1">Pure attribution, granular keyword telemetry, and zero guesswork.</p>
              </div>
              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-primary-container flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-[20px]">bolt</span>
                </div>
                <h4 className="font-label-lg text-label-lg font-bold text-primary">Rapid Execution</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant pt-1">Weekly sprints, transparent live dashboards, and adaptive iterations.</p>
              </div>
              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-on-tertiary-container flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-[20px]">handshake</span>
                </div>
                <h4 className="font-label-lg text-label-lg font-bold text-primary">Direct Senior Access</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant pt-1">Work directly with senior strategists. No junior handoffs.</p>
              </div>
            </div>
            
            <div className="mt-space-xs p-space-md rounded-xl bg-primary-container text-on-primary flex items-start gap-space-sm shadow-sm">
              <span className="material-symbols-outlined text-[28px] text-secondary-container shrink-0">format_quote</span>
              <div>
                <p className="font-body-md text-body-md font-medium text-surface-container-highest italic">
                  “Your digital growth isn’t just our job—it’s our personal strategy and commitment. When your revenue scales, our mission succeeds.”
                </p>
                <span className="font-label-md text-label-md text-secondary-container font-bold pt-1 block">— Nilesh Vaghani, Founder</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Founder;
