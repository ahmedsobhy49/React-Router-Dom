import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>NotFound Page</h1>
      <div>
        <button onClick={() => navigate(-1)}>Go Back</button>
        <Link to={"/"}> Go Home</Link>
      </div>
    </div>
  );
}
