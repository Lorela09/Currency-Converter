import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../src/layouts/AppLayout/Layout";
import HomePage from "./pages/Homepage/HomePage";
import Contact from "./pages/Contact/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import CookiesPolicy from "./pages/CookiesPolicy/CookiesPolicy";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/contact" element={<Layout />}>
          <Route index element={<Contact />} />
        </Route>
        <Route path="/privacy-policy" element={<Layout />}>
          <Route index element={<PrivacyPolicy />} />
        </Route>
        <Route path="/cookies-policy" element={<Layout />}>
          <Route index element={<CookiesPolicy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
