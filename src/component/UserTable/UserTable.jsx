import { useEffect, useState } from "react";
import getUsers from "../../Services/UserService";
import LoadingPage from "../Loader/Loader";
import './UserTable.css';

function UsersTable() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [search , setSearch] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            const data = await getUsers();
            setUsers(data.users);
            setIsLoading(false)
        }
        fetchData();
    }, [])
    if (isLoading) {
        return (
            <LoadingPage title="User is loading." head="fatching data" />
        )
    }
    return (

        <>
        <div className="search-box">
         <input
         type="text"
         placeholder="Search by name"
         value={search}
         onChange={(e)=>setSearch(e.target.value)}
         />

        </div>
        
            <table>

                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>City</th>
                        <th>Company</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        users.filter(user=>
                            search.length>=3
                            ? `${user.firstName} ${user.lastName}`
                            .toLowerCase()
                            .includes(search.toLowerCase())
                            :true
                        )
                        .map((user) => (
                            <tr key={user.id}>
                                <td>{user.firstName} {user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.address?.city}</td>
                                <td>{user.company?.name}</td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>

        </>
    )

}
export default UsersTable;