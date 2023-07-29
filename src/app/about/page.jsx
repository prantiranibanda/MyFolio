"use client";
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import pic from "../../../public/programmer.webp";
import Footer from "../components/Footer";

export default function Page() {
  const [isLightMod, setIsLightMod] = useState(false);
  const toggleMode = () => {
    setIsLightMod(!isLightMod);
  };
  return (
    <>
      <Navbar mode={isLightMod} toggleMode={toggleMode} />
      <div className={`flex ${(isLightMod)?"bg-[#9fbae5]":"bg-[#143e53]"} min-h-screen md:flex items-center`}>
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
              <div className="hidden lg:block">
              <div className="absolute -z-7 lg:text-6xl 2xl:text-6xl text-[#2aaceb] font-medium">
                About Me
              </div>
              <div className="text-8xl text-[#1a5470] text-opacity-30 font-extrabold pl-4">
                About Me
              </div>
              </div>
              <div className="block lg:hidden text-4xl font-medium text-[#2aaceb]">About Me</div>
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
      <Footer/>
      
    </>
  );
}
