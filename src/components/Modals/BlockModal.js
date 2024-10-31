import React from "react";

const BlockModal = ({ handleClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.2)] flex items-center justify-center z-[999]">
      <div className="w-full max-w-[300px] h-full flex flex-col justify-between max-h-[150px] bg-white rounded-md p-4">
        <div>
          <h3 className=" font-bold text-black">Delete this contact</h3>
          <p className=" text-sm text-gray-400">
            Are you sure you want to block this contact
          </p>
        </div>

        <div className="w-full flex justify-end gap-2 text-blue-400">
          <button onClick={handleClose}>Cancel</button>
          <button onClick={""}>Yes</button>
        </div>
      </div>
    </div>
  );
};

export default BlockModal;
