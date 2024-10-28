import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import { FaCat } from "react-icons/fa";
import { MenuItems1 } from "../../constants";
import MenuItem from "../../components/MenuItem";
import { Switch } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/Theme/themeSlice";

const DashboardLayout = () => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(0);
  const themeMode = useSelector((state) => state.theme.mode);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  const handleClick = (id) => {
    setSelected(id);
  };

  return (
    <div className="dark:bg-gray-600 bg-white">
      <div className="h-[100vh] w-[100px] shadow-lg flex flex-col justify-between gap-10 items-center py-4 dark:bg-gray-800 bg-white">
        <div className=" size-[64px] rounded-md bg-blue-400 flex items-center justify-center cursor-pointer hover:opacity-75">
          <FaCat className={`size-8 text-white`} />
        </div>

        <div className="flex flex-col gap-6 items-center flex-1 w-full">
          {MenuItems1.map((item) =>
            item.index === 3 ? (
              item.icon
            ) : (
              <MenuItem
                item={item}
                handleClick={() => handleClick(item.index)}
                selected={selected}
              />
            )
          )}
        </div>

        <div className="flex flex-col gap-6 items-center w-full">
          <Switch
            checked={themeMode === "dark"}
            onChange={handleThemeToggle}
            inputProps={{ "aria-label": "controlled" }}
          />
          <div className=" size-[44px] rounded-full bg-blue-400 flex items-center justify-center cursor-pointer hover:opacity-75 overflow-hidden">
            <img
              src="https://yt3.ggpht.com/yti/ANjgQV8Q-ZN4d5-FpUviPW6zNfN_L3G3lXzMAVHuSCioSYt-NWI=s88-c-k-c0x00ffffff-no-rj"
              alt="profile"
            />
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
