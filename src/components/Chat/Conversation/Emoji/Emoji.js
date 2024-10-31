import React from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { useSelector } from "react-redux";

const Emoji = () => {
  const emojiState = useSelector((state) => state.emoji.isShown);
  const themeState = useSelector((state) => state.theme.mode);

  if (emojiState) {
    return (
      <div className={"absolute bottom-[60px] right-0"}>
        <Picker data={data} onEmojiSelect={console.log} theme={themeState} />
      </div>
    );
  } else {
    return null;
  }
};

export default Emoji;
