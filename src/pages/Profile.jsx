import { useNavigate } from "react-router-dom";

export default function Profile({ setIsAuthenticated }) {
  const navigate = useNavigate();
  function logout() {
    navigate("/login");
    setIsAuthenticated(false);
  }
  return (
    <div className="text-center">
      <h1>Profile Page</h1>
      <button className="mt-4" onClick={logout}>
        Logout
      </button>
    </div>
  );
}
