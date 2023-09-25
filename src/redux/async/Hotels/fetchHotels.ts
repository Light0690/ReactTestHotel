import { createAsyncThunk } from "@reduxjs/toolkit";

import { hotels } from "@api/hotels";

export const fetchAllHotels = createAsyncThunk(
  "hotels/fetchAllHotels",
  hotels.getHotels,
);

export const fetchHotelById = createAsyncThunk(
  "hotels/fetchHotelById",
  hotels.getHotelById,
);
