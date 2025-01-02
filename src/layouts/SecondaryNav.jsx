import { NavLink } from "react-router-dom";

export default function SecondaryNav() {
  return (
    <nav className="flex gap-4 text-blue-500">
      <NavLink
        to={"new"}
        className={({ isActive }) =>
          `p-2 rounded ${isActive ? "bg-blue-100 font-semibold" : ""}`
        }
      >
        New
      </NavLink>
      <NavLink
        to={"featured"}
        className={({ isActive }) =>
          `p-2 rounded ${isActive ? "bg-blue-100 font-semibold" : ""}`
        }
      >
        Featured
      </NavLink>
    </nav>
  );
}
