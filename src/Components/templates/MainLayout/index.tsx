// styles
import "./style.scss";

// components
import NavBar from "../../organisms/NavBar";
import Footer from "../../organisms/Footer";
import Header from "../../organisms/Header";

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
    </div>
  );
}
