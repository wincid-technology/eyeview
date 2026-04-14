import Link from 'next/link';
import React from 'react';
import { TextEffect } from './motion-primitives/text-effect';

const AboutSection = () => {
  return (
    <section className="relative overflow-hidden bg-gray-100 w-full border-b border-gray-300 py-8">

      <div className=" mx-auto px-6 lg:px-12 w-full">
        <div className="flex flex-col mx-auto items-center justify-center gap-12 lg:flex-row">


          {/* Left Side: Image/Visual */}
          <div className="relative ">
            <div className="relative z-10 bg-transparent overflow-hidden rounded-2xl">
              <img
                src="/img/ab.png"
                alt="About Eye View Enterprises"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2">
            <div className="mb-6 inline-block rounded-full bg-red-50 px-4 py-1 text-sm font-semibold text-[#c23333]">
              About Eye View Enterprises
            </div>
            <TextEffect per='char' preset='fade' className="mb-6 text-4xl md:text-5xl font-bold text-gray-900 lg:leading-tight">
              Bridging the Gap Between Vision and Publication.
            </TextEffect>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              Eye View Enterprises is a premier publication and consultancy firm dedicated to empowering authors and academics.
              We believe in the "Power of Simplicity"—transforming complex ideas into immersive reading experiences and
              impactful academic resources.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Expert Consultancy</h4>
                  <p className="text-sm text-gray-500">Guidance from industry veterans.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Global Reach</h4>
                  <p className="text-sm text-gray-500">E-books and physical distribution.</p>
                </div>
              </div>
            </div>

            <button className="mt-10 bg-gray-900 px-8 py-3 rounded-tl-xl rounded-br-xl font-medium text-white transition-all hover:bg-[#c23333] hover:shadow-lg">
              <Link href="/about" className="flex items-center gap-2">
                Learn More Our Story
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;