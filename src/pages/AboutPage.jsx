import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import founderImg from '../assets/founder.jpg';

const AboutPage = () => {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    'name': 'About Akshar Digital Marketing',
    'description': 'Learn about Akshar Digital Marketing, our story, mission, vision, and data-driven marketing approach led by founder Nilesh Vaghani.',
    'url': 'https://akshardigitalmarketing.com/about/',
    'mainEntity': {
      '@type': 'ProfessionalService',
      'name': 'Akshar Digital Marketing',
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
      }
    }
  };

  const approachPillars = [
    {
      num: '01',
      title: 'In-Depth Research & Discovery',
      desc: 'We start by understanding your industry dynamics, target customer demographics, and competitor presence to uncover genuine market opportunities.'
    },
    {
      num: '02',
      title: 'Bespoke Strategy Formulation',
      desc: 'We craft customized marketing blueprints tailored to your distinct objectives, whether organic search authority or immediate paid advertising return.'
    },
    {
      num: '03',
      title: 'Disciplined Campaign Execution',
      desc: 'Our team deploys campaigns across SEO, PPC, social channels, and creative media with surgical attention to detail and conversion tracking.'
    },
    {
      num: '04',
      title: 'Continuous Optimization & Reporting',
      desc: 'We analyze real performance data, eliminating underperforming elements and iterating on winning tactics to sustain long-term growth.'
    }
  ];

  const whyWorkWithUs = [
    {
      icon: 'person_outline',
      title: 'Direct Founder Involvement',
      desc: 'Every project benefits from direct oversight and guidance by Nilesh Vaghani. No bureaucratic layers or junior handoffs.'
    },
    {
      icon: 'rule',
      title: 'Transparent Communication',
      desc: 'You always know where your marketing budget goes. We provide clear, straightforward metrics without technical jargon.'
    },
    {
      icon: 'public',
      title: 'Global Delivery Standards',
      desc: 'Based in Vadodara, India, we apply international digital marketing best practices for clients across India, the US, UK, Canada, and Australia.'
    },
    {
      icon: 'savings',
      title: 'Focus on Measurable ROI',
      desc: 'We treat your marketing budget with respect, focusing on commercial outcomes, lead quality, and sustained revenue generation.'
    }
  ];

  return (
    <>
      <SEO
        title="About Us | Akshar Digital Marketing — Your Digital Growth Partner"
        description="Learn about Akshar Digital Marketing, our story, mission, vision, and data-driven marketing approach led by founder Nilesh Vaghani. Partnering with businesses for sustainable growth."
        keywords="about Akshar Digital Marketing, Nilesh Vaghani, digital marketing agency, marketing strategy, marketing approach"
        canonical="https://akshardigitalmarketing.com/about/"
        schema={aboutSchema}
      />

      {/* Hero Header */}
      <section className="bg-white pt-12 pb-16 md:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-blue-600 font-medium">About Us</span>
          </nav>

          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-widest uppercase text-blue-600 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full inline-block mb-4">
              ABOUT AKSHAR DIGITAL MARKETING
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B2345] tracking-tight leading-tight">
              Your Dedicated Digital Growth Partner
            </h1>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              We help businesses build a modern, high-performing online presence through strategic SEO, paid advertising, social media, and digital creativity.
            </p>
          </div>

        </div>
      </section>

      {/* Introduction & Founder Story */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Founder Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-3xl overflow-hidden bg-white shadow-xl border border-slate-200">
                <img
                  src={founderImg}
                  alt="Nilesh Vaghani, Founder of Akshar Digital Marketing"
                  className="w-full h-96 object-cover object-top"
                  loading="lazy"
                />
                <div className="p-6 bg-white border-t border-slate-100">
                  <h3 className="text-xl font-bold text-[#0B2345]">Nilesh Vaghani</h3>
                  <p className="text-sm font-semibold text-blue-600">Founder & Digital Marketing Strategist</p>
                  <p className="text-xs text-slate-500 mt-1">Akshar Digital Marketing • Vadodara, Gujarat</p>
                </div>
              </div>
            </div>

            {/* Story Content */}
            <div className="lg:col-span-7 flex flex-col gap-5 text-left">
              <span className="text-xs font-bold tracking-widest uppercase text-blue-600 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full w-fit">
                OUR STORY
              </span>

              <h2 className="text-3xl font-extrabold text-[#0B2345] tracking-tight">
                Built on Integrity, Practical Strategy, and Client Success
              </h2>

              <p className="text-base text-slate-600 leading-relaxed">
                Akshar Digital Marketing was founded by Nilesh Vaghani with a simple, genuine vision: to provide businesses with honest, transparent, and performance-driven digital marketing.
              </p>

              <p className="text-base text-slate-600 leading-relaxed">
                Many agencies overwhelm business owners with technical jargon, complicated dashboards, and vanity metrics that do not translate into real commercial revenue. At Akshar Digital Marketing, we do things differently. We focus on what truly matters to growing businesses: qualified leads, customer acquisition, and measurable return on investment.
              </p>

              <p className="text-base text-slate-600 leading-relaxed">
                Headquartered in Vadodara, Gujarat, we work with ambitious entrepreneurs and enterprises across India and internationally. Whether helping a business claim top rankings on search engines, run profitable Google and Meta ad campaigns, or produce captivating social media content, we approach every project with the care and dedication of a true growth partner.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission */}
            <div className="p-8 sm:p-10 rounded-2xl bg-blue-50/60 border border-blue-100 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-6 shadow-sm">
                  <span className="material-symbols-outlined text-[26px]">flag</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0B2345] mb-3">Our Mission</h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  To empower businesses of all sizes with clean, data-driven digital marketing strategies that attract qualified prospects, build lasting brand value, and accelerate commercial growth.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="p-8 sm:p-10 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#0B2345] text-white flex items-center justify-center mb-6 shadow-sm">
                  <span className="material-symbols-outlined text-[26px]">visibility</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0B2345] mb-3">Our Vision</h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  To be recognized globally as a trusted, authentic digital marketing agency known for strategic clarity, transparent execution, and enduring client partnerships.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Marketing Approach */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-blue-600 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
              METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2345] tracking-tight">
              Our Marketing Approach
            </h2>
            <p className="mt-3 text-base text-slate-600">
              A structured, repeatable methodology designed to maximize results at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {approachPillars.map((step) => (
              <div
                key={step.num}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm flex flex-col"
              >
                <span className="text-xs font-bold text-blue-600 tracking-wider mb-3">
                  STEP {step.num}
                </span>
                <h3 className="text-lg font-bold text-[#0B2345] mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Why Businesses Should Work With Us */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-blue-600 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
              THE AKSHAR PROMISE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2345] tracking-tight">
              Why Businesses Should Work With Us
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Clear accountability, proven methodologies, and a steadfast focus on your bottom line.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyWorkWithUs.map((item, index) => (
              <div
                key={index}
                className="bg-slate-50/70 rounded-2xl p-7 border border-slate-200/80 flex flex-col"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
                </div>
                <h3 className="text-base font-bold text-[#0B2345] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-20 bg-[#0B2345] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold tracking-widest uppercase text-blue-400 bg-blue-900/40 border border-blue-700/50 px-3.5 py-1.5 rounded-full inline-block mb-4">
            START YOUR JOURNEY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to Partner with Akshar Digital Marketing?
          </h2>
          <p className="mt-4 text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Schedule a free consultation today to discuss your commercial growth objectives and discover how our tailored strategies can help your business excel.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-lg shadow-blue-600/30 transition-all"
            >
              <span>Get Free Consultation</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/15 font-semibold text-base transition-all"
            >
              <span>Explore Our Services</span>
              <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
