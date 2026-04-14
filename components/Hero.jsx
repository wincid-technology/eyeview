"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';
import { TextEffect } from './motion-primitives/text-effect';
import Link from 'next/link';

// 4 Books ki images yahan add karein
const BOOKS = [
  { id: 1, src: '/books/1.png' },
  { id: 2, src: '/books/2.png' },
  { id: 3, src: '/books/3.png' },
  { id: 4, src: '/books/4.png' },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide logic (Every 3 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % BOOKS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // 🔹 Slider Controls
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % BOOKS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + BOOKS.length) % BOOKS.length);
  };

  return (
    <section className='w-full h-full'>


      


      <div className=' absolute left-0 h-full w-full opacity-40 heroBg'></div>
      <section className="relative w-full h-full flex items-start  overflow-hidden py-20">


        <div className="w-full px-6 h-full lg:px-20">
          <div className="flex w-full gap-16 items-end justify-evenly">

            {/* --- LEFT SIDE: TEXT + SLIDER --- */}
            <div className=" flex">

              {/* TEXT */}
              <div className="flex flex-col gap-6 h-full justify-end">
                <span className="text-black/80 font-bold tracking-[0.2em] uppercase text-sm border-l-4 border-[#C52B28] pl-4">
                  Est. 2024 Publication House
                </span>

                <TextEffect
                  per="char"
                  preset="fade"
                  className="text-[#C52B28] text-5xl md:text-7xl lg:text-8xl font-black leading-[1]"
                >
                  Unlock Stories.
                </TextEffect>

                <h2 className="text-black text-3xl md:text-5xl font-medium italic">
                  Inspire Minds.
                </h2>

                <p className="text-gray-900 leading-relaxed font-medium text-lg max-w-xl">
                  We turn raw manuscripts into world-class bestsellers with a perfect blend of traditional values and modern strategy.
                </p>
              </div>
            </div>

              {/* 🔥 SLIDER BELOW TEXT */}
              <div className="relative w-[260px] h-[380px]">

                <AnimatePresence mode="sync">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, z: 50 }}
                    animate={{ opacity: 1, z: 0 }}
                    exit={{ opacity: 0, z: -50 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={BOOKS[currentIndex].src}
                      alt="Book"
                      fill
                      className="object-cover rounded-xl shadow-xl"
                    />
                  </motion.div>
                </AnimatePresence>

              </div>


          </div>
        </div>
      </section>
    </section>
  );
};

export default HeroSection;
