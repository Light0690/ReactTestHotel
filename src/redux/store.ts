import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { setLocalStorage } from "../helpers/local";

import mainSlice from "./slices/mainSlice";
import authSlice from "./slices/auth";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

export const store = configureStore({
  reducer: {
    main: mainSlice,
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
