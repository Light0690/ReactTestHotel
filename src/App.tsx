import { Routes, Route } from "react-router-dom";

import { routes } from "./routes";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Routes>
        {routes.map((route, id) => {
          return (
            <Route path={route.path} element={<route.element />} key={id} />
          );
        })}
      </Routes>
    </div>
  );
};

export default App;
