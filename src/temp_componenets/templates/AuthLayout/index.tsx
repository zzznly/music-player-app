// router
import { Outlet } from "react-router-dom";

export default function AuthLayout(): JSX.Element {
  return (
    <div className="layout">
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
}
