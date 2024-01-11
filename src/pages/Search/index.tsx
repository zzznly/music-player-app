// styles
import "./styles.scss";

// router
import { Outlet } from "react-router-dom";

export default function Search(): JSX.Element {
  return (
    <div className={"wrap"}>
      <Outlet />
    </div>
  );
}
