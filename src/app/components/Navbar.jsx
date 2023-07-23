import Link from 'next/link'
import React, { useState } from 'react'

export default function Navbar({mode, toggleMode}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpand = ()=>{
        setIsExpanded(!isExpanded);
    }
    return (
        <div className="sticky top-0">
            {/* Navbar */}
            <div className={`flex ${(mode)?"bg-[#143e53]":"bg-[#1A2F3C]"} px-3 sm:px-6 py-3 items-center drop-shadow-lg shadow-[#15242dd2]`}>
                <div className="flex mr-3 sm:mr-6 text-[#ff5ca5] sm:hidden items-center" onClick={toggleExpand}><span className="material-symbols-outlined">{(isExpanded)?"expand_more":"menu"}</span></div>
                <div className='font-bold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-500 to-[#ff529f]'><Link href="/">PRB</Link></div>
                <div className='hidden hover: text-md font-medium text-cyan-300 sm:flex ml-auto space-x-6'>
                    <div><Link href="/">Home</Link></div>
                    <div><Link href="/about">About</Link></div>
                    <div><Link href="/skills">Skills</Link></div>
                    <div><Link href="/contact">Contact</Link></div>
                </div>
                <div className="flex ml-auto items-center text-[#ff5ca5] sm:ml-6"><span className="material-symbols-outlined" onClick={toggleMode}>{(mode)?"dark_mode":"light_mode"}</span></div>
            </div>
            {/* Menu */}
            <div className={`bg-slate-300 fixed w-full ${(isExpanded)?"block":"hidden"} opacity-95 sm:hidden`}>
                <div className="py-3 border-t-[3px] border-[#062a3d] text-center text-lg bg-cyan-700 text-white hover:cursor-pointer hover:text-[#062a3d]"><Link href="/">Home</Link></div>
                <div className="py-3 border-t-[3px] border-[#062a3d] text-center text-lg bg-cyan-700 text-white hover:cursor-pointer hover:text-[#062a3d]"><Link href="/about">About</Link></div>
                <div className="py-3 border-t-[3px] border-[#062a3d] text-center text-lg bg-cyan-700 text-white hover:cursor-pointer hover:text-[#062a3d]"><Link href="/skills">Skills</Link></div>
                <div className="py-3 border-y-[3px] border-[#062a3d] text-center text-lg bg-cyan-700 text-white hover:cursor-pointer hover:text-[#062a3d]"><Link href="/contact">Contact</Link></div>
            </div>
        </div>
  )
}