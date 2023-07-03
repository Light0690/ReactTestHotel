import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

import { dateNext, dateNow } from "../../helpers";

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

interface hotelItem {
  hotelId: number;
  hotelName: string;
  priceAvg: number;
  stars: number;
}
interface sortType {
  title: string;
  type: "stars" | "priceAvg";
  desc: boolean;
}

interface mainState {
  location: string;
  checkInDate: string;
  checkOutDate: string;
  countDays: number;
  sortType: sortType[];
  hotels: hotelType[];
  favorites: hotelItem[];
}

const initialState: mainState = {
  location: "Москва",
  checkInDate: dateNow(),
  checkOutDate: dateNext(dateNow(), 1),
  countDays: 1,

  sortType: [
    { title: "Рейтинг", type: "stars", desc: true },
    { title: "Цена", type: "priceAvg", desc: true },
  ],
  hotels: [],
  favorites: [],
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setSearchForm: (state, actions) => {
      state.location = actions.payload.location;
      state.checkInDate = actions.payload.checkInDate;
      state.countDays = actions.payload.countDays;

      state.checkOutDate = dateNext(
        actions.payload.checkInDate,
        actions.payload.countDays
      );
    },
    setHotels: (state, action) => {
      state.hotels = action.payload;
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
  location: (state: RootState) => state.main.location,
  checkInDate: (state: RootState) => state.main.checkInDate,
  checkOutDate: (state: RootState) => state.main.checkOutDate,
};

export const { setSearchForm, addFavoritesItem, setHotels, sortFavorites } =
  mainSlice.actions;
export default mainSlice.reducer;
