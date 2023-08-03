import { createAsyncThunk } from "@reduxjs/toolkit";

import instance from "@api/axiosConfig";

import { setErrorNotification } from "@redux/slices/authSlice";

interface fetchParams {
  email: string;
  password: string;
}

export const fetchAuth = createAsyncThunk(
  "auth/fetchAuth",
  async ({ email, password }: fetchParams, { dispatch, rejectWithValue }) => {
    try {
      const response = await instance.post(`http://localhost:4444/auth/login`, {
        email,
        password,
      });
      return response.data;
    } catch (error: any) {
      dispatch(setErrorNotification(error.message));
      return rejectWithValue(error);
    }
  }
);