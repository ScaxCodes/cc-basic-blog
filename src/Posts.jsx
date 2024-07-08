import { Post } from "./Post";

export function Posts() {
  return (
    <div className="container">
      <h1 className="page-title">Posts</h1>
      <div className="card-grid">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
