import React from "react";

const Timeline = ({ data }) => {
  return (
    <div className="flex items-center">
      <hr className="flex-1 h-[1px] bg-slate-500 opacity-55"></hr>
      <h4 className="px-3 text-textPrimary dark:text-white">{data.text}</h4>
      <hr className="flex-1 h-[1px] bg-slate-500 opacity-55"></hr>
    </div>
  );
};

export default Timeline;
