import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { setErrorNotification } from "@redux/slices/hotelsSlice";

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
  /**
   * Функция возвращает отели по параметрам
   *
   * @param param0 обьект состоящий из location - город отеля и countDays - колличество забронированных дней
   * @returns массив обьектов - отелей или ошибку
   */
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
      if (error instanceof AxiosError) {
        dispatch(setErrorNotification(error.message));
        return rejectWithValue(error);
      }
    }
  },
};
