import { useQuery } from "@tanstack/react-query";
import getUsers from "../../Services/UserService";

function UserList() {
  const fetchData = async () => {
    const res = await getUsers();
    console.log("API response in fetchData:", res);

    if (Array.isArray(res)) {
      return res;
    } else if (res && res.users) {
      return res.users;
    } else {
      return [];
    }
  };

  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["userlist"],
    queryFn: fetchData,
    staleTime: 5000,
    cacheTime: 10000,
  });

  if (isLoading) return <h1>Data is loading, wait please...</h1>;

  if (isError) {
    console.log("Error in userlist:", error);
    return <h1>Something went wrong, please try again</h1>;
  }

  return (
    <>
      <h1>User List</h1>
      <ul>
        {data?.length > 0 ? (
          data.map((user) => (
            <li key={user.id}>
              {user.name} / {user.email}
            </li>
          ))
        ) : (
          <li>No users found</li>
        )}
      </ul>
    </>
  );
}

export default UserList;
