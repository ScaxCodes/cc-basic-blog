import { Post } from "../Post";
import { useFetch } from "../useFetch";
import { URLS } from "../router";

export function Posts() {
  const { data: postsData, isLoading, isError } = useFetch(URLS.POSTS);

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
// done
// 2. Do the same for users and todos
// done
// 3. Think about the structure of your code, is it good?
// --
// 4. Watch video and check useOutletContext if its a better fit here
// 5. Create a Post page that renders out the post title, and body.
// 6. Create a User page that renders out the user name, company name, email, website, and address.
