import { lazy } from "react";

import {
  FavoriteRoute,
  HotelByIdRoute,
  HotelsRoute,
  LoginRoute,
  NotFoundRoute,
} from "@constans/routesConst";

const Hotels = lazy(() => import("@pages/Hotels"));
const HotelById = lazy(() => import("@pages/HotelById"));
const Login = lazy(() => import("@pages/Login"));
const Favorite = lazy(() => import("@pages/Favorite"));
const NotFound = lazy(() => import("@pages/NotFound"));

export const routes = [
  { path: HotelsRoute, element: Hotels },
  { path: HotelByIdRoute, element: HotelById },
  { path: LoginRoute, element: Login },
  { path: FavoriteRoute, element: Favorite },
  { path: NotFoundRoute, element: NotFound },
];
