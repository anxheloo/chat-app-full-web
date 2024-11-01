import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setTheme } from "../../store/Theme/themeSlice";

const ThemeModal = ({ handleClose }) => {
  const dispatch = useDispatch();
  const [style, setStyle] = useState("light");

  const applyTheme = () => {
    dispatch(setTheme(style));
  };

  const handleChange = (event) => {
    const { id } = event.target;

    setStyle(id);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.2)] flex items-center justify-center z-[999]">
      <div className="w-full max-w-[300px] h-full flex flex-col justify-between max-h-[150px] bg-white rounded-md p-4">
        <div>
          <h3 className=" font-bold text-black">Choose theme</h3>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <input
              type="radio"
              checked={style === "light"}
              id="light"
              onChange={handleChange}
            ></input>
            <label htmlFor="light">Light</label>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="radio"
              checked={style === "dark"}
              id="dark"
              onChange={handleChange}
            ></input>
            <label htmlFor="dark" className="">
              Dark
            </label>
          </div>
        </div>

        <div className="w-full flex justify-end gap-2 text-blue-400">
          <button onClick={handleClose}>Cancel</button>
          <button onClick={applyTheme}>Apply</button>
        </div>
      </div>
    </div>
  );
};

export default ThemeModal;
