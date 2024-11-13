import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Components/MainLayout/MainLayout.jsx";
import Home from "./Components/Home/Home.jsx";
import Login from "./Components/Login/Login.jsx";
import Register from "./Components/Register/Register.jsx";
import AuthProvider from "./Components/Providers/AuthProvider.jsx";
import MyDetails from "./Components/MyDetails/MyDetails.jsx";
import PrivateRoutes from "./Routes/PrivateRoutes.jsx";
import { Toaster } from "react-hot-toast";
import OurProducts from "./Components/OurProducts/OurProducts.jsx";
import ShopNow from "./Components/ShopNow/ShopNow.jsx";
import Contact from "./Components/Contact/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/details",
        element: (
          <PrivateRoutes>
            <MyDetails></MyDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: "/products",
        element: (
          <PrivateRoutes>
            <OurProducts></OurProducts>
          </PrivateRoutes>
        ),
      },
      {
        path: "/shop",
        element: (
          <PrivateRoutes>
            <ShopNow></ShopNow>
          </PrivateRoutes>
        ),
      },
      {
        path: "/contact",
        element: (
          <PrivateRoutes>
            <Contact></Contact>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <Toaster position="top-right" reverseOrder={false} />
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
