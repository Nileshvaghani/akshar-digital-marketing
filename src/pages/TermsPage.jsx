import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const TermsPage = () => {
  return (
    <>
      <SEO
        title="Terms & Conditions | Akshar Digital Marketing"
        description="Terms and conditions governing the use of Akshar Digital Marketing website and services."
        canonical="https://akshardigitalmarketing.com/terms-and-conditions/"
      />

      <section className="bg-white pt-10 pb-16 md:py-20 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-blue-600 font-medium">Terms & Conditions</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B2345] tracking-tight">
            Terms & Conditions
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm space-y-6 text-sm text-slate-600 leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-[#0B2345] mb-2">1. Agreement to Terms</h2>
              <p>
                By accessing and using this website (akshardigitalmarketing.com), you acknowledge and agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our website or services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0B2345] mb-2">2. Digital Marketing Services</h2>
              <p>
                Akshar Digital Marketing provides digital marketing services including SEO, PPC management, social media management, Meta ads, graphic design, and video editing. All project deliverables, timelines, and payment structures are defined individually in mutual client proposals and agreements.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0B2345] mb-2">3. Intellectual Property Rights</h2>
              <p>
                The textual content, branding, logo designs, graphics, and code on this website are the intellectual property of Akshar Digital Marketing unless otherwise stated. Clients retain full intellectual ownership of custom deliverables produced under paid service contracts upon full settlement of invoices.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0B2345] mb-2">4. Disclaimer & Performance Realistic Expectations</h2>
              <p>
                While we employ best-in-class, ethical digital marketing practices and disciplined execution, search engine rankings and advertising performance depend on dynamic third-party algorithms (including Google, Meta, and social networks) and competitive market factors. We do not provide false guarantees of specific rankings or revenue outcomes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0B2345] mb-2">5. Governing Law</h2>
              <p>
                These terms are governed by and construed in accordance with the laws of India, with jurisdiction in Vadodara, Gujarat.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0B2345] mb-2">6. Inquiries</h2>
              <p>
                For questions regarding these terms, please reach out to us at <a href="mailto:hello@akshardigitalmarketing.com" className="text-blue-600 hover:underline">hello@akshardigitalmarketing.com</a> or call +91 87588 35700.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsPage;
