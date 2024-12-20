import Header from "../AppLayout/components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../AppLayout/components/Footer/Footer";

const Layout = () => {
  return (
    <div className="app-layout">
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
