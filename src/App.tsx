import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";

import { routes } from "./routes";

import UILoading from "@components/UI/UiLoading/UiLoading";

const App = () => {
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
                  <route.element />
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
