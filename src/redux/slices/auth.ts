import { createSlice } from "@reduxjs/toolkit";

interface authState {
  isAuth: boolean;
}

const initialState:authState = {
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state,action) => {
      state.isAuth = action.payload;
    },
  },
});

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
