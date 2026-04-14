import { books } from "@/constant/books";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LuShoppingCart, LuDownload } from "react-icons/lu";
import { FaWhatsapp, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdContentCopy } from "react-icons/md";
import CopyButton from "@/app/books/[slug]/CopyButton";


export function generateStaticParams() {
  return books.map((book) => ({
    slug: book.slug,
  }));
}


export default async function BookDetail({ params }) {
  
  const { slug } = await params;
  
  const book = books.find((b) => b.slug === slug);
  if (!book) return notFound();
  

  return (
    <section className=" bg-[#ffffff] py-16 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">

        {/* LEFT SIDE - BOOK COVER */}
        <div className="p-4 rounded-2xl  flex justify-center">
          <div className="relative w-[320px] aspect-[3/4] rounded-xl overflow-hidden">
            <Image
              src={book.image}
              alt={book.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* RIGHT SIDE - DETAILS */}
        <div>

          {/* TITLE */}
          <h1 className="text-4xl font-semibold text-gray-800 mb-2">
            {book.title}
          </h1>

          <p className="text-gray-600 mb-6">
            Written by <span className="font-semibold text-[#EF8224]">{book.author}</span>
          </p>

          {/* DESCRIPTION */}
          <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl">
            {book.fullDescription}
          </p>

          {/* META INFO */}
          <div className="flex flex-wrap gap-10 text-sm text-gray-600 mb-8">
            <p><b>Genre :</b> <span className="font-medium">{book.category}</span></p>
            <p><b>Category :</b> <span className="font-medium">{book.category}</span></p>
            <p><b>Total Pages : </b><span className="font-medium">37</span></p>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex flex-wrap gap-6 items-center mb-8">

            <button className="px-8 py-3 border-2 border-[#C52B28] text-[#C52B28] rounded-lg rounded-tl-none font-medium hover:bg-red-50 transition">
              Book Preview
            </button>

            {book.format === "ebook" && book.pdf ? (
              <a
                href={book.pdf}
                download
                className="px-8 py-3 bg-[#C52B28] text-white rounded-lg rounded-tl-none font-medium hover:bg-[#a21e1b] transition"
              >
                <LuDownload className="inline mr-2" />
                Download PDF
              </a>
            ) : (
              <button className="px-8 py-3 bg-[#C52B28] text-white rounded-lg rounded-tl-none font-medium hover:bg-[#a21e1b] transition">
                <LuShoppingCart className="inline mr-2" />
                Buy Printed Copy
              </button>
            )}

          </div>

          {/* SHARE SECTION */}
          <div>
            <p className="text-gray-700 mb-3">Share with friends</p>
            <div className="flex items-center gap-4">

              <FaWhatsapp title="Share on Whatsapp" className="text-green-500 text-2xl hover:text-green-600 duration-200 transition-all cursor-pointer" />
             

              <CopyButton />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
