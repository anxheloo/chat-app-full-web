import React, { memo, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import Section1 from "../User Info/Section1";
import { Settings_Items } from "../../../constants";
import ThemeModal from "../../../components/Modals/ThemeModal";
import Shortcuts from "../../../components/Modals/Shortcuts";

const Settings = memo(() => {
  const [isOpen, setIsOpen] = useState(true);

  const [openModal, setOpenModal] = useState(null);

  const toggleSettings = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClick = (event) => {
    const { id } = event.target;

    setOpenModal(id);
  };

  console.log("Settings is rendered");

  return (
    <div className="flex relative">
      <div
        className={`h-screen ${
          isOpen ? "w-[300px]" : "w-0"
        } bg-lightBlue dark:bg-bgDark2 shadow-md ${
          isOpen && "p-4"
        } space-y-4 border-r dark:border-textPrimary transition-all 0.3s ease-in-out overflow-hidden`}
      >
        <div className="flex gap-4 items-center">
          <div
            onClick={toggleSettings}
            className={`text-textPrimary dark:text-white cursor-pointer ${
              !isOpen && "absolute top-20 left-5"
            } dark:hover:bg-white hover:bg-black hover:bg-opacity-5 dark:hover:bg-opacity-5 p-2 rounded-full`}
          >
            <IoMdArrowBack size={"20px"} />
          </div>
          <h4 className=" flex-1 text-lg font-bold dark:text-white">
            Settings
          </h4>
        </div>

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
      </div>

      <div className="h-screen flex-1 bg-white dark:bg-bgDark"></div>

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
