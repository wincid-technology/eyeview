import React from 'react';
import { LuShieldCheck, LuLock, LuEye, LuFileText, LuUserCheck } from 'react-icons/lu';

const PrivacyPolicy = () => {
  return (
    <main className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <section className="bg-[#122B76] py-20 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <LuShieldCheck className="text-[#C52B28] w-16 h-16 mx-auto mb-6" />
          <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-4">Privacy Policy</h1>
          <p className="text-gray-400 font-medium italic">Last Updated: October 2025</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6 lg:px-12">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              At <strong>Eye View Enterprises</strong>, we are committed to protecting your privacy. This policy outlines how we handle your personal information across our publication and consultancy services.
            </p>

            <div className="space-y-12">
              {/* 1. Information Collection */}
              <div className="flex gap-6">
                <div className="hidden md:block">
                  <div className="bg-gray-50 p-4 rounded-2xl text-[#C52B28]">
                    <LuUserCheck size={28} />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#122B76] mb-4">1. Information We Collect</h2>
                  <p className="text-gray-600 mb-4">
                    When you engage with our "Book Hub" or register for events like "Riddhi Siddhi," we may collect:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Contact details (Name, Email, Phone Number).</li>
                    <li>Shipping addresses for book deliveries.</li>
                    <li>Manuscript details for publication consultancy.</li>
                  </ul>
                </div>
              </div>

              {/* 2. Use of Information */}
              <div className="flex gap-6">
                <div className="hidden md:block">
                  <div className="bg-gray-50 p-4 rounded-2xl text-[#EF8224]">
                    <LuEye size={28} />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#122B76] mb-4">2. How We Use Your Data</h2>
                  <p className="text-gray-600">
                    Your data helps us provide a seamless experience, including:
                  </p>
                  <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-600">
                    <li>Processing orders and support tickets.</li>
                    <li>Notifying you of contest results and upcoming events.</li>
                    <li>Improving our consultancy services through user feedback.</li>
                  </ul>
                </div>
              </div>

              {/* 3. Data Protection */}
              <div className="flex gap-6">
                <div className="hidden md:block">
                  <div className="bg-gray-50 p-4 rounded-2xl text-[#C52B28]">
                    <LuLock size={28} />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#122B76] mb-4">3. Data Security</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We implement industry-standard security measures to ensure your data remains confidential. We do not sell or rent your personal information to third parties. Your trust is our "Power of Simplicity".
                  </p>
                </div>
              </div>

              {/* 4. Contact Us */}
              <div className="bg-gray-50 p-8 rounded-3xl border-l-8 border-[#C52B28] mt-16">
                <div className="flex items-center gap-4 mb-4">
                  <LuFileText className="text-[#122B76]" size={24} />
                  <h3 className="text-xl font-bold text-[#122B76]">Questions Regarding Privacy?</h3>
                </div>
                <p className="text-gray-600 mb-6 text-sm">
                  If you have concerns about your data, reach out to our support team directly.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Us</p>
                    <p className="text-[#C52B28] font-bold">info@eyeview.org.in</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Call Us</p>
                    <p className="text-[#122B76] font-bold">+91 9001112151</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;