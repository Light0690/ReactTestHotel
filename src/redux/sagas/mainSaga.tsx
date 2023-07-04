import { call, put, takeLatest, select } from "redux-saga/effects";
import { createAction } from "@reduxjs/toolkit";

import { setHotels, setIsLoading } from "../slices/mainSlice";
import { formData } from "../slices/mainSlice";

import { fetchHotels } from "../../api";

import { hotelType } from "../slices/mainSlice";

export const getHotelsAsync = createAction("main/fetchHotels");

function* getHotels() {
  const location: string = yield select(formData.location);
  const checkInDate: string = yield select(formData.checkInDate);
  const checkOutDate: string = yield select(formData.checkOutDate);

  yield put(setIsLoading(true));

  const data: hotelType[] = yield call(fetchHotels, {
    location,
    checkInDate,
    checkOutDate,
  });

  yield put(setHotels(data));
  yield put(setIsLoading(false));
}

export function* mainSaga() {
  yield takeLatest(getHotelsAsync, getHotels);
}
