import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@redux/store";

import { getLocalStorage } from "@helpers/local";

import { AUTH, CARD, USER } from "@constans/localStorage";

import { fetchAuth } from "@redux/async/Auth/fetchAuth";
import { fetchRegistr } from "@redux/async/Auth/fetchRegistr";

interface State {
  isAuth: boolean;
  user: any;
  bankCard: string;
  error: string;
}

const initialState: State = {
  isAuth: getLocalStorage(AUTH),
  user: getLocalStorage(USER),
  bankCard: getLocalStorage(CARD),
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.user = { ...state.user, email: action.payload };
    },
    setBankCard: (state, action: PayloadAction<string>) => {
      state.bankCard = action.payload;
    },
    setErrorNotification: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAuth.fulfilled, (state, action) => {
      state.isAuth = true;
      state.user = action.payload;
    });
    builder.addCase(fetchAuth.pending, (state) => {
      state.error = "";
    });
    builder.addCase(fetchRegistr.fulfilled, (state, action) => {
      state.isAuth = true;
      state.user = action.payload;
    });
    builder.addCase(fetchRegistr.pending, (state) => {
      state.error = "";
    });
  },
});

export const authSelector = (state: RootState) => state.auth.isAuth;
export const userSelector = (state: RootState) => state.auth.user;
export const bankCardSelector = (state: RootState) => state.auth.bankCard;
export const errorSelector = (state: RootState) => state.auth.error;

export const { setAuth, setEmail, setBankCard, setErrorNotification } =
  authSlice.actions;
export default authSlice.reducer;
