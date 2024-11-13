// ErrorBox.js
import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateIsLoading } from "../../store/Auth/authSlice";

const StatusBox = () => {
  const dispatch = useDispatch();
  const { status, message } = useSelector((state) => state.auth);

  //   if (!error) return null;

  if (message) {
    setTimeout(() => {
      dispatch(
        updateIsLoading({ isLoading: false, status: null, message: null })
      );
    }, 4000);
  }

  const bgColor = useMemo(() => {
    if (status === "success") return "bg-green-500";
    if (status === "error") return "bg-red-500";
  }, [status]);

  return (
    <div
      className={`w-fit min-w-[200px] px-2 ${bgColor} h-[50px] absolute left-0 right-0 bottom-5 mx-auto flex justify-center items-center transition-all ease-in-out duration-500 ${
        message ? "translate-y-[0%] scale-100" : "translate-y-[200%] scale-0"
      }`}
    >
      {message}
    </div>
  );
};

export default StatusBox;
