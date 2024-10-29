import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "../../components/menu/Menu";

const DashboardLayout = () => {
  return (
    <div className="dark:bg-bgDark bg-white flex overflow-hidden">
      <Menu />
      <div className="h-screen w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
