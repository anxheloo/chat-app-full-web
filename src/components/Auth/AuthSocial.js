import React from "react";
import { RiGoogleLine } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io5";
import { CiTwitter } from "react-icons/ci";

const AuthSocial = () => {
  return (
    <div className="w-full">
      <div className="flex items-center text-gray-400">
        <div className="flex-1 h-[1px] bg-gray-100"></div>
        <div className="px-2 text-sm">OR</div>
        <div className="flex-1 h-[1px] bg-gray-100"></div>
      </div>

      <div className="flex items-center justify-center gap-5 py-5">
        <RiGoogleLine />
        <IoLogoGithub />
        <CiTwitter />
      </div>
    </div>
  );
};

export default AuthSocial;
