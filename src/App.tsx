import { Routes, Route } from "react-router-dom";
import { FC } from "react";

import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";

import "./App.scss";


const App: FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  );
};

export default App;
