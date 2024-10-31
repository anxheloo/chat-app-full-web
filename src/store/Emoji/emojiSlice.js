import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShown: false,
};

const emojiSlice = createSlice({
  name: "emoji",
  initialState,

  reducers: {
    toggleEmoji(state) {
      state.isShown = !state.isShown;
    },
  },
});

export const { toggleEmoji } = emojiSlice.actions;

export default emojiSlice.reducer;
