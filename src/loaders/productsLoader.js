const productsLoader = async () => {
  const response = await fetch("http://localhost:9000/products");
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
};

export default productsLoader;
