import React, { useState } from "react";
import ProfilePic from "../Chat/Profile/ProfilePic";
import Section1 from "../../pages/dashboard/User Info/Section1";
import { setType } from "../../store/MemberDetails/memberSlice";
import { useDispatch } from "react-redux";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";
import { Switch } from "@mui/material";
import { CiBellOff } from "react-icons/ci";
// import DeleteModal from "../Modals/DeleteModal";
// import BlockModal from "../Modals/BlockModal";

const data = {
  id: 0,
  img: "https://yt3.ggpht.com/yti/ANjgQV8Q-ZN4d5-FpUviPW6zNfN_L3G3lXzMAVHuSCioSYt-NWI=s88-c-k-c0x00ffffff-no-rj",
  name: "Anxhelo",
  msg: "ome ca bone",
  time: "9:36",
  unread: 0,
  pinned: true,
  online: false,
};

const Contact = () => {
  const dispatch = useDispatch();

  const changeType = (event) => {
    const { id } = event?.target;

    dispatch(setType(id));
  };

  return (
    <div className=" h-full overflow-y-scroll p-4 menu text-sm dark:text-white">
      <Section1 />

      <div className=" py-4 border-b dark:border-textPrimary">
        <h4>About</h4>
        <h4>Hi There, im using...</h4>
      </div>

      <div className="py-6 border-b dark:border-textPrimary space-y-8">
        <div className="flex justify-between items-center cursor-pointer">
          <h5 className=" pointer-events-none">Media, links and docs</h5>
          <div
            className="flex gap-2 cursor-pointer hover:bg-[rgba(255,255,255,0.05)] rounded-md p-1"
            id="shared"
            onClick={changeType}
          >
            <span className="pointer-events-none">201</span>
            <MdOutlineKeyboardArrowRight className=" size-[19px] pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-3 justify-between">
          <div className=" size-20 bg-white"></div>
          <div className=" size-20 bg-white"></div>
          <div className=" size-20 bg-white"></div>
        </div>
      </div>

      <div className="flex justify-between items-center py-6 border-b dark:border-textPrimary">
        <MdOutlineStarBorder className=" size-[19px] cursor-pointer" />
        <h5 className="flex-1 px-2">Starred Messages</h5>
        <MdOutlineKeyboardArrowRight
          className=" size-[19px] hover:bg-[rgba(255,255,255)] dark:hover:bg-[rgba(255,255,255,0.1)]  rounded-full cursor-pointer"
          id="starred"
          onClick={changeType}
        />
      </div>

      <div className="flex justify-between items-center py-4 border-b dark:border-textPrimary">
        <CiBellOff className=" size-[19px] cursor-pointer" />
        <h5 className="flex-1 px-2">Mute Notifications</h5>
        <Switch
        // checked={themeMode === "dark"}
        // onChange={handleThemeToggle}
        // inputProps={{ "aria-label": "controlled" }}
        />
      </div>

      <div className="flex flex-col gap-6 py-6">
        <h5 className="text-xs">1 group in common</h5>

        <div className="flex items-center gap-4">
          <ProfilePic data={data} version={2} />
          <div className="flex flex-col dark:text-white text-sm">
            <span className=" font-bold">C Gang</span>
            <span>Owl, Parrot, Rabbit, You</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
