import React, { useState, useEffect } from "react";
import {
  Phone, MapPin, FacebookLogo, Check, WhatsappLogo,
  Key, DeviceMobile, LockOpen, Cpu, Car, Timer, Star, Wrench, Siren, Envelope, ShieldCheck
} from "@phosphor-icons/react";

import svgPaths from "./svg-3y9bx4m8zm";
import heroImg from "../hero.png";
import workImg from "../work.png";
import aboutImg from "../about.png";

function EmergencyBar() {
  return (
    <div className="bg-[#c50101] w-full z-50 relative">
      <div className="w-full mx-auto px-6 py-[12px] flex items-center justify-center text-center">
        <p className="font-semibold text-[14px] md:text-[16px] text-white tracking-wide">
          {`LOCKED OUT? WE'RE 20–30 MINUTES AWAY`}
        </p>
      </div>
    </div>
  );
}

function HeroNav() {
  return (
    <div className="w-full flex flex-col bg-[linear-gradient(146deg,#000_0%,#101828_50%,#000_100%)]" data-name="Hero + Nav">
      
      {/* 1. Solid Navbar Area */}
      <div className="w-full bg-[#0A0F1A] border-b border-white/5 z-40 relative">
        <div className="w-full mx-auto px-6 lg:px-[80px] py-5 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          <p className="font-bold text-[20px] md:text-[26px] text-white whitespace-nowrap tracking-tight">
            Navan Car Keys Locksmiths
          </p>
          
          <div className="hidden lg:flex font-medium gap-8 items-center text-[16px] text-white">
            <p className="cursor-pointer hover:text-[#c50101] transition-colors duration-300">Home</p>
            <p className="cursor-pointer hover:text-[#c50101] transition-colors duration-300">About</p>
            <p className="cursor-pointer hover:text-[#c50101] transition-colors duration-300">Contact</p>
          </div>
          
          <div className="flex gap-5 md:gap-6 items-center">
            {/* Highlighted Red Call Button */}
            <div className="bg-[#c50101] hover:bg-red-700 transition-colors duration-300 px-5 py-2.5 rounded-[8px] flex gap-2 items-center text-white cursor-pointer shadow-lg">
              <Phone size={22} weight="fill" />
              <p className="font-bold text-[15px] md:text-[16px] whitespace-nowrap">086 200 0066</p>
            </div>
            
            <div className="hidden sm:flex gap-2 items-center text-white">
              <MapPin size={22} weight="fill" />
              <p className="font-normal text-[15px] whitespace-nowrap">Serving Meath</p>
            </div>
            <FacebookLogo size={32} weight="fill" className="text-white cursor-pointer hover:text-[#c50101] transition-colors" />
          </div>
        </div>
      </div>

      {/* 2. Hero Content Area */}
      <div className="w-full flex flex-col lg:flex-row flex-1 min-h-[600px] lg:min-h-[calc(100vh-88px)]">
        
        {/* Left Side (Text) */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 lg:pl-[80px] lg:pr-16 py-16 lg:py-0 z-20">
          <div className="max-w-[650px] flex flex-col gap-6">
            <p className="font-semibold text-white text-[18px] md:text-[22px] tracking-wide">
              Mobile Locksmith
            </p>
            <h1 className="font-bold text-white leading-[1.1] text-[48px] md:text-[64px] lg:text-[76px] tracking-tight">
              Lost Your Car<br />Keys or <span className="text-[#c50101]">Locked<br />Out?</span>
            </h1>
            <p className="font-normal text-[#d1d5dc] text-[16px] md:text-[20px] leading-relaxed">
              We come to you anywhere in Meath, fast, reliable, no damage.
            </p>
            
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex gap-3 items-center">
                <Check size={24} weight="bold" className="text-[#c50101]" />
                <p className="text-[16px] md:text-[18px] text-white font-medium">24/7 Emergency Response</p>
              </div>
              <div className="flex gap-3 items-center">
                <Check size={24} weight="bold" className="text-[#c50101]" />
                <p className="text-[16px] md:text-[18px] text-white font-medium">Mobile Service (We Come to You)</p>
              </div>
              <div className="flex gap-3 items-center">
                <Check size={24} weight="bold" className="text-[#c50101]" />
                <p className="text-[16px] md:text-[18px] text-white font-medium">All Car Makes & Models</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto">
              <div className="bg-[#c50101] rounded-[10px] shadow-[0px_10px_20px_rgba(197,1,1,0.3)] cursor-pointer hover:bg-red-700 transition flex items-center justify-center gap-2 px-8 py-4 md:py-5">
                <Phone size={22} weight="fill" className="text-white" />
                <p className="font-bold text-[16px] md:text-[18px] text-white whitespace-nowrap">CALL NOW – 086 200 0066</p>
              </div>
              <div className="bg-white rounded-[10px] shadow-lg cursor-pointer hover:bg-gray-100 transition flex items-center justify-center gap-2 px-8 py-4 md:py-5">
                <WhatsappLogo size={24} weight="fill" className="text-black" />
                <p className="font-bold text-[16px] md:text-[18px] text-black whitespace-nowrap">WHATSAPP US</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side (Image matching exactly below navbar, full height) */}
        <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-0 flex flex-col z-10">
          <img alt="Car keys hanging" className="absolute inset-0 object-cover w-full h-full" src={heroImg} />
        </div>

      </div>
    </div>
  );
}

