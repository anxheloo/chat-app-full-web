import React, { useState } from "react";
import Search from "../../components/Inputs/Search";
import { IoCallOutline } from "react-icons/io5";
import CallLogElement from "../../components/Call/CallLogElement";
import { CallLogs } from "../../constants";
import CallHistory from "../../components/Modals/CallHistory";
import LeftMenu from "../dashboard/LeftMenu/LeftMenu";

const Call = () => {
  const [startCall, setStartCall] = useState(false);

  const toggleStartCall = () => {
    console.log("toggle pressed");
    setStartCall((prev) => !prev);
  };

  return (
    <>
      <div className="flex w-full">
        {/* Left */}

        <LeftMenu title={"Call Logs"}>
          <Search />

          <div className="border-b border-gray-200 py-2 flex items-center justify-between">
            <h4 className=" text-bluePrimary p-1 rounded-md ">
              Start conversation
            </h4>
            <div className=" p-1 rounded-full hover:bg-[rgba(0,0,0,0.3)]">
              <IoCallOutline
                size={20}
                className="text-bluePrimary cursor-pointer"
                onClick={toggleStartCall}
              />
            </div>
          </div>

          <div className="overflow-y-scroll h-full flex-grow-1 menu w-full pb-[180px]">
            <div className="flex flex-col gap-2 ">
              {CallLogs.map((item) => (
                <CallLogElement key={item.id} data={item} version={1} />
              ))}
            </div>
          </div>
        </LeftMenu>

        {/* right */}

        {startCall && <CallHistory toggleStartCall={toggleStartCall} />}
      </div>
    </>
  );
};

export default Call;
