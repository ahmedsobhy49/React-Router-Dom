import { Link, useSearchParams } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "White T-Shirt",
    price: "$30",
    color: "white",
    category: "new",
  },
  { id: 2, name: "Red Hoodie", price: "$60", color: "red", category: "new" },
];

export default function NewProducts() {
  const [searchParams] = useSearchParams();
  const colorFilter = searchParams.get("color");

  const filteredProducts = colorFilter
    ? products.filter((p) => p.color === colorFilter)
    : products;

  if (!filteredProducts.length) {
    return <div>No products found with the selected color.</div>; // Display a message when no products are found with the selected color.  Replace "No products found with the selected color." with your desired message.  This message should be styled to match the rest of the application.  For example, you could use the "text-gray-600" class from Tailwind CSS to make the message visually appealing.  You can also customize the message based on your specific needs.  For example, you could include a link to the products page with the selected color filter applied.  This will provide a more user-friendly experience.  For example, you could replace the message with a link that says "See all products with {color} color." or "Click here to see all products with {color} color."  Replace {color} with the actual color name.  For example, if the selected color is "red", the message could be
  }
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
