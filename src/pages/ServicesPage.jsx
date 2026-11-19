import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { servicesList } from '../data/servicesData';

const ServicesPage = () => {
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': 'Our Services - Akshar Digital Marketing',
    'description': 'Explore our full suite of digital marketing services: SEO, PPC advertising, social media management, Meta ads, graphic design, and video editing.',
    'url': 'https://akshardigitalmarketing.com/services/',
    'mainEntity': {
      '@type': 'ItemList',
      'itemListElement': servicesList.map((service, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'name': service.title,
        'url': `https://akshardigitalmarketing.com${service.path}`
      }))
    }
  };

  return (
    <>
      <SEO
        title="Our Services | Akshar Digital Marketing — Full-Suite Digital Solutions"
        description="Comprehensive digital marketing services designed for business growth: SEO, PPC advertising, social media management, Meta ads, graphic design, and video editing."
        keywords="digital marketing services, SEO, Google ads, Meta ads, social media management, graphic design, video editing"
        canonical="https://akshardigitalmarketing.com/services/"
        schema={collectionSchema}
      />

      {/* Hero Header */}
      <section className="bg-white pt-10 pb-16 md:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-blue-600 font-medium">Our Services</span>
          </nav>

          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-widest uppercase text-blue-600 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full inline-block mb-4">
              SPECIALIZED CAPABILITIES
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B2345] tracking-tight leading-tight">
              Our Digital Marketing Services
            </h1>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed font-normal">
              From organic search dominance and high-intent paid advertising to engaging social content and commercial creative design, we provide targeted solutions to grow your business.
            </p>
          </div>

        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[26px]">
                      {service.icon}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-[#0B2345] group-hover:text-blue-600 transition-colors mb-3">
                    {service.title}
                  </h2>

                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-6">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-2 border-t border-slate-100 pt-5">
                    {service.coverage.slice(0, 4).map((c, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                        <span className="material-symbols-outlined text-blue-500 text-[16px] shrink-0">
                          check
                        </span>
                        <span className="font-medium truncate">{c.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <Link
                    to={service.path}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 group-hover:text-blue-700 transition-colors"
                  >
                    <span>Explore {service.shortTitle}</span>
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

      {/* Integrated Growth Engine Section */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-blue-600 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full inline-block mb-3">
              INTEGRATED SYSTEM
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2345] tracking-tight">
              How Our Services Connect to Scale Your Revenue
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Rather than isolated channels, we orchestrate multi-touchpoint marketing funnels that capture attention, nurture intent, and convert buyers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-2">Phase 1</span>
              <h3 className="text-xl font-bold text-[#0B2345] mb-2">Attract & Discover</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Organic SEO rankings and laser-targeted Google Search Ads bring high-intent prospects straight to your offerings.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-2">Phase 2</span>
              <h3 className="text-xl font-bold text-[#0B2345] mb-2">Engage & Retarget</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Meta ads, compelling graphic design, and short-form video reels keep your brand top-of-mind and nurture consideration.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-2">Phase 3</span>
              <h3 className="text-xl font-bold text-[#0B2345] mb-2">Convert & Compound</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Seamless Click-to-WhatsApp funnels and conversion-optimized landing pages turn interested visitors into paid customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0B2345] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold tracking-widest uppercase text-blue-400 bg-blue-900/40 border border-blue-700/50 px-3.5 py-1.5 rounded-full inline-block mb-4">
            LET'S COLLABORATE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Not Sure Which Services You Need?
          </h2>
          <p className="mt-4 text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Get in touch for an objective review of your business. We will identify which marketing channels will deliver the highest return on investment for your specific goals.
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
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
