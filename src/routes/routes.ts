import { lazy } from "react";

import {
  HOTELSROUTE,
  HOTELBYIDROUTE,
  FAVORITESROUTE,
  NOTFOUNDROUTE,
} from "@constans/routesConst";

const Hotels = lazy(() => import("@pages/Hotels"));
const HotelById = lazy(() => import("@pages/HotelById"));
const Favorite = lazy(() => import("@pages/Favorite"));
const NotFound = lazy(() => import("@pages/NotFound"));

export const routes = [
  { path: HOTELSROUTE, element: Hotels },
  { path: HOTELBYIDROUTE, element: HotelById },
  { path: FAVORITESROUTE, element: Favorite },
  { path: NOTFOUNDROUTE, element: NotFound },
];
