import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppRouter from "./router";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);
