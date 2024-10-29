import React from "react";
import Chats from "./Chats";
import ChatRoom from "../../components/Chat/ChatRoom";

const GeneralApp = () => {
  return (
    <div className="flex relative">
      <Chats />
      <ChatRoom />
    </div>
  );
};

export default GeneralApp;
