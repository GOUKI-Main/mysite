"use client";

import { motion, AnimatePresence } from "motion/react";
import NavLink from "./nav-link";
import { navItems } from "@/app/connfigs/headerConfig";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <>
      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 w-64 h-dvh bg-white/50 dark:bg-emerald-900/50 shadow-lg z-50 md:hidden"
          >
            <nav className="flex flex-col gap-6 p-8">
              {navItems.map((item) => (
                <div key={item.href} onClick={onClose}>
                  <NavLink item={item} />
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
