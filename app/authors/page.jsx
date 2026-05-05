"use client";

import React, { useState } from "react";
import Image from "next/image";
import { books } from "@/constant/books";
import {
  FaTimes,
  FaAward,
  FaBook,
  FaQuoteLeft,
  FaArrowRight,
} from "react-icons/fa";
import { authors } from "@/constant/authors";
import { useRouter } from "next/navigation";


const AuthorsPage = () => {
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [activeTab, setActiveTab] = useState("biography");
  const [selectedBook, setSelectedBook] = useState(null);

const router = useRouter();

  const tabs = [
    { key: "biography", label: "Biography" },
    { key: "aboutauthor", label: "About Author" },
    { key: "books", label: "Books" },
  ];

  return (
    <main className="bg-[#ffffff] min-h-screen">

      {/* HEADER */}
      <section className="relative py-46 px-6 overflow-hidden authorsBanner">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center">
          <span className="text-[#ffebda] font-bold tracking-[0.3em] uppercase text-xs block mb-4">
            Know about
          </span>
          <h1 className="text-white text-5xl text-shadow-black/50 text-shadow-lg md:text-8xl font-extrabold">
            Our Ink Artists
          </h1>
        </div>
      </section>
      <div className="max-w-360 mx-auto px-6">

        {/* HEADER */}
        <div className="mt-16 ">
          <h1 className="text-[#122B76] text-4xl md:text-5xl font-bold mb-8 text-center">
            Legacy of Knowledge
          </h1>
          <p className="text-gray-700 text-center mt-2">
            Eye View Enterprises is a knowledge-driven publishing and intellectual platform committed to amplifying meaningful voices across academics, philosophy, history, and contemporary thought. We collaborate with authors, scholars, and thought leaders who challenge perspectives, preserve cultural wisdom, and contribute to informed dialogue through impactful writing and research.
          </p>
        </div>

        {/* AUTHORS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-10">
          {authors.map((author) => (
            <div
              key={author.id}
              onClick={() => {
                setSelectedAuthor(author);
                setActiveTab("biography");
              }}
              className="group bg-white p-6 rounded-2xl rounded-t-full border border-gray-200 overflow-hidden
              shadow-sm hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="relative h-[280px] rounded-t-full overflow-hidden">
                <Image
                  src={author.image}
                  alt={author.name}
                  fill
                  className="object-cover object-top   group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="pt-6 flex flex-col justify-between">
                <h3 className="text-xl flex-1 font-semibold text-[#122B76] line-clamp-1">
                  {author.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {author.title}
                </p>

                <div className="mt-4 flex items-center justify-between text-sm text-[#C52B28] font-medium">
                  View Profile
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedAuthor && (
        <div className="fixed inset-0 z-50 bg-[#122B76]/60 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-6xl max-h-[85vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row relative">

            {/* CLOSE */}
            <button
              onClick={() => setSelectedAuthor(null)}
              className="absolute top-4 right-4 bg-[#122B76] text-white p-2 rounded-full hover:bg-[#C52B28]"
            >
              <FaTimes />
            </button>

            {/* LEFT */}
            <div className="md:w-1/3 bg-gray-50 p-8 flex flex-col items-center text-center">
              <div className="relative w-36 h-36 rounded-full overflow-hidden mb-6">
                <Image
                  src={selectedAuthor.image}
                  alt={selectedAuthor.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-2xl font-semibold text-[#122B76]">
                {selectedAuthor.name}
              </h2>
              <p className="text-sm text-gray-500 mt-2">
                {selectedAuthor.title}
              </p>

            </div>

            {/* RIGHT */}
            <div className="md:w-2/3 flex flex-col">

              {/* TABS */}
              <div className="flex gap-6 px-8 pt-6 border-b overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`pb-3 text-sm font-medium border-b-2 transition ${activeTab === tab.key
                      ? "text-[#C52B28] border-[#C52B28]"
                      : "text-gray-400 border-transparent hover:text-gray-700"
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* CONTENT */}
              <div className="p-8 overflow-y-auto">
                {activeTab === "worldrecord" && (
                  <div>
                    <h4 className="text-xl font-semibold mb-3">
                      World Record
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedAuthor.details.worldRecord}
                    </p>
                  </div>
                )}

                {activeTab === "biography" && (
                  <div>
                    <FaQuoteLeft className="text-[#C52B28] text-3xl mb-4" />
                    <p className="text-gray-600 leading-relaxed">
                      {selectedAuthor.details.biography}
                    </p>
                  </div>
                )}

                {activeTab === "aboutauthor" && (
                  <div>
                    <h4 className="text-xl font-semibold mb-3">
                      About Author
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedAuthor.details.about}
                    </p>
                  </div>
                )}

                {activeTab === "books" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedAuthor.details.books.map((slug, i) => {
                      const bookData = books.find((b) => b.slug === slug);

                      if (!bookData) return null;

                      return (
                        <div
                          key={i}
                          onClick={() => router.push(`/books/${slug}`)}
                          className="border border-gray-200 rounded-lg p-4 text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer"
                        >
                          <FaBook className="inline mr-2 text-[#C52B28]" />
                          {selectedAuthor.details.bookTitles[i] || bookData.title}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedBook && (
        <div className="fixed inset-0 z-50 bg-[#122B76]/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white max-w-5xl w-full rounded-2xl overflow-hidden shadow-2xl relative flex flex-col md:flex-row">

            {/* CLOSE */}
            <button
              onClick={() => setSelectedBook(null)}
              className="absolute top-4 right-4 bg-[#122B76] text-white p-2 rounded-full z-10"
            >
              <FaTimes />
            </button>

            {/* LEFT - IMAGE */}
            <div className="md:w-1/2 h-[300px] md:h-auto relative">
              <Image
                src={selectedBook.image}
                alt={selectedBook.title}
                fill
                className="object-cover"
              />
            </div>

            {/* RIGHT - DETAILS */}
            <div className="md:w-1/2 p-8 overflow-y-auto">
              <h2 className="text-3xl font-bold mb-2">
                {selectedBook.title}
              </h2>

              <p className="text-sm text-gray-500 mb-4">
                by {selectedBook.author}
              </p>

              <p className="text-gray-600 mb-4">
                {selectedBook.shortDescription}
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                {selectedBook.fullDescription}
              </p>

              <div className="flex gap-4 text-sm">
                <span className="bg-gray-100 px-3 py-1 rounded">
                  {selectedBook.category}
                </span>
                <span className="bg-gray-100 px-3 py-1 rounded">
                  ₹{selectedBook.price || "N/A"}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default AuthorsPage;
