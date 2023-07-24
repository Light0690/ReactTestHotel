import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { IHotelFetch } from "@Interfaces/IHotelFetch";

interface fetchParams {
  location: string;
  checkInDate: string;
  checkOutDate: string;
}

export const fetchHotels = createAsyncThunk(
  "hotels/fetchHotels",
  async ({ location, checkInDate, checkOutDate }: fetchParams) => {
    const response = await axios.get<IHotelFetch[]>(
      `https://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${checkInDate}&checkOut=${checkOutDate}&limit=15`
    );
    return response.data;
  }
);
