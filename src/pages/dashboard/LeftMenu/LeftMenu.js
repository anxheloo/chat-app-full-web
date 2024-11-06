import React from "react";
import { useSelector } from "react-redux";

const LeftMenu = ({ children, title }) => {
  const isOpen = useSelector((state) => state.actions.isLeftSideOpen);

  return (
    <div
      className={`h-screen overflow-hidden ${
        isOpen ? "w-[300px] p-4" : "w-0"
      } bg-lightBlue dark:bg-bgDark2 shadow-md space-y-4 border-r dark:border-textPrimary transition-all 0.3s ease-in-out`}
    >
      <div className="flex justify-between items-center">
        <h4 className=" text-lg font-bold dark:text-white">{title}</h4>
      </div>

      {children}
    </div>
  );
};

export default LeftMenu;
