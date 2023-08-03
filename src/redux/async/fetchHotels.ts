import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "@api/axiosConfig";

import { IHotelItem } from "@Interfaces/IHotelItem";
import { setErrorNotification } from "@redux/slices/hotelsSlice";

interface fetchParams {
  location: string;
  countDays: number;
}

export const fetchHotels = createAsyncThunk(
  "hotels/fetchHotels",
  async (
    { location, countDays }: fetchParams,
    { dispatch, rejectWithValue },
  ) => {
    try {
      const response = await instance.get<IHotelItem[]>(
        `http://localhost:4444/hotels/${location}&${countDays}`,
      );
      return response.data;
    } catch (error: any) {
      dispatch(setErrorNotification(error.message));
      return rejectWithValue(error);
    }
  },
);
