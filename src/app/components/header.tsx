"use client";

import Link from 'next/link'
import { useState } from "react";
import { Menu, MoonStar, X } from "lucide-react";
import { ModeToggle } from './modeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="z-50 fixed top-0 right-0 left-0 flex flex-wrap justify-around items-center bg-white dark:bg-[#030712] shadow-[0px_4px_6px_0px_030712]">
      <div className="flex justify-around items-center w-full px-4 py-3 md:w-auto md:px-6">
        <a href="#introduction" className="flex items-center text-lg font-bold">
          {"<BC />"}
        </a>

        <button
          className="p-2 text-gray-300 md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Navigation - Desktop */}
      <nav className="hidden md:flex items-center justify-end bg-white dark:bg-[#030712] gap-5 p-5 text-sm dark:text-gray-400 *:rounded-lg [&>a]:hover:scale-105 dark:[&>a]:hover:text-white [&>a]:transition-all [&>a]:duration-400">
        <a href="#aboutMe">About</a>
        <a href="#work">Work</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#getInTouch">Contact</a>
        <div className="self-center w-px h-5.5 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25"></div>
        {/* <a className="cursor-pointer">
          <MoonStar size={20} />
        </a> */}
        <ModeToggle/>
        <Link 
        className="bg-black text-white dark:bg-white dark:text-black px-4.5 py-1.5 hover:bg-slate-400 dark:hover:bg-slate-800 transition duration-400 hover:text-black dark:hover:text-white"
        href="./CV - Burkay Cetinkaya.pdf"
        target="_blank"
        >
          Download CV
        </Link>
      </nav>

      {/* Navigation - Mobile */}
      <nav
        className={`${isMenuOpen ? "flex" : "hidden"}
      flex-col w-full py-3 px-4 bg-[#FBFAFC] dark:bg-gray-950 text-sm dark:text-gray-400 gap-4 md:hidden
      `}
      >
        <a
          href="#aboutMe"
          className="py-2 px-2 hover:text-white"
          onClick={toggleMenu}
        >
          About
        </a>
        <a
          href="#work"
          className="py-2 px-2 hover:text-white"
          onClick={toggleMenu}
        >
          Work
        </a>
        <a
          href="#testimonials"
          className="py-2 px-2 hover:text-white"
          onClick={toggleMenu}
        >
          Testimonials
        </a>
        <a
          href="#getInTouch"
          className="py-2 px-2 hover:text-white"
          onClick={toggleMenu}
        >
          Contact
        </a>
        <div className="flex items-center justify-around py-2 px-2">
        <ModeToggle/>
          <button className="bg-white text-black px-4.5 py-1.5 hover:bg-slate-800 transition duration-400 hover:text-white">
            Download CV
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
