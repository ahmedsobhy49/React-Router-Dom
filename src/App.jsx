import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import OrderSummery from "./pages/OrderSummery";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import NewProducts from "./pages/NewProducts";
import FeaturedProducts from "./pages/FeaturedProducts";
import ProductsDetails from "./pages/ProductsDetails";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";
import productsLoader from "./loaders/productsLoader";
import Layout from "./layouts/Layout";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout isAuthenticated={isAuthenticated} />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "order-summery",
          element: <OrderSummery />,
        },
        {
          path: "products-index",
          element: <Products />,
          children: [
            {
              path: "new",
              element: <NewProducts />,
              loader: productsLoader,
            },
            {
              index: true,
              element: <NewProducts />,
              loader: productsLoader,
            },
            {
              path: "featured",
              element: <FeaturedProducts />,
              loader: productsLoader,
            },
          ],
        },
        {
          path: "products",
          element: <Products />,
          children: [
            {
              path: "new",
              element: <NewProducts />,
              loader: productsLoader,
            },
            {
              path: "featured",
              element: <FeaturedProducts />,
              loader: productsLoader,
            },
          ],
        },
        {
          path: "products/:cat/:productId",
          element: <ProductsDetails />,
        },
        {
          path: "login",
          element: <Login setIsAuthenticated={setIsAuthenticated} />,
        },
        {
          path: "profile",
          element: (
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Profile setIsAuthenticated={setIsAuthenticated} />
            </PrivateRoute>
          ),
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
