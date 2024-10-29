import React from "react";

const TextMsg = ({ data }) => {
  return (
    <div
      className={`w-full flex ${
        data.incoming ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className={`p-3 ${
          data.incoming ? "bg-green-500" : "bg-[#0057b8]"
        } rounded-md w-max`}
      >
        <p className={`text-white`}>{data.message}</p>
      </div>
    </div>
  );
};

export default TextMsg;
