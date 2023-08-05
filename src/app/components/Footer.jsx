import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="p-2 bg-[#062a3d] shadow-lg shadow-white">
        <div className="flex justify-center space-x-6">
            <Link href="https://x.com/prantiranibanda" className="w-11 h-11 hover:bg-[#2aaceb] hover:text-white rounded-full bg-[#1A2F3C] flex items-center justify-center border-2 border-cyan-400">
                    <i className="devicon-twitter-original text-sm text-[#fe348f]" />
                </Link>
            <Link href="https://github.com/prantiranibanda" className="w-11 h-11 hover:bg-[#2aaceb] hover:text-white rounded-full bg-[#1A2F3C] flex items-center justify-center border-2 border-cyan-400">
                    <i className="devicon-github-original text-xl text-[#fe348f]" />
                </Link>
            <Link href="https://linkedin.com/in/prantiranibanda" className="w-11 h-11 hover:bg-[#2aaceb] hover:text-white rounded-full bg-[#1A2F3C] flex items-center justify-center border-2 border-cyan-400">
                    <i className="devicon-linkedin-plain text-lg text-[#fe348f]" />
                </Link>
            <Link href="https://facebook.com/prantiranibanda" className="w-11 h-11 hover:bg-[#2aaceb] hover:text-white rounded-full bg-[#1A2F3C] flex items-center justify-center border-2 border-cyan-400">
                    <i className="devicon-facebook-plain text-lg text-[#fe348f]" />
                </Link>
        </div>
    </div>
  )
}
