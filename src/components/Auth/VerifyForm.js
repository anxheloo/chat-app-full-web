import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { z } from "zod";
import { VerifyOTP } from "../../store/Auth/authSlice";
import { useParams } from "react-router-dom";
import LoadingBtn from "./LoadingBtn";

const VerifyForm = () => {
  const { email } = useParams();
  const dispatch = useDispatch();
  const schema = z.object({
    email: z.string().email(),
    otp: z.string().min(6),
  });

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: email,
      otp: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      dispatch(VerifyOTP(data));
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
          {...register("email")}
          readOnly
          type="email"
          id="email"
          name="email"
          className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          htmlFor="email"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          Email
        </label>
      </div>
      {errors.email && <div>{errors.email.message}</div>}

      <div class="relative">
        <input
          {...register("otp")}
          id="otp"
          name="otp"
          className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          htmlFor="otp"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          OTP
        </label>
      </div>
      {errors.otp && <div>{errors.otp.message}</div>}

      {/* <button
        disabled={isSubmitting}
        type="submit"
        className="w-full bg-black rounded-md p-3 text-white"
      >
        Submit
      </button> */}
      <LoadingBtn>Submit</LoadingBtn>

      {errors.root && <div>{errors.root.message}</div>}
    </form>
  );
};

export default VerifyForm;
