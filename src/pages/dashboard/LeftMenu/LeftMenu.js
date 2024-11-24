import React, { useState } from "react";
import { HiOutlineUsers } from "react-icons/hi2";
import { useSelector } from "react-redux";
import FriendModal from "../../../components/Modals/FriendsModal";

const LeftMenu = ({ children, title }) => {
  const isOpen = useSelector((state) => state.actions.isLeftSideOpen);

  const [friendsModal, setFriendsModal] = useState(false);

  const handleFriendsModal = (event) => {
    event.stopPropagation();
    setFriendsModal((prev) => !prev);
  };

  return (
    <div
      className={`h-screen overflow-hidden ${
        isOpen ? "w-[300px] p-4" : "w-0"
      } bg-lightBlue dark:bg-bgDark2 shadow-md space-y-4 border-r dark:border-textPrimary transition-all duration-300 ease-in-out`}
    >
      <div className="flex justify-between items-center">
        <h4 className=" text-lg font-bold dark:text-white">{title}</h4>

        {title === "Chats" && (
          <div
            className=" rounded-full p-1 active:bg-[rgba(0,0,0,0.1)] cursor-pointer"
            onClick={handleFriendsModal}
          >
            <HiOutlineUsers
              size={25}
              className=" text-black dark:text-white pointer-events-none"
            />
          </div>
        )}
      </div>

      {children}
      {friendsModal && <FriendModal closeModal={handleFriendsModal} />}
    </div>
  );
};

export default LeftMenu;
