import { Routes, Route } from "react-router-dom";
import { FC } from "react";

import Login from "./pages/Login";
import Hotels from "./pages/Hotels";

import "./App.scss";

const App: FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Hotels />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
