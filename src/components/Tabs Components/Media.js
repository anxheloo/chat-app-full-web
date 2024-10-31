import React from "react";

const Media = () => {
  return (
    // <div className="h-full overflow-y-scroll p-2 menu">
    <div className="grid grid-cols-3 gap-3 place-items-center py-6 px-2">
      {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
        <div key={index} className="bg-white rounded-md size-[80px]"></div>
      ))}

      {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
        <div key={index} className="bg-white rounded-md size-[80px]"></div>
      ))}

      {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
        <div key={index} className="bg-white rounded-md size-[80px]"></div>
      ))}
    </div>
    /* </div> */
  );
};

export default Media;
