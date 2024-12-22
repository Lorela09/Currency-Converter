import HomePage from "../pages/Homepage/HomePage";
import Contact from "../pages/Contact/Contact";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import CookiesPolicy from "../pages/CookiesPolicy/CookiesPolicy";
import AppLayout from "../layouts/AppLayout/AppLayout";
import { Routes, Route } from "react-router-dom";
import "../styles/main.scss";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookies-policy" element={<CookiesPolicy />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
