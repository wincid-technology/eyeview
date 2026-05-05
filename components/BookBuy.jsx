import Image from 'next/image';
import React from 'react';
import { LuShoppingCart, LuExternalLink, LuBook } from 'react-icons/lu';
import { AnimatedGroup } from './motion-primitives/animated-group';
import Link from 'next/link';

const BookHub = () => {
  const books = [
    {
      title: "Make Life Vibrant",
      author: "Mukul Kanitkar",
      desc: "A spiritual guide exploring Hindu philosophy for holistic well-being and inner peace.",
      image: "/books/1.png",
      tag: "Spiritual"
    },
    {
      title: "Constitutional Social Justice",
      author: "Dr. Anil Gajbhiye",
      desc: "An analytical deep dive into justice systems and the evolution of modern society.",
      image: "/books/2.png",
      tag: "Academic"
    },
    {
      title: "I Sacrifice for the Nation",
      author: "Umesh Kumar Chaurasia",
      desc: "A powerful narrative on national duty and the historical perspectives of Bharat.",
      image: "/books/3.png",
      tag: "History"
    },
    {
      title: "Gita-Inspired Needonomics",
      author: "Prof. Madan Mohan Goel",
      desc: "Pragmatic economic solutions for a sustainable future based on the eternal teachings of the Gita.",
      image: "/books/4.png",
      tag: "Economics"
    },
  ];

  return (
    <section className="bg-gray-100 w-full py-24 px-6 lg:px-12">
      <div className=" mx-auto max-w-360">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-[#122B76] text-4xl md:text-5xl font-bold mb-4">
              Best Sellers
            </h2>
            <p className="text-gray-600 italic">"पुस्तकों के साथ एक नया संसार खोजें।"</p>
          </div>
          <Link href={'/bookhub'} className="flex items-center gap-2 text-[#C52B28] font-bold border-b-2 border-[#C52B28] pb-1 hover:text-[#122B76] hover:border-[#0f0640] transition-all">
            View All Publications <LuExternalLink size={18} />
          </Link>
        </div>

        {/* Book Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book, index) => (
            <AnimatedGroup
              key={index}
              className=''
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                },
                item: {
                  hidden: {
                    opacity: 0,
                    filter: 'blur(12px)',
                    y: -60,
                    rotateX: 90,
                  },
                  visible: {
                    opacity: 1,
                    filter: 'blur(0px)',
                    y: 0,
                    rotateX: 0,
                    transition: {
                      type: 'spring',
                      bounce: 0.3,
                      duration: 1,
                    },
                  },
                },
              }}
            >
              <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col ">

                {/* Book Cover Container */}
                <div className="relative aspect-3/4 overflow-hidden flex justify-start bg-gray-200 group">
                  <Image
                    src={book.image}
                    alt={book.title}
                    width={900}
                    height={1000}
                    className="transition-transform mx-auto w-full scale-110 h-full object-cover duration-700 group-hover:scale-110"
                  />

                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-[#122B76] shadow-sm uppercase tracking-widest">
                      {book.tag}
                    </span>
                  </div>
                </div>


                {/* Content Area */}
                <div className="p-6 flex flex-col grow">
                  <p className="text-[#EF8224] text-xs font-bold mb-1 uppercase tracking-tighter">
                    {book.author}
                  </p>
                  <h3 className="text-[#122B76] text-xl font-bold mb-3 line-clamp-1 group-hover:text-[#C52B28] transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2 flex-1  mb-6 leading-relaxed">
                    {book.desc}
                  </p>

                  {/* Buy Button */}
                  <div className="mt-auto">
                    <button className="w-full bg-[#122B76] group-hover:bg-[#C52B28] text-white py-3 rounded-tl-xl rounded-br-xl font-bold flex items-center justify-center gap-2 transition-all duration-300">
                      <LuShoppingCart size={18} />
                      <span>Buy Now</span>
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedGroup>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookHub;