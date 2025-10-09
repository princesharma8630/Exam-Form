import { useState, useEffect } from "react";
import axios from "axios";

function UserList() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const usersPerPage = 5;

  // Fetch all users once
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/users");
        setUsers(res.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  // Pagination logic
  const indexOfLastUser = page * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(users.length / usersPerPage);

  return (
    <div style={{ margin: "auto", textAlign: "center" }}>
      <h1>User List (Page {page})</h1>

      <ul>
        {currentUsers.map((user) => (
          <li key={user.id}>{user.name} / {user.email}</li>
        ))}
      </ul>

      <div style={{ marginTop: "1rem" }}>
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
          style={{ marginRight: "10px" }}
        >
          Previous
        </button>

        <button
          onClick={() => setPage((old) => Math.min(old + 1, totalPages))}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default UserList;
