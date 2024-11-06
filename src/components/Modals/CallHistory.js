import React from "react";
import Search from "../Inputs/Search";
import { CallMembers } from "../../constants";
import CallLogElement from "../Call/CallLogElement";
import { IoIosCloseCircle } from "react-icons/io";

const CallHistory = ({ toggleStartCall }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.2)] flex items-center justify-center z-[999]">
      <div className="w-full max-w-[400px] h-full flex flex-col justify-between max-h-[500px] bg-lightBlue dark:bg-bgDark2 shadow-md rounded-md p-4">
        <div className="flex gap-4 items-center py-2">
          <Search />
          <IoIosCloseCircle
            size={24}
            onClick={toggleStartCall}
            className="dark:text-white cursor-pointer"
          />
        </div>

        <div className="flex flex-col gap-2 overflow-y-scroll h-full menu py-4">
          {CallMembers.map((item) => (
            <CallLogElement key={item.id} data={item} version={2} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CallHistory;
