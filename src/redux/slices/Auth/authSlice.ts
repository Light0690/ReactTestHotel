import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@redux/store";

import { getLocalStorage } from "@helpers/local";
import { fetchAuth } from "@redux/async/Auth/fetchAuth";
import { fetchRegistr } from "@redux/async/Auth/fetchRegistr";

interface State {
  isAuth: boolean;
  error: string;
}

const initialState: State = {
  isAuth: getLocalStorage("auth"),
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setErrorNotification: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAuth.fulfilled, (state) => {
      state.isAuth = true;
    });
    builder.addCase(fetchAuth.pending, (state) => {
      state.error = "";
    });
    builder.addCase(fetchRegistr.fulfilled, (state) => {
      state.isAuth = true;
    });
    builder.addCase(fetchRegistr.pending, (state) => {
      state.error = "";
    });
  },
});

export const authSelector = (state: RootState) => state.auth.isAuth;
export const errorSelector = (state: RootState) => state.auth.error;

export const { setAuth, setErrorNotification } = authSlice.actions;
export default authSlice.reducer;
