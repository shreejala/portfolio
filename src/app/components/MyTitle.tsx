"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

import { skills } from "../constants";

const MyTitle = () => {
  return (
    <div className="flex flex-col justify-around gap-8 2xl:gap-14 2xl:py-10">
      <div className="flex flex-col gap-4 text-3xl 2xl:text-4xl 2xl:gap-6">
        <span>{"Hi, I'm"}</span>
        <span className="text-4xl md:text-5xl 2xl:text-6xl animate-typing overflow-hidden whitespace-nowrap bg-gradient-to-r from-cyan-500 to-cyan-800 inline-block text-transparent bg-clip-text">
          Shreejala Tuladhar
        </span>
        <span className="text-3xl 2xl:text-4xl">Software Engineer</span>
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
                skill.slug === "nextjs"
                  ? "flex md:h-[40px] md:w-[40px] bg-white justify-center rounded-full"
                  : ""
              }`}
              key={index}
            >
              <Image
                src={skill.icon}
                height={40}
                width={40}
                priority
                alt="icon"
                style={{ objectFit: "contain" }}
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
        <p>
          Well organized and customer-focused with proven skills in team
          leadership. As a Software Engineer, I’ve been working to maintain
          proper standards for cross-platform mobile applications, web
          applications, collaborate with teams to analyze projects, and build an
          appropriate roadmap for development and delivery. Have provided
          support to existing cross-platform mobile applications and revamp
          based on current trends. Worked with foreign as well as local clients
          in the tech industry for more than 4 years, building quality software
          solutions. Strongly believe in taking complete ownership of official
          responsibilities for an extensive mutual growth.
        </p>
      </motion.div>
    </div>
  );
};

export default MyTitle;
