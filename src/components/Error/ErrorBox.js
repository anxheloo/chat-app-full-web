// ErrorBox.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateIsLoading } from "../../store/Auth/authSlice";

const ErrorBox = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.auth.status);

  //   if (!error) return null;

  if (status) {
    setTimeout(() => {
      dispatch(updateIsLoading({ isLoading: false, status: null }));
    }, 4000);
  }

  return (
    <div
      className={`w-fit min-w-[200px] px-2 bg-red-600 h-[50px] absolute left-0 right-0 bottom-5 mx-auto flex justify-center items-center transition-all ease-in-out duration-500 ${
        status ? "translate-y-[0%]" : "translate-y-[200%]"
      }`}
    >
      {status}
    </div>
  );
};

export default ErrorBox;
