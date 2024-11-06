import React from "react";
import { Link } from "react-router-dom";
import NewPasswordForm from "../../components/Auth/NewPasswordForm";

const NewPassword = () => {
  return (
    <div className="flex flex-col w-full gap-3">
      <div className="w-full space-y-2">
        <h2 className=" font-bold text-xl">Reset your password</h2>
        <p>Please enter your new password.</p>
      </div>

      <NewPasswordForm />
      <Link to={"/auth/login"} className=" text-blue-500 hover:underline">
        Back to sign in
      </Link>
    </div>
  );
};

export default NewPassword;
