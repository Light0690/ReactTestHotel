import { setErrorNotification } from "@redux/slices/authSlice";

import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";

import instance from "./axiosConfig";

interface fetchParams {
  email: string;
  password: string;
}

interface reduxParams {
  dispatch: ThunkDispatch<unknown, unknown, AnyAction>;
  rejectWithValue: (value: unknown) => any;
}

export const auth = {
  /**
   * Функция совершает авторизацию,
   *
   * @param param0 обьект, состоящий из email и password
   * @returns boolean значение при успешном запросе, при ошибке записывает ее в state
   */
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
