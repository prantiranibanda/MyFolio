import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <div className="p-2 bg-[#062a3d] shadow-lg shadow-white">
        <div className="flex justify-center">
            {/* <div className="rounded-full p-3 bg-[#1A2F3C] flex items-center border-2 border-cyan-400">
                    <i className="devicon-facebook-plain rounded-lg text-pink-600" />
                </div> */}
            <div className="mx-2 rounded-full p-3 bg-[#1A2F3C] flex items-center border-2 border-cyan-400">
                    <i className="devicon-twitter-original text-xsm  rounded-lg text-[#fe348f]" />
                </div>
            <div className="mx-2 rounded-full p-3 bg-[#1A2F3C] flex items-center border-2 border-cyan-400">
                    <i className="devicon-github-original text-lg  rounded-lg text-[#fe348f]" />
                </div>
            <div className="mx-2 rounded-full p-3 bg-[#1A2F3C] flex items-center border-2 border-cyan-400">
                    <i className="devicon-linkedin-plain text-lg  rounded-lg text-[#fe348f]" />
                </div>
            <div className="mx-2 rounded-full p-3 bg-[#1A2F3C] flex items-center border-2 border-cyan-400">
                    <i className="devicon-facebook-plain text-lg  rounded-lg text-[#fe348f]" />
                </div>
        </div>
    </div>
  )
}
