import React, { memo, useMemo } from "react";
import { LuArrowDownSquare } from "react-icons/lu";
import ChatElement from "../../components/Chat/ChatElement";
import Search from "../../components/Inputs/Search";
import { Chatlist } from "../../constants";
import LeftMenu from "./LeftMenu/LeftMenu";

const Chats = memo(() => {
  // Memoize filtered lists to prevent re-filtering on every render
  const pinnedChats = useMemo(() => Chatlist.filter((item) => item.pinned), []);
  const allChats = useMemo(() => Chatlist.filter((item) => !item.pinned), []);

  return (
    <LeftMenu title={"Chats"}>
      <div className="flex items-center justify-center">
        <Search />
      </div>

      <div className="border-b border-gray-200 py-2">
        <div className="flex gap-3 items-center">
          <LuArrowDownSquare
            size={20}
            className="text-textPrimary dark:text-white"
          />
          <h4 className="text-bluePrimary hover:bg-gray-200 p-1 rounded-md cursor-pointer">
            Archived
          </h4>
        </div>
      </div>

      <div className="overflow-y-scroll h-full flex-grow-1 menu w-full pb-[180px]">
        <div className="flex-col">
          <h5 className=" text-textPrimary dark:text-white font-semibold pb-4">
            Pinned
          </h5>
          <div className="flex flex-col gap-2 ">
            {pinnedChats.map((item) => (
              <ChatElement key={item.id} data={item} />
            ))}
          </div>
        </div>

        <div className="flex-col py-2">
          <h5 className=" text-textPrimary dark:text-white font-semibold pb-4">
            All chats
          </h5>

          <div className="flex flex-col gap-2 ">
            {allChats.map((item) => (
              <ChatElement key={item.id} data={item} />
            ))}
          </div>
        </div>
      </div>
    </LeftMenu>
  );
});

export default Chats;
