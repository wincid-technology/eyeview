'use client';

import { scrollShowcaseData } from '@/constant/scrollData';
import { useEffect, useRef, useState } from 'react';
import { TextEffect } from './motion-primitives/text-effect';
import { FaQuoteLeft } from "react-icons/fa6";

export default function ScrollShowcase({
  autoPlay = true,
  autoPlayDelay = 4000,
}) {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);
  const dotsRef = useRef([]);
  const autoPlayRef = useRef(null);
  const currentIndexRef = useRef(0);
  const isScrollingRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);


  const updateDots = (index) => {
    dotsRef.current.forEach((dot, i) => {
      if (!dot) return;
      dot.className = `w-3 h-3 rounded-full transition-all duration-300 ${i === index
        ? 'bg-white scale-150'
        : 'bg-white/20 hover:bg-white hover:scale-150'
        }`;
    });
  };

  const scrollToSection = (index, manual = false) => {
    if (isScrollingRef.current) return;

    isScrollingRef.current = true;
    currentIndexRef.current = index;
    setActiveIndex(index); // 👈 ADD THIS

    sectionsRef.current[index]?.scrollIntoView({
      behavior: 'smooth',
    });

    updateDots(index);

    if (manual) stopAutoPlay();

    setTimeout(() => {
      isScrollingRef.current = false;
    }, 1000);
  };


  const startAutoPlay = () => {
    if (!autoPlay) return;

    autoPlayRef.current = setInterval(() => {
      const next =
        (currentIndexRef.current + 1) % scrollShowcaseData.length;
      scrollToSection(next);
    }, autoPlayDelay);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
       stopAutoPlay();
      const sectionHeight = container.clientHeight;
      const index = Math.round(container.scrollTop / sectionHeight);
      currentIndexRef.current = index;
      setActiveIndex(index);
      updateDots(index);
      updateDots(0);
      if (autoPlay) startAutoPlay();


    };

    container.addEventListener('scroll', onScroll);
    updateDots(0);
    startAutoPlay();

    return () => {
      container.removeEventListener('scroll', onScroll);
      stopAutoPlay();
    };
  }, [autoPlay, autoPlayDelay]);

  return (
    <>
      {/* Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes shine {
          from { transform: translateX(-100%) rotate(45deg); }
          to { transform: translateX(200%) rotate(45deg); }
        }
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
        .shine-effect::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,0.2),
            transparent
          );
          transform: translateX(-100%) rotate(45deg);
        }
        .shine-effect:hover::before {
          animation: shine 1.5s;
        }
      `}</style>

      <div
        ref={containerRef}
        className="h-screen lg:h-[70vh] w-full overflow-y-auto snap-y snap-mandatory bg-neutral-950 text-white no-scrollbar"

      >
        {scrollShowcaseData.map((item, index) => (
          <section
            key={item.id}
            ref={(el) => (sectionsRef.current[index] = el)}
            className={`snap-start w-full h-full flex flex-col lg:flex-row ${item.reverse ? 'lg:flex-row-reverse' : ''
              }`}
          >
            <ImageBlock src={item.image} />

            <TextBlock
              index={index}
              activeIndex={activeIndex}
              label={item.label}
              title={item.title}
              desc={item.description}
              btn={item.buttonText}
              dark={item.darkBg}
            />

          </section>
        ))}

        {/* NAV DOTS */}
        <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
          {scrollShowcaseData.map((_, i) => (
            <button
              key={i}
              ref={(el) => (dotsRef.current[i] = el)}
              onClick={() => scrollToSection(i, true)}
              className="w-3 h-3 rounded-full bg-white/20 hover:bg-white transition"
            />
          ))}
        </div>
      </div>
    </>
  );
}

/* ---------- SUB COMPONENTS ---------- */

function ImageBlock({ src }) {
  return (
    <div className="relative w-full lg:w-1/2 h-1/2 lg:h-full overflow-hidden group shine-effect">
      <img
        src={src}
        alt=""
        className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/10 to-neutral-950/5 group-hover:opacity-0 transition-opacity" />
    </div>
  );
}

function TextBlock({ label, title, desc, btn, dark, index, activeIndex }) {
  return (
    <div
      className={`w-full lg:w-1/2 h-1/2 lg:h-full flex items-center justify-center p-8 ${dark ? 'bg-neutral-900' : 'bg-neutral-950'
        }`}
    >
      <div className="max-w-full float-animation">
        <span className="text-white/80 text-xl font-mono tracking-wider">
          <FaQuoteLeft className='size-10' />
        </span>


        {activeIndex === index && (
          <TextEffect
            key={`${title}-${activeIndex}`}
            per="char"
            as="h3"
            preset="blur"
            className="mt-4 text-5xl lg:text-8xl font-bold text-white"
          >
            {title}
          </TextEffect>
        )}


        <p className="mt-6 text-neutral-400 text-lg leading-relaxed">
          {desc}
        </p>
        <button className="mt-8  text-yellow-500 text-lg font-bold italic rounded-full transition-all ">
          {btn}
        </button>
      </div>
    </div>
  );
}
