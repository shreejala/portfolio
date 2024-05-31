"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { contacts } from "../constants";

const MyContact = () => {
  return (
    <div className="flex flex-row justify-center gap-5 mt-8">
      {contacts.map((itm, index) => {
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ease: "easeInOut",
              duration: 0.75,
              delay: 0.4,
            }}
          >
            <Link
              className="flex h-12 w-12 justify-center hover:cursor-pointer"
              href={itm.url}
              target={itm.name === "gmail" ? "_self" : "_blank"}
            >
              <Image
                src={itm.icon}
                width={itm.size}
                height={itm.size}
                priority
                alt={itm.name}
              />
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
};

export default MyContact;
