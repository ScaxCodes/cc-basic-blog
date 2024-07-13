import { useFetch } from "../useFetch";
import { User } from "../User";
import { URLS } from "../constants";

export function Users() {
  const { data: usersData, isLoading, isError } = useFetch(URLS.USERS);

  if (isLoading) return "Loading";
  if (isError) return "Error";
  return (
    <>
      <div className="container">
        <h1 className="page-title">Users</h1>
        <div className="card-grid">
          {usersData.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </div>
      </div>
    </>
  );
}
