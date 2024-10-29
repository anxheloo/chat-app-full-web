import React from "react";

const MediaMsg = ({ data }) => {
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
        <div className="space-y-2">
          <img
            src={data.img}
            alt={data.message}
            className=" max-h-[210px] rounded-md"
          />
          <p className={`text-white p-2`}>{data.message}</p>
        </div>
      </div>
    </div>
  );
};

export default MediaMsg;
