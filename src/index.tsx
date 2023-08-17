import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";

import { store } from "./redux/store";
import { Provider } from "react-redux/es/exports";
import ThemeProvider from "@context/ThemeProvider";

import App from "./App";

import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <HashRouter>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </HashRouter>,
);
