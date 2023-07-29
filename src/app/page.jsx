"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import pic from "../../public/prog2.webp";
import { useState } from "react";
import Link from "next/link";
import Footer from "./components/Footer";


export default function Home() {
  const [isLightMode, setIsLightMode] = useState(false);
  const toggleMode = () => {
    setIsLightMode(!isLightMode);
  };
  return (
    <>
      <Navbar mode={isLightMode} toggleMode={toggleMode} />

      <div className={`flex ${(isLightMode)?"bg-[#c3c7e0]":"bg-[#143e53]"} min-h-screen md:flex items-center`}>
        <div className="md:flex w-full">
          <Image
            className="w-full md:hidden"
            src={pic}
            alt="Picture of the author"
          />

          <div className="flex items-center">
            <div className="md:pl-12 md:pt-7 lg:pl-20 px-6">
              <div className={`text-3xl font-bold ${(isLightMode)?"text-[#204a60]":"text-[#fe348f]"}`}>
                Hi, my name is
              </div>
              <div className={`2xl:text-7xl text-5xl font-extrabold py-5 text-transparent bg-clip-text ${(isLightMode)?"bg-gradient-to-r from-[#01486b] via-purple-500 to-[#fe348f]":"bg-gradient-to-r from-[#02d1fa] via-purple-500 to-[#fe348f]"} `}>
                PRANTI RANI BANDA
              </div>
              <div className="text-xl font-bold pt-4 text-white">
                I like coding and enjoy building websites.<br className="hidden xl:block"/> I have a keen
                interest in UI/UX design.
              </div>
              <Link href="/contact"><button className={`mt-5 mb-7 px-7 py-2 text-white font-medium ${(isLightMode)?"bg-[#035ca1]":"bg-cyan-400"} border-2 border-cyan-500 text-lg rounded-md hover:bg-[#45e0e6] hover:cursor-pointer`}>Contact Me</button>
              </Link>
            </div>
          </div>

          <Image
            className="hidden md:block ml-auto md:pt-7"
            src={pic}
            alt="Picture of the author"
          />
        </div>
      </div>
      <Footer/>
    </>
  );
}
