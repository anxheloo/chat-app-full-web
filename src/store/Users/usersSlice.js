import { createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axios";

const user_id = window.localStorage.getItem("user_id");

const initialState = {
  users: [],
  friends: [],
  friendRequests: [],
  chat_type: null,
  room_id: null,

  direct_chat: {
    conversations: [],
    current_conversation: null,
    current_messages: [],
  },
  group_chat: {},
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateUsers: (state, action) => {
      state.users = action.payload;
    },
    updateFriends: (state, action) => {
      state.friends = action.payload;
    },
    updateFriendRequests: (state, action) => {
      state.friendRequests = action.payload;
    },
    selectConversation: (state, action) => {
      const { room_id } = action.payload;
      state.chat_type = "individual";
      state.room_id = room_id;
    },
    fetchDirectConversations: (state, action) => {
      const { conversations } = action.payload;

      const list = conversations.map((item) => {
        const this_user = item.participants.find(
          (el) => el._id.toString() !== user_id
        );

        return {
          id: item._id,
          user_id: this_user._id,
          name: `${this_user.firstName} ${this_user.lastName}`,
          online: this_user.status === "Online",
          img: "https://yt3.ggpht.com/yti/ANjgQV8Q-ZN4d5-FpUviPW6zNfN_L3G3lXzMAVHuSCioSYt-NWI=s88-c-k-c0x00ffffff-no-rj",
          msg: "ome ca bone",
          time: "9:36",
          unread: 0,
          pinned: false,
        };
      });

      state.direct_chat.conversations = list;
    },
    updateDirectConversation: (state, action) => {
      const { conversations } = action.payload;
      // data= {}
      // list = list.map(item => item.id === data._id ? data : item)

      const this_conversation = conversations;

      state.direct_chat.conversations = state.direct_chat.conversations.map(
        (item) => {
          if (item.id !== this_conversation._id) {
            return item;
          } else {
            const user = this_conversation.participants.find(
              (el) => el._id.toString() !== user_id
            );
            return {
              id: this_conversation._id,
              user_id: user._id,
              name: `${user.firstName} ${user.lastName}`,
              online: user.status === "Online",
              img: "https://yt3.ggpht.com/yti/ANjgQV8Q-ZN4d5-FpUviPW6zNfN_L3G3lXzMAVHuSCioSYt-NWI=s88-c-k-c0x00ffffff-no-rj",
              msg: "ome ca bone",
              time: "9:36",
              unread: 0,
              pinned: false,
            };
          }
        }
      );
    },
    addDirectConversation: (state, action) => {
      // list.push(data)
      const { conversations } = action.payload;

      const this_conversation = conversations;

      const user = this_conversation.participants.find(
        (el) => el._id.toString() !== user_id
      );

      state.direct_chat.conversations.push({
        id: this_conversation._id,
        user_id: user._id,
        name: `${user.firstName} ${user.lastName}`,
        online: user.status === "Online",
        img: "https://yt3.ggpht.com/yti/ANjgQV8Q-ZN4d5-FpUviPW6zNfN_L3G3lXzMAVHuSCioSYt-NWI=s88-c-k-c0x00ffffff-no-rj",
        msg: "ome ca bone",
        time: "9:36",
        unread: 0,
        pinned: false,
      });
    },
  },
});

export const {
  updateUsers,
  updateFriends,
  updateFriendRequests,
  selectConversation,
  fetchDirectConversations,
  updateDirectConversation,
  addDirectConversation,
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
    const token = getState().auth.token;
    if (!token) {
      console.error("Token is missing!");
      return;
    }

    await axiosInstance
      .get("/user/get-friends", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("this is res from get-friends:", res);
        dispatch(updateFriends(res.data.data));
      })
      .catch((err) => {
        console.log("this is err:", err);
      });
  };
};
export const FriendRequests = () => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;
    if (!token) {
      console.error("Token is missing!");
      return;
    }

    await axiosInstance
      .get("/user/get-requests", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("this is res from friend requests:", res);
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

export const FetchDirectConversations = ({ conversations }) => {
  return async (dispatch, getState) => {
    dispatch(fetchDirectConversations(conversations));
  };
};
export const UpdateDirectConversation = ({ conversations }) => {
  return async (dispatch, getState) => {
    dispatch(updateDirectConversation(conversations));
  };
};
export const AddDirectConversation = ({ conversations }) => {
  return async (dispatch, getState) => {
    dispatch(addDirectConversation(conversations));
  };
};
