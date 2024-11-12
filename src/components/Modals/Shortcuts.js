import React from "react";
import Modal from "./Modal";

const Shortcuts = ({ handleClose }) => {
  return (
    <Modal>
      <div className="w-full max-w-[300px] h-full flex flex-col justify-between max-h-[150px] bg-white rounded-md p-4">
        <div>
          <h3 className=" font-bold text-black">Shortcuts</h3>
        </div>
      </div>
    </Modal>
  );
};

export default Shortcuts;
