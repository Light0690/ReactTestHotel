import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";

export interface IReduxParams {
  dispatch: ThunkDispatch<unknown, unknown, AnyAction>;
  rejectWithValue: (value: unknown) => Error;
}