function EmergencySteps() {
  return (
    <div className="bg-white py-16 lg:py-24 w-full" data-name="Emergency Steps">
      <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-[80px] flex flex-col gap-12 lg:gap-16">
        
        {/* Split Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start">
          
          {/* Left Side: Heading */}
          <div className="w-full lg:w-1/2 flex flex-col pt-4 lg:pt-12">
            <h2 className="font-bold text-[36px] md:text-[48px] lg:text-[56px] text-black leading-[1.2] tracking-tight">
              Locked Out?<br />Follow These 3 Steps
            </h2>
            <p className="font-medium text-[18px] md:text-[22px] text-gray-600 mt-6 leading-relaxed">
              We'll guide you through this, stay calm, we're here to help
            </p>
          </div>

          {/* Right Side: Step Cards */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            
            {/* Step 1 */}
            <div className="bg-white border-[2px] border-[#c50101] p-6 md:p-8 rounded-[12px] flex flex-col sm:flex-row items-start sm:items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-[#c50101] w-[60px] h-[60px] shrink-0 rounded-[8px] flex items-center justify-center text-white font-bold text-3xl">
                1
              </div>
              <div className="flex flex-col gap-1.5">
                <p className="font-bold text-[20px] md:text-[24px] text-black leading-tight">Stay where you are</p>
                <p className="text-[16px] md:text-[18px] text-gray-600 leading-relaxed">Don't panic. Note your exact location and keep safe.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white border-[2px] border-[#c50101] p-6 md:p-8 rounded-[12px] flex flex-col sm:flex-row items-start sm:items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-[#c50101] w-[60px] h-[60px] shrink-0 rounded-[8px] flex items-center justify-center text-white font-bold text-3xl">
                2
              </div>
              <div className="flex flex-col gap-1.5">
                <p className="font-bold text-[20px] md:text-[24px] text-black leading-tight">Call us immediately</p>
                <p className="text-[16px] md:text-[18px] text-gray-600 leading-relaxed">We'll answer right away and get details about your situation.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white border-[2px] border-[#c50101] p-6 md:p-8 rounded-[12px] flex flex-col sm:flex-row items-start sm:items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-[#c50101] w-[60px] h-[60px] shrink-0 rounded-[8px] flex items-center justify-center text-white font-bold text-3xl">
                3
              </div>
              <div className="flex flex-col gap-1.5">
                <p className="font-bold text-[20px] md:text-[24px] text-black leading-tight">We'll be there in 20-30 minutes</p>
                <p className="text-[16px] md:text-[18px] text-gray-600 leading-relaxed">Our mobile unit will arrive fast and get you back on the road.</p>
              </div>
            </div>

          </div>
        </div>

        {/* Missing Banner Added Back */}
        <div className="bg-[#c50101] rounded-[12px] w-full p-5 lg:p-6 flex items-center justify-center gap-3 shadow-lg mt-4 lg:mt-6">
          <ShieldCheck size={28} weight="fill" className="text-white hidden sm:block" />
          <p className="font-semibold text-[18px] md:text-[22px] text-white text-center">
            {`This is what we do every day. You're in safe hands.`}
          </p>
        </div>

      </div>
    </div>
  );
}

function ServicesSection() {
  return (
    <div className="bg-[#f6f6f6] py-16 lg:py-24 w-full" data-name="ServicesSection">
      <div className="w-full mx-auto px-6 lg:px-[80px] flex flex-col gap-12 lg:gap-16">
        <div className="text-center w-full max-w-4xl mx-auto">
          <h2 className="font-bold text-[32px] md:text-[48px] text-black tracking-tight">
            {`How We Can Help You `} <span className="text-[#c50101]">Fast</span>
          </h2>
          <p className="font-normal text-[18px] md:text-[22px] text-gray-600 mt-4">Expert solutions when you need them most</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-[1400px] mx-auto w-full">
          
          <div className="group relative bg-white border border-gray-200 hover:border-gray-800 rounded-[14px] shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden">
             <div className="absolute inset-0 bg-[linear-gradient(146deg,#000_0%,#101828_50%,#000_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
             <div className="relative z-10 p-8 lg:p-10 flex flex-col gap-5">
               <div className="bg-[#c50101] w-16 h-16 rounded-[12px] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                 <Key size={32} weight="fill" className="text-white" />
               </div>
               <p className="font-bold text-[22px] md:text-[26px] text-black group-hover:text-white transition-colors duration-300 tracking-tight">Car Key Replacement</p>
               <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-300 transition-colors duration-300">Lost your only key? We can create a new one on-site for all makes and models.</p>
             </div>
          </div>

          <div className="group relative bg-white border border-gray-200 hover:border-gray-800 rounded-[14px] shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden">
             <div className="absolute inset-0 bg-[linear-gradient(146deg,#000_0%,#101828_50%,#000_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
             <div className="relative z-10 p-8 lg:p-10 flex flex-col gap-5">
               <div className="bg-[#c50101] w-16 h-16 rounded-[12px] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                 <Key size={32} weight="fill" className="text-white" />
               </div>
               <p className="font-bold text-[22px] md:text-[26px] text-black group-hover:text-white transition-colors duration-300 tracking-tight">Spare Car Keys</p>
               <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-300 transition-colors duration-300">Get a backup key made before disaster strikes. Quick and affordable.</p>
             </div>
          </div>

          <div className="group relative bg-white border border-gray-200 hover:border-gray-800 rounded-[14px] shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden">
             <div className="absolute inset-0 bg-[linear-gradient(146deg,#000_0%,#101828_50%,#000_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
             <div className="relative z-10 p-8 lg:p-10 flex flex-col gap-5">
               <div className="bg-[#c50101] w-16 h-16 rounded-[12px] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                 <DeviceMobile size={32} weight="fill" className="text-white" />
               </div>
               <p className="font-bold text-[22px] md:text-[26px] text-black group-hover:text-white transition-colors duration-300 tracking-tight">Key Fob Programming</p>
               <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-300 transition-colors duration-300">Remote not working? We program and sync key fobs to your vehicle.</p>
             </div>
          </div>

          <div className="group relative bg-white border border-gray-200 hover:border-gray-800 rounded-[14px] shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden">
             <div className="absolute inset-0 bg-[linear-gradient(146deg,#000_0%,#101828_50%,#000_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
             <div className="relative z-10 p-8 lg:p-10 flex flex-col gap-5">
               <div className="bg-[#c50101] w-16 h-16 rounded-[12px] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                 <LockOpen size={32} weight="fill" className="text-white" />
               </div>
               <p className="font-bold text-[22px] md:text-[26px] text-black group-hover:text-white transition-colors duration-300 tracking-tight">Emergency Lockout</p>
               <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{`Locked your keys in the car? We'll get you back in without damage.`}</p>
             </div>
          </div>

          <div className="group relative bg-white border border-gray-200 hover:border-gray-800 rounded-[14px] shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden">
             <div className="absolute inset-0 bg-[linear-gradient(146deg,#000_0%,#101828_50%,#000_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
             <div className="relative z-10 p-8 lg:p-10 flex flex-col gap-5">
               <div className="bg-[#c50101] w-16 h-16 rounded-[12px] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                 <Cpu size={32} weight="fill" className="text-white" />
               </div>
               <p className="font-bold text-[22px] md:text-[26px] text-black group-hover:text-white transition-colors duration-300 tracking-tight">ECU Tuning & Remapping</p>
               <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-300 transition-colors duration-300">Performance tuning and engine management programming services available.</p>
             </div>
          </div>

        </div>

        <div className="text-center mt-4 flex flex-col md:flex-row items-center justify-center gap-6">
          <p className="font-medium text-[18px] md:text-[20px] text-gray-800">{`Not sure what you need? Call us and we'll advise you.`}</p>
          <div className="bg-[#c50101] px-8 py-4 rounded-[10px] text-white font-bold cursor-pointer hover:bg-red-800 transition shadow-lg flex items-center justify-center gap-2 text-lg">
            <Phone size={24} weight="fill" />
            086 200 0066
          </div>
        </div>
      </div>
    </div>
  );
}

function TrustStrip() {
  return (
    <div className="bg-[linear-gradient(172deg,#000_0%,#101828_50%,#000_100%)] border-y-4 border-[#c50101] py-16 w-full">
      <div className="w-full mx-auto px-6 lg:px-[80px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 max-w-[1600px]">
        <div className="flex flex-col items-center text-center gap-3">
          <Car size={56} weight="fill" className="text-[#c50101]" />
          <p className="font-bold text-[20px] md:text-[22px] text-white mt-2">100% Mobile Service</p>
          <p className="font-normal text-[16px] text-gray-400">We come to you</p>
        </div>
        <div className="flex flex-col items-center text-center gap-3">
          <Timer size={56} weight="fill" className="text-[#c50101]" />
          <p className="font-bold text-[20px] md:text-[22px] text-white mt-2">Fast Response Time</p>
          <p className="font-normal text-[16px] text-gray-400">20-30 minute arrival</p>
        </div>
        <div className="flex flex-col items-center text-center gap-3">
          <Star size={56} weight="fill" className="text-[#c50101]" />
          <p className="font-bold text-[20px] md:text-[22px] text-white mt-2">5-Star Rated</p>
          <p className="font-normal text-[16px] text-gray-400">Trusted by locals</p>
        </div>
        <div className="flex flex-col items-center text-center gap-3">
          <Wrench size={56} weight="fill" className="text-[#c50101]" />
          <p className="font-bold text-[20px] md:text-[22px] text-white mt-2">Expert Technicians</p>
          <p className="font-normal text-[16px] text-gray-400">Fully qualified</p>
        </div>
      </div>
    </div>
  );
}

function ProofSection() {
  return (
    <div className="bg-white py-16 lg:py-24 w-full" data-name="ProofSection">
      <div className="w-full mx-auto px-6 lg:px-[80px] flex flex-col items-center gap-12 lg:gap-16 max-w-[1600px]">
        <div className="text-center w-full max-w-4xl mx-auto">
          <h2 className="font-bold text-[32px] md:text-[48px] text-black tracking-tight">
            {`Real Jobs. `} <span className="text-[#c50101]">Real Results.</span>
          </h2>
          <p className="font-normal text-[18px] md:text-[22px] text-gray-600 mt-4">See our work in action, we do this every single day</p>
        </div>

        <div className="bg-[#0A0F1A] rounded-[16px] overflow-hidden shadow-2xl w-full max-w-5xl mx-auto">
          <div className="relative h-[300px] md:h-[500px] w-full group">
            <img alt="Real jobs" className="absolute inset-0 object-cover w-full h-full" src={workImg} />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition group-hover:bg-black/10 cursor-pointer">
              <div className="bg-[#c50101] rounded-full w-20 h-20 md:w-24 md:h-24 flex items-center justify-center hover:scale-110 transition-transform shadow-[0px_10px_20px_rgba(197,1,1,0.5)]">
                <div className="w-0 h-0 ml-2 border-y-[12px] border-y-transparent border-l-[20px] border-l-white md:border-y-[16px] md:border-l-[24px]"></div>
              </div>
            </div>
          </div>
          <div className="p-8 md:p-10 flex flex-col gap-4">
            <p className="font-bold text-[24px] md:text-[28px] text-white">Seat Ibiza Key Replacement</p>
            <p className="text-gray-300 text-lg leading-relaxed">Customer needed a spare key, completed in minutes. No need to visit a dealership, we came to them at home.</p>
            <div className="flex flex-col sm:flex-row gap-6 mt-4">
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={20} weight="fill" />
                <span className="text-[16px]">Navan, Co. Meath</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Timer size={20} weight="fill" />
                <span className="text-[16px]">Completed in 25 minutes</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 w-full max-w-5xl mx-auto">
          <div className="bg-white border-2 border-gray-100 flex-1 p-8 rounded-[14px] shadow-sm text-center">
            <p className="text-[#c50101] font-bold text-4xl md:text-5xl mb-2">500+</p>
            <p className="text-gray-600 text-lg font-medium">Jobs Completed</p>
          </div>
          <div className="bg-white border-2 border-gray-100 flex-1 p-8 rounded-[14px] shadow-sm text-center">
            <p className="text-[#c50101] font-bold text-4xl md:text-5xl mb-2">100%</p>
            <p className="text-gray-600 text-lg font-medium">Mobile Service</p>
          </div>
          <div className="bg-white border-2 border-gray-100 flex-1 p-8 rounded-[14px] shadow-sm text-center">
            <p className="text-[#c50101] font-bold text-4xl md:text-5xl mb-2">24/7</p>
            <p className="text-gray-600 text-lg font-medium">Available</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReviewsSection() {
  return (
    <div className="bg-[#f6f6f6] py-16 lg:py-24 w-full" data-name="ReviewsSection">
      <div className="w-full mx-auto px-6 lg:px-[80px] flex flex-col items-center gap-12 lg:gap-16 max-w-[1600px]">
        <div className="text-center w-full max-w-4xl mx-auto">
          <h2 className="font-bold text-[32px] md:text-[48px] text-black mb-6 tracking-tight">
            {`Trusted by Drivers Across `} <span className="text-[#c50101]">Meath</span>
          </h2>
          <div className="flex justify-center gap-2 text-[#FDCB02]">
            {[...Array(5)].map((_, i) => <Star key={i} size={32} weight="fill" />)}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 w-full justify-center">
          
          <div className="bg-[linear-gradient(136deg,#000_0%,#101828_50%,#000_100%)] p-8 lg:p-10 rounded-[16px] text-white flex-1 flex flex-col gap-6 shadow-xl border border-gray-800 hover:-translate-y-2 transition-transform duration-300">
            <div className="flex gap-1 text-[#FDCB02]">
              {[...Array(5)].map((_, i) => <Star key={i} size={24} weight="fill" />)}
            </div>
            <p className="text-gray-300 text-lg flex-1 italic leading-relaxed">{`"Lost my key at the shopping centre and they sorted it fast, highly recommend! Friendly service and fair pricing."`}</p>
            <div className="border-t border-gray-700 pt-6 mt-2">
              <p className="font-bold text-xl">Sarah M.</p>
              <div className="flex items-center gap-2 mt-2 text-gray-400">
                <MapPin size={18} weight="fill" />
                <p className="text-md">Navan</p>
              </div>
            </div>
          </div>
          
          <div className="bg-[linear-gradient(136deg,#000_0%,#101828_50%,#000_100%)] p-8 lg:p-10 rounded-[16px] text-white flex-1 flex flex-col gap-6 shadow-xl border border-gray-800 hover:-translate-y-2 transition-transform duration-300">
            <div className="flex gap-1 text-[#FDCB02]">
              {[...Array(5)].map((_, i) => <Star key={i} size={24} weight="fill" />)}
            </div>
            <p className="text-gray-300 text-lg flex-1 italic leading-relaxed">{`"Locked my keys in the car outside work. They arrived in 20 minutes and got me back in without any damage. Lifesavers!"`}</p>
            <div className="border-t border-gray-700 pt-6 mt-2">
              <p className="font-bold text-xl">John D.</p>
              <div className="flex items-center gap-2 mt-2 text-gray-400">
                <MapPin size={18} weight="fill" />
                <p className="text-md">Trim</p>
              </div>
            </div>
          </div>
          
          <div className="bg-[linear-gradient(136deg,#000_0%,#101828_50%,#000_100%)] p-8 lg:p-10 rounded-[16px] text-white flex-1 flex flex-col gap-6 shadow-xl border border-gray-800 hover:-translate-y-2 transition-transform duration-300">
            <div className="flex gap-1 text-[#FDCB02]">
              {[...Array(5)].map((_, i) => <Star key={i} size={24} weight="fill" />)}
            </div>
            <p className="text-gray-300 text-lg flex-1 italic leading-relaxed">{`"Needed a spare key for my VW Golf. Came to my house and programmed it on the spot. Much cheaper than the dealer!"`}</p>
            <div className="border-t border-gray-700 pt-6 mt-2">
              <p className="font-bold text-xl">Emma K.</p>
              <div className="flex items-center gap-2 mt-2 text-gray-400">
                <MapPin size={18} weight="fill" />
                <p className="text-md">Kells</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black hover:bg-gray-800 transition-colors duration-300 py-4 px-10 rounded-[12px] cursor-pointer text-center mt-4">
          <p className="font-bold text-[18px] md:text-[20px] text-white">Read More Reviews on Google →</p>
        </div>
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <div className="bg-[#f9fafb] py-16 lg:py-24 w-full" data-name="AboutSection">
      <div className="w-full mx-auto px-6 lg:px-[80px] flex flex-col lg:flex-row gap-12 lg:gap-20 items-center max-w-[1600px]">
        
        <div className="flex-1 flex flex-col gap-6 lg:gap-8">
          <h2 className="font-bold text-[36px] md:text-[48px] lg:text-[56px] text-black leading-[1.1] tracking-tight">
            {`Your Local `} <span className="text-[#c50101]">Car Key Specialists</span>
          </h2>
          <p className="text-[#364153] text-[18px] md:text-[22px] leading-relaxed max-w-2xl">{`We're a mobile locksmith service based in Navan, serving Meath and surrounding areas. We specialize in car keys, emergency lockouts, and key fob programming.`}</p>
          
          <div className="flex flex-col gap-8 mt-6 max-w-2xl">
            <div className="flex gap-5 items-start">
              <div className="bg-[#c50101] w-14 h-14 rounded-xl shrink-0 flex items-center justify-center shadow-lg">
                <Car size={28} weight="fill" className="text-white" />
              </div>
              <div>
                <p className="font-bold text-[20px] md:text-[22px] text-black tracking-tight">All Car Brands</p>
                <p className="text-gray-600 text-[16px] md:text-[18px] mt-2 leading-relaxed">From Ford to Mercedes, we work with all makes and models. Modern key fobs, transponders, and traditional keys.</p>
              </div>
            </div>
            <div className="flex gap-5 items-start">
              <div className="bg-[#c50101] w-14 h-14 rounded-xl shrink-0 flex items-center justify-center shadow-lg">
                <Star size={28} weight="fill" className="text-white" />
              </div>
              <div>
                <p className="font-bold text-[20px] md:text-[22px] text-black tracking-tight">Years of Experience</p>
                <p className="text-gray-600 text-[16px] md:text-[18px] mt-2 leading-relaxed">Fully trained and insured technicians with extensive experience in automotive locksmithing.</p>
              </div>
            </div>
            <div className="flex gap-5 items-start">
              <div className="bg-[#c50101] w-14 h-14 rounded-xl shrink-0 flex items-center justify-center shadow-lg">
                <Siren size={28} weight="fill" className="text-white" />
              </div>
              <div>
                <p className="font-bold text-[20px] md:text-[22px] text-black tracking-tight">Emergency Ready</p>
                <p className="text-gray-600 text-[16px] md:text-[18px] mt-2 leading-relaxed">{`Available 24/7 for emergencies. We understand that lockouts don't happen at convenient times.`}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full relative mt-10 lg:mt-0 max-w-[700px] mx-auto">
          <div className="border-4 border-[#c50101] rounded-[16px] overflow-hidden h-[400px] md:h-[600px] shadow-2xl relative">
            <img alt="About us locksmith working" className="object-cover w-full h-full absolute inset-0" src={aboutImg} />
          </div>
          {/* Floating Badge */}
          <div className="absolute top-10 right-[-10px] md:right-[-30px] bg-white border-2 border-[#c50101] rounded-[12px] p-5 lg:p-6 shadow-2xl flex flex-col gap-1 z-10">
            <p className="text-[16px] text-gray-500 font-medium uppercase tracking-wider">Serving</p>
            <p className="font-bold text-[22px] md:text-[26px] text-black tracking-tight">Meath & Beyond</p>
          </div>
        </div>

      </div>
    </div>
  );
}

function FinalCta() {
  return (
    <div className="bg-gradient-to-br from-[#8B0000] to-[#4A0000] w-full relative overflow-hidden" data-name="Final CTA">
      <div className="w-full mx-auto px-6 lg:px-[80px] py-[80px] md:py-[140px] flex flex-col items-center justify-center text-center gap-8 relative z-10 max-w-[1600px]">
        <h2 className="font-bold text-[36px] md:text-[56px] lg:text-[64px] text-white leading-[1.1] tracking-tight">Locked Out or Lost Your Keys?</h2>
        <p className="font-medium text-[20px] md:text-[28px] lg:text-[32px] text-white opacity-90">{`We're on the way, call now and get back on the road fast.`}</p>
        
        <div className="flex flex-col sm:flex-row gap-5 mt-8 w-full sm:w-auto">
          <div className="bg-white rounded-[12px] shadow-[0px_20px_40px_rgba(0,0,0,0.3)] px-10 py-5 cursor-pointer hover:scale-105 hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-3">
             <Phone size={28} weight="fill" className="text-[#dc0000]" />
             <p className="font-bold text-[#dc0000] text-[18px] md:text-[22px] whitespace-nowrap tracking-wide">CALL NOW: 086 200 0066</p>
          </div>
          <div className="bg-black/20 border-2 border-white/20 rounded-[12px] px-10 py-5 cursor-pointer hover:bg-black/40 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
             <WhatsappLogo size={28} weight="fill" className="text-white" />
             <p className="font-bold text-white text-[18px] md:text-[22px] whitespace-nowrap tracking-wide">WHATSAPP US</p>
          </div>
        </div>

        <div className="bg-white/10 border border-white/20 px-8 py-4 rounded-[12px] flex items-center gap-3 mt-6 backdrop-blur-sm">
          <Timer size={28} weight="fill" className="text-white" />
          <p className="text-white text-[18px] md:text-[20px] tracking-wide">{`Average Response Time: `} <span className="font-bold">20-30 Minutes</span></p>
        </div>

        <p className="text-white/60 text-[15px] md:text-[18px] mt-6 font-medium tracking-widest uppercase">
          {`Available 24/7 • Mobile Service • All Car Makes & Models`}
        </p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[linear-gradient(146deg,#000_0%,#101828_50%,#000_100%)] border-t-4 border-[#c50101] w-full" data-name="Footer">
      <div className="w-full mx-auto px-6 lg:px-[80px] py-16 md:py-20 flex flex-col gap-16 max-w-[1600px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 justify-between w-full">
          
          {/* Col 1 */}
          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-[#c50101] text-[22px] md:text-[26px]">Navan Car Keys Locksmiths</h3>
            <div className="flex flex-col gap-5 text-white">
              <div className="flex items-center gap-4 hover:text-[#c50101] transition-colors cursor-pointer w-fit">
                <Phone size={24} weight="fill" className="text-gray-400" />
                <p className="text-lg">086 200 0066</p>
              </div>
              <div className="flex items-center gap-4 hover:text-[#c50101] transition-colors cursor-pointer w-fit">
                <Envelope size={24} weight="fill" className="text-gray-400" />
                <p className="text-lg">navancarkeys@gmail.com</p>
              </div>
              <div className="flex items-center gap-4 text-white">
                <MapPin size={24} weight="fill" className="text-gray-400" />
                <p className="text-lg">Meath, Ireland</p>
              </div>
            </div>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-[#c50101] text-[22px] md:text-[26px]">Service Areas</h3>
            <div className="flex gap-12 text-gray-300 text-lg">
              <div className="flex flex-col gap-3">
                <p>Navan</p>
                <p>Kells</p>
                <p>Dunshaughlin</p>
                <p>Slane</p>
              </div>
              <div className="flex flex-col gap-3">
                <p>Trim</p>
                <p>Athboy</p>
                <p>Ashbourne</p>
                <p>Ratoath</p>
              </div>
            </div>
            <p className="text-gray-500 text-[16px] mt-2 italic">+ surrounding areas</p>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-[#c50101] text-[22px] md:text-[26px]">Our Services</h3>
            <div className="flex flex-col gap-3 text-gray-300 text-lg">
              <p>• Car Key Replacement</p>
              <p>• Spare Car Keys</p>
              <p>• Key Fob Programming</p>
              <p>• Emergency Lockout</p>
              <p>• ECU Tuning & Remapping</p>
            </div>
            <div className="mt-6 flex items-center gap-3 text-white cursor-pointer hover:text-blue-500 transition-colors w-fit">
              <FacebookLogo size={32} weight="fill" /> 
              <span className="font-medium text-lg">Follow us on Facebook</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-gray-400 text-[16px]">© 2026 Navan Car Keys Locksmiths. All rights reserved.</p>
          <div className="flex items-center gap-3 text-gray-400 text-[16px] justify-center">
            <Check size={20} weight="bold" />
            <p>Fully Insured • Licensed • Professional Service</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function NavanCarKeysLocksmiths() {
  const [showStickyButton, setShowStickyButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowStickyButton(true);
      } else {
        setShowStickyButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');`}
      </style>
      
      <div 
        style={{ fontFamily: "'Inter', sans-serif" }} 
        className="w-full flex flex-col overflow-x-hidden bg-white text-black" 
        data-name="Navan Car Keys Locksmiths"
      >
        <EmergencyBar />
        <HeroNav />
        <EmergencySteps />
        <ServicesSection />
        <TrustStrip />
        <ProofSection />
        <ReviewsSection />
        <AboutSection />
        <FinalCta />
        <Footer />

        <div 
          className={`fixed bottom-0 left-0 w-full p-4 z-[100] md:hidden transition-transform duration-500 ease-in-out ${
            showStickyButton ? 'translate-y-0' : 'translate-y-[150%]'
          }`}
        >
          <a href="tel:0862000066" className="bg-[#c50101] w-full rounded-[12px] shadow-[0_10px_30px_rgba(197,1,1,0.5)] p-4 flex items-center justify-center gap-3 border-2 border-white/20 active:scale-95 transition-transform">
            <Phone size={24} weight="fill" className="text-white animate-pulse" />
            <p className="font-bold text-white text-[18px] tracking-wide">CALL NOW - 086 200 0066</p>
          </a>
        </div>
      </div>
    </>
  );
}
