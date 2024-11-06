import React, { useState } from "react";
import { IoEyeOffSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import AuthSocial from "./AuthSocial";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginForm = () => {
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  });

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "example@example.com",
    },
    resolver: zodResolver(schema),
  });

  const [showPassword, setShowPassword] = useState(false);

  const togglePass = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      throw new Error();
      console.log(data);
    } catch (error) {
      setError("root", {
        message: "this email is already taken",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="py-4 space-y-2">
      <div class="relative">
        <input
          type="email"
          id="email"
          className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          {...register(
            "email"
            // without zod
            // , {
            // required: "email is required",
            // validate: (value) => {
            //   if (!value.includes("@")) {
            //     return "Email must include @ ";
            //   }
            //   return true;
            // },
            // }
          )}
        />
        <label
          htmlFor="email"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          Email address
        </label>
      </div>
      {errors.email && <div>{errors.email.message}</div>}

      <div class="relative">
        <IoEyeOffSharp
          className="absolute right-3 top-0 bottom-0 my-auto cursor-pointer active:opacity-70"
          onClick={togglePass}
        />

        <input
          type={showPassword ? "text" : "password"}
          id="password"
          className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          {...register(
            "password"
            // without zod
            // , {
            // required: "Password is required",
            // minLength: {
            //   value: 8,
            //   message: "Password must contains at least 8 characters",
            // },
            // }
          )}
        />
        <label
          htmlFor="password"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          Password
        </label>
      </div>
      {errors.password && <div>{errors.password.message}</div>}

      <div className="flex py-2 justify-end">
        <Link to={"/auth/reset-password"}>Forgot password?</Link>
      </div>

      <button
        disabled={isSubmitting}
        type="submit"
        className="w-full bg-black rounded-md p-3 text-white"
      >
        Submit
      </button>

      {errors.root && <div>{errors.root.message}</div>}

      <AuthSocial />
    </form>
  );
};

export default LoginForm;
