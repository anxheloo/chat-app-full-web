import React from "react";
import { Shared_docs } from "../../constants";
import DocType from "../Chat/Conversation/MessageTypes/DocType";

const Docs = () => {
  return (
    <div className="py-6 px-2 flex flex-col gap-2">
      {Shared_docs.map((item, index) => (
        <DocType data={item} key={index} />
      ))}
    </div>
  );
};

export default Docs;
