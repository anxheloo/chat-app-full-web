import React from "react";
import { Shared_links } from "../../constants";
import LinkMsg from "../Chat/Conversation/MessageTypes/LinkMsg";

const Links = () => {
  return (
    <div className="py-6 px-2 flex flex-col gap-2">
      {Shared_links.map((item, index) => (
        <LinkMsg data={item} key={index} />
      ))}
    </div>
  );
};

export default Links;
