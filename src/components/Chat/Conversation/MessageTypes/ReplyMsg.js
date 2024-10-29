import React from "react";

const ReplyMsg = ({ data }) => {
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
        <div className="space-y-2 p-2 text-sm">
          <div className="p-2 flex flex-col items-center rounded-md bg-white">
            <p> {data.message}</p>
          </div>

          <p className="text-white text-xs"> {data.reply}</p>
        </div>
      </div>
    </div>
  );
};

export default ReplyMsg;
