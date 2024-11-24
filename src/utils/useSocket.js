import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { updateIsLoading } from "../store/Auth/authSlice";

const useSocket = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, user_id } = useSelector((state) => state.auth); // Combine selectors
  const socketRef = useRef(null);

  useEffect(() => {
    console.log("isLoggedIn:", isLoggedIn, "user_id:", user_id); // Debug log

    if (isLoggedIn && user_id) {
      socketRef.current = io("http://localhost:5000", {
        query: { user_id },
      });

      console.log("Initializing socket with user_id:", user_id);

      socketRef.current.on("connect", () => {
        console.log("Connected to server with ID:", socketRef.current.id);
        console.log("This is socket:", socketRef.current);
      });

      socketRef.current.on("disconnect", () => {
        console.log("Disconnected from server");
      });

      socketRef.current.on("request_sent", (data) => {
        dispatch(
          updateIsLoading({
            isLoading: false,
            status: "success",
            message: data.message,
          })
        );
      });

      socketRef.current.on("new_friend_request", (data) => {
        dispatch(
          updateIsLoading({
            isLoading: false,
            status: "success",
            message: data.message,
          })
        );
      });

      // Clean up on unmount
      return () => {
        socketRef.current?.disconnect();
        socketRef.current = null;
      };
    }
  }, []);

  return socketRef.current;
};

export default useSocket;
