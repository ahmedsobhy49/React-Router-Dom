import { Link, useLoaderData, useSearchParams } from "react-router-dom";

export default function FeaturedProducts() {
  const featuredProducts = useLoaderData()?.filter(
    (product) => product.category === "featured"
  );
  const [searchParams] = useSearchParams();
  const colorFilter = searchParams.get("color");

  const filteredProducts = colorFilter
    ? featuredProducts.filter((p) => p.color === colorFilter)
    : featuredProducts;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {filteredProducts.map((product) => (
        <Link
          to={`/products/${product.category}/${product.id}`}
          key={product.id}
          className="p-4 border rounded shadow hover:shadow-lg transition"
        >
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-600">{product.price}</p>
        </Link>
      ))}
    </div>
  );
}
