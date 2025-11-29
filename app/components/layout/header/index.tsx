"use client";

import { useState } from "react";
import ThemeToggle from "../../ui/theme-toggle";
import DesktopNav from "./desktop-nav";
import HamburgerButton from "./hamburger-button";
import MobileMenu from "./mobile-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Navigation: Desktop (md+) shows nav links, Mobile shows hamburger */}
      <div className="flex items-center pl-4 md:pl-8">
        <DesktopNav />
        <HamburgerButton isOpen={isMenuOpen} onClick={toggleMenu} />
      </div>

      {/* Theme Toggle */}
      <div className="flex justify-end pr-8">
        <ThemeToggle />
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
};

export default Header;
