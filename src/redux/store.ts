import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { setLocalStorage } from "../helpers/local";

import hotelsSlice from "./slices/hotelsSlice";
import authSlice from "./slices/authSlice";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

export const store = configureStore({
  reducer: {
    hotels: hotelsSlice,
    auth: authSlice,
  },
  middleware,
});

store.subscribe(() => {
  setLocalStorage("auth", store.getState().auth);
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
