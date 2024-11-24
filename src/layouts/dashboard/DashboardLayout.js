import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Menu from "../../components/Menu/Menu";
import { useDispatch, useSelector } from "react-redux";
import { connectSocket } from "../../socket";
import { updateIsLoading } from "../../store/Auth/authSlice";
import {
  AddDirectConversation,
  SelectConversation,
  UpdateDirectConversation,
} from "../../store/Users/usersSlice";
import { io } from "socket.io-client";
import useSocket from "../../utils/useSocket";

const DashboardLayout = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { user_id } = useSelector((state) => state.auth);
  const conversations = useSelector(
    (state) => state.users.direct_chat.conversations
  );

  const socket = useSocket();

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     console.log("User is logged in. User ID:", user_id);

  //     const socket = connectSocket(user_id);

  //     console.log("Socket instance after connectSocket call:", socket);

  //     if (socket) {
  //       socket?.on("connect", () => {
  //         console.log("Connected to server:", socket.id);
  //       });

  //       console.log("this is connect socket:", connectSocket(user_id));
  //       console.log("this is socket:", socket);
  //     }

  //     // socket.on("new_friend_request", (data) => {
  //     //   dispatch(
  //     //     updateIsLoading({
  //     //       isLoading: false,
  //     //       status: "success",
  //     //       message: data.message,
  //     //     })
  //     //   );
  //     // });

  //     // socket.on("request_accepted", (data) => {
  //     //   dispatch(
  //     //     updateIsLoading({
  //     //       isLoading: false,
  //     //       status: "success",
  //     //       message: data.message,
  //     //     })
  //     //   );
  //     // });

  //     // socket.on("request_sent", (data) => {
  //     //   dispatch(
  //     //     updateIsLoading({
  //     //       isLoading: false,
  //     //       status: "success",
  //     //       message: data.message,
  //     //     })
  //     //   );
  //     // });

  //     // socket.on("start_chat", (data) => {
  //     //   console.log("this is data from start_chat:", data);

  //     //   const existing_conversation = conversations.find(
  //     //     (item) => item.id === data._id
  //     //   );

  //     //   if (existing_conversation) {
  //     //     dispatch(UpdateDirectConversation({ conversation: data }));
  //     //   } else {
  //     //     // add a new conversation to the list
  //     //     dispatch(AddDirectConversation({ conversation: data }));
  //     //   }

  //     //   dispatch(SelectConversation({ room_id: data._id }));
  //     // });

  //     // Other event listeners...

  //     // Clean up listeners when the component unmounts
  //     return () => {
  //       socket?.off("new_friend_request");
  //       socket?.off("request_accepted");
  //       socket?.off("request_sent");
  //       socket?.off("start_chat");
  //       socket?.off("new_message");
  //       socket?.off("connect");
  //     };
  //   }
  // }, [isLoggedIn, user_id]);

  // useEffect(() => {
  //   let socket;

  //   if (isLoggedIn) {
  //     // Initialize socket connection
  //     socket = io("http://localhost:5000", {
  //       query: { user_id },
  //     });

  //     // Log connection events
  //     socket.on("connect", () => {
  //       console.log("Connected to server with ID:", socket.id);
  //     });

  //     socket.on("disconnect", () => {
  //       console.log("Disconnected from server");
  //     });
  //   }

  //   // Clean up the socket connection on component unmount
  //   return () => {
  //     socket?.disconnect();
  //   };
  // }, [isLoggedIn, user_id]);

  // const { socket } = useSocket();

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
