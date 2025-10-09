import { useEffect, useState } from "react";
import getUsers from "../../Services/UserService";
import LoadingPage from "../Loader/Loader";
import './UserTable.css';

function UsersTable() {
    const [users, setUsers] = useState([]);
    const [allUsers, setAllUsers] = useState([]); // Store all users
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState("");
    
    // Pagination states
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    // Initial data fetch
    useEffect(() => {
        const fetchData = async () => {
            const data = await getUsers();
            setAllUsers(data.users); // Store all users
            setUsers(data.users.slice(0, itemsPerPage)); // Show only first page
            setIsLoading(false);
        }
        fetchData();
    }, [itemsPerPage])

    // Handle pagination and search
    useEffect(() => {
        let filtered = allUsers;
        
        // Apply search filter
        if (search.length >= 3) {
            filtered = allUsers.filter(user =>
                `${user.firstName} ${user.lastName}`
                    .toLowerCase()
                    .includes(search.toLowerCase())
            );
        }
        
        // Apply pagination slice
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setUsers(filtered.slice(startIndex, endIndex));
        
    }, [allUsers, search, currentPage, itemsPerPage]);

    // Reset to page 1 when search changes
    useEffect(() => {
        if (search.length >= 3 || search.length === 0) {
            setCurrentPage(1);
        }
    }, [search]);

    // Calculate total pages based on filtered results
    const getFilteredUsers = () => {
        if (search.length >= 3) {
            return allUsers.filter(user =>
                `${user.firstName} ${user.lastName}`
                    .toLowerCase()
                    .includes(search.toLowerCase())
            );
        }
        return allUsers;
    };

    const totalUsers = getFilteredUsers().length;
    const totalPages = Math.ceil(totalUsers / itemsPerPage);

    // Pagination handlers
    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Generate page numbers to display
    const getPageNumbers = () => {
        const pages = [];
        const maxPagesToShow = 5;
        
        if (totalPages <= maxPagesToShow) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                for (let i = 1; i <= 4; i++) pages.push(i);
                pages.push('...');
                pages.push(totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1);
                pages.push('...');
                for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
            } else {
                pages.push(1);
                pages.push('...');
                pages.push(currentPage - 1);
                pages.push(currentPage);
                pages.push(currentPage + 1);
                pages.push('...');
                pages.push(totalPages);
            }
        }
        
        return pages;
    };

    const clearSearch = () => {
        setSearch("");
    };

    if (isLoading) {
        return (
            <LoadingPage title="thinking about the user..." head="fetching data" />
        );
    }

    return (
        <>
            <div className="search-box">
                <input
                    type="text"
                    placeholder="Search by name (min 3 characters)"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                {search && (
                    <button onClick={clearSearch} className="clear-btn">
                        Clear
                    </button>
                )}
            </div>

            <div className="results-info">
                <p>
                    Showing {users.length > 0 ? ((currentPage - 1) * itemsPerPage + 1) : 0} 
                    {' '}-{' '}
                    {Math.min(currentPage * itemsPerPage, totalUsers)} of {totalUsers} users
                </p>
                <div className="items-per-page">
                    <label>Items per page: </label>
                    <select 
                        value={itemsPerPage} 
                        onChange={(e) => {
                            setItemsPerPage(Number(e.target.value));
                            setCurrentPage(1);
                        }}
                    >
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={50}>50</option>
                    </select>
                </div>
            </div>

            {users.length === 0 ? (
                <div className="no-results">
                    <p>No users found</p>
                </div>
            ) : (
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
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.firstName} {user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.address?.city}</td>
                                <td>{user.company?.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {totalPages > 1 && (
                <div className="pagination">
                    <button 
                        onClick={goToPreviousPage} 
                        disabled={currentPage === 1}
                        className="pagination-btn"
                    >
                        Previous
                    </button>

                    {getPageNumbers().map((page, index) => (
                        page === '...' ? (
                            <span key={`ellipsis-${index}`} className="ellipsis">...</span>
                        ) : (
                            <button
                                key={page}
                                onClick={() => goToPage(page)}
                                className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
                            >
                                {page}
                            </button>
                        )
                    ))}

                    <button 
                        onClick={goToNextPage} 
                        disabled={currentPage === totalPages}
                        className="pagination-btn"
                    >
                        Next
                    </button>
                </div>
            )}
        </>
    );
}

export default UsersTable;