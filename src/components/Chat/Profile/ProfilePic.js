import React, { memo } from "react";

const ProfilePic = memo(({ data }) => {
  return (
    <div className=" h-full relative flex items-center">
      <img src={data?.img} alt="user" className="rounded-full size-10" />
      <div
        className={`size-[10px] rounded-full ${
          data?.online === true ? "bg-green-500 onlineAnimation" : "bg-red-400"
        } absolute bottom-2 right-1 border border-white`}
      />
    </div>
  );
});

export default ProfilePic;
