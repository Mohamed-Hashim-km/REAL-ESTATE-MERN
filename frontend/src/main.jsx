import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store.js";
import {ToastContainer} from "react-toastify"
import { ThemeProvider } from "@material-tailwind/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
      <ThemeProvider>
        <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
    <ToastContainer />
  </StrictMode>
);
