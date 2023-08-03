import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { getLocalStorage } from "@helpers/local";
import { fetchAuth } from "@redux/async/fetchAuth";

interface State {
  isAuth: boolean;
}

const initialState: State = getLocalStorage("auth");

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAuth.fulfilled, (state) => {
      state.isAuth = true;
    });
    // builder.addCase(fetchAuth.pending, (state) => {});
    // builder.addCase(fetchAuth.rejected, (state) => {

    // });
  },
});

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
