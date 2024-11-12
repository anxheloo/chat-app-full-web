import React, { useEffect, useState } from "react";
import { MenuItems1, ProfileIcons } from "../../constants";
import { Switch } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/Theme/themeSlice";
import MenuItem from "./MenuItem";
import { RxHamburgerMenu } from "react-icons/rx";
import { toggleLeftSide } from "../../store/Actions/actionsSlice";
import { useNavigate } from "react-router-dom";
import { LogoutUser } from "../../store/Auth/authSlice";

const Menu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const themeMode = useSelector((state) => state.theme.mode);
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

  const logout = () => {
    console.log("this is logout");
    dispatch(LogoutUser());
  };

  return (
    <div className="h-[100vh] w-[100px] shadow-lg flex flex-col justify-between gap-10 items-center py-4 dark:bg-mainBg bg-white transition-colors 0.3s ease-in-out">
      <div
        className=" size-[64px] min-h-[64px] rounded-md bg-blue-400 dark:bg-bgDark2 flex items-center justify-center cursor-pointer hover:opacity-75 active:opacity-65"
        onClick={() => dispatch(toggleLeftSide())}
      >
        <RxHamburgerMenu className={`size-8 text-white pointer-events-none`} />
      </div>

      <div className="flex flex-col gap-6 items-center flex-1 w-full">
        {MenuItems1.map((item) =>
          item.index === 3 ? item.icon : <MenuItem item={item} />
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
            {ProfileIcons.map((item, index) => {
              if (item.id === 2) {
                return (
                  <button
                    key={index}
                    onClick={logout}
                    className=" text-left hover:bg-gray-100 p-1 rounded-sm flex justify-between gap-2 items-center"
                  >
                    {item.title}
                    {item.icon}
                  </button>
                );
              } else {
                return (
                  <button
                    key={index}
                    onClick={() => navigate(item.path)}
                    className=" text-left hover:bg-gray-100 p-1 rounded-sm flex justify-between gap-2 items-center"
                  >
                    {item.title}
                    {item.icon}
                  </button>
                );
              }
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
