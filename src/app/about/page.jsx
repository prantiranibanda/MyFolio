"use client";
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import pic from "../../../public/programmer.webp";

export default function Page() {
  const [isLightMod, setIsLightMod] = useState(false);
  const toggleMode = () => {
    setIsLightMod(!isLightMod);
  };
  return (
    <>
      <Navbar mode={isLightMod} toggleMode={toggleMode} />
      <div className="min-h-screen bg-[#143e53] flex items-center">
        <div className="md:flex md:px-0  lg:px-10  xl:pr-28 xl:pl-20">
          <Image
            className="hidden md:block"
            src={pic}
            alt="Picture of the author"
          />
          <Image
            className="md:hidden w-full"
            src={pic}
            alt="Picture of the author"
          />
          <div className="flex items-center">
            <div className="p-5 md:pl-0 text-justify text-white">
              <div className="text-4xl lg:text-5xl 2xl:text-6xl font-extrabold text-[#f50772]">About Me</div>
              <div className="sm:pt-1 md:pt-0 lg:pt-2 xl:pt-6 xl:leading-8 sm:text-lg lg:font-medium">
                Hello everyone, I'm Pranti Rani Banda. Currenty I'm a third year
                student of Techno Main Salt Lake pursuing btech in the field of
                Information Technology and have started my web development
                journey. My goal is to become a full stack developer. I have
                created several websites using ReactJS, Next13 and other JS
                frameworks alongwith some CSS frameworks like Tailwind.
              </div>
              <div className="xl:leading-8 sm:text-lg 2xl:text-xl">
                I am always ready to learn new stuffs. Besides being a tech
                enthusiast I have a good grasp in painting landscapes, sketching
                portraits.
              </div>
            </div>
          </div>
        </div>
      </div>
            {/* <div className="text-3xl">
              <div className="bg-red-600 block sm:hidden">phn</div>
              <div className="bg-green-600 hidden sm:block md:hidden">sm</div>
              <div className="bg-blue-300 hidden md:block lg:hidden">md</div>
              <div className="bg-yellow-600 hidden lg:block xl:hidden">lg</div>
              <div className="bg-red-500 hidden xl:block 2xl:hidden">xl</div>
              <div className="bg-green-600 hidden 2xl:block">2xl</div>
            </div> */}
    </>
  );
}
