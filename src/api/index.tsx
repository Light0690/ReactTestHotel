import axios from "axios";

type hotelType = {
  hotelId: number;
  hotelName: string;
  location: any;
  locationId: number;
  priceAvg: number;
  priceFrom: number;
  pricePercentile: any;
  stars: number;
};
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
