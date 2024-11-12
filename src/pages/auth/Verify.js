import React from "react";
// import { Link } from "react-router-dom";
import VerifyForm from "../../components/Auth/VerifyForm";

const Verify = () => {
  return (
    <div className="flex flex-col w-full gap-3">
      <div className="w-full space-y-2">
        <h2 className=" font-bold text-xl">Please verify OTP.</h2>
        <p>Please enter the code we sent to your email address.</p>
      </div>

      <VerifyForm />
      {/* <Link to={"/auth/login"} className=" text-blue-500 hover:underline">
        Back to sign in
      </Link> */}
    </div>
  );
};

export default Verify;
