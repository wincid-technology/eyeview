"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { FaPhone, FaUser, FaArrowRight, FaEye, FaEyeSlash } from 'react-icons/fa';
import toast from 'react-hot-toast';

const AuthPage = () => {
  const [role, setRole] = useState("user");
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const [username, setUsername] = useState(""); // admin
  const [email, setEmail] = useState(""); // user
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (role === "user") {
      if (!otpSent) {
        toast.error("Please verify email first ❌");
        return;
      }

      if (otp !== String(generatedOtp)) {
        toast.error("Invalid OTP ❌");
        return;
      }

      toast.success("Email Verified ✅");
    }

    if (role === "admin") {
      const adminUser = process.env.NEXT_PUBLIC_ADMIN_USERNAME;
      const adminPass = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

      if (username === adminUser && password === adminPass) {
        document.cookie = "admin-auth=true; path=/";

        toast.success("Admin Login Success ✅");

        // redirect to admin
        window.location.href = "/admin";
      } else {
        alert("Invalid Admin Credentials ❌");
      }
    } else {
      // user login
      alert("User Login Success ✅");
    }
  };

  return (
    <main className="relative w-full flex items-center justify-center overflow-hidden py-16">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image src="/img/login.png" alt="Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-[#000]/60 backdrop-blur-[2px]" />
      </div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Left */}
          <div className="lg:w-1/2 text-white space-y-6">
            <h1 className="text-5xl font-black uppercase">
              Unlock Your <span className="text-[#C52B28]">Potential</span>
            </h1>
            <p>
              {role === "admin"
                ? "Manage platform securely."
                : "Access your account easily."}
            </p>
          </div>

          {/* Right */}
          <div className="w-full max-w-[450px] bg-white rounded-tl-[3rem] rounded-br-[3rem] p-8">

            {/* Tabs */}
            <div className="flex mb-6 border-b border-gray-300">
              <button
                onClick={() => setRole("user")}
                className={`flex-1 py-2 uppercase font-semibold ${role === "user" ? "border-b-2 border-red-500 text-red-500" : ""}`}
              >
                User
              </button>

              <button
                onClick={() => {
                  setRole("admin");
                  setIsLogin(true);
                }}
                className={`flex-1 py-2 uppercase font-semibold ${role === "admin" ? "border-b-2 border-red-500 text-red-500" : ""}`}
              >
                Admin
              </button>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>

              {/* ADMIN USERNAME */}
              {role === "admin" && (
                <div>
                  <label className="text-xs mb-3 font-bold">Username</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full border-b border-gray-300 py-2 px-3 focus-within:border-0 focus-within:ring-2 focus-within:ring-red-600 focus-within:outline-0"
                    placeholder="Admin username"
                  />
                </div>
              )}

              {/* USER PHONE */}
              {role === "user" && (
                <div>
                  <label className="text-xs font-bold">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border-b border-gray-300 py-2 px-3 focus-within:border-0 focus-within:ring-2 focus-within:ring-red-600 focus-within:outline-0"
                    placeholder="you@example.com"
                  />
                </div>
              )}
              {role === "user" && !otpSent && (
                <button
                  type="button"
                  onClick={async () => {
                    const newOtp = Math.floor(100000 + Math.random() * 900000);
                    setGeneratedOtp(newOtp);

                    await fetch("/api/send-otp", {
                      method: "POST",
                      body: JSON.stringify({ email, otp: newOtp }),
                    });

                    setOtpSent(true);
                    toast.success("OTP sent to email 📩");
                  }}
                  className="w-full py-2 bg-[#122B76] text-white rounded"
                >
                  Send OTP
                </button>

              )}
              {role === "user" && otpSent && (
                <div>
                  <label className="text-xs font-bold">Enter OTP</label>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full border-b py-2 px-3"
                    placeholder="Enter OTP"
                  />
                </div>
              )}

              {/* PASSWORD */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full border-b border-gray-300 py-2 px-3 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-2"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {/* BUTTON */}
              <button className="w-full py-3 bg-[#c23333] text-white rounded-3xl">
                {role === "admin" ? "Admin Login" : "User Login"}
              </button>
            </form>

            {/* USER REGISTER */}
            {role === "user" && (
              <p className="mt-4 text-sm text-center">
                {isLogin ? "New user?" : "Already have account?"}
                <button onClick={() => setIsLogin(!isLogin)} className="text-red-500 ml-2">
                  {isLogin ? "Register" : "Login"}
                </button>
              </p>
            )}

          </div>

        </div>
      </div>
    </main>
  );
};

export default AuthPage;