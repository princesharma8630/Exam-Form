import { useDispatch } from "react-redux"
import { logout } from "../AuthSlice/AuthSlice";


const logoutButton = () => {
    const dispatch = useDispatch();

    const handleLogout=()=>{
        dispatch(logout());
        alert("Logged Out succcessfully");
    };

    return(
        <button onClick={handleLogout}>logout</button>
    )
}
export default logoutButton