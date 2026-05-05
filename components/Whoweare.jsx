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
          </div>

          <div className="w-full lg:w-1/2 relative">
            {/* Decorative Elements */}
            <div className="relative overflow-hidden w-full flex justify-end items-center">
              <Image src="/img/wwa.png" alt="Team Collaboration" width={1000} height={1000} className="w-2/3" />
            </div>
          </div>
        </div>

        {/* Bottom Section: Mission, Vision, Why Choose Us */}
        
      </div>
    </section>
  );
};

export default IdentitySection;