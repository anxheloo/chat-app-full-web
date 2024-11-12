import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axios";

const initialState = {
  // isLoggedIn: false,
  isLoggedIn: true,
  token: "",
  isLoading: false,
  status: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.token = action.payload.token;
    },
    signOut: (state) => {
      state.isLoggedIn = false;
      state.token = "";
    },

    updateIsLoading: (state, action) => {
      const { isLoading, status } = action.payload;
      state.status = status;
      state.isLoading = isLoading;
    },
  },
});

export const { logIn, signOut, updateIsLoading } = authSlice.actions;

export default authSlice.reducer;

export const LoginUser = (formValues) => {
  const { email, password } = formValues;

  return async (dispatch) => {
    dispatch(updateIsLoading({ isLoading: true, status: null }));
    await axiosInstance
      .post(
        "/auth/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log("this is res:", res);
        dispatch(
          updateIsLoading({ isLoading: false, status: res?.data?.message })
        );
        dispatch(logIn({ isLoggedIn: true, token: res.data.token }));
      })
      .catch((err) => {
        console.log("this is err:", err);
        dispatch(
          updateIsLoading({
            isLoading: false,
            status:
              err?.response?.data?.message ??
              "Something went wrong, try again!",
          })
        );
      });
  };
};

export const LogoutUser = () => {
  return async (dispatch) => {
    dispatch(signOut());
  };
};

export const ForgotPassword = (formValues) => {
  const { email } = formValues;

  return async (dispatch) => {
    dispatch(updateIsLoading({ isLoading: true, status: null }));
    await axiosInstance
      .post(
        "/auth/forgot-password",
        {
          email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log("this is res:", res);
        dispatch(
          updateIsLoading({ isLoading: false, status: res?.data?.message })
        );
      })
      .catch((err) => {
        console.log("this is err:", err);
        dispatch(
          updateIsLoading({
            isLoading: false,
            status:
              err?.response?.data?.message ??
              "Something went wrong, try again!",
          })
        );
      });
  };
};

export const ResetPassword = (formValues) => {
  const { newPassword, confirmPassword, token } = formValues;
  console.log("this are formValues:", formValues);

  return async (dispatch) => {
    dispatch(updateIsLoading({ isLoading: true, status: null }));
    await axiosInstance
      .post(
        "/auth/reset-password",
        {
          newPassword,
          confirmPassword,
          token,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log("this is res:", res);
        dispatch(
          updateIsLoading({
            isLoading: false,
            status: res?.data?.message,
          })
        );
        dispatch(logIn({ isLoggedIn: true, token: res.data.token }));
      })
      .catch((err) => {
        console.log("this is err:", err);
        dispatch(
          updateIsLoading({
            isLoading: false,
            status:
              err?.response?.data?.message ??
              "Something went wrong, try again!",
          })
        );
      });
  };
};

export const Register = (formValues) => {
  const { firstName, lastName, email, password } = formValues;

  return async (dispatch, getState) => {
    dispatch(updateIsLoading({ isLoading: true, status: null }));
    await axiosInstance
      .post(
        "/auth/register",
        {
          firstName,
          lastName,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log("this is res:", res);
        // dispatch(logIn({ isLoggedIn: true, token: res.data.token }));
        dispatch(
          updateIsLoading({ isLoading: false, status: res?.data?.message })
        );
      })
      .catch((err) => {
        console.log("this is err:", err);
        updateIsLoading({
          isLoading: false,
          status:
            err?.response?.data?.message ?? "Something went wrong, try again!",
        });
      })
      .finally((res) => {
        console.log("this is res from finally:", res);
        const errorState = getState().auth.status;
        // if (!errorState) {
        // if (errorState) {
        if (errorState === "OTP Sent Successfully!") {
          window.location.href = `/auth/verify/${email}`;
        }
      });
  };
};

export const VerifyOTP = (formValues) => {
  const { email, otp } = formValues;

  return async (dispatch) => {
    dispatch(updateIsLoading({ isLoading: true, status: null }));
    await axiosInstance
      .post(
        "/auth/verify",
        {
          email,
          otp,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log("this is res:", res);
        dispatch(
          updateIsLoading({ isLoading: false, status: res?.data?.message })
        );
        dispatch(logIn({ isLoggedIn: true, token: res.data.token }));
      })
      .catch((err) => {
        console.log("this is err:", err);
        dispatch(
          updateIsLoading({
            isLoading: true,
            status:
              err?.response?.data?.message ??
              "Something went wrong, try again!",
          })
        );
      });
    // .finally(() => {
    //   window.location.href = `/auth/login`;
    // });
  };
};
