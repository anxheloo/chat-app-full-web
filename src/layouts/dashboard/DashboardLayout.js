import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "../../components/menu/Menu";

const DashboardLayout = () => {
  return (
    <div className="dark:bg-bgDark bg-white flex overflow-hidden transition-colors 0.3s ease-in-out">
      <Menu />
      <div className="h-screen w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
