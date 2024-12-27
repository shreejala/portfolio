"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const MyImage = () => {
  return (
    <motion.div
      className="flex justify-center pl-5"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 10,
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
    >
      <div className="h-[400px] w-[240px] bg-[#2F2E30] rounded-xl relative">
        <div className=" flex h-[400px] w-[240px] bg-neutral-900 rounded-xl absolute top-8 right-8">
          <Image
            src="/portfolio/shreza.jpg"
            width={240}
            height={240}
            priority
            alt="shreza"
            style={{ borderRadius: 10 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default MyImage;
