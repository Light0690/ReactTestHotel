import { createAsyncThunk } from "@reduxjs/toolkit";

import { hotels } from "@api/hotels";

export const fetchHotels = createAsyncThunk(
  "hotels/fetchHotels",
  hotels.getHotels,
);
