import { configureStore } from "@reduxjs/toolkit";

import { setLocalStorage } from "@helpers/local";

import hotelsSlice from "./slices/Hotels/hotelsSlice";
import authSlice from "./slices/Auth/authSlice";

export const store = configureStore({
  reducer: {
    hotels: hotelsSlice,
    auth: authSlice,
  },
});

store.subscribe(() => {
  setLocalStorage("auth", store.getState().auth.isAuth);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
