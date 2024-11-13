import React, { useMemo } from "react";
import Conversation from "./Conversation/Conversation";
import { useSelector } from "react-redux";
import NoChatSelected from "./NoChatSelected";

const ChatRoom = () => {
  const { room_id, chat_type } = useSelector((state) => state.users);

  const renderUI = useMemo(() => {
    if (room_id !== null && chat_type === "individual") {
      return <Conversation />;
    } else {
      return <NoChatSelected />;
    }
  }, [chat_type, room_id]);

  return <div className="h-screen flex-1 ">{renderUI}</div>;
};

export default ChatRoom;
