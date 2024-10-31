import React, { useState } from "react";
import { MenuOptions } from "../../../../constants";
import { RxDotsVertical } from "react-icons/rx";

const ActionMenu = () => {
  const [showActions, setShowActions] = useState(false);

  return (
    <>
      <RxDotsVertical
        className="text-black dark:text-white size-[19px] cursor-pointer absolute top-0 -right-4"
        onClick={() => setShowActions((prev) => !prev)}
      />
      {showActions && (
        <div className="flex flex-col justify-start text-textPrimary p-2 bg-bgDark dark:bg-bgDark2 gap-2 rounded-md shadow-md absolute top-6 -right-3 z-50">
          {MenuOptions.map((item, index) => (
            <button
              key={index}
              onClick={""}
              className=" text-left hover:bg-black p-1 rounded-sm"
            >
              {item.title}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default ActionMenu;
