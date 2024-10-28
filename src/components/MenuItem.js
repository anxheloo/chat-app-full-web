import React from "react";
import { useSelector } from "react-redux";

const MenuItem = ({ item, handleClick, selected }) => {
  const themeMode = useSelector((state) => state.theme.mode);
  return (
    <div
      id={item.index}
      onClick={handleClick}
      className={`size-[44px] rounded-md ${
        selected === item.index && "bg-blue-400"
      } flex items-center justify-center cursor-pointer hover:opacity-75 `}
    >
      <div
        className={`${
          themeMode === "dark" || selected === item.index
            ? "text-white"
            : "text-black"
        }`}
      >
        {item.icon}
      </div>
    </div>
  );
};

export default MenuItem;
