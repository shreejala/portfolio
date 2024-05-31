"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { experience } from "../constants";
import "./timeline.css";

const MyTimeline = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 text-3xl 2xl:text-4xl 2xl:gap-6">
        <span> My Working</span>
        <span className="text-4xl md:text-5xl 2xl:text-6xl animate-typing overflow-hidden whitespace-nowrap bg-gradient-to-r from-cyan-500 to-cyan-800 inline-block text-transparent bg-clip-text">
          Experiences
        </span>
      </div>

      <div className="flex flex-col gap-5 mt-5 timeline-container">
        {experience.map((itm, index) => {
          return (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                ease: "easeInOut",
                duration: 1,
              }}
              variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 },
              }}
              key={index}
              className="flex flex-col bg-[#2F2E30] p-5 w-[45%] rounded-md timeline-item transition ease-in-out duration-500 hover:scale-110"
            >
              <div className="timeline-item-content gap-5">
                <span className="text-xs md:text-sm text-right text-neutral-400">
                  {itm.date}
                </span>

                <div>
                  <span className="text-md md:text-lg text-cyan-500">
                    {itm.position}{" "}
                  </span>
                  <span className="text-sm md:text-md text-neutral-200">
                    [ {itm.company} ]
                  </span>
                </div>

                <span className="text-xs md:text-sm text-neutral-300">
                  {itm.description}
                </span>

                <div className="flex flex-col">
                  <span className="text-sm md:text-md text-neutral-200">
                    Mostly worked with:
                  </span>

                  <div className="flex flex-row gap-5 mt-5">
                    {itm.features.map((i, idx) => {
                      return (
                        <div
                          key={idx}
                          className="flex md:h-[40px] md:w-[40px] bg-white justify-center rounded-full"
                        >
                          <Image
                            src={`/portfolio${i}`}
                            height={30}
                            width={30}
                            priority
                            alt="icon"
                            style={{ objectFit: "contain" }}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default MyTimeline;
