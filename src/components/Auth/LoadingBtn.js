import { CircularProgress } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const LoadingBtn = ({ children }) => {
  const isLoading = useSelector((state) => state.auth.isLoading);

  return (
    <button
      disabled={isLoading}
      type="submit"
      className="w-full bg-black rounded-md p-3 text-white flex items-center justify-center"
    >
      {isLoading ? (
        <CircularProgress size={"25px"} color="success" />
      ) : (
        children
      )}
    </button>
  );
};

export default LoadingBtn;
