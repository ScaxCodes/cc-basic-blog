import { Post } from "./Post";

export function Posts() {
  return (
    <div class="container">
      <h1 class="page-title">Posts</h1>
      <div class="card-grid">
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
