import React, { useMemo, useState } from "react";
import Media from "../Tabs Components/Media";
import Links from "../Tabs Components/Links";
import Docs from "../Tabs Components/Docs";

const SharedMessages = () => {
  const [tab, setTab] = useState("0");

  const handleTabChange = (event) => {
    const { id } = event.currentTarget;

    setTab(id);
  };

  const renderUI = useMemo(() => {
    switch (tab) {
      case "0":
        return <Media />;
      case "1":
        return <Links />;
      case "2":
        return <Docs />;
      default:
        return null;
    }
  }, [tab]);

  return (
    <div className="h-full flex flex-col text-sm dark:text-white">
      <div className="flex items-center justify-between px-2 sticky top-0 z-10 bg-lightBlue dark:bg-bgDark2 pb-1">
        <button
          id="0"
          onClick={handleTabChange}
          className={`flex items-center justify-center p-3 w-[90px] ${
            tab === "0" && "border-b border-black dark:border-textPrimary "
          }`}
        >
          Media
        </button>
        <button
          id="1"
          onClick={handleTabChange}
          className={`flex items-center justify-center p-3  w-[90px] ${
            tab === "1" && "border-b border-black dark:border-textPrimary "
          }`}
        >
          Links
        </button>
        <button
          id="2"
          onClick={handleTabChange}
          className={`flex items-center justify-center p-3  w-[90px] ${
            tab === "2" && "border-b border-black dark:border-textPrimary "
          }`}
        >
          Docs
        </button>
      </div>
      {renderUI}
    </div>
  );
};

export default SharedMessages;
