import React, { memo } from "react";
import ProfilePic from "../Chat/Profile/ProfilePic";
import { MdArrowOutward } from "react-icons/md";
// import { GoArrowDownLeft } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";
import { TbVideo } from "react-icons/tb";

// version 1 => call logs in the call screen
// version 1 => call logs in the modal, including call and video call option

const CallLogElement = memo(({ data, version }) => {
  return (
    <div className="w-full h-[65px] rounded-md flex gap-3  border border-bluePrimary dark:border-none dark:bg-black px-2 cursor-pointer dark:text-white hover:opacity-80 hover:shadow-lg">
      <ProfilePic img={data?.img} online={data?.online} />
      <div className="flex-1 flex flex-col justify-between py-2 dark:text-white truncate">
        <h3 className="font-semibold">{data?.name}</h3>
        <p className="truncate text-sm flex items-center gap-2">
          <MdArrowOutward size={"20px"} className=" text-green-500" />
          <span>Yesterday, 21:29</span>
        </p>
      </div>
      <div className="flex items-center gap-2 h-full">
        <IoCallOutline size={"20px"} className=" text-green-500 " />
        {version === 2 && (
          <TbVideo size={"20px"} className=" text-green-500 " />
        )}
      </div>
    </div>
  );
});

export default CallLogElement;
