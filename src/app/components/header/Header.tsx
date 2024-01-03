"use client";

import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Header() {
  const [scrolledFromTop, setScrolledFromTop] = useState(false);
  const [navOpened, setNavOpened] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY >= 50) {
        setScrolledFromTop(true);
      } else {
        setScrolledFromTop(false);
      }
    };
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerBaseClasses =
    "fixed z-30 px-4 flex h-24 w-full items-center justify-between backdrop-blur font-mono text-sm transition-all duration-200 md:px-12";

  const headerCombinedClasses = twMerge(
    headerBaseClasses,
    scrolledFromTop ? "h-14" : "h-24",
  );

  const navBaseClasses =
    "text-right backdrop-blur fixed left-0 right-0 min-h-screen translate-x-full transform space-y-4 px-4 pt-8 text-white transition duration-300 md:relative md:flex md:min-h-0 md:translate-x-0 md:space-x-12 md:space-y-0 md:px-0 md:py-0";
  const navCombinedClasses = twMerge(
    navBaseClasses,
    navOpened ? "translate-x-0" : "translate-x-full",
  );

  const onNavButtonClicked = () => {
    setNavOpened(!navOpened);
  };

  const onNavItemClicked = () => {
    setNavOpened(false);
  };

  return (
    <header className={headerCombinedClasses}>
      <div className="h-12 origin-left font-mono text-2xl text-white transition duration-200">
        KenTung.Dev
      </div>
      <nav>
        <button className="md:hidden" onClick={onNavButtonClicked}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <ul className={navCombinedClasses}>
          <li>
            <a href="#" onClick={onNavItemClicked}>
              // Home
            </a>
          </li>
          <li>
            <a href="#Expertise" onClick={onNavItemClicked}>
              // Expertise
            </a>
          </li>
          <li>
            <a href="#Projects" onClick={onNavItemClicked}>
              // Projects
            </a>
          </li>
          <li>
            <a href="#Contact" onClick={onNavItemClicked}>
              // Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
