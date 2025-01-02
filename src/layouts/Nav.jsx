import { NavLink } from "react-router-dom";

export default function Nav({ isAuthenticated }) {
  console.log(isAuthenticated);
  function navLinkStyle({ isActive }) {
    return {
      color: isActive ? "blue" : "",
    };
  }
  return (
    <nav className="flex p-10 w-full mx-auto items-center justify-between">
      <NavLink style={navLinkStyle} to={"/"} end>
        Home
      </NavLink>
      <NavLink style={navLinkStyle} to={"products-index"} end>
        Products with index child
      </NavLink>
      <NavLink style={navLinkStyle} to={"products"} end>
        Products without index child
      </NavLink>
      <NavLink
        end
        className={({ isActive }) => (isActive ? "classes" : "other-classes")}
        style={navLinkStyle}
        to={"about"}
      >
        About
      </NavLink>

      {isAuthenticated ? (
        <NavLink style={navLinkStyle} to={"profile"} end>
          Profile
        </NavLink>
      ) : (
        <NavLink style={navLinkStyle} to={"login"} end>
          Login
        </NavLink>
      )}
    </nav>
  );
}
