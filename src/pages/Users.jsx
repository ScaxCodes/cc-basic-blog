import { useFetch } from "../useFetch";
import { User } from "../User";

export function Users() {
  const {
    data: usersData,
    isLoading,
    isError,
  } = useFetch("http://127.0.0.1:3000/users");

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
