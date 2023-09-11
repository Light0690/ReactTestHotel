import { lazy } from "react";

import {
  FavoriteRoute,
  HotelByIdRoute,
  HotelsRoute,
  NotFoundRoute,
} from "@constans/routesConst";

const Hotels = lazy(() => import("@pages/Hotels"));
const HotelById = lazy(() => import("@pages/HotelById"));
const Favorite = lazy(() => import("@pages/Favorite"));
const NotFound = lazy(() => import("@pages/NotFound"));

export const routes = [
  { path: HotelsRoute, element: Hotels },
  { path: HotelByIdRoute, element: HotelById },
  { path: FavoriteRoute, element: Favorite },
  { path: NotFoundRoute, element: NotFound },
];
