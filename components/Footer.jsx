import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LuMail, LuPhone, LuMapPin, LuInstagram, LuFacebook, LuTwitter, LuLinkedin, LuSend } from 'react-icons/lu';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 ">
      <div className="container mx-auto max-w-7xl ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Identity Column */}
          <div className="space-y-6">
            <div className="relative w-48 h-16">
              <Image
                src="/logo/lg.png" // Replace with your actual logo path
                alt="Eye View Enterprises Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Eye View Enterprises is a premier publication and consultancy firm dedicated to bridging the gap between vision and publication through the "Power of Simplicity."
            </p>
            <div className="flex gap-4">
              {[LuFacebook, LuInstagram, LuTwitter, LuLinkedin].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#0f0640] hover:bg-[#C52B28] hover:text-white transition-all duration-300 shadow-sm">
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-[#0f0640] font-bold text-lg mb-6 border-l-4 border-[#C52B28] pl-3">Authors & Books</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-600">
              {['Mukul Kanitkar', 'Dr. Ankit Gajbhiye', 'Dr. Satyavan Meshram', 'Umesh Kumar Chaurasia', 'Prof. Madan Mohan Goel'].map((author) => (
                <li key={author}>
                  <Link href="/authors" className="hover:text-[#C52B28] transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full group-hover:bg-[#C52B28]" />
                    {author}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h4 className="text-[#0f0640] font-bold text-lg mb-6 border-l-4 border-[#EF8224] pl-3">Quick Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <LuPhone className="text-[#C52B28] mt-1 shrink-0" />
                <div className="text-sm">
                  <p className="text-gray-400 text-xs uppercase font-bold tracking-widest">Call Us</p>
                  <p className="text-[#0f0640] font-bold">+91 9001112151</p>
                  <p className="text-[#0f0640] font-bold">+91 9650393312</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <LuMail className="text-[#C52B28] mt-1 shrink-0" />
                <div className="text-sm">
                  <p className="text-gray-400 text-xs uppercase font-bold tracking-widest">Email</p>
                  <p className="text-[#0f0640] font-bold break-all italic">info@eyeview.org.in</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-[#0f0640] font-bold text-lg mb-6 border-l-4 border-[#C52B28] pl-3">Subscribe</h4>
            <p className="text-sm text-gray-500 mb-6">Stay updated on our latest book launches and upcoming literary events.</p>
            <form className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-gray-50 border border-gray-100 rounded-xl py-4 pl-4 pr-14 text-sm focus:outline-none focus:border-[#C52B28] transition-colors shadow-inner"
              />
              <button className="absolute right-2 top-2 bg-[#0f0640] text-white p-2.5 rounded-lg hover:bg-[#C52B28] transition-all group">
                <LuSend size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
      </div>
        <div className="bg-[#C52B28] flex items-center">
          <div className="p-8 container mx-auto max-w-7xl border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-base text-white font-medium text-center md:text-left">
              © {new Date().getFullYear()} Eye View Enterprises. All Rights Reserved.
            </p>
            <div className="flex gap-8 text-[12px] font-bold uppercase tracking-widest text-white">
              <Link href="/pp" className="hover:text-black transition-colors">Privacy Policy</Link>
              <Link href="/tc" className="hover:text-black transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;