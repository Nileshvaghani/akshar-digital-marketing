import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const PrivacyPolicyPage = () => {
  return (
    <>
      <SEO
        title="Privacy Policy | Akshar Digital Marketing"
        description="Privacy policy and data protection practices of Akshar Digital Marketing. Learn how we handle and protect your personal information."
        canonical="https://akshardigitalmarketing.com/privacy-policy/"
      />

      <section className="bg-white pt-10 pb-16 md:py-20 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-blue-600 font-medium">Privacy Policy</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B2345] tracking-tight">
            Privacy Policy
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
              <h2 className="text-xl font-bold text-[#0B2345] mb-2">1. Overview</h2>
              <p>
                At Akshar Digital Marketing ("we", "our", or "us"), we respect your privacy and are committed to protecting personal data you share with us. This Privacy Policy outlines our practices regarding information collection, use, and disclosure when you visit our website (akshardigitalmarketing.com) or inquire about our digital marketing services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0B2345] mb-2">2. Information We Collect</h2>
              <p>
                We may collect personal identification information such as your name, business email address, phone number, company name, and website URL when you voluntarily complete our contact forms, request a consultation, or communicate with us directly via email or messaging platforms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0B2345] mb-2">3. How We Use Your Information</h2>
              <p>
                The information you provide is used strictly to respond to your inquiries, prepare customized digital marketing proposals, provide agreed-upon marketing services, and communicate relevant project updates. We never sell, rent, or trade your personal data to third parties.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0B2345] mb-2">4. Cookies and Analytical Tracking</h2>
              <p>
                Our website may utilize standard analytical tools (such as Google Analytics) to monitor aggregate traffic patterns, visitor navigation, and website performance. These analytics assist us in improving website user experience and Core Web Vitals. You may adjust your browser settings to decline cookies.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0B2345] mb-2">5. Data Security</h2>
              <p>
                We implement appropriate administrative and technical safeguards to prevent unauthorized access, disclosure, alteration, or destruction of your personal data.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#0B2345] mb-2">6. Contacting Us Regarding Privacy</h2>
              <p>
                If you have any questions regarding this Privacy Policy or wish to request data correction or deletion, please contact us at:
              </p>
              <div className="mt-2 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                <p><strong>Akshar Digital Marketing</strong></p>
                <p>Vadodara, Gujarat, India</p>
                <p>Email: <a href="mailto:hello@akshardigitalmarketing.com" className="text-blue-600 hover:underline">hello@akshardigitalmarketing.com</a></p>
                <p>Phone: +91 87588 35700</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;
