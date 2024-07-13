import { useFetch } from "../useFetch";
import { URLS } from "../constants";
import { useParams } from "react-router-dom";

export function PostPages() {
  const { memberId } = useParams();

  // TODO: Conditional range should be fetch dynamically by API
  if (memberId < 1 || memberId > 200) {
    return <h1>Error 404</h1>;
  }

  const {
    data: postData,
    isLoading,
    isError,
  } = useFetch(URLS.POSTS + "/" + memberId);

  if (isLoading) return "Loading";
  if (isError) return "Error";

  return (
    <>
      <div className="container">
        <h1 className="page-title">{postData.title}</h1>
        <span className="page-subtitle">
          By: <a href="user.html">UserID: {postData.userId}</a>
        </span>
        <div>{postData.body}</div>
      </div>
    </>
  );
}
