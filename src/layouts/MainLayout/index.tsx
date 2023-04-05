// styles
import "./style.scss";

// components
import NavBar from "../../components/NavBar";
import Footer from "../../components/Player/Footer";
import Header from "../../components/Player/Header";

interface Props {
  children: React.ReactNode;
}
export default function MainLayout({ children }: Props): JSX.Element {
  return (
    <div className="layout layout--row">
      <NavBar />
      <div className="layout__content">
        <Header />
        <div className="layout__content-main">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
