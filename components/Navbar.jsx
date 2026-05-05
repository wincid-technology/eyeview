"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "primereact/button";
import { FaUser, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Auto close sidebar on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="shadow-md bg-white tracking-wide relative z-50">
        {/* Top */}
        <section className="flex items-center justify-between w-full gap-5 py-3 sm:px-10 px-4 border-b border-gray-300">
          {/* WhatsApp */}
          <a
            href="https://wa.me/919650393312"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#122B76] font-bold hover:underline"
          >
            <FaWhatsapp className="text-2xl" />
            <span className="hidden lg:flex">+91 96503 93312</span>
          </a>

          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo/lg.png"
              alt="logo"
              width={1000}
              height={1000}
              className="max-w-[20vw] min-w-37"
            />
          </Link>

          {/* Login (hide on mobile when sidebar open) */}
          {(!menuOpen || typeof window === "undefined") && (
            <div className="hidden lg:flex">
              <Link href="/login"
                className="bg-[#EF8224] hover:bg-[#b65e0b] text-white m-0 flex items-center gap-2 rounded-tl-xl rounded-br-xl py-2 px-6 transition"
              >
                <FaUser className="text-sm" />
                Login
              </Link>

            </div>
          )}


          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden cursor-pointer"
          >
            <HiOutlineMenuAlt4 className="size-7 text-[#122B76]" />
          </button>
        </section>

        {/* Desktop Nav */}
        <nav className="hidden bg-[#122B76] lg:flex justify-center gap-10 py-3">
          {navLinks.map((item) => {
            const isActive =
              pathname === item.href ||
              pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-semibold transition ${isActive
                  ? "text-[#EF8224] border-b-2 border-[#EF8224]"
                  : "text-white hover:text-[#EF8224]"
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </header>

      {/* ================= MOBILE SIDEBAR ================= */}
      {/* Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-[#122B76]/40 z-[5000] transition-opacity duration-300 ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-[280px] p-4 bg-white z-[6000] shadow-lg transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Close */}
        <div className="flex gap-10 justify-between items-center p-4 border-b">
          <Link href="/">
            <Image
              src="/logo/lg.png"
              alt="logo"
              width={1000}
              height={1000}
              className="md:w-75 w-28"
            />
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className=" rounded-full font-semibold flex items-center justify-center"
          >
            ✕
          </button>
        </div>

        {/* Links */}
        <ul className="py-4 space-y-4">
          {navLinks.map((item) => {
            const isActive =
              pathname === item.href ||
              pathname.startsWith(item.href + "/");

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block font-semibold px-3 py-2 rounded-lg transition ${isActive
                    ? "bg-[#EF8224] text-white"
                    : "text-gray-800 hover:bg-gray-100"
                    }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="lg:hidden flex">
          <button
            className="bg-[#122B76] hover:bg-[#0f0640df] text-white m-0 flex items-center gap-2 rounded-tl-xl rounded-br-xl py-2 px-6 transition"
          >
            <FaUser className="text-sm" />
            Login
          </button>

        </div>
      </aside>
    </>
  );
}

/* ================= DATA ================= */

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Books", href: "/bookhub" },
  { label: "E-Books", href: "/ebook" },
  { label: "Authors", href: "/authors" },
  { label: "Services", href: "/services" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Support Ticket", href: "/support-ticket" },
];
