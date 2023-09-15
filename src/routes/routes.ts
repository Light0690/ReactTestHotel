import { lazy } from "react";

import { HOTELSROUTE, HOTELBYIDROUTE, FAVORITEROUTE, NOTFOUNDROUTE } from "@constans/routesConst";

const Hotels = lazy(() => import("@pages/Hotels"));
// const HotelById = lazy(() => import("@pages/HotelById"));
// const Favorite = lazy(() => import("@pages/Favorite"));
const NotFound = lazy(() => import("@pages/NotFound"));

export const routes = [
  { path: HOTELSROUTE, element: Hotels },
  { path: HOTELBYIDROUTE, element: NotFound },
  { path: FAVORITEROUTE, element: NotFound },
  { path: NOTFOUNDROUTE, element: NotFound },
];
