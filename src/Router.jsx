import { createBrowserRouter, Navigate, Outlet } from "react-router";
import Home from "./pages/home";
import LoginPage from "./pages/login";
import Layout from "./components/Layout";
import { getLocalStorage } from "./utils/helpers";
import Expenses from "./pages/expenses";

const PrivateRoutes = () => {
  const token = getLocalStorage("token");

  if (!token) return <Navigate to="/login" replace />;

  return <Outlet />;
};

const router = createBrowserRouter([
  {
    element: <PrivateRoutes />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path:"/expenses",
            element: <Expenses />
          }
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
