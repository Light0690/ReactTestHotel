import { configureStore } from "@reduxjs/toolkit";

import { setLocalStorage } from "@helpers/local";

import hotelsSlice from "./slices/hotelsSlice";
import authSlice from "./slices/authSlice";
import { hotelsAPI } from "./query/hotelsQuery";

export const store = configureStore({
  reducer: {
    hotels: hotelsSlice,
    auth: authSlice,
    [hotelsAPI.reducerPath]: hotelsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(hotelsAPI.middleware),
});

store.subscribe(() => {
  setLocalStorage("auth", store.getState().auth);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
