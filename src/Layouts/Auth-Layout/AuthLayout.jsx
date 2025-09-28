// src/app/layouts/auth-layout/AuthLayout.jsx
import React from "react";
import Navbar from "../../component/navbar/navbar.jsx";
import Footer from "../../component/Footer/Footer.jsx";


const AuthLayout = ({ children }) => {
    console.log("AuthLayout Rendered");
    return (
        <div className="auth-layout">
            <Navbar />
            <main className="auth-main">{children}</main>
            <Footer />
        </div>
    );
};

export default AuthLayout;
