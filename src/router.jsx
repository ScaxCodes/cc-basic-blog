import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Users } from "./pages/Users";
import { Todos } from "./pages/Todos";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/users", element: <Users /> },
  { path: "/todos", element: <Todos /> },
]);
