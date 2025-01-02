import { useParams } from "react-router-dom";

export default function ProductsDetails() {
  const params = useParams();
  return (
    <section>
      <h1>Products Details Page</h1>
      <div>
        <h4 className="text-start">Page Params</h4>
        <div className="text-start">
          <p>category: {params.cat}</p>
          <p>id: {params.productId}</p>
        </div>
      </div>
    </section>
  );
}
