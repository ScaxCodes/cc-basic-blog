import {
  Navigate,
  Outlet,
  ScrollRestoration,
  createBrowserRouter,
} from "react-router-dom";
import { Users } from "./pages/Users";
import { Todos } from "./pages/Todos";
import { Navbar } from "./Navbar";
import { Posts } from "./pages/Posts";
import { PostPages } from "./pages/PostPages";
import { UserPages } from "./pages/UserPages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NavLayout />,
    children: [
      { index: true, element: <Navigate to="/posts" /> },
      {
        path: "posts",
        children: [
          { index: true, element: <Posts /> },
          { path: ":postId", element: <PostPages /> },
        ],
      },
      {
        path: "users",
        children: [
          { index: true, element: <Users /> },
          { path: ":userId", element: <UserPages /> },
        ],
      },
      { path: "todos", element: <Todos /> },
      { path: "*", element: <h1>wildcard</h1> },
    ],
  },
]);

function NavLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* Just in case scroll bar is behaving strange */}
      <ScrollRestoration />
    </>
  );
}
