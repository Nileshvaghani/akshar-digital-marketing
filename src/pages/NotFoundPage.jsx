import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFoundPage = () => {
  return (
    <>
      <SEO
        title="404 Page Not Found | Akshar Digital Marketing"
        description="The page you are looking for does not exist. Return to Akshar Digital Marketing homepage."
      />

      <section className="py-24 md:py-32 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <span className="text-6xl font-black text-blue-600">404</span>
          <h1 className="text-3xl font-extrabold text-[#0B2345] mt-4">
            Page Not Found
          </h1>
          <p className="mt-3 text-base text-slate-600 max-w-md mx-auto">
            The page you are looking for might have been moved, removed, or never existed.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-sm"
            >
              <span>Return Home</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm"
            >
              <span>View Services</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
