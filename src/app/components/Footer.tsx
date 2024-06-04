import React from "react";

const Footer = () => {
  return (
    <div className="text-sm">
      <div className=" border-t-2 border-t-neutral-400" />

      <div className="flex mt-1 justify-between">
        <span className="italic font-thin">
          ©{new Date().getFullYear()}. All Rights Reserved.
        </span>
        <span>
          Designed by <span className="text-cyan-500"> Shreejala Tuladhar</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
