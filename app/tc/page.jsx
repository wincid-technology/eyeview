import React from 'react';
import {
  HiOutlineDocumentText,
  HiOutlineScale,
  HiOutlineExclamationTriangle,
  HiOutlineQuestionMarkCircle,
  
} from 'react-icons/hi2';

const TermsAndConditions = () => {
  return (
    <main className="bg-gray-100 min-h-screen">
      {/* Hero Header */}
      <section className="bg-[#0f0640] py-20 px-6 text-center">
        <div className="container mx-auto max-w-7xl">
          <div className="inline-block p-3 bg-white/10 rounded-2xl mb-6">
            <HiOutlineScale className="text-[#C52B28] w-12 h-12" />
          </div>
          <h1 className="text-white text-4xl  md:text-5xl font-extrabold mb-4 tracking-tight ">
            Terms & Conditions
          </h1>
          <p className="text-gray-400 font-medium">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 lg:px-12">
        <div className="container mx-auto max-w-7xl">

          {/* Alert */}
          <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-12 flex items-start gap-4">
            <HiOutlineExclamationTriangle
              className="text-[#EF8224] shrink-0 mt-1"
              size={24}
            />
            <p className="text-sm text-gray-600 leading-relaxed">
              By accessing the Eye View Enterprises website or using our publication
              and consultancy services, you agree to be bound by these terms. If you
              do not agree with any part of these terms, you must not use our platform.
            </p>
          </div>

          <div className="space-y-16">
            {/* 1. Use of Services */}
            <div className="relative pl-8 border-l-2 border-gray-100">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#C52B28]" />
              <h2 className="text-2xl font-bold text-[#0f0640] mb-6 flex items-center gap-3">
                <HiOutlineDocumentText className="text-[#C52B28]" />
                1. Use of Services
              </h2>
              <div className="text-gray-600 space-y-4 leading-relaxed">
                <p>
                  Our services include, but are not limited to, book publication,
                  consultancy, literary events (like <strong>Riddhi Siddhi</strong>),
                  and photography contests.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Users must provide accurate and complete information during registration.</li>
                  <li>Unauthorized use of our content or website is strictly prohibited.</li>
                  <li>We reserve the right to refuse service to anyone at any time.</li>
                </ul>
              </div>
            </div>

            {/* 2. Intellectual Property */}
            <div className="relative pl-8 border-l-2 border-gray-100">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#0f0640]" />
              <h2 className="text-2xl font-bold text-[#0f0640] mb-6 flex items-center gap-3">
                <HiOutlineScale className="text-[#C52B28]" />
                2. Intellectual Property
              </h2>
              <p className="text-gray-600 leading-relaxed">
                All content on this site, including text, graphics, logos, and book
                covers, is the property of <strong>Eye View Enterprises</strong>.
                You may not reproduce or distribute any material without written permission.
              </p>
            </div>

            {/* 3. User Submissions */}
            <div className="relative pl-8 border-l-2 border-gray-100">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#EF8224]" />
              <h2 className="text-2xl font-bold text-[#0f0640] mb-6 flex items-center gap-3">
                <HiOutlineQuestionMarkCircle className="text-[#C52B28]" />
                3. User Submissions
              </h2>
              <p className="text-gray-600 leading-relaxed">
                You retain ownership of your original submissions, but by submitting,
                you grant us permission to review and display the content for the
                intended purpose.
              </p>
            </div>

            {/* 4. Limitation of Liability */}
            <div className="bg-[#0f0640] text-white p-10 rounded-[2rem] shadow-xl">
              <h2 className="text-2xl font-bold mb-6 text-[#C52B28]">
                4. Limitation of Liability
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Eye View Enterprises shall not be liable for any indirect or
                consequential damages arising from the use of our services.
              </p>

              <div className="flex flex-col sm:flex-row gap-8 pt-6 border-t border-white/10">
                <div>
                  <span className="text-[#EF8224] text-xs font-bold uppercase tracking-widest block mb-1">
                    Contact Support
                  </span>
                  <p className="font-bold text-lg">info@eyeview.org.in</p>
                </div>
                <div>
                  <span className="text-[#EF8224] text-xs font-bold uppercase tracking-widest block mb-1">
                    Emergency Help
                  </span>
                  <p className="font-bold text-lg">+91 9650393312</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};

export default TermsAndConditions;
