import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { getLocalStorage } from "@helpers/local";

interface AuthState {
  isAuth: boolean;
}

const initialState: AuthState = getLocalStorage("auth");

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
  },
});

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
