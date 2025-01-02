import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="text-center">
      <h1>Home Page</h1>
      <div className="flex items-center justify-center gap-10 mt-14">
        <button onClick={() => navigate("/order-summery")}>
          Click For Programmatically Navigation
        </button>
        <button onClick={() => navigate("/order-summery", { replace: true })}>
          Click For Programmatically Navigation with Replace set to true
        </button>
      </div>
    </section>
  );
}
