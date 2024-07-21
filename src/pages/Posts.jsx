import { Post } from "../Post";
import { useLoaderData, useNavigation } from "react-router-dom";
import { URLS } from "../constants";

export function Posts() {
  const postsData = useLoaderData();

  return (
    <div className="container">
      <h1 className="page-title">Posts</h1>
      <div className="card-grid">
        {postsData.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
