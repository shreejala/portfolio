"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

import {
  finalTouch,
  overview,
  overviewContact,
  overviewSkills,
  skills,
} from "../constants";

const MyTitle = () => {
  return (
    <div className="flex flex-col justify-around gap-8 2xl:gap-14 2xl:py-10">
      <div className="flex flex-col gap-4 text-2xl 2xl:text-4xl 2xl:gap-6">
        <span>{"Hi, I'm"}</span>
        <span className="text-3xl md:text-5xl 2xl:text-6xl animate-typing overflow-hidden whitespace-nowrap bg-gradient-to-r from-cyan-500 to-cyan-800 inline-block text-transparent bg-clip-text">
          Shreejala Tuladhar
        </span>
        <span className="text-2xl 2xl:text-4xl">
          Passionate Software Engineer{" "}
        </span>
        <span className="text-lg 2xl:text-xl text-slate-300">
          Crafting Intuitive Web & Mobile Experiences
        </span>
      </div>

      <motion.div
        className="flex flex-col gap-2 w-[100%] xl:w-[85%] 2xl:w-[70%] py-5 text-neutral-200"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 0.75,
          delay: 0.9,
        }}
      >
        <span className="text-lg lg:text-2xl text-neutral-300">Expertise</span>

        <div className="flex flex-row flex-wrap justify-between py-5">
          {skills.map((skill, index) => (
            <div
              className={`${
                skill.slug === "nextjs" || skill.slug === "ios"
                  ? "flex md:h-[40px] md:w-[40px] bg-white justify-center rounded-full"
                  : ""
              }`}
              key={index}
            >
              <Image
                src={`/portfolio${skill.icon}`}
                height={35}
                width={35}
                priority
                alt="icon"
                style={{ objectFit: "contain", height: "auto" }}
              />
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="w-[100%] xl:w-[85%] 2xl:w-[70%] bg-[#2F2E30] p-5 rounded-lg text-neutral-300 text-md leading-8"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 0.75,
          delay: 1.45,
        }}
      >
        <p>{overview}</p>

        <p>{overviewSkills}</p>
      </motion.div>

      <motion.div
        className="w-[100%] xl:w-[85%] 2xl:w-[70%] bg-[#2F2E30] p-5 rounded-lg text-neutral-300 text-md leading-8"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 0.75,
          delay: 1.45,
        }}
      >
        <p>{finalTouch}</p>
        <p className=" mt-2 text-cyan-500 text-center">{overviewContact}</p>
      </motion.div>
    </div>
  );
};

export default MyTitle;
