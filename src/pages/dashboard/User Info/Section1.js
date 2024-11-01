import React from "react";
import ProfilePic from "../../../components/Chat/Profile/ProfilePic";

import { IoVideocamOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";

const data = {
  id: 0,
  img: "https://yt3.ggpht.com/yti/ANjgQV8Q-ZN4d5-FpUviPW6zNfN_L3G3lXzMAVHuSCioSYt-NWI=s88-c-k-c0x00ffffff-no-rj",
  name: "Anxhelo",
  msg: "ome ca bone",
  time: "9:36",
  unread: 0,
  pinned: true,
  online: false,
};
const Section1 = ({ version }) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-4">
        <ProfilePic data={data} version={2} />
        <div className="flex flex-col dark:text-white text-sm">
          <span>Anxhelo C</span>
          <span>+123123123</span>
        </div>
      </div>

      {version !== "settings" && (
        <div className="flex items-center justify-around gap-2 border-b dark:border-textPrimary py-5 dark:text-white">
          <div className="flex flex-col items-center cursor-pointer">
            <IoVideocamOutline className=" size-[19px]" />
            <span>Audio</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <IoCallOutline className=" size-[19px]" />
            <span>Voice</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Section1;
