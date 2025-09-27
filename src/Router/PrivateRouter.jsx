import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";
import RouterConstant from "../constant/RouterConstant";



const PrivateRouter =()=>{
    const token = useSelector((state)=>state.auth.token);
    return token ? <Outlet/> : <Navigate to={RouterConstant.Login}/>;
};
export default PrivateRouter;