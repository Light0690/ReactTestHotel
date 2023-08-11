import { setErrorNotification } from "@redux/slices/hotelsSlice";

import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { IHotelItem } from "@Interfaces/IHotelItem";

import instance from "./axiosConfig";

interface fetchParams {
  location: string;
  countDays: number;
}

interface reduxParams {
  dispatch: ThunkDispatch<unknown, unknown, AnyAction>;
  rejectWithValue: (value: unknown) => any;
}

export const hotels = {
  getHotels: async (
    { location, countDays }: fetchParams,
    { dispatch, rejectWithValue }: reduxParams
  ) => {
    try {
      const response = await instance.get<IHotelItem[]>(
        `hotels/${location}&${countDays}`
      );
      return response.data;
    } catch (error: any) {
      dispatch(setErrorNotification(error.message));
      return rejectWithValue(error);
    }
  },
};
