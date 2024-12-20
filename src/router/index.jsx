import HomePage from "./pages/Homepage/HomePage";
import Contact from "./pages/Contact/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import CookiesPolicy from "./pages/CookiesPolicy/CookiesPolicy";
import { Route } from "react-router-dom";

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
