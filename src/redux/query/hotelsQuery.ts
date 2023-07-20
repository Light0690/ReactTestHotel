import { IHotelFetchType } from "@redux/slices/hotelsSlice";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const hotelsAPI = createApi({
  reducerPath: "hotelsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://engine.hotellook.com/api/v2/cache.json",
  }),
  endpoints: (build) => ({
    fetchHotels: build.query<
      IHotelFetchType[],
      { location: string; checkInDate: string; checkOutDate: string }
    >({
      query: ({ location, checkInDate, checkOutDate }) => {
        return {
          url: "",
          params: {
            currency: "rub",
            location,
            checkIn: checkInDate,
            checkOut: checkOutDate,
            limit: "10",
          },
        };
      },
    }),
  }),
});
