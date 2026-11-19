import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { servicesList } from '../data/servicesData';
import founderImg from '../assets/founder.jpg';

const HomePage = () => {
  const homeSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    'name': 'Akshar Digital Marketing',
    'image': 'https://akshardigitalmarketing.com/logo.jpeg',
    'description': 'Akshar Digital Marketing is a modern digital marketing agency offering SEO, PPC advertising, social media management, Meta ads, graphic design, and video editing for global and Indian businesses.',
    'url': 'https://akshardigitalmarketing.com',
    'telephone': '+918758835700',
    'email': 'hello@akshardigitalmarketing.com',
    'founder': {
      '@type': 'Person',
      'name': 'Nilesh Vaghani',
      'jobTitle': 'Founder & Digital Marketing Strategist'
    },
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Vadodara',
      'addressRegion': 'Gujarat',
      'addressCountry': 'IN'
    },
    'areaServed': [
      { '@type': 'Country', 'name': 'India' },
      { '@type': 'Country', 'name': 'United States' },
      { '@type': 'Country', 'name': 'United Kingdom' },
      { '@type': 'Country', 'name': 'Canada' },
      { '@type': 'Country', 'name': 'Australia' }
    ],
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Digital Marketing Services',
      'itemListElement': servicesList.map((service) => ({
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': service.title,
          'description': service.shortDesc,
          'url': `https://akshardigitalmarketing.com${service.path}`
        }
      }))
    }
  };

  const whyChoosePoints = [
    {
      icon: 'insights',
      title: 'Data-Driven Marketing Strategies',
      desc: 'Every campaign is built upon market research, competitor telemetry, and behavioral analytics rather than speculation.'
    },
    {
      icon: 'tune',
      title: 'Customized Marketing Solutions',
      desc: 'No cookie-cutter templates. We tailor strategies to your specific commercial niche, sales cycle, and target audiences.'
    },
    {
      icon: 'fact_check',
      title: 'Transparent Reporting',
      desc: 'Direct, clear access to real-time analytics, spend efficiency, keyword ranks, and concrete lead conversion metrics.'
    },
    {
      icon: 'trending_up',
      title: 'Focus on Business Growth',
      desc: 'We prioritize customer acquisition, pipeline velocity, and return on investment over vanity metrics and empty impressions.'
    }
  ];

  return (
    <>
      <SEO
        title="Akshar Digital Marketing | Smart Digital Marketing Agency"
        description="Grow your business with smart digital marketing. Akshar Digital Marketing delivers SEO, PPC advertising, social media marketing, Meta ads, graphic design, and video editing for ambitious businesses worldwide."
        keywords="digital marketing agency, SEO services, PPC advertising, Google ads management, Meta ads, social media marketing, video editing, graphic design, international digital marketing"
        canonical="https://akshardigitalmarketing.com/"
        schema={homeSchema}
      />

      {/* ========================================================= */}
      {/* SECTION 1: HERO SECTION                                   */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden bg-white pt-12 pb-20 md:py-24 border-b border-slate-100">
        {/* Soft Background Accents */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-50/70 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold w-fit">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                <span>ROI-FOCUSED DIGITAL MARKETING AGENCY</span>
              </div>

              {/* Main Heading (Single H1) */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B2345] tracking-tight leading-[1.15]">
                Grow Your Business with <span className="text-blue-600">Smart Digital Marketing</span>
              </h1>

              {/* Supporting Text */}
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
                We help businesses build a powerful online presence through SEO, PPC advertising, social media marketing and creative digital solutions.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex justify-center items-center gap-2 px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-sm hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                >
                  <span>Get Free Consultation</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
                <Link
                  to="/services"
                  className="inline-flex justify-center items-center gap-2 px-7 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 hover:border-slate-300 font-semibold text-base shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                >
                  <span>Explore Our Services</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
                </Link>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-blue-600 text-[18px]">check_circle</span>
                  <span className="font-medium">Vadodara HQ • Serving Globally</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-blue-600 text-[18px]">check_circle</span>
                  <span className="font-medium">Transparent Attribution</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-blue-600 text-[18px]">check_circle</span>
                  <span className="font-medium">Tailored Growth Solutions</span>
                </div>
              </div>
            </div>

            {/* Right Visual: Clean Marketing & Analytics Growth Dashboard Illustration */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto w-full max-w-lg bg-[#0B2345] rounded-3xl p-6 sm:p-8 text-white shadow-2xl shadow-blue-900/20 border border-slate-800">

                {/* Header of dashboard */}
                <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/30 text-blue-400 flex items-center justify-center">
                      <span className="material-symbols-outlined text-[22px]">trending_up</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">Marketing Performance</h3>
                      <p className="text-xs text-slate-400">Multi-Channel Inbound Engine</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Live Tracking
                  </span>
                </div>

                {/* Performance Metric Row */}
                <div className="grid grid-cols-2 gap-4 py-6 border-b border-slate-800">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <span className="text-xs text-slate-400 uppercase font-medium">Qualified Traffic</span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-2xl font-bold text-white">Growth</span>
                      <span className="text-xs font-semibold text-emerald-400 flex items-center">
                        <span className="material-symbols-outlined text-[14px]">arrow_upward</span> Upward
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-400 block mt-1">Targeted intent searches</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <span className="text-xs text-slate-400 uppercase font-medium">Conversion Rate</span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-2xl font-bold text-white">Optimized</span>
                      <span className="text-xs font-semibold text-blue-400 flex items-center">
                        <span className="material-symbols-outlined text-[14px]">verified</span> High ROI
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-400 block mt-1">Sales & consultation calls</span>
                  </div>
                </div>

                {/* SVG Visual Graph */}
                <div className="pt-6">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span>Organic & Paid Trajectory</span>
                    <span className="text-blue-400 font-medium">Consistent Trajectory</span>
                  </div>
                  <div className="w-full h-28 relative">
                    <svg className="w-full h-full" viewBox="0 0 320 100" fill="none" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="growthFill" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#1E90FF" stopOpacity="0.35" />
                          <stop offset="1" stopColor="#1E90FF" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,85 C50,78 90,65 130,50 C170,35 220,40 260,20 C285,8 305,5 320,2 L320,100 L0,100 Z"
                        fill="url(#growthFill)"
                      />
                      <path
                        d="M0,85 C50,78 90,65 130,50 C170,35 220,40 260,20 C285,8 305,5 320,2"
                        stroke="#1E90FF"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      {/* Accent dots */}
                      <circle cx="130" cy="50" r="4" fill="#60A5FA" />
                      <circle cx="260" cy="20" r="4" fill="#34D399" />
                      <circle cx="318" cy="3" r="5" fill="#3B82F6" stroke="#FFFFFF" strokeWidth="2" />
                    </svg>
                  </div>
                </div>

                {/* Channels pill list */}
                <div className="pt-4 flex items-center justify-between gap-2 text-xs">
                  <span className="px-2.5 py-1 rounded-lg bg-blue-900/40 text-blue-200">SEO</span>
                  <span className="px-2.5 py-1 rounded-lg bg-blue-900/40 text-blue-200">Google Ads</span>
                  <span className="px-2.5 py-1 rounded-lg bg-blue-900/40 text-blue-200">Meta Ads</span>
                  <span className="px-2.5 py-1 rounded-lg bg-blue-900/40 text-blue-200">Social</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: OUR SERVICES                                   */}
      {/* ========================================================= */}
      <section className="py-20 md:py-24 bg-slate-50 border-b border-slate-100" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-blue-600 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
              WHAT WE DO
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2345] tracking-tight">
              Our Services
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600">
              Targeted digital marketing solutions engineered to acquire qualified customers and grow revenue.
            </p>
          </div>

          {/* 6 Services Grid (3-column desktop, 1-column mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[24px]">
                      {service.icon}
                    </span>
                  </div>

                  {/* Service Name */}
                  <h3 className="text-xl font-bold text-[#0B2345] group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  {/* Short Description (max 2 lines) */}
                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed line-clamp-2">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Learn More link */}
                <div className="pt-6 mt-6 border-t border-slate-100">
                  <Link
                    to={service.path}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 group-hover:text-blue-700 transition-colors"
                  >
                    <span>Learn More</span>
                    <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: WHY CHOOSE AKSHAR DIGITAL MARKETING?           */}
      {/* ========================================================= */}
      <section className="py-20 md:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-blue-600 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
              OUR ADVANTAGE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2345] tracking-tight">
              Why Choose Akshar Digital Marketing?
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600">
              A reliable digital marketing partner focused on transparency, practical strategy, and sustainable business growth.
            </p>
          </div>

          {/* 4 Clean Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoosePoints.map((point, index) => (
              <div
                key={index}
                className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-6 hover:bg-white hover:shadow-md hover:border-blue-200 transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-100/70 text-blue-600 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[22px]">{point.icon}</span>
                </div>
                <h3 className="text-base font-bold text-[#0B2345] leading-snug">
                  {point.title}
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: ABOUT US PREVIEW                               */}
      {/* ========================================================= */}
      <section className="py-20 md:py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Visual / Founder */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="relative rounded-3xl overflow-hidden bg-white shadow-xl border border-slate-200">
                  <img
                    src={founderImg}
                    alt="Nilesh Vaghani - Founder of Akshar Digital Marketing"
                    className="w-full h-80 object-cover object-top"
                    loading="lazy"
                  />
                  <div className="p-5 bg-white border-t border-slate-100">
                    <h3 className="text-lg font-bold text-[#0B2345]">Nilesh Vaghani</h3>
                    <p className="text-xs font-semibold text-blue-600">Founder & Digital Marketing Strategist</p>
                    <p className="text-xs text-slate-500 mt-1">Akshar Digital Marketing • Vadodara, Gujarat</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7 flex flex-col gap-5 text-left">
              <span className="text-xs font-bold tracking-widest uppercase text-blue-600 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full w-fit">
                ABOUT US
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2345] tracking-tight">
                Your Digital Growth Partner
              </h2>

              <p className="text-base text-slate-600 leading-relaxed">
                Akshar Digital Marketing is a performance-driven agency founded by Nilesh Vaghani. Based in Vadodara, Gujarat, we partner with businesses locally in India and internationally to design and execute high-impact digital marketing strategies.
              </p>

              <div className="space-y-3 pt-1">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[14px]">check</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0B2345]">Our Approach</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      We prioritize authentic audience understanding, disciplined execution, and continuous optimization over empty vanity metrics.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[14px]">check</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0B2345]">Our Commitment</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      We are committed to helping businesses achieve tangible, compounding growth through transparent communication and data-backed tactics.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-3">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-sm hover:shadow-md transition-all"
                >
                  <span>Learn More About Us</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5: CALL TO ACTION                                 */}
      {/* ========================================================= */}
      <section className="py-20 bg-[#0B2345] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-bold tracking-widest uppercase text-blue-400 bg-blue-900/40 border border-blue-700/50 px-3.5 py-1.5 rounded-full inline-block mb-4">
            LET'S CONNECT
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Ready to Grow Your Business?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Let's build a digital marketing strategy that helps your business reach the right audience.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-lg shadow-blue-600/30 hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              <span>Get Free Consultation</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
            <a
              href="https://wa.me/918758835700"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/15 font-semibold text-base transition-all"
            >
              <span className="material-symbols-outlined text-emerald-400 text-[18px]">chat</span>
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
