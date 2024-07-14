import { useFetch } from "../useFetch";
import { URLS } from "../constants";
import { Link, useParams } from "react-router-dom";

export function PostPages() {
  const { postId } = useParams();

  // TODO: Conditional range should be fetched dynamically by API
  // Need to make another fetch to get /posts array length
  if (postId < 1 || postId > 200) {
    return <h1>Error 404</h1>;
  }

  const {
    data: postData,
    isLoading,
    isError,
  } = useFetch(URLS.POSTS + "/" + postId);

  if (isLoading) return "Loading";
  if (isError) return "Error";

  return (
    <>
      <div className="container">
        <h1 className="page-title">{postData.title}</h1>
        <span className="page-subtitle">
          {/* TODO: Username should be fetched dynamically by API */}
          By:{" "}
          <Link to={`../users/${postData.userId}`}>
            UserID: {postData.userId}
          </Link>
        </span>
        <div>{postData.body}</div>
      </div>
    </>
  );
}
