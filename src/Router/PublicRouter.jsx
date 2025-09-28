
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import RouterConstant from "../constant/RouterConstant";

const PublicRouter = () => {
  console.log("Public Router Rendered");
  const token = useSelector((state) => state.auth.token);
 console.log("Token in PublicRouter:", token);
  // agar user already login hai → redirect dashboard
  // nahi → show public pages
  return token ? <Navigate to={RouterConstant.pHome}/> : <Outlet/>;
  
};

export default PublicRouter;
