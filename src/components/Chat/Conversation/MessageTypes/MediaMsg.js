import React from "react";
import ActionMenu from "../Actions/ActionMenu";

const MediaMsg = ({ data, dotsMenu }) => {
  return (
    <div
      className={`w-full flex ${
        data.incoming ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className={`${
          data.incoming ? "bg-green-500" : "bg-[#0057b8]"
        } rounded-md w-max relative`}
      >
        <div className="space-y-2">
          <img
            src={data.img}
            alt={data.message}
            className=" max-h-[210px] rounded-md"
          />
          <p className={`text-white p-2`}>{data.message}</p>
        </div>
        {dotsMenu && <ActionMenu />}
      </div>
    </div>
  );
};

export default MediaMsg;
