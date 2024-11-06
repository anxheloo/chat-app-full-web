import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  if (isAuthenticated) {
    return <Navigate to={"/app"} />;
  }

  return (
    <>
      <div className=" w-full max-w-[500px] h-screen flex flex-col items-center mx-auto gap-5">
        <div className="mt-5">Logo</div>

        <Outlet />
      </div>
    </>
  );
};

export default AuthLayout;
