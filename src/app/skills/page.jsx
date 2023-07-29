"use client";
import Navbar from "../components/Navbar";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import Footer from "../components/Footer";


export default function Page() {
    const [isLightMod, setIsLightMod] = useState(false);
    const toggleMode = () => {
        setIsLightMod(!isLightMod);
    };
    return (
    <>
        <Navbar mode={isLightMod} toggleMode={toggleMode} />
        <div className="min-h-screen bg-[#143e53]">
            <div className="flex justify-center p-16">
                <div className="font-bold text-5xl md:text-6xl text-[#2aaceb]">
                    Things I'm Learning :)
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="bg-[#062a3d] rounded-2xl p-8 xl:p-8 mb-16 text-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-3 md:gap-10">
                    <div className="flex items-center w-80 sm:w-72 md:w-80  bg-[#c951e0] bg-gradient-to-br from-[#ae60bd] to-[#619fad] rounded-2xl p-3 hover:shadow-[0_0_9px_-4px_#54b4d3]">         
                        <Image
                        className="w-16"
                        width={999}
                        height={999}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                        />
                        <div className="font-bold pl-5 text-white">HTML5</div>
                    </div>
                    <div className="flex items-center w-80 sm:w-72 md:w-80  bg-[#c951e0] bg-gradient-to-br from-[#ae60bd] to-[#619fad] rounded-2xl p-3 hover:shadow-[0_0_9px_-4px_#54b4d3]">               
                        <Image
                        className="w-16"
                        width={999}
                        height={999}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
                        />
                        <div className="font-bold pl-5 text-white">C Lang</div>
                    </div>
                    <div className="flex items-center w-80 sm:w-72 md:w-80  bg-[#c951e0] bg-gradient-to-br from-[#ae60bd] to-[#619fad] rounded-2xl p-3 hover:shadow-[0_0_9px_-4px_#54b4d3]">               
                        <Image
                        className="w-16"
                        width={999}
                        height={999}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                        />
                        <div className="font-bold pl-5 text-white">JavaScript</div>
                    </div>
                    <div className="flex items-center w-80 sm:w-72 md:w-80  bg-[#c951e0] bg-gradient-to-br from-[#ae60bd] to-[#619fad] rounded-2xl p-3 hover:shadow-[0_0_9px_-4px_#54b4d3]">               
                        <Image
                        className="w-16"
                        width={999}
                        height={999}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                        />
                        <div className="font-bold pl-5 text-white">Java</div>
                    </div>
                    <div className="flex items-center w-80 sm:w-72 md:w-80  bg-[#c951e0] bg-gradient-to-br from-[#ae60bd] to-[#619fad] rounded-2xl p-3 hover:shadow-[0_0_9px_-4px_#54b4d3]">               
                        <Image
                        className="w-16"
                        width={999}
                        height={999}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                        />
                        <div className="font-bold pl-5 text-white">Python</div>
                    </div>
                    <div className="flex items-center w-80 sm:w-72 md:w-80  bg-[#c951e0] bg-gradient-to-br from-[#ae60bd] to-[#619fad] rounded-2xl p-3 hover:shadow-[0_0_9px_-4px_#54b4d3]">               
                        <Image
                        className="w-16"
                        width={999}
                        height={999}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                        />
                        <div className="font-bold pl-5 text-white">CSS3</div>
                    </div>
                    <div className="flex items-center w-80 sm:w-72 md:w-80  bg-[#c951e0] bg-gradient-to-br from-[#ae60bd] to-[#619fad] rounded-2xl p-3 hover:shadow-[0_0_9px_-4px_#54b4d3]">               
                        <Image
                        className="w-16"
                        width={999}
                        height={999}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                        />
                        <div className="font-bold pl-5 text-white">Tailwind CSS</div>
                    </div>
                    <div className="flex items-center w-80 sm:w-72 md:w-80  bg-[#c951e0] bg-gradient-to-br from-[#ae60bd] to-[#619fad] rounded-2xl p-3 hover:shadow-[0_0_9px_-4px_#54b4d3]">               
                        <Image
                        className="w-16"
                        width={999}
                        height={999}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                        />
                        <div className="font-bold pl-5 text-white">React</div>
                    </div>
                    <div className="flex items-center w-80 sm:w-72 md:w-80  bg-[#c951e0] bg-gradient-to-br from-[#ae60bd] to-[#619fad] rounded-2xl p-3 hover:shadow-[0_0_9px_-4px_#54b4d3]">               
                        <Image
                        className="w-16"
                        width={999}
                        height={999}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                        />
                        <div className="font-bold pl-5 text-white">Next JS</div>
                    </div>
                    <div className="flex items-center w-80 sm:w-72 md:w-80  bg-[#c951e0] bg-gradient-to-br from-[#ae60bd] to-[#619fad] rounded-2xl p-3 hover:shadow-[0_0_9px_-4px_#54b4d3]">               
                        <Image
                        className="w-16"
                        width={999}
                        height={999}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                        />
                        <div className="font-bold pl-5 text-white">Node JS</div>
                    </div>
                    <div className="flex items-center w-80 sm:w-72 md:w-80  bg-[#c951e0] bg-gradient-to-br from-[#ae60bd] to-[#619fad] rounded-2xl p-3 hover:shadow-[0_0_9px_-4px_#54b4d3]">               
                        <Image
                        className="w-16"
                        width={999}
                        height={999}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                        />
                        <div className="font-bold pl-5 text-white">Github</div>
                    </div>
                    <div className="flex items-center w-80 sm:w-72 md:w-80  bg-[#c951e0] bg-gradient-to-br from-[#ae60bd] to-[#619fad] rounded-2xl p-3 hover:shadow-[0_0_9px_-4px_#54b4d3]">               
                        <Image
                        className="w-16"
                        width={999}
                        height={999}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                        />
                        <div className="font-bold pl-5 text-white">C++</div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  );
}
