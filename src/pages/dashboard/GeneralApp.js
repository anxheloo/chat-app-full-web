import React from "react";
import Chats from "./Chats";
import ChatRoom from "../../components/Chat/ChatRoom";
import UserDetails from "./User Info/UserDetails";

const GeneralApp = () => {
  return (
    <div className="flex relative">
      <Chats />
      <ChatRoom />
      <UserDetails />
    </div>
  );
};

export default GeneralApp;
