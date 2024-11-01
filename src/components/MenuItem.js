import React from "react";
import { useLocation } from "react-router-dom";

const MenuItem = ({ item, handleClick }) => {
  const location = useLocation();
  const selected = item.path === location.pathname;

  return (
    <div
      id={item.index}
      onClick={handleClick}
      className={`size-[44px] rounded-md 
        ${selected && "bg-blue-400 dark:bg-bgDark2"}
        flex items-center justify-center cursor-pointer hover:opacity-75 `}
    >
      <div
        className={`dark:text-white text-black ${
          selected ? "text-white" : "text-black"
        }`}
      >
        {item.icon}
      </div>
    </div>
  );
};

export default MenuItem;
