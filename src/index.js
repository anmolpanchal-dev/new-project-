import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import BooksProvider from "./context/BooksContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <BooksProvider>
      <App />
    </BooksProvider>
  </BrowserRouter>
);
