import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { getNowDate } from "@helpers/date";

import { fetchHotels } from "@redux/async/fetchHotels";

import { IHotelItem } from "@Interfaces/IHotelItem";
import { ISort } from "@Interfaces/ISort";

interface State {
  location: string;
  checkInDate: string;
  countDays: number;
  isLoading: boolean;
  error: String;
  sortType: ISort[];
  hotels: IHotelItem[];
  favorites: IHotelItem[];
}

const initialState: State = {
  location: "Москва",
  checkInDate: getNowDate(),
  countDays: 1,
  isLoading: false,
  error: "",

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
      }>,
    ) => {
      state.location = actions.payload.location;
      state.checkInDate = actions.payload.checkInDate;
      state.countDays = actions.payload.countDays;
    },
    changeFavorites: (state, action: PayloadAction<IHotelItem>) => {
      action.payload.isFavorite = !action.payload.isFavorite;

      state.favorites = state.favorites.find(
        (elem) => elem._id === action.payload._id,
      )
        ? state.favorites.filter((elem) => elem._id !== action.payload._id)
        : [...state.favorites, action.payload];
    },
    sortFavorites: (
      state,
      action: PayloadAction<{ type: "stars" | "priceAvg"; desc: boolean }>,
    ) => {
      state.favorites.sort((a, b) => {
        return action.payload.desc
          ? b[action.payload.type] - a[action.payload.type]
          : a[action.payload.type] - b[action.payload.type];
      });
      state.sortType.map((elem) =>
        elem.type === action.payload.type ? (elem.desc = !elem.desc) : "",
      );
    },
    setErrorNotification: (state, action: PayloadAction<String>) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchHotels.fulfilled,
      (state, action: PayloadAction<IHotelItem[]>) => {
        state.hotels = action.payload;
        state.isLoading = false;
      },
    );
    builder.addCase(fetchHotels.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(fetchHotels.rejected, (state) => {
      state.isLoading = false;
      state.hotels = [];
    });
  },
});

export const {
  setSearchForm,
  changeFavorites,
  sortFavorites,
  setErrorNotification,
} = hotelsSlice.actions;
export default hotelsSlice.reducer;
