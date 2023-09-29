import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@redux/store";

import {
  fetchAllHotels,
  fetchHotelById,
} from "@redux/async/Hotels/fetchHotels";

import { getNowDate } from "@helpers/date/date";
import { getLocalStorage } from "@helpers/local";

import { MAX, MIN } from "@constans/sortPriceValues";
import { FAVORITES } from "@constans/localStorage";

import { IHotelItem } from "@Interfaces/IHotelItem";
import { ISort } from "@Interfaces/ISort";

export interface State {
  location: string;
  checkInDate: string;
  countDays: number;
  sortByStars: number[];
  sortByPrice: number[];
  isLoading: boolean;
  error: string;
  sortType: ISort[];
  hotels: IHotelItem[];
  hotelById: IHotelItem | null;
  favorites: IHotelItem[];
}

const initialState: State = {
  location: "Москва",
  checkInDate: getNowDate(),
  countDays: 1,
  sortByStars: [],
  sortByPrice: [MIN, MAX],
  isLoading: false,
  error: "",
  sortType: [
    { title: "Рейтинг", type: "stars", desc: true },
    { title: "Цена", type: "priceAvg", desc: true },
  ],
  hotels: [],
  hotelById: null,
  favorites: getLocalStorage(FAVORITES) || [],
};

const hotelsSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {
    setSearchParams: (state, action: PayloadAction<any>) => {
      state.location = action.payload.location;
      state.checkInDate = action.payload.checkInDate;
      state.countDays = +action.payload.countDays;
      state.sortByPrice = action.payload.sortByPrice.map(Number);

      if (action.payload.sortByStars)
        state.sortByStars = action.payload.sortByStars.map(Number);
    },
    setSearchForm: (
      state,
      action: PayloadAction<{
        location: string;
        checkInDate: string;
        countDays: number;
      }>
    ) => {
      state.location = action.payload.location;
      state.checkInDate = action.payload.checkInDate;
      state.countDays = action.payload.countDays;
    },
    setSortByStars: (state, action: PayloadAction<number>) => {
      state.sortByStars = state.sortByStars.find(
        (elem) => elem === action.payload
      )
        ? state.sortByStars.filter((elem) => elem !== action.payload)
        : [...state.sortByStars, action.payload];
    },
    setSortByPrice: (state, action: PayloadAction<number[]>) => {
      state.sortByPrice = action.payload;
    },
    changeFavorites: (state, action: PayloadAction<IHotelItem>) => {
      state.favorites = state.favorites.find(
        (elem) => elem._id === action.payload._id
      )
        ? state.favorites.filter((elem) => elem._id !== action.payload._id)
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
    setErrorNotification: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchAllHotels.fulfilled,
      (state, action: PayloadAction<IHotelItem[]>) => {
        state.hotels = action.payload;
        state.isLoading = false;
      }
    );
    builder.addCase(fetchAllHotels.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(fetchAllHotels.rejected, (state) => {
      state.isLoading = false;
      state.hotels = [];
    });
    builder.addCase(
      fetchHotelById.fulfilled,
      (state, action: PayloadAction<IHotelItem>) => {
        state.hotelById = action.payload;
        state.isLoading = false;
      }
    );
    builder.addCase(fetchHotelById.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(fetchHotelById.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const locationSelector = (state: RootState) => state.hotels.location;
export const checkInDateSelector = (state: RootState) =>
  state.hotels.checkInDate;
export const countDaysSelector = (state: RootState) => state.hotels.countDays;
export const sortByStarsSelector = (state: RootState) =>
  state.hotels.sortByStars;
export const sortByPriceSelector = (state: RootState) =>
  state.hotels.sortByPrice;
export const isLoadingSelector = (state: RootState) => state.hotels.isLoading;
export const errorSelector = (state: RootState) => state.hotels.error;
export const sortTypeSelector = (state: RootState) => state.hotels.sortType;
export const hotelsSelector = (state: RootState) => state.hotels.hotels;
export const hotelByIdSelector = (state: RootState) => state.hotels.hotelById;
export const favoritesSelector = (state: RootState) => state.hotels.favorites;

export const {
  setSearchParams,
  setSearchForm,
  setSortByStars,
  setSortByPrice,
  changeFavorites,
  sortFavorites,
  setErrorNotification,
} = hotelsSlice.actions;
export default hotelsSlice.reducer;
