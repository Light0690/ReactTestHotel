import { isAxiosError } from "axios";

import { setErrorNotification } from "@redux/slices/Hotels/hotelsSlice";

import { IHotelItem } from "@Interfaces/IHotelItem";
import { IReduxParams } from "@Interfaces/IReduxParams";

import instance from "./axiosConfig";

interface getHotelsParams {
  location: string;
  checkInDate: string;
  countDays: number;
  sortByStars: number[];
  sortByPrice: number[];
}

interface getHotelByIdParams {
  id: string;
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
    {
      location,
      checkInDate,
      countDays,
      sortByPrice,
      sortByStars,
    }: getHotelsParams,
    { dispatch, rejectWithValue }: IReduxParams,
  ) => {
    try {
      const response = await instance.get<IHotelItem[]>(
        `hotels/${location}&${checkInDate}&${countDays}&${sortByPrice}/${sortByStars}`,
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
  getHotelById: async (
    { id, checkInDate, countDays }: getHotelByIdParams,
    { dispatch, rejectWithValue }: IReduxParams,
  ) => {
    try {
      const response = await instance.get<IHotelItem[]>(
        `hotels/byId/${id}&${checkInDate}&${countDays}`,
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
