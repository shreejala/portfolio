"use client";

import React from "react";
import Link from "next/link";
import { cvUrl } from "../constants";

const DownloadButton = () => {

  return (
    <Link
      className="flex bg-[#2F2E30] h-[45px] w-[100%] rounded-xl text-neutral-200 justify-center items-center"
      href={cvUrl}
      target="_blank"
    >
      Download CV
    </Link>
  );
};

export default DownloadButton;
