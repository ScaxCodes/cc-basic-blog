import { Outlet, createBrowserRouter } from "react-router-dom";
import { Users } from "./pages/Users";
import { Todos } from "./pages/Todos";
import { Navbar } from "./Navbar";
import { Posts } from "./pages/Posts";

export const URLS = {
  POSTS: "http://127.0.0.1:3000/posts",
  USERS: "http://127.0.0.1:3000/users",
  TODOS: "http://127.0.0.1:3000/todos",
};

export const router = createBrowserRouter([
  {
    element: <NavLayout />,
    children: [
      { path: "/", element: <Posts /> },
      { path: "/users", element: <Users /> },
      { path: "/todos", element: <Todos /> },
    ],
  },
]);

function NavLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
