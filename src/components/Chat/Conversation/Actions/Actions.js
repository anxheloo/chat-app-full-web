import React from "react";
import { useSelector } from "react-redux";
import { ActionIcons } from "../../../../constants";

const Actions = () => {
  const actionsState = useSelector((state) => state.actions.isShown);

  if (actionsState) {
    return (
      <div className={"absolute bottom-[60px] left-0 flex flex-col gap-2"}>
        {ActionIcons.map((item) => (
          <div key={item.id} className="flex items-center gap-2 w-fit group">
            <div
              className={`size-14 rounded-full flex items-center justify-center bg-blue-500 hover:bg-green-500 active:opacity-75 cursor-pointer`}
            >
              {item.icon}
            </div>
            <span className="p-2 rounded-md bg-bgDark dark:bg-bgDark2 hidden group-hover:flex text-white">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
};

export default Actions;
