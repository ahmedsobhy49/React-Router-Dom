import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Nav from "./layouts/Nav";
import { lazy, Suspense, useEffect, useState } from "react";
const OrderSummery = lazy(() => import("./pages/OrderSummery"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Products = lazy(() => import("./pages/Products"));
const NewProducts = lazy(() => import("./pages/NewProducts"));
const FeaturedProducts = lazy(() => import("./pages/FeaturedProducts"));
const ProductsDetails = lazy(() => import("./pages/ProductsDetails"));
const Profile = lazy(() => import("./pages/Profile"));
const PrivateRoute = lazy(() => import("./components/PrivateRoute"));
const Login = lazy(() => import("./pages/Login"));

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on navigation
  }, [location.pathname]);

  return (
    <main className="max-w-5xl mx-auto text-center">
      <Nav isAuthenticated={isAuthenticated} />
      <Suspense
        fallback={<div className="text-white text-3xl">Loading...</div>}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="about" element={<About />} />
          <Route path="order-summery" element={<OrderSummery />} />

          {/* nested routes with index */}
          <Route path="products-index" element={<Products />}>
            <Route path="new" element={<NewProducts />} />
            <Route index element={<NewProducts />} />
            <Route path="featured" element={<FeaturedProducts />} />
          </Route>

          {/* nested routes without index */}
          <Route path="products" element={<Products />}>
            <Route path="new" element={<NewProducts />} />
            <Route path="featured" element={<FeaturedProducts />} />
          </Route>

          <Route
            path="products/:cat/:productId"
            element={<ProductsDetails />}
          />
          <Route
            path="login"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            path="profile"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <Profile setIsAuthenticated={setIsAuthenticated} />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </main>
  );
}

export default App;
