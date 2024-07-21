import {
  Navigate,
  Outlet,
  ScrollRestoration,
  createBrowserRouter,
  useNavigation,
} from "react-router-dom";
import { Users } from "./pages/Users";
import { Todos } from "./pages/Todos";
import { Navbar } from "./Navbar";
import { Posts } from "./pages/Posts";
import { PostPages } from "./pages/PostPages";
import { UserPages } from "./pages/UserPages";
import { URLS } from "./constants";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NavLayout />,
    children: [
      { index: true, element: <Navigate to="/posts" /> },
      {
        path: "posts",

        children: [
          {
            index: true,
            element: <Posts />,
            loader: ({ request: { signal } }) => {
              console.log("executed loader...");
              return fetch(URLS.POSTS, { signal });
            },
          },
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
      { path: "*", element: <h1>404 - Page Not Found</h1> },
    ],
    errorElement: (
      <>
        <Navbar />
        <h1>Error occurred!</h1>
      </>
    ),
  },
]);

function NavLayout() {
  const { state } = useNavigation();
  const isLoading = state === "loading";

  return (
    <>
      <Navbar />
      {/* Just in case scroll bar is behaving strange */}
      <ScrollRestoration />
      {isLoading && <div className="loading-spinner" />}
      <div className={`container ${isLoading ? "loading" : ""}`}>
        <Outlet />
      </div>
    </>
  );
}
