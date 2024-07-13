import { useFetch } from "../useFetch";
import { URLS } from "../constants";
import { useParams } from "react-router-dom";

export function UserPages() {
  const { userId } = useParams();

  // TODO: Conditional range should be fetch dynamically by API
  if (userId < 1 || userId > 10) {
    return <h1>Error 404</h1>;
  }

  const {
    data: userData,
    isLoading,
    isError,
  } = useFetch(URLS.USERS + "/" + userId);

  if (isLoading) return "Loading";
  if (isError) return "Error";

  return (
    <div className="container">
      <h1 className="page-title">{userData.name}</h1>
      <div className="page-subtitle">{userData.email}</div>
      <div>
        <b>Company:</b> {userData.company.name}
      </div>
      <div>
        <b>Website:</b> {userData.website}
      </div>
      <div>
        <b>Address:</b> {userData.address.street} {userData.address.suite},{" "}
        {userData.address.city}, {userData.address.zipcode}
      </div>
    </div>
  );

  return (
    <>
      <div className="container">
        <h1 className="page-title">{userData.title}</h1>
        <span className="page-subtitle">
          By: <a href="user.html">UserID: {postData.userId}</a>
        </span>
        <div>{postData.body}</div>
      </div>
    </>
  );
}
