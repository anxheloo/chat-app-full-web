import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentMember: null,
  memberDetailsMenu: false,
  detailsType: "contact",
};

const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    toggleMemberDetails(state) {
      state.memberDetailsMenu = !state.memberDetailsMenu;
    },

    setMember: (state, action) => {
      state.memberSlice = action.payload;
    },

    setType: (state, action) => {
      state.detailsType = action.payload;
    },
  },
});

export const { toggleMemberDetails, setMember, setType } = memberSlice.actions;

export default memberSlice.reducer;
