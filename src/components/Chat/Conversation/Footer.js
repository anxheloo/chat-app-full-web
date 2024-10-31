import React from "react";
import { BsSend } from "react-icons/bs";
import { CiLink } from "react-icons/ci";
import { CiFaceSmile } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { toggleEmoji } from "../../../store/Emoji/emojiSlice";
import Emoji from "./Emoji/Emoji";
import { toggleActions } from "../../../store/Actions/actionsSlice";
import Actions from "./Actions/Actions";

const Footer = () => {
  const dispatch = useDispatch();

  const toggleEmojiState = () => {
    dispatch(toggleEmoji());
  };
  const showActions = () => {
    dispatch(toggleActions());
  };

  return (
    <div className="h-[70px] min-h-[70px] w-full bg-white dark:bg-bgDark2 p-3 border-t dark:border-textPrimary transition-colors 0.3s ease-in-out">
      <div className="flex gap-3 h-full">
        <div className="flex-1 flex gap-3 bg-lightBlue dark:bg-mainBg px-3 rounded-md items-center relative">
          <CiLink
            className="cursor-pointer text-textPrimary active:opacity-80 size-6"
            onClick={showActions}
          />
          <Actions />
          <input
            className=" flex-1 bg-transparent outline-none dark:caret-white"
            placeholder="Write a message ..."
          />

          <CiFaceSmile
            className="cursor-pointer text-textPrimary active:opacity-80 size-6"
            onClick={toggleEmojiState}
          />

          <Emoji />
        </div>
        <button className="h-full w-[46px] rounded-md bg-bluePrimary dark:bg-mainBg flex items-center justify-center text-white hover:opacity-80 active:opacity-75">
          <BsSend />
        </button>
      </div>
    </div>
  );
};

export default Footer;
