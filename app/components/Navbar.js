'use client';

import { useState } from 'react';
import Link from 'next/link';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#1e1b4b] border-b-2 border-[#fbbf24] text-white sticky top-0 z-50 shadow-lg">
      <div className="w-full px-4 ">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo Section */}
          <div className="relative group cursor-pointer py-1">
            <Link href="/" className="flex items-center space-x-1">
              <span className="text-xl sm:text-2xl font-black tracking-wider text-slate-100">
                Allymaiya
              </span>
              <span className="text-xl sm:text-2xl font-extrabold text-[#fbbf24]">
                ₹
              </span>
            </Link>
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#fbbf24] via-[#f59e0b] to-[#d97706] rounded-full"></div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-[#fbbf24] transition-colors">
              Dashboard
            </Link>
            <Link 
              href="/AddCustomer" 
              className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-slate-900 font-bold px-4 py-2 rounded-lg shadow-md hover:from-[#fbbf24] hover:to-[#f59e0b] transition-all"
            >
              + Add Customer
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {!isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-slate-900 border-t border-slate-800`}>
        <div className="px-4 pt-2 pb-4 space-y-3">
          <Link 
            href="/" 
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2.5 rounded-xl font-semibold text-slate-300 hover:bg-slate-800 hover:text-[#fbbf24]"
          >
            Dashboard
          </Link>
          <Link 
            href="/addCustomer" 
            onClick={() => setIsOpen(false)}
            className="block text-center bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-slate-900 font-extrabold py-3 rounded-xl"
          >
            + Add Customer
          </Link>
        </div>
      </div>
    </nav>
  );
}
