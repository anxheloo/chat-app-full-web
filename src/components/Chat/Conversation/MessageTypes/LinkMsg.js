import React from "react";
import ActionMenu from "../Actions/ActionMenu";

const LinkMsg = ({ data, dotsMenu }) => {
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
        <div className="p-2 flex flex-col gap-3 rounded-md">
          <img
            src={data.img}
            alt={data.message}
            className="max-h-[210px] rounded-md"
          />
          <div className="space-y-2 text-white">
            <p>Creating chat app</p>
            <div className="flex">
              <a
                className="text-xs text-center"
                href="https://www.w3schools.com"
                target="_blank"
                rel="noreferrer"
              >
                <span>www.youtube.com</span>
              </a>
            </div>
            <p className="text-white">{data.message}</p>
          </div>
        </div>
        {dotsMenu && <ActionMenu />}
      </div>
    </div>
  );
};

export default LinkMsg;
