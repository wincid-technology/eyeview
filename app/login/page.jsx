"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { FaPhone, FaLock, FaUser, FaArrowRight, FaEye, FaEyeSlash, FaChevronLeft } from 'react-icons/fa';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="relative w-full  flex items-center justify-center overflow-hidden py-16">
      
      {/* 1. Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/login.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      {/* 2. Content Container */}
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Left Side: Brand Content */}
          <div className="lg:w-1/2 text-white space-y-6 text-center lg:text-left">
            <div className="inline-block px-4 py-1 rounded-full bg-[#C52B28] text-[10px] font-black uppercase tracking-widest mb-4">
              Publication & Consultancy
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-tight uppercase tracking-tighter">
              {isLogin ? "Unlock Your" : "Start Your" } <br />
              <span className="text-[#C52B28]">{isLogin ? "Potential." : "Journey."}</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl font-medium max-w-lg mx-auto lg:mx-0">
              {isLogin 
                ? "Publish your story with the power of simplicity. Join a community of authors worldwide."
                : "Register today and get your manuscript reviewed by the industry experts at Eye View."}
            </p>

            <div className="pt-10 hidden lg:block">
              <div className="w-12 h-[2px] bg-[#C52B28] mb-4"></div>
              <p className="text-white/50 text-xs font-bold tracking-[0.4em] uppercase">
                Eye View Enterprises
              </p>
            </div>
          </div>

          {/* Right Side: Auth Form */}
          <div className="w-full max-w-[450px] bg-white rounded-tl-[3rem] rounded-br-[3rem] shadow-2xl p-8 md:p-12 transition-all duration-500">
            <div className="mb-8">
              <h3 className="text-2xl font-black text-black uppercase tracking-tight">
                {isLogin ? "Hello, Author!" : "Join the Hub"}
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                {isLogin ? "Please login to your account." : "Create your author profile."}
              </p>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              
              {/* Name Field (Only for Sign Up) */}
              {!isLogin && (
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-black uppercase tracking-widest ml-1">Full Name</label>
                  <div className="relative group">
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-2 py-3 bg-transparent border-b border-gray-200 focus:outline-none focus:border-[#C52B28] transition-all text-sm font-medium"
                    />
                    <FaUser className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#C52B28] transition-colors" />
                  </div>
                </div>
              )}

              {/* Phone Field (Used for both) */}
              <div className="space-y-1">
                <label className="text-[10px] font-black text-black uppercase tracking-widest ml-1">Phone Number</label>
                <div className="relative group flex items-center">
                  <span className="text-sm font-bold border-b border-gray-200 py-3 pr-2 text-gray-500">+91</span>
                  <input
                    type="tel"
                    placeholder="98765 43210"
                    className="w-full px-2 py-3 bg-transparent border-b border-gray-200 focus:outline-none focus:border-[#C52B28] transition-all text-sm font-medium"
                  />
                  <FaPhone className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#C52B28] transition-colors size-3" />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-1">
                <label className="text-[10px] font-black text-black uppercase tracking-widest ml-1">Password</label>
                <div className="relative group">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full px-2 py-3 bg-transparent border-b border-gray-200 focus:outline-none focus:border-[#C52B28] transition-all text-sm font-medium pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#C52B28] transition-colors focus:outline-none"
                  >
                    {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                  </button>
                </div>
              </div>

              {/* Action Button */}
              <button className="w-full mt-4 py-4 bg-[#C52B28] text-white font-black uppercase tracking-widest rounded-tl-xl rounded-br-xl hover:bg-black transition-all duration-300 shadow-xl shadow-red-500/20 flex items-center justify-center gap-3 group active:scale-[0.98]">
                {isLogin ? "Login" : "Register"}
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            {/* Switch between Login and Sign Up */}
            <div className="mt-8 text-center border-t border-gray-50 pt-6">
              <p className="text-xs text-gray-400 font-medium">
                {isLogin ? "New Author?" : "Already have an account?"}
                <button 
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-[#C52B28] font-black hover:underline ml-1 uppercase text-[11px] tracking-wider transition-all"
                >
                  {isLogin ? "Join now" : "Login here"}
                </button>
              </p>
            </div>
            
            {!isLogin && (
              <button 
                onClick={() => setIsLogin(true)}
                className="mt-4 flex items-center justify-center w-full text-[10px] font-bold text-gray-400 uppercase gap-2 hover:text-black transition-colors"
              >
                <FaChevronLeft size={8} /> Back to login
              </button>
            )}
          </div>

        </div>
      </div>
    </main>
  );
};

export default AuthPage;