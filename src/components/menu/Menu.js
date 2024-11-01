import React, { useEffect, useState } from "react";
import { FaCat } from "react-icons/fa";
import { MenuItems1, ProfileIcons } from "../../constants";
import MenuItem from "../MenuItem";
import { Switch } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/Theme/themeSlice";
import { Navigate, useNavigate } from "react-router-dom";

const Menu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const themeMode = useSelector((state) => state.theme.mode);
  // const [selected, setSelected] = useState(0);
  const [showActions, setShowActions] = useState(false);

  useEffect(() => {
    if (themeMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [themeMode]);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  // const handleClick = (id) => {
  //   setSelected(id);
  // };

  return (
    <div className="h-[100vh] w-[100px] shadow-lg flex flex-col justify-between gap-10 items-center py-4 dark:bg-mainBg bg-white transition-colors 0.3s ease-in-out">
      <div className=" size-[64px] min-h-[64px] rounded-md bg-blue-400 dark:bg-bgDark2 flex items-center justify-center cursor-pointer hover:opacity-75">
        <FaCat className={`size-8 text-white`} />
      </div>

      <div className="flex flex-col gap-6 items-center flex-1 w-full">
        {MenuItems1.map((item) =>
          item.index === 3 ? (
            item.icon
          ) : (
            <MenuItem
              item={item}
              // handleClick={() => handleClick(item.index)}
              handleClick={() => navigate(item.path)}
              // selected={selected}
            />
          )
        )}
      </div>

      <div className="flex flex-col gap-6 items-center w-full relative">
        <Switch
          checked={themeMode === "dark"}
          onChange={handleThemeToggle}
          inputProps={{ "aria-label": "controlled" }}
        />
        <div className=" size-[44px] rounded-full bg-blue-400 flex items-center justify-center cursor-pointer hover:opacity-75 overflow-hidden relative">
          <img
            src="https://yt3.ggpht.com/yti/ANjgQV8Q-ZN4d5-FpUviPW6zNfN_L3G3lXzMAVHuSCioSYt-NWI=s88-c-k-c0x00ffffff-no-rj"
            alt="profile"
            onClick={() => setShowActions((prev) => !prev)}
          />
        </div>

        {showActions && (
          <div className="flex flex-col justify-start text-textPrimary p-2 bg-white gap-2 rounded-md shadow-md absolute bottom-0 -right-[95px] z-50">
            {ProfileIcons.map((item, index) => (
              <button
                key={index}
                onClick={""}
                className=" text-left hover:bg-gray-100 p-1 rounded-sm flex justify-between gap-2 items-center"
              >
                {item.title}
                {item.icon}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
