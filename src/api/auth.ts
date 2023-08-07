import { setErrorNotification } from "@redux/slices/authSlice";
import instance from "./axiosConfig";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";

interface fetchParams {
  email: string;
  password: string;
}
interface reduxParams {
  dispatch: ThunkDispatch<unknown, unknown, AnyAction>;
  rejectWithValue: (value: unknown) => any;
}

export const auth = {
  doAuthorization: async (
    { email, password }: fetchParams,
    { dispatch, rejectWithValue }: reduxParams
  ) => {
    try {
      const response = await instance.post(`auth/login`, {
        email,
        password,
      });
      return response.data;
    } catch (error: any) {
      dispatch(setErrorNotification(error.message));
      return rejectWithValue(error);
    }
  },
};
