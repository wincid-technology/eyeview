"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';
import { TextEffect } from './motion-primitives/text-effect';
import Link from 'next/link';
import Carousel from './HeroCarousel';



const HeroSection = () => {
  return (
    <section className=' h-[84vh] bg-gray-100 py-10 w-full flex gap-10 flex-col justify-center relative'>


      <div className=" flex w-full">

        {/* TEXT */}
        <div className="flex flex-col gap-6 h-full w-full text-center items-center justify-end">

          <TextEffect
            per="char"
            preset="fade"
            className="text-[#C52B28] text-5xl md:text-7xl text-center lg:text-8xl font-black leading-[1]"
          >
            Unlock Stories.
          </TextEffect>

          <h2 className="text-[#122B76] text-3xl -mt-7 md:text-5xl font-medium italic">
            Inspire Minds.
          </h2>

          <p className="text-[#122B76] leading-relaxed font-medium text-lg max-w-xl">
            We turn raw manuscripts into world-class bestsellers with a perfect blend of traditional values and modern strategy.
          </p>
        </div>
      </div>


      <Carousel />
    </section>
  );
};

export default HeroSection;
