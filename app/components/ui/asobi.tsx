"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Asobi() {
  return (
    <>
      <motion.div
        className="bg-blue-600 w-20 h-20"
        drag
        dragDirectionLock
        dragTransition={{
          bounceStiffness: 600,
          bounceDamping: 10,
        }}
        // dragConstraints={{ left: 1, right: 1, top: 0, bottom: 0 }}
      ></motion.div>
    </>
  );
}
