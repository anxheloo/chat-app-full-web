import React from "react";

const Shortcuts = ({ handleClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.2)] flex items-center justify-center z-[999]">
      <div className="w-full max-w-[300px] h-full flex flex-col justify-between max-h-[150px] bg-white rounded-md p-4">
        <div>
          <h3 className=" font-bold text-black">Shortcuts</h3>
        </div>
      </div>
    </div>
  );
};

export default Shortcuts;
