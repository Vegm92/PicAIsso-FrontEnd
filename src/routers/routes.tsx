import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../App/App";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import CreatePage from "../pages/CreatePage/CreatePage";
import HomePage from "../pages/HomePage/HomePage";
import Login from "../pages/LoginPage/LoginPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import endpoints from "./types";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      { path: "/", element: <ProtectedRoute element={<HomePage />} /> },
      { path: endpoints.login, element: <Login /> },
      { path: endpoints.create, element: <CreatePage /> },
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
