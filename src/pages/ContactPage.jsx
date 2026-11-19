import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: 'seo-services',
    message: '',
    botField: '' // Honeypot field for spam prevention
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    'name': 'Contact Akshar Digital Marketing',
    'description': 'Get in touch with Akshar Digital Marketing for high-ROI digital marketing strategies, SEO, PPC advertising, and social media management.',
    'url': 'https://akshardigitalmarketing.com/contact/',
    'mainEntity': {
      '@type': 'ProfessionalService',
      'name': 'Akshar Digital Marketing',
      'telephone': '+918758835700',
      'email': 'hello@akshardigitalmarketing.com',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Vadodara',
        'addressRegion': 'Gujarat',
        'addressCountry': 'IN'
      }
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter your full name (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    const phoneRegex = /^[\d\s+()-]{7,20}$/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number with country/area code.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a message with at least 10 characters detailing your request.';
    }

    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Honeypot spam protection: if botField has any value, silently stop
    if (formData.botField) {
      console.warn('Spam submission detected and blocked.');
      return;
    }

    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable API submission with smooth feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmittedData({ ...formData });
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        service: 'seo-services',
        message: '',
        botField: ''
      });
      setErrors({});
    }, 600);
  };

  return (
    <>
      <SEO
        title="Contact Us | Akshar Digital Marketing — Get Free Consultation"
        description="Contact Akshar Digital Marketing for a free consultation. Discover tailored SEO, PPC, and digital marketing strategies for your business in India, US, UK, Canada, and Australia."
        keywords="contact Akshar Digital Marketing, free digital marketing consultation, hire SEO agency, PPC agency Vadodara, international digital marketing"
        canonical="https://akshardigitalmarketing.com/contact/"
        schema={contactSchema}
      />

      {/* Header */}
      <section className="bg-white pt-10 pb-16 md:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-blue-600 font-medium">Contact Us</span>
          </nav>

          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-widest uppercase text-blue-600 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full inline-block mb-4">
              LET'S START A CONVERSATION
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B2345] tracking-tight leading-tight">
              Get in Touch for a Free Consultation
            </h1>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Have questions about your digital marketing or ready to scale your business? Share your details below and our team will get back to you within 24 hours.
            </p>
          </div>

        </div>
      </section>

      {/* Contact Form & Business Details */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Interactive & Validated Contact Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm">
              
              {isSubmitted ? (
                <div className="py-8 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-[36px]">check_circle</span>
                  </div>
                  <h2 className="text-2xl font-bold text-[#0B2345] mb-2">
                    Thank You, {submittedData?.fullName}!
                  </h2>
                  <p className="text-slate-600 text-base max-w-md mx-auto mb-6 leading-relaxed">
                    Your inquiry has been successfully received. We will review your website and requirements and reach out within 24 business hours.
                  </p>
                  
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left w-full max-w-md mb-6 text-xs text-slate-600 space-y-1.5">
                    <div><strong className="text-slate-800">Email:</strong> {submittedData?.email}</div>
                    <div><strong className="text-slate-800">Phone:</strong> {submittedData?.phone}</div>
                    <div><strong className="text-slate-800">Service:</strong> {submittedData?.service}</div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-colors"
                    >
                      Send Another Message
                    </button>
                    <a
                      href="https://wa.me/918758835700"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px]">chat</span>
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-[#0B2345]">
                      Send Us a Message
                    </h2>
                    <p className="text-sm text-slate-600 mt-1">
                      Fill out the form and we'll prepare strategic insights for your business.
                    </p>
                  </div>

                  {/* Honeypot Spam Protection Field (hidden from genuine users) */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="botField">Leave this field blank</label>
                    <input
                      type="text"
                      id="botField"
                      name="botField"
                      value={formData.botField}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. John Doe"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.fullName
                            ? 'border-red-400 focus:ring-red-200'
                            : 'border-slate-200 focus:border-blue-500 focus:ring-blue-100'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-500 mt-1.5">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. john@company.com"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.email
                            ? 'border-red-400 focus:ring-red-200'
                            : 'border-slate-200 focus:border-blue-500 focus:ring-blue-100'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 mt-1.5">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    {/* Phone Number */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +1 (555) 000-0000"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.phone
                            ? 'border-red-400 focus:ring-red-200'
                            : 'border-slate-200 focus:border-blue-500 focus:ring-blue-100'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-500 mt-1.5">{errors.phone}</p>
                      )}
                    </div>

                    {/* Company / Website */}
                    <div>
                      <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Company / Website
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. www.yourcompany.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                      />
                    </div>
                  </div>

                  {/* Required Service Dropdown */}
                  <div className="mb-6">
                    <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Required Service <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all bg-white"
                    >
                      <option value="seo-services">SEO Services (Search Engine Optimization)</option>
                      <option value="ppc-advertising">PPC Advertising (Google Ads Management)</option>
                      <option value="social-media-management">Social Media Management</option>
                      <option value="meta-ads-management">Meta Ads Management (Facebook, Instagram & WhatsApp)</option>
                      <option value="graphic-design">Graphic Design Services</option>
                      <option value="video-editing">Video Editing Services</option>
                      <option value="comprehensive-strategy">Comprehensive Growth Strategy (Multiple Services)</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div className="mb-8">
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Your Message / Goals <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe your business, primary goals, and target audience..."
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.message
                          ? 'border-red-400 focus:ring-red-200'
                          : 'border-slate-200 focus:border-blue-500 focus:ring-blue-100'
                      }`}
                    ></textarea>
                    {errors.message && (
                      <p className="text-xs text-red-500 mt-1.5">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold text-base shadow-sm hover:shadow-md transition-all"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <span className="material-symbols-outlined text-[18px]">send</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>

            {/* Right: Business Details & Social Links */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Direct Contact Card */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm">
                <h2 className="text-xl font-bold text-[#0B2345] mb-6">
                  Agency Contact Details
                </h2>

                <div className="space-y-6 text-sm">
                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[20px]">location_on</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0B2345]">Headquarters</h3>
                      <p className="text-slate-600 mt-0.5">Vadodara, Gujarat, India</p>
                      <p className="text-xs text-blue-600 mt-0.5 font-medium">Serving Clients Globally (India, US, UK, Canada, Australia)</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[20px]">call</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0B2345]">Phone & WhatsApp</h3>
                      <a href="tel:+918758835700" className="text-slate-600 hover:text-blue-600 transition-colors block mt-0.5">
                        +91 87588 35700
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[20px]">mail</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0B2345]">Email Address</h3>
                      <a href="mailto:hello@akshardigitalmarketing.com" className="text-slate-600 hover:text-blue-600 transition-colors block mt-0.5">
                        hello@akshardigitalmarketing.com
                      </a>
                    </div>
                  </div>

                  {/* Founder */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[20px]">person</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0B2345]">Founder & Strategist</h3>
                      <p className="text-slate-600 mt-0.5">Nilesh Vaghani</p>
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Connect on Social
                  </h3>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 flex items-center justify-center transition-colors"
                      aria-label="Facebook"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12z"/></svg>
                    </a>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-pink-600 hover:text-white text-slate-700 flex items-center justify-center transition-colors"
                      aria-label="Instagram"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-blue-700 hover:text-white text-slate-700 flex items-center justify-center transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                    <a
                      href="https://wa.me/918758835700"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-700 flex items-center justify-center transition-colors"
                      aria-label="WhatsApp"
                    >
                      <span className="material-symbols-outlined text-[20px]">chat</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* What Happens Next Card */}
              <div className="bg-blue-50/60 rounded-3xl p-8 border border-blue-100">
                <h3 className="text-base font-bold text-[#0B2345] mb-4">
                  What Happens Next?
                </h3>
                <div className="space-y-4 text-xs text-slate-600">
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shrink-0 mt-0.5">1</span>
                    <p><strong className="text-slate-800">Initial Review:</strong> We analyze your website and current marketing presence.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shrink-0 mt-0.5">2</span>
                    <p><strong className="text-slate-800">Discovery Discussion:</strong> A concise 30-minute call to discuss your objectives.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shrink-0 mt-0.5">3</span>
                    <p><strong className="text-slate-800">Tailored Roadmap:</strong> A clear strategy proposal with recommended channels and timeline.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
