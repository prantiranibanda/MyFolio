"use client";
import Navbar from "../components/Navbar";
import React from 'react';
import { useState } from "react";
import Footer from "../components/Footer";


export default function Page() {
  const [isLightMod, setIsLightMod] = useState(false);
  const toggleMode = () => {
    setIsLightMod(!isLightMod);
  };
  return (
    <div>
      <div className="min-h-screen bg-[#143e53]">
        <Navbar mode={isLightMod} toggleMode={toggleMode} />
        <div className="min-h-screen flex justify-center items-center ">
          <div className="flex flex-col items-center">
            <div className="text-4xl sm:text-5xl 2xl:text-6xl font-extrabold text-[#fe348f] my-11">Contact Me :)</div>
            <div className="p-6 rounded-md border border-cyan-500 bg-[#062a3d]">
              <div className="sm:flex sm:space-x-4 mb-4">
                <div><input className="mb-4 w-96 sm:w-72 md:w-80 sm:mb-0 border-2 border-[#fe348f] rounded-lg p-3 bg-[#1a2b3b] text-white" placeholder="Your Name" type="text" name="" id="" /></div>
                <div><input className="w-96 sm:w-72 md:w-80 border-2 border-[#fe348f] rounded-lg p-3 bg-[#1a2b3b] text-white" placeholder="Mobile Number" type="text" name="" id="" /></div>
              </div>
              <div className="sm:flex sm:space-x-4 mb-4">
                <div><input className="mb-4 w-96 sm:w-72 md:w-80 sm:mb-0 border-2 border-[#fe348f] rounded-lg p-3 bg-[#1a2b3b] text-white" placeholder="Email Address" type="text" name="" id="" /></div>
                <div><input className="w-96 sm:w-72 md:w-80 border-2 border-[#fe348f] rounded-lg p-3 bg-[#1a2b3b] text-white" placeholder="Email Subject" type="text" name="" id="" /></div>
              </div>
              <div><textarea className="hidden sm:block w-full border-2 border-[#fe348f] rounded-lg p-3 bg-[#1a2b3b] text-white" rows="9" placeholder="Message me..." type="text" name="" id="" /></div>
              <div><textarea className="sm:hidden w-full border-2 border-[#fe348f] rounded-lg p-3 bg-[#1a2b3b] text-white" rows="3" placeholder="Message me..." type="text" name="" id="" /></div>
            </div>
            <div className="mt-3 mb-7 px-7 py-2 text-white font-medium border-2 border-cyan-500 text-lg bg-cyan-400 rounded-md hover:bg-[#45e0e6] hover:cursor-pointer">Send Me</div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
