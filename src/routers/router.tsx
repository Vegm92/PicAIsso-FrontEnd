import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../App/App";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import HomePage from "../pages/HomePage/HomePage";
import Login from "../pages/Login/Login";
import endpoints from "./types";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <ProtectedRoute element={<HomePage />} /> },
      { path: endpoints.login, element: <Login /> },
    ],
  },
];

export const router = createBrowserRouter(routes);

export const getComponentRouter = (ui: React.ReactElement) =>
  createBrowserRouter([
    {
      path: "/",
      element: ui,
    },
  ]);
