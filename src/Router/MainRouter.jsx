import { Routes, Route, Router } from "react-router-dom";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
import AuthLayout from "../Layouts/Auth-Layout/AuthLayout";
import MainLayout from "../Layouts/Main-Layout/MainLayout";
import RouterConstant from "../constant/RouterConstant";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Features from "../pages/Features/Features";
import ExamForm from "../pages/ExamForm/ExamForm";
import Login from "../Auth/Authpages/login/login"
import Signup from "../Auth/Authpages/signup/signup";
import Sidebar from "../component/sidebar/sidebar";
import UserProfile from "../component/sidebar/userProfile";
// import Dashboard from "../pages/Dashboard/Dashboard";

const MainRouter = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path={RouterConstant.Home} element={<PublicRouter />}>
        <Route path={RouterConstant.Home} element={<AuthLayout><Home/></AuthLayout>} />
        <Route path={RouterConstant.About} element={<AuthLayout><About /></AuthLayout>} />
        <Route path={RouterConstant.Features} element={<AuthLayout><Features /></AuthLayout>} />
        <Route path={RouterConstant.Login} element={<AuthLayout><Login/></AuthLayout>} />
        <Route path={RouterConstant.Signup} element={<AuthLayout><Signup/></AuthLayout>}/>
      </Route>

      {/* Private Routes */}
      <Route path="/" element={<PrivateRouter />}>
       
        <Route path={RouterConstant.ExamForm} element={<MainLayout><ExamForm /></MainLayout>} />
        <Route path="/userProfile" element={<MainLayout><UserProfile/></MainLayout>} />
        <Route path ={RouterConstant.pHome} element={<MainLayout><Home/></MainLayout>}/>
        
        
        {/* <Route path="dashboard" element={<MainLayout><Dashboard /></MainLayout>} /> */}
        
      </Route>
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
};

export default MainRouter;
