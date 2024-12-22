import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router";
import { CurrencyProvider } from "./context/CurrencyProvider";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CurrencyProvider>
      <AppRouter />
    </CurrencyProvider>
  </BrowserRouter>
);
