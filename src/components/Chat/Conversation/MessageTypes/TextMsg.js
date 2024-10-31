import React from "react";
import ActionMenu from "../Actions/ActionMenu";

const TextMsg = ({ data, dotsMenu }) => {
  return (
    <div
      className={`w-full flex ${
        data.incoming ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className={`p-3 ${
          data.incoming ? "bg-green-500" : "bg-[#0057b8]"
        } rounded-md w-max relative`}
      >
        <p className={`text-white`}>{data.message}</p>
        {dotsMenu && <ActionMenu />}
      </div>
    </div>
  );
};

export default TextMsg;
