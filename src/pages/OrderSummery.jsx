import { useNavigate } from "react-router-dom";

export default function OrderSummery() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>OrderSummery</h1>
      <div className="mt-16">
        <button onClick={() => navigate(-1)}>Back - navigate(-1)</button>
      </div>
    </div>
  );
}
