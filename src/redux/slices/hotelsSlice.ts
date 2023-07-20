import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

import { getNowDate, getNextDate } from "../../helpers/date";

export interface IHotelFetchType {
  hotelId: number;
  hotelName: string;
  location: any;
  locationId: number;
  priceAvg: number;
  priceFrom: number;
  pricePercentile: any;
  stars: number;
}

export interface IHotelItem {
  hotelId: number;
  hotelName: string;
  priceAvg: number;
  stars: number;
}

export interface ISortType {
  title: string;
  type: "stars" | "priceAvg";
  desc: boolean;
}

interface MainState {
  location: string;
  checkInDate: string;
  checkOutDate: string;
  countDays: number;
  isLoading: boolean;
  sortType: ISortType[];
  hotels: IHotelFetchType[];
  favorites: IHotelItem[];
}

const initialState: MainState = {
  location: "Москва",
  checkInDate: getNowDate(),
  checkOutDate: getNextDate(getNowDate(), 1),
  countDays: 1,
  isLoading: false,

  sortType: [
    { title: "Рейтинг", type: "stars", desc: true },
    { title: "Цена", type: "priceAvg", desc: true },
  ],
  hotels: [],
  favorites: [],
};

const hotelsSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {
    setSearchForm: (
      state,
      actions: PayloadAction<{
        location: string;
        checkInDate: string;
        countDays: number;
      }>
    ) => {
      state.location = actions.payload.location;
      state.checkInDate = actions.payload.checkInDate;
      state.countDays = actions.payload.countDays;

      state.checkOutDate = getNextDate(
        actions.payload.checkInDate,
        actions.payload.countDays
      );
    },
    setHotels: (state, action: PayloadAction<IHotelFetchType[]>) => {
      state.hotels = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    addFavoritesItem: (state, action: PayloadAction<IHotelItem>) => {
      state.favorites = state.favorites.find(
        (elem) => elem.hotelId === action.payload.hotelId
      )
        ? state.favorites.filter(
            (elem) => elem.hotelId !== action.payload.hotelId
          )
        : [...state.favorites, action.payload];
    },
    sortFavorites: (
      state,
      action: PayloadAction<{ type: "stars" | "priceAvg"; desc: boolean }>
    ) => {
      state.favorites.sort((a, b) => {
        return action.payload.desc
          ? b[action.payload.type] - a[action.payload.type]
          : a[action.payload.type] - b[action.payload.type];
      });
      state.sortType.map((elem) =>
        elem.type === action.payload.type ? (elem.desc = !elem.desc) : ""
      );
    },
  },
});

export const formData = {
  location: (state: RootState) => state.hotels.location,
  checkInDate: (state: RootState) => state.hotels.checkInDate,
  checkOutDate: (state: RootState) => state.hotels.checkOutDate,
};

export const {
  setSearchForm,
  addFavoritesItem,
  setHotels,
  sortFavorites,
  setIsLoading,
} = hotelsSlice.actions;
export default hotelsSlice.reducer;
