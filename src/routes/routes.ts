import {
  HotelsRoute,
  LoginRoute,
  NotFoundRoute,
} from "@constans/routesConst";

import Hotels from "@pages/Hotels";
import Login from "@pages/Login";
import NotFound from "@pages/NotFound";

export const routes = [
  { path: HotelsRoute, element: Hotels },
  { path: LoginRoute, element: Login },
  { path: NotFoundRoute, element: NotFound },
];
