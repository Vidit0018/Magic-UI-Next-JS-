// src/components/floating-navbar.tsx

"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";

// Define the type for a single nav item
interface NavItem {
  name: string;
  link: string;
  icon?: React.ReactNode; // Optional icon
}

// Define the props for the FloatingNav component
interface FloatingNavProps {
  navItems: NavItem[];
  className?: string;
}
// src/components/floating-navbar.tsx

export const FloatingNav: React.FC<FloatingNavProps> = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex w-[1350px] fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-xl dark:bg-white bg-white shadow-[2px_4px_20px_-1px_#7D6EEB80] z-[5000]  py-2 items-center justify-between space-x-4 px-6",
          className
        )}
      >
        <div className="text-3xl">
          <span className="uppercase text-[#7F56D9]">n</span>
          <span className="uppercase">av</span>
          <span className="uppercase text-[#7F56D9]">b</span>
          <span className="uppercase">ar</span>
        </div>

        <div className="flex justify-center items-center gap-6">
          {navItems.map((navItem, idx) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-black items-center font-semibold flex space-x-1 text-black-600 dark:hover:text-neutral-300 hover:text-neutral-500"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm">{navItem.name}</span>
            </Link>
          ))}
        </div>
        <div className="flex gap-2">
          <button className="border text-md relative border-neutral-200 dark:border-white/[0.2] text-black text-purple-700 px-4 py-2 w-[83px] h-[44px] rounded-xl font-semibold bg-purple-200">
            <span>Login</span>
          </button>
          <button className="border text-md relative border-neutral-200 dark:border-white/[0.2] text-black text-white px-4 py-2 w-[95px] h-[44px] rounded-xl font-semibold bg-[#7F56D9]">
            <span>Sign Up</span>
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
