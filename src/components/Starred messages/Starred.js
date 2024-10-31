import React from "react";
import Message from "../Chat/Conversation/Message";

const Starred = () => {
  return (
    <div className="h-full flex flex-col text-sm">
      <Message dotsMenu={false} />
    </div>
  );
};

export default Starred;
