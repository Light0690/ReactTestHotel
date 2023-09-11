import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import { useAppSelector } from "@redux/hooks";
import { authSelector } from "@redux/slices/Auth/authSlice";

import { routes } from "../routes";

import Layout from "@components/common/Layout";
import UILoading from "@components/UI/UiLoading";

const Login = lazy(() => import("@pages/Login"));

const App = () => {
  const isAuth = useAppSelector(authSelector);

  return (
    <div className="App">
      <Routes>
        {routes.map((route, id) => {
          return (
            <Route
              path={route.path}
              element={
                <Suspense
                  fallback={<UILoading theme="black" isShadow={false} />}
                >
                  {isAuth ? (
                    <Layout>
                      <route.element />
                    </Layout>
                  ) : (
                    <Login />
                  )}
                </Suspense>
              }
              key={id}
            />
          );
        })}
      </Routes>
    </div>
  );
};

export default App;
