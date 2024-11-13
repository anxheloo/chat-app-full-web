import { useMemo, useState } from "react";
import Modal from "./Modal";
import UsersList from "../Tabs Components/UsersList";
import FriendsList from "../Tabs Components/FriendsList";
import FriendRequestsList from "../Tabs Components/FriendRequestsList";

const FriendModal = () => {
  const [tab, setTab] = useState("0");

  const handleTabChange = (event) => {
    const { id } = event.currentTarget;

    setTab(id);
  };

  const renderUI = useMemo(() => {
    switch (tab) {
      case "0":
        return <UsersList />;
      case "1":
        return <FriendsList />;
      case "2":
        return <FriendRequestsList />;
      default:
        return null;
    }
  }, [tab]);

  return (
    <Modal>
      <div className="w-full max-w-[400px] h-fit max-h-[500px] flex flex-col bg-white rounded-md p-4">
        <div className="flex items-center justify-between px-2 sticky top-0 z-10 bg-lightBlue pb-1">
          <button
            id="0"
            onClick={handleTabChange}
            className={`flex items-center justify-center p-3 w-[90px] ${
              tab === "0" && "border-b border-black dark:border-textPrimary "
            }`}
          >
            Explore
          </button>
          <button
            id="1"
            onClick={handleTabChange}
            className={`flex items-center justify-center p-3  w-[90px] ${
              tab === "1" && "border-b border-black dark:border-textPrimary "
            }`}
          >
            Friends
          </button>
          <button
            id="2"
            onClick={handleTabChange}
            className={`flex items-center justify-center p-3  w-[90px] ${
              tab === "2" && "border-b border-black dark:border-textPrimary "
            }`}
          >
            Requests
          </button>
        </div>
        <div className="h-full overflow-y-scroll menu">{renderUI}</div>
      </div>
    </Modal>
  );
};

export default FriendModal;
