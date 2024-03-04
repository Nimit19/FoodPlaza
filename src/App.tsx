import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./Pages/RootLayout";
import Order from "./Pages/Order";
import CartPage from "./Pages/CartPage/CartPage";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import HomePage from "./Pages/HomePage/HomePage";
import FoodShopDetails from "./Components/FoodShops/FoodShopDetails/FoodShopDetails";
import { ToastContainer } from "react-toastify";
import AuthenticationPage from "./Pages/AuthenticationPage";
import { checkAuthLoader, tokenLoader } from "./util/auth";

import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      id: "root",
      loader: tokenLoader,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/menu", element: <Order /> },
        { path: "/menu/:shopId/:category?", element: <FoodShopDetails /> },
        { path: "/cart", element: <CartPage />, loader: checkAuthLoader },
        { path: "/auth", element: <AuthenticationPage /> },
      ],
    },
  ]);
  return (
    <>
      <ToastContainer newestOnTop={true} />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
