"use client";

import { useState } from "react";
import {
  Menu,
  X,
  User,
  Briefcase,
  Mail,
  FileDown,
  MessageCircleHeart,
} from "lucide-react";
import { ModeToggle } from "./modeToggle";
import { Button } from "@/components/ui/button";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "./languageSwitcher";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const t = useTranslations("header");
  const cv = t("cv");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="z-50 fixed top-0 right-0 left-0 flex flex-wrap justify-around items-center bg-(--first-color) shadow-[0px_4px_6px_0px_030712]">
      {!isMenuOpen && (
        <Button
          size="icon"
          className="fixed bottom-10 right-10 z-60 p-2 md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <Menu size={24} />
          {/* {isMenuOpen ? <X size={24} /> : <Menu size={24} />} */}
        </Button>
      )}

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
          href={cv}
          target="_blank"
        >
          {t("download-cv")}
        </Link>
      </nav>

      {/* Navigation - Mobile */}
      <nav
        className={`${isMenuOpen ? "flex" : "hidden"}
      fixed bottom-5 right-5 left-5 grid grid-cols-4 bg-[#FBFAFC] dark:bg-gray-950 text-xs *:flex *:justify-around dark:text-gray-400 gap-y-7 md:hidden rounded-2xl p-5
      `}
      >
        <a
          href="#aboutMe"
          onClick={toggleMenu}
          className="flex flex-col items-center gap-y-3"
        >
          <Button size="BCustomSize">
            <User className="size-7" />
          </Button>
          <p>About</p>
        </a>
        <a
          href="#work"
          onClick={toggleMenu}
          className="flex flex-col items-center gap-y-3"
        >
          <Button size="BCustomSize">
            <Briefcase className="size-7" />
          </Button>
          <p>Projects</p>
        </a>
        <a
          href="#testimonials"
          onClick={toggleMenu}
          className="flex flex-col items-center gap-y-3"
        >
          <Button size="BCustomSize">
            <MessageCircleHeart className="size-7" />
          </Button>
          <p>Testimonials</p>
        </a>
        <a
          href="#getInTouch"
          onClick={toggleMenu}
          className="flex flex-col items-center gap-y-3"
        >
          <Button size="BCustomSize">
            <Mail className="size-7" />
          </Button>
          <p>Contact</p>
        </a>
        <div className="flex flex-col items-center gap-y-3">
          <ModeToggle />
          <p className="hidden dark:block">Dark Mode</p>
          <p className="block dark:hidden">Light Mode</p>
        </div>
        <div className="flex flex-col items-center gap-y-3">
          <LanguageSwitcher />
          <p>Language</p>
        </div>

        <a
          href={cv}
          target="_blank"
          onClick={toggleMenu}
          className="flex flex-col items-center gap-y-3"
        >
          <Button size="BCustomSize">
            <FileDown className="size-7" />
          </Button>
          <p>CV</p>
        </a>

        <a onClick={toggleMenu} className="flex flex-col items-center gap-y-3">
          <Button size="BCustomSize">
            <X className="size-7" />
          </Button>
          <p>Close</p>
        </a>
      </nav>
    </header>
  );
};

export default Header;
