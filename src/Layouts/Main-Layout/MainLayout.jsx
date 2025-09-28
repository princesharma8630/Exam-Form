// src/app/layouts/main-layout/MainLayout.jsx
import React from "react";
import Sidebar from "../../component/sidebar/sidebar.jsx";
import "./MainLayout.css";


const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
       <div><Sidebar/></div> 
      <div className="main-content">
        <header className="topbar">
          <h1>Dashboard</h1>
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
