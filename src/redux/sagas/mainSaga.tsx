import { call, put, takeLatest, select } from "redux-saga/effects";
import { createAction } from "@reduxjs/toolkit";

import { setHotels } from "../slices/mainSlice";
import { formData } from "../slices/mainSlice";

import { fetchHotels } from "../../api";

export const getHotelsAsync = createAction("main/fetchHotels");

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
    location : string;
    checkInDate : string;
    checkOutDate : string;
}

function* getHotels() {
  const location    : string = yield select(formData.location);
  const checkInDate : string = yield select(formData.checkInDate);
  const checkOutDate: string = yield select(formData.checkOutDate);

  const data: hotelType[] = yield call(fetchHotels,{location,checkInDate,checkOutDate});

  yield put(setHotels(data));
}

export function* mainSaga() {
  yield takeLatest(getHotelsAsync, getHotels);
}
