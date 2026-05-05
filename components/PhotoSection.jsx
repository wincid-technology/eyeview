import Image from 'next/image';
import { LuCamera, LuPalette, LuMap, LuBookOpen, LuPlay } from 'react-icons/lu';

import React from 'react';
import Link from 'next/link';
import { TextEffect } from './motion-primitives/text-effect';




const PhotographySection = () => {
  const features = [
    {
      title: 'Capture Heritage',
      icon: <LuCamera className="w-8 h-8 text-[#fff]" />,
      desc: 'Legacy in frames'
    },
    {
      title: 'Celebrate Culture',
      icon: <LuPalette className="w-8 h-8 text-[#fff]" />,
      desc: 'Traditions alive'
    },
    {
      title: 'Discover Bharat',
      icon: <LuMap className="w-8 h-8 text-[#fff]" />,
      desc: 'Explore the land'
    },
    {
      title: 'Get Published',
      icon: <LuBookOpen className="w-8 h-8 text-[#fff]" />,
      desc: 'Global recognition'
    }
  ];
  return (
    <section className="bg-[#c23333] py-20 px-6 w-full lg:px-12 overflow-hidden">
      <div className="container mx-auto max-w-7xl">

        {/* Header with Glass Effect */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-[#e63946] bg-white p-1 px-3 rounded-full font-bold tracking-widest uppercase text-[10px]">Visual Storytelling</span>
            <TextEffect per='char' preset='fade' className="mt-2 text-4xl md:text-5xl font-bold text-white">
              Eyeview Photography
            </TextEffect>
            <span className="text-[#122B76]  italic font-bold text-3xl md:text-4xl">Contest 2025</span>
            <p className="mt-4 text-[#122B76] font-bold text-lg">
              Showcasing the <span className="text-white font-medium">Beauty of Bharat</span> through your lens.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-white/10 border border-white/10 border-b-white px-6 py-3 rounded-full">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
            </span>
            <span className="text-white font-medium">Results Processing</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 items-stretch">


          {/* Right Side: Features & Video Reveal */}
          <div className="flex flex-col gap-8">

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {features.map((item) => (
                <div key={item.title} className="bg-white/10 border border-white/10 border-b-white p-5 rounded-2xl flex flex-col items-center justify-center hover:bg-white/10 hover:border-[#c23333]/30 transition-all duration-300 group">
                  <div className="mb-3 p-3 rounded-lg inline-block group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="text-white font-bold text-[10px] md:text-sm uppercase tracking-widest">{item.title}</h4>
                </div>
              ))}
            </div>

            {/* Video Showcase Card */}
            <div className=" grid grid-cols-2 gap-10  cursor-pointer overflow-hidden">
              <div className="relative bg-[#122B76]  border-white/10 rounded-2xl overflow-hidden ">

                <Image
                  src="/img/pse.png"
                  alt="Cinematic Landscape"
                  className="w-full h-full object-cover group-hover:opacity-40 transition-opacity"
                  width={1000}
                  height={1000}
                />

                {/* No Entry Fee Overlay */}
                <div className="absolute top-6 right-6 bg-yellow-400 text-[#122B76] px-4 py-1 rounded-full text-xs font-black uppercase shadow-lg">
                  No Entry Fee
                </div>
              </div>
              <div className='relative group rounded-2xl overflow-hidden '>

                <Image
                  src="/img/pse2.png"
                  alt="Cinematic Landscape"
                  className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
                  width={1000}
                  height={1000}
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <Link href={"https://youtube.com/shorts/OhPljMSMNxc?si=_WJhY-_Ke-ytaMoD"} target='_blank'>
                    <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#c23333] text-white  shadow-red-900/50 group-hover:scale-110 transition-transform">
                      <svg className="h-8 w-8 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </Link>
                  <h3 className="text-2xl font-bold text-white mb-2">Cinematic Preview</h3>
                  <p className="text-gray-300 text-sm max-w-md">Experience the breathtaking entries submitted by photographers across the nation.</p>
                </div>

              </div>
            </div>

            {/* Call to Action */}
            <button className="w-2/6 mx-auto bg-[#122B76] hover:bg-white hover:text-[#122B76] transition-all duration-300 rounded-tl-xl rounded-br-xl text-white py-5  font-bold flex items-center justify-center gap-3 transition-all shadow-xl shadow-red-900/20 group">
              <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              STAY TUNED FOR RESULTS
            </button>
          </div>

        </div>
      </div>
    </section >
  );
};

export default PhotographySection;