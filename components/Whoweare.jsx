import Image from 'next/image';
import React from 'react';
import { LuEye, LuTarget, LuAward, LuUsers, LuCheck } from 'react-icons/lu';

const IdentitySection = () => {
  return (
    <section className="bg-[#fafafa] py-20 px-6 lg:px-12">
      <div className="container mx-auto max-w-7xl">

        {/* Top Section: Who We Are */}
        <div className="flex flex-col lg:flex-row gap-12 mb-10 justify-start items-center lg:items-start">
          <div className="w-full lg:w-1/2">
            <div className=" inline-block rounded-full bg-red-50 px-4 py-1 text-base font-semibold text-[#c23333]">
              Special Identity
            </div>
            <h2 className="mt-3 ext-4xl md:text-5xl font-bold text-[#122B76] leading-tight">
              Dedicated to  <span className="text-[#C52B28]">Ashutosh Shrivastav</span>
            </h2>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              At Eye View Enterprises, we are driven by our passion for books and a commitment to creating an exceptional reading experience. With a curated selection, quality assurance, and a focus on building a community of book lovers, we aim to inspire, educate, and connect readers with the joy of reading.
            </p>
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-6">
              {/* Existing Items */}
              <div className="flex items-center gap-2 text-lg text-[#122B76] font-semibold">
                <LuCheck className="text-[#C52B28]" /> Quality Assurance
              </div>
              <div className="flex items-center gap-2 text-lg text-[#122B76] font-semibold">
                <LuCheck className="text-[#C52B28]" /> Curated Selection
              </div>

              {/* 4 New Items based on your Mission & Goals */}
              <div className="flex items-center gap-2 text-lg text-[#122B76] font-semibold">
                <LuCheck className="text-[#C52B28]" /> Global Distribution
              </div>
              <div className="flex items-center gap-2 text-lg text-[#122B76] font-semibold">
                <LuCheck className="text-[#C52B28]" /> Author Collaboration
              </div>
              <div className="flex items-center gap-2 text-lg text-[#122B76] font-semibold">
                <LuCheck className="text-[#C52B28]" /> Cultural Preservation
              </div>
              <div className="flex items-center gap-2 text-lg text-[#122B76] font-semibold">
                <LuCheck className="text-[#C52B28]" /> Innovative Storytelling
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            {/* Decorative Elements */}
            <div className="relative overflow-hidden w-full flex justify-end items-center">
              <Image src="/img/wwa.png" alt="Team Collaboration" width={1000} height={1000} className="w-2/3" />
            </div>
          </div>
        </div>

        {/* Bottom Section: Mission, Vision, Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Mission Card */}
          <div className="bg-white p-8 border-b-8 border-[#C52B28] rounded-2xl shadow-xl transform transition hover:-translate-y-2 duration-300">
            <div className="w-14 h-14 bg-[#C52B28] rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <LuTarget className="text-white w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-[#122B76]/80 text-base leading-relaxed">
              To be the preferred publishing partner for authors seeking collaborative and quality-driven publishing experiences while nurturing emerging voices.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white p-8 rounded-2xl border-b-8 border-[#C52B28] shadow-xl transform transition hover:-translate-y-2 duration-300">
            <div className="w-14 h-14 bg-[#C52B28] rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <LuEye className="text-white w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[#122B76] mb-4">Our Vision</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              We are creators of experiences, preservers of memories, and champions of identities that carry the essence of who we are.
            </p>
          </div>

          {/* Why Choose Us Card */}
          <div className="bg-white p-8 rounded-2xl border-b-8 border-[#C52B28] shadow-xl transform transition hover:-translate-y-2 duration-300">
            <div className="w-14 h-14 bg-[#C52B28] rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <LuAward className="text-white w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[#122B76] mb-4">Why Choose Us?</h3>
            <ul className="text-gray-600 text-base space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-[#C52B28] font-bold">•</span> Innovative publishing approaches
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C52B28] font-bold">•</span> Cultural & heritage preservation
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C52B28] font-bold">•</span> Global literary landscape reach
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IdentitySection;