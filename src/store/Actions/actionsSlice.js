import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShown: false,
};

const actionsSlice = createSlice({
  name: "actions",
  initialState,

  reducers: {
    toggleActions(state) {
      state.isShown = !state.isShown;
    },
  },
});

export const { toggleActions } = actionsSlice.actions;

export default actionsSlice.reducer;
