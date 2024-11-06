import React from "react";
import ResetPasswordForm from "../../components/Auth/ResetPasswordForm";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <div className="flex flex-col w-full gap-3">
      <div className="w-full space-y-2">
        <h2 className=" font-bold text-xl">Forgot your password?</h2>
        <p>
          Please enter the email address associated with your account and we
          will email you a link to reset your password.
        </p>
      </div>

      <ResetPasswordForm />
      <Link to={"/auth/login"} className=" text-blue-500 hover:underline">
        Back to sign in
      </Link>
    </div>
  );
};

export default ResetPassword;
