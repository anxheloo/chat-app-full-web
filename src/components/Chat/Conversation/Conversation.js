import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Message from "./Message";

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

const Conversation = () => {
  return (
    <div className="flex flex-col flex-1 h-full">
      <Header data={data} />
      <div className="bg-white dark:bg-mainBg h-full overflow-y-scroll menu">
        <Message dotsMenu={true} />
      </div>
      <Footer />
    </div>
  );
};

export default Conversation;
