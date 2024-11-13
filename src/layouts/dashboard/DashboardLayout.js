import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Menu from "../../components/Menu/Menu";
import { useDispatch, useSelector } from "react-redux";
import { connectSocket, socket } from "../../socket";
import { updateIsLoading } from "../../store/Auth/authSlice";

const DashboardLayout = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const user_id = window.localStorage.getItem("user_id");

  useEffect(() => {
    if (isLoggedIn) {
      window.onload = () => {
        if (!window.location.hash) {
          window.location = window.location + "#loaded";
          window.location.reload();
        }
      };

      window.onload();

      if (!socket) {
        connectSocket(user_id);
      }

      //  "new_friend_request"

      socket.on("new_friend_request", (data) => {
        dispatch(
          updateIsLoading({
            isLoading: false,
            status: "success",
            message: data.message,
          })
        );
      });

      socket.on("request_accepted", (data) => {
        dispatch(
          updateIsLoading({
            isLoading: false,
            status: "success",
            message: data.message,
          })
        );
      });

      socket.on("request_sent", (data) => {
        dispatch(
          updateIsLoading({
            isLoading: false,
            status: "success",
            message: data.message,
          })
        );
      });
    }

    return () => {
      socket.off("new_friend_request");
      socket.off("request_accepted");
      socket.off("request_sent");
    };
  }, [dispatch, isLoggedIn]);

  if (!isLoggedIn) {
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
