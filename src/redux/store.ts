import { configureStore } from "@reduxjs/toolkit";

import { setLocalStorage } from "@helpers/local";
import { AUTH, FAVORITES, USER } from "@constans/localStorage";

import hotelsSlice from "./slices/Hotels/hotelsSlice";
import authSlice from "./slices/Auth/authSlice";

export const store = configureStore({
  reducer: {
    hotels: hotelsSlice,
    auth: authSlice,
  },
});

store.subscribe(() => {
  const user = store.getState().auth.user;
  const auth = store.getState().auth.isAuth;
  const favorites = store.getState().hotels.favorites;

  setLocalStorage(AUTH, String(auth));
  setLocalStorage(USER, JSON.stringify(user));
 setLocalStorage(FAVORITES, JSON.stringify(favorites));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
