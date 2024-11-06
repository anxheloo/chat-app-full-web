import React, { useMemo, useState } from "react";
import { GoPlus } from "react-icons/go";
import ChatElement from "../../components/Chat/ChatElement";
import CreateGroupModal from "../../components/Modals/CreateGroupModal";
import Search from "../../components/Inputs/Search";
import { GroupList } from "../../constants";
import LeftMenu from "./LeftMenu/LeftMenu";

const Group = () => {
  const [createGroup, setCreateGroup] = useState(false);

  const toggleCreateGroup = () => {
    console.log("toggle pressed");
    setCreateGroup((prev) => !prev);
  };

  const pinnedGroups = useMemo(
    () => GroupList.filter((item) => item.pinned),
    []
  );
  const allGroups = useMemo(() => GroupList.filter((item) => !item.pinned), []);

  return (
    <>
      <div className="flex w-full">
        {/* Left */}

        <LeftMenu title={"Groups"}>
          <Search />

          <div className="border-b border-gray-200 py-2 flex items-center justify-between">
            <h4 className=" text-bluePrimary p-1 rounded-md ">
              Create new group
            </h4>
            <div className=" p-1 rounded-full hover:bg-[rgba(0,0,0,0.3)]">
              <GoPlus
                size={20}
                className="text-bluePrimary cursor-pointer"
                onClick={toggleCreateGroup}
              />
            </div>
          </div>

          <div className="overflow-y-scroll h-full flex-grow-1 menu w-full pb-[180px]">
            <div className="flex-col">
              <h5 className=" text-textPrimary dark:text-white font-semibold pb-4">
                Pinned
              </h5>
              <div className="flex flex-col gap-2 ">
                {pinnedGroups.map((item) => (
                  <ChatElement key={item.id} data={item} />
                ))}
              </div>
            </div>

            <div className="flex-col py-2">
              <h5 className=" text-textPrimary dark:text-white font-semibold pb-4">
                All Groups
              </h5>

              <div className="flex flex-col gap-2 ">
                {allGroups.map((item) => (
                  <ChatElement key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </LeftMenu>

        {/* right */}

        {createGroup && (
          <CreateGroupModal toggleCreateGroup={toggleCreateGroup} />
        )}
      </div>
    </>
  );
};

export default Group;
