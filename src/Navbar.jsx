import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav class="top-nav">
      <div class="nav-text-large">My App</div>
      <ul class="nav-list">
        <li>
          <Link to="/">Posts</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/todos">Todos</Link>
        </li>
      </ul>
    </nav>
  );
}
