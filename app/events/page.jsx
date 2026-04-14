"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: 1,
      title: "Book Discussion & Intellectual Dialogue",
      date: "12 Oct 2024",
      location: "Jaipur",
      image: "/events/1.png",
      description:
        "An intellectual discussion focused on contemporary literature, cultural identity, and academic insights.",
    },
    {
      id: 2,
      title: "Academic National Conference",
      date: "05 Sep 2024",
      location: "Delhi",
      image: "/events/2.png",
      description:
        "A prestigious national conference bringing together scholars and researchers from across India.",
    },
    {
      id: 3,
      title: "Literary Book Launch",
      date: "18 Aug 2024",
      location: "Udaipur",
      description:
        "A grand book launch event celebrating literature, creativity, and intellectual excellence.",
      image: "/events/3.png",
    },
    {
      id: 4,
      title: "Hindi Literature Convention",
      date: "21 July 2024",
      location: "Nagpur",
      description:
        "A gathering of Hindi literature enthusiasts discussing poetry, prose, and cultural narratives.",
      image: "/events/4.png",
    },
    {
      id: 5,
      title: "Scholars Meet & Dialogue",
      date: "02 June 2024",
      location: "Ahmedabad",
      description:
        "An academic networking event for scholars and intellectual dialogue exchange.",
      image: "/events/5.png",
    },
  ];

  return (
    <section>

      {/* HEADER */}
      <section className="relative py-46 px-6 overflow-hidden eventsBanner">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center">
          <span className="text-[#ffebda] font-bold tracking-[0.3em] uppercase text-xs block mb-4">
            Know about
          </span>
          <h1 className="text-white text-5xl text-shadow-black/50 text-shadow-lg md:text-8xl font-extrabold">
           Glory of Events
          </h1>
        </div>
      </section>

      <div className="bg-[#f8f6f2] min-h-screen">

        {/* Events Grid */}
        <section className="py-16 px-6 md:px-20">
          <div className="mt-5 mb-16">
          <h1 className="text-black text-4xl md:text-5xl font-bold mb-8 text-center">
            Historical Events
          </h1>
          <p className="text-gray-700 text-center mt-2">
             Eye View Enterprises is a knowledge-driven publishing and intellectual platform committed to amplifying meaningful voices across academics, philosophy, history, and contemporary thought. We collaborate with authors, scholars, and thought leaders who challenge perspectives, preserve cultural wisdom, and contribute to informed dialogue through impactful writing and research.
          </p>
        </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {events.map((event) => (
              <div
                key={event.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-500"
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-600 transition">
                    {event.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-2">
                    📍 {event.location}
                  </p>

                  <p className="text-gray-500 text-sm mb-4">
                    📅 {event.date}
                  </p>

                  <button
                    onClick={() => setSelectedEvent(event)}
                    className="mt-2 text-sm font-medium text-orange-600 hover:underline"
                  >
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* MODAL */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">

          <div className="bg-white w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl relative animate-in fade-in duration-300">

            {/* Close Button */}
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 bg-black text-white p-2 rounded-full hover:bg-orange-600 transition"
            >
              <X size={18} />
            </button>

            <div className="grid md:grid-cols-2">

              {/* Image */}
              <div className="relative h-64 md:h-full">
                <Image
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-4">
                  {selectedEvent.title}
                </h2>

                <p className="text-gray-600 mb-2">
                  📍 {selectedEvent.location}
                </p>

                <p className="text-gray-600 mb-4">
                  📅 {selectedEvent.date}
                </p>

                <p className="text-gray-500 leading-relaxed">
                  {selectedEvent.description}
                </p>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}