import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Menu from "../../components/Menu/Menu";

const DashboardLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  if (!isAuthenticated) {
    return <Navigate to={"/auth/login"} />;
  }

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
