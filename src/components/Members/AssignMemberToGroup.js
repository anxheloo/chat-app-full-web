import React from "react";
import { IoIosCloseCircle } from "react-icons/io";

const AssignMemberToGroup = ({ data, handleClick }) => {
  return (
    <div className="flex items-center justify-between px-1 h-[30px] w-full min-w-[100px] bg-gray-100 rounded-2xl">
      <div className="size-4 white rounded-full"></div>

      <div className="!text-black">{data.name}</div>

      <IoIosCloseCircle
        className=" size-5 cursor-pointer"
        onClick={handleClick}
      />
    </div>
  );
};

export default AssignMemberToGroup;
