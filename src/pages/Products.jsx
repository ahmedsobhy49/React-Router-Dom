import SecondaryNav from "../layouts/SecondaryNav";
import { Outlet, useLocation, useSearchParams } from "react-router-dom";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedColor = searchParams.get("color") || "all";
  const location = useLocation();

  const handleFilterChange = (event) => {
    const value = event.target.value;
    if (value === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ color: value });
    }
  };

  return (
    <div className="p-4">
      <SecondaryNav />
      <div className="flex justify-between mt-6 gap-6">
        {/* Filters Section */}
        {location.pathname !== "/products" && (
          <div className="w-1/4 p-4 rounded shadow">
            <form>
              <h4 className="mb-4 text-lg font-semibold text-start">
                Filter Products
              </h4>
              <label className="block mb-2 text-start">
                <input
                  type="radio"
                  name="filter"
                  value="all"
                  checked={selectedColor === "all"}
                  onChange={handleFilterChange}
                  className="mr-2"
                />
                All Products
              </label>
              <label className="block mb-2 text-start">
                <input
                  type="radio"
                  name="filter"
                  value="black"
                  checked={selectedColor === "black"}
                  onChange={handleFilterChange}
                  className="mr-2"
                />
                Black Products
              </label>
            </form>
          </div>
        )}

        {/* Products Section */}
        <div className="flex-1 mt-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
