import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axios";

const initialState = {
  isLoggedIn: false,
  token: "",
  isLoading: false,
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
  },
});

export const { logIn, signOut } = authSlice.actions;

export default authSlice.reducer;

export const LoginUser = (formValues) => {
  const { email, password } = formValues;

  return async (dispatch) => {
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
        dispatch(logIn({ isLoggedIn: true, token: res.data.token }));
      })
      .catch((err) => {
        console.log("this is err:", err);
      });
  };
};
