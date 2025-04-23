"use client";

/* import Link from "next/link"; */
import { useState } from "react";
import { Menu, X, User, Briefcase, Mail, FileDown } from "lucide-react";
import { ModeToggle } from "./modeToggle";
import { Button } from "@/components/ui/button";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "./languageSwitcher";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const t = useTranslations("header");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="z-50 fixed top-0 right-0 left-0 flex flex-wrap justify-around items-center bg-(--first-color) shadow-[0px_4px_6px_0px_030712]">
      {/* <div className="flex justify-around items-center w-full px-4 py-3 md:w-auto md:px-6">
         <a href="#introduction" className="flex items-center text-lg font-bold">
          {"<BC />"}
        </a>
      </div> */}
      <Button
        size="icon"
        className="fixed bottom-10 right-10 z-60 p-2  md:hidden focus:outline-none"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>

      {/* Navigation - Desktop */}
      <nav className="hidden md:flex items-center justify-end bg-(--first-color) gap-5 p-5 text-sm dark:text-gray-400 *:rounded-lg [&>a]:hover:scale-105 dark:[&>a]:hover:text-white [&>a]:transition-all [&>a]:duration-400">
        <a href="#aboutMe">{t("about")}</a>
        <a href="#work">{t("work")}</a>
        <a href="#testimonials">{t("testimonials")}</a>
        <a href="#getInTouch">{t("contact")}</a>
        <div className="self-center w-px h-5.5 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25"></div>
        <ModeToggle />
        <LanguageSwitcher />
        <Link
          className="bg-black text-white dark:bg-white dark:text-black px-4.5 py-1.5 hover:bg-slate-400 dark:hover:bg-slate-800 transition duration-400 hover:text-black dark:hover:text-white"
          href="./CV - Burkay Cetinkaya.pdf"
          target="_blank"
        >
          {t("download-cv")}
        </Link>
      </nav>

      {/* Navigation - Mobile */}
      <nav
        className={`${isMenuOpen ? "flex" : "hidden"}
      fixed bottom-5 right-5 grid grid-cols-3 bg-[#FBFAFC] dark:bg-gray-950 text-sm dark:text-gray-400 gap-4 md:hidden *:flex *:justify-center *:items-center rounded-2xl p-5
      `}
      >
        <Button size="icon">
          <a
            href="#aboutMe"
            className="py-2 px-2 hover:text-white"
            onClick={toggleMenu}
          >
            <User />
          </a>
        </Button>
        <Button size="icon">
          <a
            href="#work"
            className="py-2 px-2 hover:text-white"
            onClick={toggleMenu}
          >
            <Briefcase />
          </a>
        </Button>
        <Button size="icon">
          <a
            href="#getInTouch"
            className="py-2 px-2 hover:text-white"
            onClick={toggleMenu}
          >
            <Mail />
          </a>
        </Button>
        <div>
          <ModeToggle />
        </div>
        <Button size="icon">
          <a href="./CV - Burkay Cetinkaya.pdf" target="_blank">
            <FileDown />
          </a>
        </Button>
      </nav>
    </header>
  );
};

export default Header;
