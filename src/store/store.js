import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import themeSlice from "../store/Theme/themeSlice";
import emojiSlice from "../store/Emoji/emojiSlice";
import actionsSlice from "../store/Actions/actionsSlice";
import userSlice from "../store/UserDetails/userSlice";

const rootReducer = combineReducers({
  theme: themeSlice,
  emoji: emojiSlice,
  actions: actionsSlice,
  user: userSlice,
});

const persistConfig = {
  key: "chat-app-full",
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
