import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axios";

const initialState = {
  users: [],
  friends: [],
  friendRequests: [],
  chat_type: null,
  room_id: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateUsers: (state, action) => {
      state.users = action.payload;
    },
    updateFriends: (state, action) => {
      state.friends = action.friends;
    },
    updateFriendRequests: (state, action) => {
      state.friendRequests = action.payload;
    },

    selectConversation: (state, action) => {
      const { room_id } = action.payload;
      state.chat_type = "individual";
      state.room_id = room_id;
    },
  },
});

export const {
  updateUsers,
  updateFriends,
  updateFriendRequests,
  selectConversation,
} = usersSlice.actions;

export default usersSlice.reducer;

export const FetchUsers = () => {
  return async (dispatch, getState) => {
    await axiosInstance
      .get("/user/get-users", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().auth.token}`,
        },
      })
      .then((res) => {
        console.log("this is res:", res);
        dispatch(updateUsers(res.data.data));
      })
      .catch((err) => {
        console.log("this is err:", err);
      });
  };
};
export const Friends = () => {
  return async (dispatch, getState) => {
    await axiosInstance
      .get("/user/get-friends", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().auth.token}`,
        },
      })
      .then((res) => {
        console.log("this is res:", res);
        dispatch(updateFriends(res.data.data));
      })
      .catch((err) => {
        console.log("this is err:", err);
      });
  };
};
export const FriendRequests = () => {
  return async (dispatch, getState) => {
    await axiosInstance
      .get("/user/get-requests", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getState().auth.token}`,
        },
      })
      .then((res) => {
        console.log("this is res:", res);
        dispatch(updateFriendRequests(res.data.data));
      })
      .catch((err) => {
        console.log("this is err:", err);
      });
  };
};

export const SelectConversation = ({ room_id }) => {
  return (dispatch, getState) => {
    dispatch(selectConversation({ room_id }));
  };
};
