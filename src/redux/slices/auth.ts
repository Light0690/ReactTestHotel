import { createSlice } from "@reduxjs/toolkit";

import { getLocalStorage } from "../../helpers/local";

interface authState {
  isAuth: boolean;
}

const initialState: authState = getLocalStorage("auth");

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.isAuth = action.payload;
    },
  },
});

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
