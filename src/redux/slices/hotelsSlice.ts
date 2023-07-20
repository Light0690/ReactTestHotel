import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

import { getNowDate, getNextDate } from "../../helpers/date";

export interface HotelFetchType {
  hotelId: number;
  hotelName: string;
  location: any;
  locationId: number;
  priceAvg: number;
  priceFrom: number;
  pricePercentile: any;
  stars: number;
}

export interface HotelItemInter {
  hotelId: number;
  hotelName: string;
  priceAvg: number;
  stars: number;
}

export interface SortType {
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
  sortType: SortType[];
  hotels: HotelFetchType[];
  favorites: HotelItemInter[];
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
    setSearchForm: (state, actions) => {
      state.location = actions.payload.location;
      state.checkInDate = actions.payload.checkInDate;
      state.countDays = actions.payload.countDays;

      state.checkOutDate = getNextDate(
        actions.payload.checkInDate,
        actions.payload.countDays
      );
    },
    setHotels: (state, action) => {
      state.hotels = action.payload;
    },
    setIsLoading: (state, action : PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    addFavoritesItem: (state, actions) => {
      state.favorites = state.favorites.find(
        (elem) => elem.hotelId === actions.payload.hotelId
      )
        ? state.favorites.filter(
            (elem) => elem.hotelId !== actions.payload.hotelId
          )
        : [...state.favorites, actions.payload];
    },
    sortFavorites: (
      state,
      action: { payload: { type: "stars" | "priceAvg"; desc: boolean } }
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
