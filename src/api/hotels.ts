import { isAxiosError } from "axios";

import { setErrorNotification } from "@redux/slices/Hotels/hotelsSlice";

import { IHotelItem } from "@Interfaces/IHotelItem";
import { IReduxParams } from "@Interfaces/IReduxParams";

import instance from "./axiosConfig";

interface fetchParams {
  location: string;
  checkInDate: string;
  countDays: number;
}

export const hotels = {
  /**
   * Функция возвращает отели по параметрам
   *
   * @param param0 обьект состоящий из location - город отеля, checkInDate - дата заселения, countDays - колличество забронированных дней
   * @returns массив обьектов - отелей или ошибку
   */
  getHotels: async (
    { location, checkInDate, countDays }: fetchParams,
    { dispatch, rejectWithValue }: IReduxParams,
  ) => {
    try {
      const response = await instance.get<IHotelItem[]>(
        `hotels/${location}&${checkInDate}&${countDays}`,
      );
      return response.data;
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        const message = error.response?.data.message || error.message;
        dispatch(setErrorNotification(message));
        return rejectWithValue(error);
      }
    }
  },
};
