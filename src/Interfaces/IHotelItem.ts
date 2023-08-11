export interface IHotelItem {
  _id?: number;
  hotelName: string;
  city?: string;
  priceAvg: number;
  stars: number;
  isFavorite: boolean;
}
