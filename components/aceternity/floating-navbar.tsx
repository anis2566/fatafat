"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

import { cn } from "@/lib/utils";
import { Logo } from "../logo";
import { NavDrawer } from "../navbar/nav-drawer";
import { NavMenu } from "../navbar/nav-menu";

export const FloatingNav = ({
  className,
}: {
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

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
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-full max-w-screen-xl fixed inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] items-center justify-center space-x-4",
          className
        )}
      >
        <div className="w-full max-w-screen-xl mx-auto p-2 px-6 md:px-4">
            <div className="flex justify-between items-center">
                <div className="hidden md:block">
                    <Logo />
                </div>
                <NavDrawer />
                <NavMenu />
                <div className="md:hidden">
                    <Logo />
                </div>
            </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
