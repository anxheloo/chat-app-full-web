import React, { memo } from "react";

// VERSION DEFAULT : Displaying online dot
// VERSION 2 : Not Displaying online dot

const ProfilePic = memo(({ img, online, handleClick, version }) => {
  return (
    <div
      className=" h-full relative flex items-center cursor-pointer"
      onClick={handleClick}
    >
      <img
        src={img}
        alt="user"
        className="rounded-full size-10 pointer-events-none"
      />
      {version !== 2 && (
        <div
          className={`size-[10px] rounded-full ${
            online === true ? "bg-green-500 onlineAnimation" : "bg-red-400"
          } absolute bottom-2 right-1 border border-white`}
        />
      )}
    </div>
  );
});

export default ProfilePic;
