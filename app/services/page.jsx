"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const servicesData = [
  {
    id: "books",
    title: "Books Publication & Consultancy",
    heading: "Book Publication & Consultancy",
    image: "/services/1.png",
    description: `
      At Eye View Enterprises, we transform your ideas, research, and creativity 
      into professionally published books that make a lasting impact. Whether 
      you are an academic author, researcher, entrepreneur, or first-time writer, 
      our team provides end-to-end guidance throughout the entire publishing journey.

      Our services include manuscript evaluation, professional editing, proofreading, formatting, cover design, ISBN assistance, and complete publishing support. We ensure that your book meets industry standards while maintaining your authentic voice and vision.

    `,
  },
  {
    id: "events",
    title: "Event Management & Consultancy",
    heading: "Event Management & Consultancy",
    image: "/services/2.png",
    description: `
      We specialize in planning and executing academic, corporate, and professional events with precision and excellence. From seminars and conferences to workshops and symposiums, we ensure every detail is managed seamlessly.

      Our services cover event planning, registrations, digital ticketing systems, technical setup, speaker coordination, promotional campaigns,  and on-ground execution. We combine strategic planning with modern digital solutions to create impactful and well-organized experiences.

    `,
  },
  {
    id: "data",
    title: "Data Management & Consultancy",
    heading: "Data Management & Consultancy",
    image: "/services/3.png",
    description: `
      In today’s data-driven environment, efficient data handling is critical for informed decision-making and sustainable growth. We provide structured, secure, and scalable data management solutions tailored to your organization’s needs.

      Our expertise includes data organization, database structuring, analytics, compliance management, security implementation, and reporting systems. We help transform complex and scattered data into streamlined, actionable insights.

    `,
  },
];


export default function Services() {
  const [activeTab, setActiveTab] = useState("books");

  const activeService = servicesData.find(
    (service) => service.id === activeTab
  );

  return (
    <section>

      {/* HEADER */}
      <section className="relative py-46 px-6 overflow-hidden servicesBanner">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center">
          <span className="text-[#ffebda] font-bold tracking-[0.3em] uppercase text-xs block mb-4">
            Know about
          </span>
          <h1 className="text-white text-5xl text-shadow-black/50 text-shadow-lg md:text-8xl font-extrabold">
            What We Do
          </h1>
        </div>
      </section>

      <section className="bg-[#f8f9fc] min-h-screen py-10 px-6">

        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-10">
            At Eye View Enterprises, we provide comprehensive publication and consultancy solutions designed to support authors, institutions, and professionals at every stage of their journey. From manuscript development and book publishing to academic event management and strategic advisory services, our approach combines creativity with structured execution.
          </div>

          {/* TABS */}
          <div className="flex flex-wrap justify-center gap-4 mb-14">
            {servicesData.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border
                ${activeTab === service.id
                    ? "bg-[#C52B28] text-white border-[#C52B28] shadow-lg"
                    : "bg-white text-gray-600 border-gray-200 hover:bg-[#C52B28]/10"
                  }
              `}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* CONTENT AREA */}
          <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">

            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-2 gap-10 items-center p-10 md:p-16"
              >

                {/* IMAGE */}
                <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
                  <Image
                    src={activeService.image}
                    alt={activeService.heading}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#C52B28] mb-6">
                    {activeService.heading}
                  </h3>

                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                    {activeService.description}
                  </p>

                </div>

              </motion.div>
            </AnimatePresence>

          </div>
        </div>
      </section>
    </section>
  );
}
