import React, { memo } from "react";
import ProfilePic from "./Profile/ProfilePic";

const ChatElement = memo(({ data }) => {
  console.log("Chat element is rendered");

  return (
    <div className="w-full h-[65px] rounded-md flex gap-3  border border-bluePrimary dark:border-none dark:bg-black px-2 cursor-pointer dark:text-white hover:opacity-80 hover:shadow-lg">
      <ProfilePic data={data} />
      <div className="flex-1 flex flex-col justify-between py-2 dark:text-white truncate">
        <h3 className="font-semibold">{data?.name}</h3>
        <p className="truncate text-sm">{data?.msg}</p>
      </div>

      <div className=" text-xs flex flex-col justify-between py-[10px] w-[30px]">
        <span>{data?.time}</span>
        <div className=" flex items-center">
          <span className=" size-4 rounded-full bg-bluePrimary flex justify-center items-center text-white text-[10px] font-semibold">
            {data?.unread}
          </span>
        </div>
      </div>
    </div>
  );
});

export default ChatElement;
