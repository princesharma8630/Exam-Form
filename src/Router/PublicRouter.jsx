
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import RouterConstant from "../constant/RouterConstant";

const PublicRouter = () => {
  const token = useSelector((state) => state.auth.token);

  // agar user already login hai → redirect dashboard
  // nahi → show public pages
  return token ? <Outlet/> : <Navigate to={RouterConstant.Login}/>;
};

export default PublicRouter;
