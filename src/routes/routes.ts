import { lazy } from "react";

import { HotelsRoute, LoginRoute, NotFoundRoute } from "@constans/routesConst";

// import Hotels from "@pages/Hotels";
// import Login from "@pages/Login";
// import NotFound from "@pages/NotFound";

const Hotels = lazy(() => import("@pages/Hotels"));
const Login = lazy(() => import("@pages/Login"));
const NotFound = lazy(() => import("@pages/NotFound"));

export const routes = [
  { path: HotelsRoute, element: Hotels },
  { path: LoginRoute, element: Login },
  { path: NotFoundRoute, element: NotFound },
];
