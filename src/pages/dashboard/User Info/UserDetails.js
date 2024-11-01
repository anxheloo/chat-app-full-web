import React, { memo, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import InfoHeader from "./InfoHeader";
import { MdBlock } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import SharedMessages from "../../../components/Shared messages/SharedMessages";
import Starred from "../../../components/Starred messages/Starred";
import Contact from "../../../components/Contact/Contact";
import DeleteModal from "../../../components/Modals/DeleteModal";
import BlockModal from "../../../components/Modals/BlockModal";

const UserDetails = memo(() => {
  const isOpen = useSelector((state) => state.user.userDetailsMenu);
  const type = useSelector((state) => state.user.detailsType);

  const [openDelete, setOpenDelete] = useState(false);
  const [openBlock, setOpenBlock] = useState(false);

  const handleDeleteClose = () => {
    setOpenDelete(false);
  };
  const handleBlockClose = () => {
    setOpenBlock(false);
  };

  const renderUI = useMemo(() => {
    switch (type) {
      case "contact":
        return <Contact />;

      case "starred":
        return <Starred />;

      case "shared":
        return <SharedMessages />;

      default:
        return null;
    }
  }, [type]);

  return (
    <div
      className={`h-screen ${
        isOpen ? "w-[300px]" : "w-0"
      } bg-lightBlue flex flex-col dark:bg-bgDark2 shadow-md border-l dark:border-textPrimary transition-all 0.2s ease-in-out`}
    >
      <InfoHeader />

      <div className="h-full overflow-y-scroll menu">{renderUI}</div>

      <div className="h-[70px] flex items-center justify-around py-6 border-t dark:border-textPrimary">
        <button
          className="flex items-center justify-center border border-bluePrimary p-3 gap-2 text-bluePrimary rounded-md w-[110px] active:opacity-80"
          onClick={() => setOpenBlock(true)}
        >
          <MdBlock className=" size-[19px]" />
          Block
        </button>
        <button
          className="flex items-center justify-center border border-bluePrimary p-3 gap-2 text-bluePrimary rounded-md w-[110px] active:opacity-80"
          onClick={() => setOpenDelete(true)}
        >
          <MdDeleteOutline className=" size-[19px]" />
          Delete
        </button>
      </div>

      {openDelete && <DeleteModal handleClose={handleDeleteClose} />}
      {openBlock && <BlockModal handleClose={handleBlockClose} />}
    </div>
  );
});

export default UserDetails;
