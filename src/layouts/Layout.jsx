import { Outlet } from "react-router-dom";
import Nav from "./Nav";

export default function Layout({ isAuthenticated }) {
  return (
    <div>
      <Nav isAuthenticated={isAuthenticated} />
      <Outlet />
    </div>
  );
}
