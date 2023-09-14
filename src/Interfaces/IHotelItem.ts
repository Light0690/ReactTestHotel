export interface IHotelItem {
  _id: number;
  hotelName: string;
  city?: string;
  checkInDate: string;
  days: number;
  priceAvg: number;
  stars: number;
  isFavorite: boolean;
}
