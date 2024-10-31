import React, { useEffect, useRef } from "react";
import { Chat_History } from "../../../constants";
import Timeline from "./MessageTypes/Timeline";
import TextMsg from "./MessageTypes/TextMsg";
import MediaMsg from "./MessageTypes/MediaMsg";
import ReplyMsg from "./MessageTypes/ReplyMsg";
import LinkMsg from "./MessageTypes/LinkMsg";
import DocType from "./MessageTypes/DocType";

const Message = ({ dotsMenu }) => {
  const elementRef = useRef();
  useEffect(() => elementRef?.current?.scrollIntoView(0));

  return (
    <div
      className="p-4 flex flex-col space-y-3 transition-colors 0.3s ease-in-out"
      ref={elementRef}
    >
      {Chat_History.map((item) => {
        switch (item.type) {
          case "divider":
            return <Timeline data={item} />;
          case "msg":
            switch (item.subtype) {
              case "img":
                // image msg
                return <MediaMsg data={item} dotsMenu={dotsMenu} />;
              case "doc":
                // doc msg
                return <DocType data={item} dotsMenu={dotsMenu} />;
              case "link":
                // link msg
                return <LinkMsg data={item} dotsMenu={dotsMenu} />;
              case "reply":
                // reply msg
                return <ReplyMsg data={item} dotsMenu={dotsMenu} />;

              default:
                // text msg
                return <TextMsg data={item} dotsMenu={dotsMenu} />;
            }

          default:
            return <></>;
        }
      })}
    </div>
  );
};

export default Message;
