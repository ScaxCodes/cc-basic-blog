import { Outlet, createBrowserRouter } from "react-router-dom";
import { Users } from "./pages/Users";
import { Todos } from "./pages/Todos";
import { Navbar } from "./Navbar";
import { Posts } from "./pages/Posts";
import { PostPages } from "./pages/PostPages";

export const router = createBrowserRouter([
  {
    element: <NavLayout />,
    children: [
      // { path: "/", element: <Posts /> },
      {
        path: "/",
        children: [
          { index: true, element: <Posts /> },
          { path: ":memberId", element: <PostPages /> },
        ],
      },
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
