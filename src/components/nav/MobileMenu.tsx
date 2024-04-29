"use client";

import { useState } from "react";
import ImageWrapper from "../../atoms/ImageWrapper";
import MenuIcon from "@/public/icons/menu.svg";
import MenuIconDark from "@/public/icons/menu-dark.svg";
import CloseIcon from "@/public/icons/close-icon.svg";
import NavList from "./NavList";

interface MobileMenuProps {
  hasScrolled: boolean;
}

const MobileMenu = ({ hasScrolled }: MobileMenuProps) => {
  const [openMenu, setOpenMenu] = useState(false);
  const MenuIconImage = hasScrolled ? MenuIconDark : MenuIcon;

  return (
    <>
      <button onClick={() => setOpenMenu((prev) => !prev)}>
        <ImageWrapper
          src={MenuIconImage}
          alt="Menu Icon"
          containerSize="h-10 w-10"
          sizes="10vw"
        />
      </button>
      {openMenu && (
        <div className="fixed inset-0 flex justify-end backdrop-blur-md">
          <div
            className={`relative h-full bg-white py-20 w-10/12 max-w-[350px] border`}
          >
            <button
              onClick={() => setOpenMenu((prev) => !prev)}
              className="absolute right-4 top-4"
            >
              <ImageWrapper
                src={CloseIcon}
                alt="Close Menu Icon"
                containerSize="h-10 w-10"
                sizes="10vw"
              />
            </button>
            <NavList
              className="!text-black"
              onClick={() => setOpenMenu((prev) => !prev)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
