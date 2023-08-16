import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { getLocalStorage } from "@helpers/local";
import { fetchAuth } from "@redux/async/Auth/fetchAuth";
import { fetchRegistr } from "@redux/async/Auth/fetchRegistr";

interface State {
  isAuth: boolean;
  error: String;
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
    setErrorNotification: (state, action: PayloadAction<String>) => {
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

export const { setAuth, setErrorNotification } = authSlice.actions;
export default authSlice.reducer;
