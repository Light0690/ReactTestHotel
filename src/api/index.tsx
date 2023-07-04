import axios from "axios";

import { hotelType } from "../redux/slices/mainSlice";


interface formDataType {
  location: string;
  checkInDate: string;
  checkOutDate: string;
}

export const fetchHotels = async ({
  location,
  checkInDate,
  checkOutDate,
}: formDataType) => {
  const data = await axios.get<hotelType[]>(
    `https://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${checkInDate}&checkOut=${checkOutDate}&limit=10`
  );
  return data.data;
};
