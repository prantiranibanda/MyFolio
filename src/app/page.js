"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import pic from "../../public/prog2.webp";
import { useState } from "react";

export default function Home() {
  const [isLightMode, setIsLightMode] = useState(false);
  const toggleMode = () => {
    setIsLightMode(!isLightMode);
  };
  return (
    <>
      <Navbar mode={isLightMode} toggleMode={toggleMode} />

      <div className="min-h-screen bg-[#143e53] md:flex items-center">
        <div className="md:flex w-full">
          <Image
            className="w-full md:hidden"
            src={pic}
            alt="Picture of the author"
          />

          <div className="flex items-center">
            <div className="md:pl-12 md:pt-7 lg:pl-20 px-6">
              <div className="text-xl font-bold text-white">
                <i>Hi, my name is</i>
              </div>
              <div className="text-5xl font-extrabold py-5 text-transparent bg-clip-text bg-gradient-to-r from-[#02d1fa] via-purple-500 to-[#fe348f]">
                PRANTI RANI BANDA
              </div>
              <div className="text-xl font-bold pt-4 text-white">
                I like coding and enjoy building websites. I have a keen
                interest in UI/UX design.
              </div>
            </div>
          </div>

          <Image
            className="hidden md:block ml-auto md:pt-7"
            src={pic}
            alt="Picture of the author"
          />
        </div>

        {/* <div className="text-3xl">
        <div className="bg-red-600 block sm:hidden">phn</div>
        <div className="bg-green-600 hidden sm:block md:hidden">sm</div>
        <div className="bg-blue-300 hidden md:block lg:hidden">md</div>
        <div className="bg-yellow-600 hidden lg:block xl:hidden">lg</div>
        <div className="bg-red-500 hidden xl:block 2xl:hidden">xl</div>
        <div className="bg-green-600 hidden 2xl:block">2xl</div>
      </div> */}
      </div>
    </>
  );
}
