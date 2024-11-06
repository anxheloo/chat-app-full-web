import React from "react";
import RegisterForm from "../../components/Auth/RegisterForm";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex flex-col w-full gap-3">
      <div className="w-full space-y-2">
        <h2 className=" font-bold text-xl">Register to our app</h2>
        <p>
          Already have an account?{" "}
          <Link to={"/auth/login"} className=" text-blue-500 hover:underline">
            Go to login
          </Link>
        </p>
      </div>

      <RegisterForm />
    </div>
  );
};

export default Register;
