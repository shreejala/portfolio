"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

import {
  cvUrl,
  g50Url,
  mercantoUrl,
  metlifeUrl,
  umvaUrl,
  woloUrl,
} from "../constants";

const MyProjects = () => {
  const renderProjects = (
    img: string,
    css: string,
    parentCss: string,
    url: string
  ) => {
    return (
      <Link
        className={`${parentCss} cursor-pointer`}
        href={url}
        target="_blank"
      >
        <div className={`relative ${css}`}>
          <Image
            src={`/portfolio${img}`}
            fill
            priority
            alt="img"
            style={{
              borderRadius: 20,
              height: "100%",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </Link>
    );
  };

  return (
    <div>
      <div className="flex flex-col gap-2 text-3xl">
        <span className="text-2xl md:text-3xl 2xl:text-4xl ">Recent</span>

        <div>
          <span className="text-3xl md:text-4xl 2xl:text-5xl bg-gradient-to-r from-cyan-500 to-cyan-700 inline-block text-transparent bg-clip-text">
            Projects
          </span>
          <span className="text-2xl md:text-3xl 2xl:text-4xl "> Worked</span>
        </div>
      </div>

      <div className="relative xl:h-[700px] mt-10 text-lg 2xl:text-2xl text-neutral-300 flex flex-row flex-wrap gap-4 justify-center">
        {renderProjects(
          "/g50.webp",
          "w-[150px] h-[150px] xl:w-[200px] xl:h-[230px] 2xl:w-[230px] 2xl:h-[300px]",
          "xl:absolute xl:left-[20.5%] xl:top-[25%] 2xl:left-[27.5%] 2xl:top-[20%]",
          g50Url
        )}
        {renderProjects(
          "/metlife.webp",
          "w-[150px] h-[150px] xl:w-[170px] xl:h-[170px] 2xl:w-[220px] 2xl:h-[220px]",
          "xl:absolute xl:left-[38%] xl:top-[8%] 2xl:left-[42%] 2xl:top-0",
          metlifeUrl
        )}
        {renderProjects(
          "/wolo.webp",
          "w-[150px] h-[150px] xl:w-[170px] xl:h-[170px] 2xl:w-[220px] 2xl:h-[220px]",
          "xl:absolute xl:left-[48%] xl:top-[60%] 2xl:left-[50%] 2xl:top-[66%]",
          woloUrl
        )}
        {renderProjects(
          "/umva.webp",
          "w-[150px] h-[150px] xl:w-[200px] xl:h-[230px] 2xl:w-[230px] 2xl:h-[300px]",
          "xl:absolute xl:left-[63.5%] xl:top-[34.5%] 2xl:left-[64%] 2xl:top-[35%]",
          umvaUrl
        )}

        {renderProjects(
          "/mercanto.webp",
          "w-[150px] h-[150px] xl:w-[300px] xl:h-[160px] 2xl:w-[360px] 2xl:h-[200px]",
          "xl:absolute xl:left-[38%] xl:top-[35%] 2xl:top-[35%] 2xl:left-[42%]",
          mercantoUrl
        )}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            ease: "easeInOut",
            duration: 2,
          }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          className="hidden xl:flex absolute xl:left-[54%] xl:top-[16%] 2xl:left-[58%] 2xl:top-[10%] flex-col gap-1"
        >
          <span>Software solutions for</span>
          <span> - Targeted region and people</span>
          <span> - E-commercial business</span>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            ease: "easeInOut",
            duration: 2,
          }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          className="hidden xl:flex absolute xl:left-[22%] xl:top-[62%] 2xl:left-[30%] 2xl:top-[73%] flex-col gap-1"
        >
          <span>Hybrid mobile applications</span>
          <span> - Social media platform</span>
          <span> - Health & Insurance</span>
          <span> - Financial solutions</span>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            ease: "easeInOut",
            duration: 2,
          }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
        >
          <Link
            href={cvUrl}
            target="_blank"
            className="hidden xl:flex absolute xl:left-[65%] xl:top-[67%] 2xl:left-[66%] 2xl:top-[83%] flex-col gap-1 cursor-pointer hover:text-neutral-100"
          >
            <span>&</span>
            <span>Many more.</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default MyProjects;
