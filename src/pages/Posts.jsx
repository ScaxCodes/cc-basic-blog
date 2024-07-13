import { Post } from "../Post";
import { useFetch } from "../useFetch";
import { URLS } from "../constants";

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
// done, refactored Home.jsx
// 4. useOutletContext a better fit here?
// done, don't think so, fetching with every new routing is fine, passing data to child, not to grand child
// 5. Create a Post page that renders out the post title, and body.
// done
// 6. Create a User page that renders out the user name, company name, email, website, and address.
// done

// 7. Dynamic API requests for steps No. 5 and 6
