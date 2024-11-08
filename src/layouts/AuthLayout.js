import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  if (isLoggedIn) {
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
