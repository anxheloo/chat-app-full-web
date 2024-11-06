import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShown: false,
  isLeftSideOpen: false,
};

const actionsSlice = createSlice({
  name: "actions",
  initialState,

  reducers: {
    toggleActions(state) {
      state.isShown = !state.isShown;
    },

    toggleLeftSide(state) {
      state.isLeftSideOpen = !state.isLeftSideOpen;
    },
  },
});

export const { toggleActions, toggleLeftSide } = actionsSlice.actions;

export default actionsSlice.reducer;
