import React from "react";
import { CgSearch } from "react-icons/cg";

const Search = () => {
  return (
    <div className="h-[40px]  w-full rounded-md dark:rounded-full flex bg-white dark:bg-black items-center px-2 border border-bluePrimary dark:border-none">
      <CgSearch size={"20px"} className=" text-textPrimary" />
      <input
        type="text"
        placeholder="Search"
        className="flex-1 h-full outline-none pl-2 bg-transparent dark:caret-white"
      />
    </div>
  );
};

export default Search;
