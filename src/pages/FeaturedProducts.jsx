import { Link, useSearchParams } from "react-router-dom";

const products = [
  {
    id: 3,
    name: "Black Jacket",
    price: "$120",
    color: "black",
    category: "featured",
  },
  {
    id: 4,
    name: "Red Dress",
    price: "$90",
    color: "red",
    category: "featured",
  },
];

export default function FeaturedProducts() {
  const [searchParams] = useSearchParams();
  const colorFilter = searchParams.get("color");

  const filteredProducts = colorFilter
    ? products.filter((p) => p.color === colorFilter)
    : products;

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
