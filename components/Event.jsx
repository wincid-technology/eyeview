import Image from 'next/image';
import React from 'react';

const EventSection = () => {
  return (
    <section className="bg-[#fff7ee] py-20 w-full px-6 lg:px-12">
      <div className="container mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-[#c23333] font-semibold tracking-widest uppercase text-sm">Eye View Enterprises Presents</span>
          <h2 className="mt-2 text-4xl md:text-5xl  font-bold text-gray-900">Pentastic Women</h2>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-24 bg-[#c23333] rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Creative Poster Display */}
          <div className="relative group">
            <div className="relative p-4 rounded-2xloverflow-hidden">
              <Image 
                src="/img/event.png" 
                alt="Riddhi Siddhi Event Poster" 
                className="w-full rounded-lg transition-transform duration-500 group-hover:scale-105"
                height={1000}
                width={1000}
              />
            </div>
          </div>

          {/* Right: Event Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-5xl  font-extrabold text-[#c23333] leading-tight">
                Riddhi Siddhi <br />
                <span className="text-gray-800 text-3xl italic">Tales of Strength & Spirit</span>
              </h3>
            </div>

            {/* Timeline Bar */}
            <div className="grid grid-cols-2 gap-4 border-y border-red-100 py-6">
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Launched</p>
                <p className="text-lg font-bold text-gray-800">27th Aug 2025</p>
                <p className="text-xs text-red-500 font-medium">Ganesh Chaturthi</p>
              </div>
              <div className="border-l border-red-100 pl-4">
                <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Deadline</p>
                <p className="text-lg font-bold text-gray-800">2nd Oct 2025</p>
                <p className="text-xs text-red-500 font-medium">Dusserah</p>
              </div>
            </div>

            {/* Sanskrit Quote Block */}
            <div className="bg-red-50/50 p-6 rounded-xl border-l-4 border-[#c23333]">
              <p className="text-lg font-hindi text-gray-800 leading-relaxed mb-3">
                "यत्र नार्यस्तु पूज्यन्ते रमन्ते तत्र देवताः। <br />
                यत्रैतास्तु न पूज्यन्ते सर्वास्तत्राफला क्रियाः॥"
              </p>
              <p className="text-sm italic text-gray-600">
                (Where women are honored, there the gods rejoice; where they are not, all actions are fruitless.)
              </p>
            </div>

            {/* Event Info */}
            <div className="prose prose-red max-w-none">
              <p className="text-gray-600 leading-relaxed">
                Celebrate the <strong>Devi Within</strong>. On the auspicious occasion of Ganesh Chaturthi, 
                blessed by Riddhi (Prosperity) & Siddhi (Wisdom), we launch a literary celebration exclusive for women writers.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {['Fiction', 'Non-fiction', 'Poetry', 'Knowledge Systems'].map((genre) => (
                  <span key={genre} className="px-3 py-1 bg-white border border-red-100 text-[#c23333] text-xs font-bold rounded-full">
                    {genre}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button className="bg-[#c23333] hover:bg-black duration-300 text-white px-8 py-4 rounded-tl-xl rounded-br-xl font-bold transition-all shadow-lg hover:shadow-red-200 uppercase tracking-wider text-sm">
                Register Now
              </button>
              <button className="border-2 border-gray-200 hover:border-[#c23333] text-gray-700 px-8 py-4 rounded-tl-xl rounded-br-xl font-bold transition-all uppercase tracking-wider text-sm">
                Download Guidelines
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EventSection;