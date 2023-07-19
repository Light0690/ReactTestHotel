import axios from "axios";

import { HotelFetchType } from "../redux/slices/hotelsSlice";

interface FormDataType {
  location: string;
  checkInDate: string;
  checkOutDate: string;
}

export const fetchHotels = async ({
  location,
  checkInDate,
  checkOutDate,
}: FormDataType) => {
  const data = await axios.get<HotelFetchType[]>(
    `https://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${checkInDate}&checkOut=${checkOutDate}&limit=10`
  );
  return data.data;
};
