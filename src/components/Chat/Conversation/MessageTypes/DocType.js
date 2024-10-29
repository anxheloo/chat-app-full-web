import React from "react";
import { BsDownload } from "react-icons/bs";

const DocType = ({ data }) => {
  return (
    <div
      className={`w-full flex ${
        data.incoming ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className={`${
          data.incoming ? "bg-green-500" : "bg-[#0057b8]"
        } rounded-md w-max`}
      >
        <div className="flex flex-col gap-2 text-white">
          <div className="p-2 flex flex-row gap-3 items-center">
            <img src="" alt="" className="size-[48px]" />
            <p>Abstract.png</p>
            <BsDownload className="size-[19px] cursor-pointer" />
          </div>

          <p className="text-sm p-1">{data.message}</p>
        </div>
      </div>
    </div>
  );
};

export default DocType;
