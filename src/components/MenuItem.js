import React from "react";

const MenuItem = ({ item, handleClick, selected }) => {
  return (
    <div
      id={item.index}
      onClick={handleClick}
      className={`size-[44px] rounded-md ${
        selected === item.index && "bg-blue-400 dark:bg-bgDark2"
      } flex items-center justify-center cursor-pointer hover:opacity-75 `}
    >
      <div
        className={`dark:text-white text-black ${
          selected === item.index ? "text-white" : "text-black"
        }`}
      >
        {item.icon}
      </div>
    </div>
  );
};

export default MenuItem;
