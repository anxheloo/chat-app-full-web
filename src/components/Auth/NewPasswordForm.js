import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { z } from "zod";
import { ResetPassword } from "../../store/Auth/authSlice";
import { useSearchParams } from "react-router-dom";
import LoadingBtn from "./LoadingBtn";

const NewPasswordForm = () => {
  const [queryParameters] = useSearchParams();
  const dispatch = useDispatch();
  const schema = z
    .object({
      newPassword: z.string().min(8),
      confirmPassword: z.string().min(8),
    })
    .refine(
      (values) => {
        return values.confirmPassword === values.newPassword;
      },
      {
        message: "Passwords must match!",
        path: ["confirmPassword"],
      }
    );

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      dispatch(ResetPassword({ ...data, token: queryParameters.get("token") }));
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
          {...register("newPassword")}
          type="password"
          id="newPassword"
          name="newPassword"
          className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          htmlFor="newPassword"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          New Password
        </label>
      </div>
      {errors.newPassword && <div>{errors.newPassword.message}</div>}

      <div class="relative">
        <input
          {...register("confirmPassword")}
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          htmlFor="confirmPassword"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          Confirm Password
        </label>
      </div>
      {errors.confirmPassword && <div>{errors.confirmPassword.message}</div>}

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

export default NewPasswordForm;
