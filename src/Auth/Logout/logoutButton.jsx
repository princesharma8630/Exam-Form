import { useDispatch } from "react-redux"
import { logout } from "../AuthSlice/AuthSlice";
import LoadingPage from "../../component/Loader/Loader";
import { useState } from "react";


const LogoutButton = () => {
const[isLoading, setIsLoading] = useState(false);
const isCollapsed = false; // You can pass this as a prop if needed
    const dispatch = useDispatch();

    
    const handleLogout=()=>{
        setIsLoading(true);


    setTimeout(()=>{
        dispatch(logout());
        setIsLoading(false);
        alert("Logged Out succcessfully"); },1500);
    };

    return(<>   
      {isLoading && <LoadingPage title="Logging out.." head="Goodbye for now 👋 Come back soon!"/>}
      <button
        className={`logout-btn ${isCollapsed ? "collapsed" : ""}`}
        onClick={handleLogout}
        disabled={isLoading} // optional: disable button while loading
      >
        <span className="logout-icon">🚪</span>
        {!isCollapsed && <span>Logout</span>}
      </button>
    </>
      
    )
}
export default LogoutButton;