import { useFetch } from "../useFetch";
import { URLS } from "../constants";

export function PostPages() {
  const { data: postData, isLoading, isError } = useFetch(URLS.POSTS + "/1");

  if (isLoading) return "Loading";
  if (isError) return "Error";

  return (
    <>
      <div class="container">
        <h1 class="page-title">
          sunt aut facere repellat provident occaecati excepturi optio
          reprehenderit
        </h1>
        <span class="page-subtitle">
          By: <a href="user.html">Leanne Graham</a>
        </span>
        <div>
          quia et suscipit suscipit recusandae consequuntur expedita et cum
          reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt
          rem eveniet architecto
        </div>
      </div>
    </>
  );
}
{
  /* return (
    <div className="container">
      <h1 className="page-title">Posts</h1>
      <div className="card-grid">
        {postsData.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  ); */
}
