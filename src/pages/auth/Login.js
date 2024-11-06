import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../../components/Auth/LoginForm";

const Login = () => {
  return (
    <div className="flex flex-col w-full gap-3">
      <div className="w-full space-y-2">
        <h2 className=" font-bold text-xl">Login to App</h2>
        <p>
          New user?{" "}
          <Link
            to={"/auth/register"}
            className=" text-blue-500 hover:underline"
          >
            Create an account
          </Link>
        </p>
      </div>

      <LoginForm />
    </div>
  );
};

export default Login;
