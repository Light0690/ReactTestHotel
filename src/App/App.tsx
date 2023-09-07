import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import { useAppSelector } from "@redux/hooks";
import { authSelector } from "@redux/slices/Auth/authSlice";

import { routes } from "../routes";

import UILoading from "@components/UI/UiLoading";

const Login = lazy(() => import("@pages/Login"));

const App = () => {
  const isAuth = useAppSelector(authSelector);

  const routesTSX = routes.map((route, id) => {
    return (
      <Route
        path={route.path}
        element={
          <Suspense fallback={<UILoading theme="black" isShadow={false} />}>
            <route.element />
          </Suspense>
        }
        key={id}
      />
    );
  });

  const notAuthTSX = (
    <Route
      path="/*"
      element={
        <Suspense fallback={<UILoading theme="black" isShadow={false} />}>
          <Login />
        </Suspense>
      }
    />
  );

  return (
    <div className="App">
      <Routes>{isAuth ? routesTSX : notAuthTSX}</Routes>
    </div>
  );
};

export default App;
