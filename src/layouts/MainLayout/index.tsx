// styles
import "./style.scss";

// components
import NavBar from "../../components/NavBar";
import Footer from "../../components/Player/Footer";
import Header from "../../components/Player/Header";

// router
import { Outlet } from "react-router-dom";

export default function MainLayout(): JSX.Element {
  return (
    <div className="layout layout--row">
      <NavBar />
      <div className="layout__content">
        <Header />
        <div className="layout__content-main">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}
