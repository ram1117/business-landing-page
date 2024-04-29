"use client";

import Link from "next/link";
import NavList from "./NavList";
import MobileMenu from "./MobileMenu";
import { useEffect } from "react";
import useHasScrolled from "../../hooks/useHasScrolled";

const NavBar = () => {
  const hasScrolled = useHasScrolled();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 flex justify-between py-4 px-6 lg:px-16 w-full z-[99] ${hasScrolled ? "text-black bg-white animate-changecolor" : "text-white"}`}
      id="navbar"
    >
      <Link href="#home">
        <h2 className="font-bungee text-4xl font-bold track-wider">KRAM</h2>
      </Link>
      <div className="flex gap-6">
        <div className="lg:block hidden">
          <NavList />
        </div>
        <div className="block lg:hidden">
          <MobileMenu hasScrolled={hasScrolled} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
