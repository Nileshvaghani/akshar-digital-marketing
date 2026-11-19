import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from './SEO';

const ServicePageLayout = ({ service }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  if (!service) return null;

  // JSON-LD Schemas: Service Schema, BreadcrumbList, and FAQPage Schema
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': service.title,
      'description': service.metaDesc,
      'provider': {
        '@type': 'ProfessionalService',
        'name': 'Akshar Digital Marketing',
        'url': 'https://akshardigitalmarketing.com',
        'telephone': '+918758835700',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Vadodara',
          'addressRegion': 'Gujarat',
          'addressCountry': 'IN'
        }
      },
      'areaServed': [
        { '@type': 'Country', 'name': 'India' },
        { '@type': 'Country', 'name': 'United States' },
        { '@type': 'Country', 'name': 'United Kingdom' },
        { '@type': 'Country', 'name': 'Canada' },
        { '@type': 'Country', 'name': 'Australia' }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://akshardigitalmarketing.com/'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Our Services',
          'item': 'https://akshardigitalmarketing.com/services/'
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': service.title,
          'item': `https://akshardigitalmarketing.com${service.path}`
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': service.faqs.map(faq => ({
        '@type': 'Question',
        'name': faq.q,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.a
        }
      }))
    }
  ];

  return (
    <>
      <SEO
        title={service.metaTitle}
        description={service.metaDesc}
        keywords={`${service.title}, digital marketing, ${service.shortTitle}, Akshar Digital Marketing`}
        canonical={`https://akshardigitalmarketing.com${service.path}`}
        schema={schemas}
      />

      {/* 1. Service-specific Hero Section */}
      <section className="bg-white pt-10 pb-16 md:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-blue-600 transition-colors">Our Services</Link>
            <span>/</span>
            <span className="text-blue-600 font-medium">{service.title}</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-4">
              <span className="material-symbols-outlined text-[16px]">{service.icon}</span>
              <span>SPECIALIZED SERVICE</span>
            </div>

            {/* Exactly one H1 per page */}
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B2345] tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="mt-4 text-lg text-slate-600 leading-relaxed font-normal">
              {service.heroSubtitle}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex justify-center items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <span>Get Free Consultation</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
              <a
                href="#what-we-offer"
                className="inline-flex justify-center items-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-semibold text-sm transition-all"
              >
                <span>Explore Capabilities</span>
                <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Introduction to the Service */}
      <section className="py-16 md:py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="text-xs font-bold tracking-widest uppercase text-blue-600 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
              OVERVIEW
            </span>
            <h2 className="text-3xl font-extrabold text-[#0B2345] tracking-tight mb-6">
              Strategic {service.title} Engineered for Business Outcomes
            </h2>
            <div className="space-y-4 text-base text-slate-600 leading-relaxed">
              <p>
                In today's competitive landscape, generic marketing tactics produce diminishing returns. At Akshar Digital Marketing, our {service.title} are structured to provide businesses with a measurable competitive edge across domestic and international markets.
              </p>
              <p>
                Whether you are seeking to expand across India or acquire high-value customers in the United States, United Kingdom, Canada, or Australia, our tailored approach aligns with customer buying psychology and searcher intent to drive sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What We Offer */}
      <section className="py-20 bg-white border-b border-slate-100" id="what-we-offer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-blue-600 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
              CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2345] tracking-tight">
              What We Offer
            </h2>
            <p className="mt-3 text-base text-slate-600">
              End-to-end execution covering every critical pillar of {service.shortTitle}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.coverage.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200/80 hover:bg-white hover:shadow-md hover:border-blue-200 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-100/70 text-blue-600 flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[20px]">check_circle</span>
                  </div>
                  <h3 className="text-base font-bold text-[#0B2345] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Our Process */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-blue-600 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
              HOW WE WORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2345] tracking-tight">
              Our Process
            </h2>
            <p className="mt-3 text-base text-slate-600">
              A disciplined, 4-stage framework that turns strategy into predictable performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-blue-600 tracking-wider mb-3 block">
                    STAGE {step.step}
                  </span>
                  <h3 className="text-lg font-bold text-[#0B2345] mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Benefits of the Service */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <span className="text-xs font-bold tracking-widest uppercase text-blue-600 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
                KEY ADVANTAGES
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2345] tracking-tight leading-tight">
                Benefits of Our {service.shortTitle}
              </h2>
              <p className="mt-4 text-base text-slate-600 leading-relaxed">
                Working with Akshar Digital Marketing delivers tangible business outcomes that support your immediate acquisition goals and long-term enterprise value.
              </p>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-3">
              {service.benefits.map((benefit, bIdx) => (
                <div
                  key={bIdx}
                  className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 border border-slate-200/70"
                >
                  <div className="w-6 h-6 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[16px]">verified</span>
                  </div>
                  <span className="text-sm font-medium text-slate-700 leading-snug">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 6. Why Choose Akshar Digital Marketing */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-blue-600 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
              WHY US
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2345] tracking-tight">
              Why Choose Akshar Digital Marketing for {service.shortTitle}?
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Clear accountability, senior strategist access, and a relentless focus on client ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[22px]">person_check</span>
              </div>
              <h3 className="text-base font-bold text-[#0B2345] mb-1.5">Direct Founder Attention</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Led personally by Nilesh Vaghani with hands-on strategic oversight throughout your campaigns.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[22px]">analytics</span>
              </div>
              <h3 className="text-base font-bold text-[#0B2345] mb-1.5">Data-Backed Precision</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero guesswork. Every budget decision is justified by hard analytics and conversion signals.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[22px]">public</span>
              </div>
              <h3 className="text-base font-bold text-[#0B2345] mb-1.5">International Reach</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Proven campaign structures optimized to attract and convert prospects across global markets.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[22px]">verified_user</span>
              </div>
              <h3 className="text-base font-bold text-[#0B2345] mb-1.5">100% Account Ownership</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                You retain complete ownership of all ad accounts, assets, pixels, and creative collateral.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 7. Frequently Asked Questions */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-blue-600 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2345] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Clear answers to common questions about our {service.shortTitle}.
            </p>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, fIdx) => (
              <div
                key={fIdx}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  className="w-full text-left p-6 flex items-center justify-between gap-4 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                  onClick={() => setOpenFaqIndex(openFaqIndex === fIdx ? -1 : fIdx)}
                  aria-expanded={openFaqIndex === fIdx}
                >
                  <h3 className="text-base font-bold text-[#0B2345] leading-snug">
                    {faq.q}
                  </h3>
                  <span
                    className={`material-symbols-outlined text-[20px] text-blue-600 shrink-0 transition-transform duration-200 ${
                      openFaqIndex === fIdx ? 'rotate-180' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </button>
                {openFaqIndex === fIdx && (
                  <div className="p-6 pt-2 bg-white text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. Strong Contact / Consultation CTA */}
      <section className="py-20 bg-[#0B2345] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold tracking-widest uppercase text-blue-400 bg-blue-900/40 border border-blue-700/50 px-3.5 py-1.5 rounded-full inline-block mb-4">
            TAKE ACTION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to Accelerate Growth with {service.title}?
          </h2>
          <p className="mt-4 text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Let's discuss your current challenges and build a high-performance strategy tailored to your business goals.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-lg shadow-blue-600/30 transition-all"
            >
              <span>Get Free Consultation</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
            <a
              href="https://wa.me/918758835700"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/15 font-semibold text-base transition-all"
            >
              <span className="material-symbols-outlined text-emerald-400 text-[18px]">chat</span>
              <span>WhatsApp: +91 87588 35700</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicePageLayout;
