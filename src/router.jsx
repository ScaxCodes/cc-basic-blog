import { Outlet, createBrowserRouter } from "react-router-dom";
import { Users } from "./pages/Users";
import { Todos } from "./pages/Todos";
import { Navbar } from "./Navbar";
import { Posts } from "./pages/Posts";

export const router = createBrowserRouter([
  {
    element: <NavLayout />,
    children: [
      // { path: "/", element: <Posts /> },
      {
        path: "/",
        children: [
          { index: true, element: <Posts /> },
          { path: ":memberId", element: <h1>cool</h1> },
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
