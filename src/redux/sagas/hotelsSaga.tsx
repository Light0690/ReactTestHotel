import { call, put, takeLatest, select } from "redux-saga/effects";
import { createAction } from "@reduxjs/toolkit";

import { setHotels, setIsLoading } from "../slices/hotelsSlice";
import { formData } from "../slices/hotelsSlice";

import { fetchHotels } from "../../api";

import { HotelFetchType } from "../slices/hotelsSlice";

export const getHotelsAsync = createAction("main/fetchHotels");

function* getHotels() {
  const location: string = yield select(formData.location);
  const checkInDate: string = yield select(formData.checkInDate);
  const checkOutDate: string = yield select(formData.checkOutDate);

  yield put(setIsLoading(true));

  const data: HotelFetchType[] = yield call(fetchHotels, {
    location,
    checkInDate,
    checkOutDate,
  });

  yield put(setHotels(data));
  yield put(setIsLoading(false));
}

export function* hotelsSaga() {
  yield takeLatest(getHotelsAsync, getHotels);
}
