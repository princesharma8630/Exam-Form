import { Routes, Route } from "react-router-dom";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
import AuthLayout from "../Layouts/Auth-Layout/AuthLayout";
import MainLayout from "../Layouts/Main-Layout/MainLayout";
import RouterConstant from "../constant/RouterConstant";
import Home from "../pages/Home/Home.jsx";
import About from "../pages/Abouts/About.jsx";
import Features from "../pages/Features/Features.jsx";
import ExamForm from "../pages/ExamForm/ExamForm.jsx";
import Login from "../Auth/Authpages/login/login.jsx"
import Signup from "../Auth/Authpages/signup/signup.jsx";
import Help from "../pages/help/Help.jsx";
import Profile from "../pages/Profile/Profile.jsx";
import UsersTable from "../component/UserTable/UserTable.jsx";
// import Dashboard from "../pages/Dashboard/Dashboard";

const MainRouter = () => {
  console.log("Main Router Rendered");
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
      <Route path="/" element={<PrivateRouter/>}>
       
        <Route path={RouterConstant.ExamForm} element={<MainLayout><ExamForm /></MainLayout>} />
        <Route path ={RouterConstant.pHome} element={<MainLayout><Home/></MainLayout>}/>
        <Route path={RouterConstant.pHelp} element={<MainLayout><Help/></MainLayout>}/>
        <Route path={RouterConstant.Profile} element={<MainLayout><Profile/></MainLayout>}/>
        <Route path={RouterConstant.UsersTable} element={<MainLayout><UsersTable/></MainLayout>}/>

        
        
        {/* <Route path="dashboard" element={<MainLayout><Dashboard /></MainLayout>} /> */}
        
      </Route>
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
};

export default MainRouter;
