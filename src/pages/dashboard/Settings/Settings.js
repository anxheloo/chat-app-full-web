import React, { memo, useState } from "react";
import Section1 from "../User Info/Section1";
import { Settings_Items } from "../../../constants";
import ThemeModal from "../../../components/Modals/ThemeModal";
import Shortcuts from "../../../components/Modals/Shortcuts";
import LeftMenu from "../LeftMenu/LeftMenu";

const Settings = memo(() => {
  const [openModal, setOpenModal] = useState(null);

  const handleClick = (event) => {
    const { id } = event.target;

    setOpenModal(id);
  };

  return (
    <div className="flex relative">
      <LeftMenu title={"Settings"}>
        <div className="overflow-y-scroll h-full flex-grow-1 menu w-full pb-[180px]">
          <div className="p-3">
            <Section1 version={"settings"} />
          </div>

          {Settings_Items.map((item) => (
            <div
              onClick={handleClick}
              key={item.id}
              id={item.id}
              className="w-full dark:text-white flex items-center gap-3 dark:hover:bg-white hover:bg-black hover:bg-opacity-5 dark:hover:bg-opacity-5 py-2 border-b"
            >
              <div className="size-[40px] rounded-full flex items-center justify-center dark:hover:bg-white hover:bg-black hover:bg-opacity-5 dark:hover:bg-opacity-5 p-2 pointer-events-none">
                {item.icon}
              </div>
              <div className=" pointer-events-none">{item.title}</div>
            </div>
          ))}
        </div>
      </LeftMenu>

      {/* <div className="h-screen flex-1 bg-white dark:bg-bgDark"></div> */}

      {openModal === "theme" && (
        <ThemeModal handleClose={() => setOpenModal(null)} />
      )}
      {openModal === "shortcuts" && (
        <Shortcuts handleClose={() => setOpenModal(null)} />
      )}
    </div>
  );
});

export default Settings;
