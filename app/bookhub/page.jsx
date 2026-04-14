"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaFilter } from "react-icons/fa";
import { books as allBooks } from "@/constant/books";

const BookStore = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTab, setActiveTab] = useState("paperback");
  const [activeLanguage, setActiveLanguage] = useState("All");

  const categories = [
    "All",
    "Literature",
    "Business",
    "Philosophy",
    "Psychology",
    "Religion",
    "Children",
    "Education",
    "Spiritual",
    "Academic",
    "Economics",
    "Career",
    "Mythology"
  ];

  // Dynamic languages from books data
  const languages = [
    "All",
    ...new Set(allBooks.map((b) => b.language).filter(Boolean))
  ];

  // FILTER LOGIC
  const filteredBooks = allBooks.filter((book) => {

    const matchesTab =
      activeTab === "ebook"
        ? book.format === "ebook"
        : book.format !== "ebook";

    const matchesCategory =
      activeCategory === "All" || book.category === activeCategory;

    const matchesLanguage =
      activeLanguage === "All" || book.language === activeLanguage;

    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesCategory && matchesLanguage && matchesSearch;

  });

  return (
    <main className="bg-[#fcfcfc] min-h-screen">

      {/* HEADER */}
      <section className="relative py-46 px-6 overflow-hidden bookhubBanner">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center">
          <span className="text-[#ffebda] font-bold tracking-[0.3em] uppercase text-xs block mb-4">
            Explore Minds With
          </span>
          <h1 className="text-white text-5xl text-shadow-black/50 text-shadow-lg md:text-8xl font-extrabold">
            Visionary Thoughts
          </h1>
        </div>
      </section>

      {/* SEARCH + FILTER */}
      <section className="sticky top-0 z-30 bg-white border-b border-gray-200 py-6 px-6">

        <div className="max-w-7xl mx-auto flex flex-col gap-6">

   

          {/* Search */}
          <div className="relative w-full">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by title or author..."
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-[#C52B28]"
            />
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            <h1 className="font-bold">Category: </h1>
            <FaFilter className="hidden md:block mt-3 text-[#0f0640]" />

            {categories.map((cat) => (

              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition ${activeCategory === cat
                    ? "bg-[#C52B28] text-white"
                    : "bg-gray-100 text-gray-600"
                  }`}
              >
                {cat.toUpperCase()}
              </button>

            ))}
          </div>

          {/* Language Filter */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            <h1 className="font-bold">Language: </h1>
            {languages.map((lang) => (

              <button
                key={lang}
                onClick={() => setActiveLanguage(lang)}
                className={`px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition ${activeLanguage === lang
                    ? "bg-[#0f0640] text-white"
                    : "bg-gray-100 text-gray-600"
                  }`}
              >
                {lang.toUpperCase()}
              </button>

            ))}
          </div>

        </div>

      </section>

      {/* BOOK GRID */}
      <section className="py-12 px-6">

        <div className="max-w-7xl mx-auto">

          {filteredBooks.length ? (

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

              {filteredBooks.map((book) => (

                <Link key={book.id} href={`/books/${book.slug}`}>

                  <div className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition cursor-pointer">

                    <div className="relative aspect-[3/4] overflow-hidden">

                      <Image
                        src={book.image}
                        alt={book.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-all duration-500"
                      />

                      <div className="absolute top-4 left-4">

                        <span className="bg-white px-3 py-1 rounded-full text-[10px] font-bold">
                          {book.category}
                        </span>

                      </div>

                    </div>

                    <div className="p-6">

                      <p className="text-sm font-medium text-[#EF8224] mb-2">
                        By {book.author}
                      </p>

                      <h3 className="font-bold text-[#0f0640] text-xl mb-1 line-clamp-1">
                        {book.title}
                      </h3>

                      <p className="text-sm text-gray-500 line-clamp-2 mb-4 leading-relaxed">
                        {book.shortDescription}
                      </p>

                      <div className="flex items-center justify-between">

                        <span className="font-semibold text-[#0f0640]">
                          ₹{book.price}
                        </span>

                        <span className="text-xs font-medium text-[#C52B28]">
                          View Details →
                        </span>

                      </div>

                    </div>

                  </div>

                </Link>

              ))}

            </div>

          ) : (

            <div className="text-center py-20">

              <h3 className="text-2xl font-bold text-[#0f0640]">
                No books found
              </h3>

              <p className="text-gray-500">
                Try changing tab, search, category or language.
              </p>

            </div>

          )}

        </div>

      </section>

    </main>
  );
};

export default BookStore;