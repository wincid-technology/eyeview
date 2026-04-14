"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Download } from "lucide-react";
import { FiCamera } from "react-icons/fi";

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const images = [
    "/gallery/1.jpeg",
    "/gallery/2.jpeg",
    "/gallery/3.jpeg",
    "/gallery/4.jpeg",
    "/gallery/5.jpeg",
    "/gallery/6.jpeg",
    "/gallery/7.jpeg",
    "/gallery/8.jpeg",
    "/gallery/9.jpeg",
    "/gallery/10.jpeg",
    "/gallery/11.jpeg",
    "/gallery/12.jpeg",
    "/gallery/13.jpeg",
    "/gallery/14.jpeg",
    "/gallery/15.jpeg",
    "/gallery/16.jpeg",
    "/gallery/17.jpeg",
    "/gallery/18.jpeg",
  ];

  const closeModal = () => setSelectedIndex(null);

  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setSelectedIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      {/* HEADER */}
      <section className="relative py-46 px-6 overflow-hidden galleryBanner">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center">
          <span className="text-[#ffebda] font-bold tracking-[0.3em] uppercase text-xs block mb-4">
           explore our
          </span>
          <h1 className="text-white text-5xl text-shadow-black/50 text-shadow-lg md:text-8xl font-extrabold">
           Galaxy of Visual Journies 
          </h1>
        </div>
      </section>

      <section className="bg-white py-20 px-6">

        {/* HEADER */}
        <div className="text-center mb-16 flex justify-center flex-col items-center">
          <h2 className="text-black text-4xl  md:text-5xl  font-bold mb-2">
         
            A Flashback of Our Memorable Moments
          </h2>
          <p className="text-gray-700 mt-3  max-w-6xl text-center">
            A curated collection of experiences that showcase the energy, ideas, and connections formed through our events. These images reflect the passion of scholars, authors, and participants who come together to exchange knowledge, inspire thought, and build meaningful dialogue.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-360 mx-auto">
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => setSelectedIndex(index)}
              className="relative cursor-pointer group overflow-hidden shadow-lg rounded-tl-xl rounded-br-xl"
            >
              <Image
                src={img}
                alt={`Gallery ${index}`}
                width={500}
                height={500}
                className="object-cover w-full h-60 group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="text-white bg-[#000000] p-5 rounded-full outline-2 outline-white outline-offset-4 text-2xl font-semibold">
                  <FiCamera className="text-2xl" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {selectedIndex !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white bg-black/50 p-3 rounded-full hover:bg-red-600 transition"
            >
              <X size={20} />
            </button>

            {/* Prev Button */}
            <button
              onClick={prevImage}
              className="absolute left-6 text-white bg-black/50 p-3 rounded-full hover:bg-[#C52B28] transition"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Image */}
            <div className="relative max-w-5xl w-full">
              <Image
                src={images[selectedIndex]}
                alt="Full View"
                width={1200}
                height={800}
                className="w-full h-auto rounded-xl"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-6 text-white bg-black/50 p-3 rounded-full hover:bg-[#C52B28] transition"
            >
              <ChevronRight size={24} />
            </button>

            {/* Download Button */}
            <a
              href={images[selectedIndex]}
              download
              className="absolute bottom-8 bg-[#C52B28] text-white px-6 py-3 rounded-tl-xl rounded-br-xl font-semibold flex items-center gap-2 hover:bg-[#0f0640] transition"
            >
              <Download size={18} />
              Download Image
            </a>

          </div>
        )}
      </section>

    </>
  );
}