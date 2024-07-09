import { Post } from "./Post";
import { useFetch } from "./useFetch";

export function Posts() {
  const {
    data: postsData,
    isLoading,
    isError,
  } = useFetch("http://127.0.0.1:3000/posts");

  if (isLoading) return "Loading";
  if (isError) return "Error";
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

// 1. Map over object and render all posts, pass data as props to post comp
// 2. Watch video and check useOutletContext if its a better fit here
