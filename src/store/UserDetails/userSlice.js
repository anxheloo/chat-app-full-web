import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  userDetailsMenu: false,
  detailsType: "contact",
};

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    toggleUserDetails(state) {
      state.userDetailsMenu = !state.userDetailsMenu;
    },

    setUser: (state, action) => {
      state.currentUser = action.payload;
    },

    setType: (state, action) => {
      state.detailsType = action.payload;
    },
  },
});

export const { toggleUserDetails, setUser, setType } = userSlice.actions;

export default userSlice.reducer;
