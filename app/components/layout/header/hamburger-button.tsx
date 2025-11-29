"use client";

import { motion } from "motion/react";

type HamburgerButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

const HamburgerButton = ({ isOpen, onClick }: HamburgerButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
      aria-label="メニュー"
      aria-expanded={isOpen}
    >
      <motion.span
        animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        className="w-6 h-0.5 bg-current block"
      />
      <motion.span
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="w-6 h-0.5 bg-current block"
      />
      <motion.span
        animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        className="w-6 h-0.5 bg-current block"
      />
    </button>
  );
};

export default HamburgerButton;
