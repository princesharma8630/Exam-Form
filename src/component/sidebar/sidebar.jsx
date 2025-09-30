import { useState } from 'react';
import UserProfile from './userProfile';
import SidebarItem from './SidebarItem';
import './sidebar.css';
import RouterConstant from '../../constant/RouterConstant';
import {  Router, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LogoutButton from '../../Auth/Logout/logoutButton';
import Profile from '../../pages/Profile/Profile';

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [activeItem, setActiveItem] = useState('dashboard');
    const navigate = useNavigate();
    const dispatch =useDispatch();        

    const menuItems = [
        // {
        //     id: 'dashboard',
        //     label: 'Dashboard',
        //     icon: '▦',
        //     path: '/dashboard'
        // },
         {
            id:"home",
            label:"Home",
            icon:"⌂",  
            path:RouterConstant.pHome
        },
        {
            id: 'exam-form',
            label: 'Exam Form',
            icon: '🗎',
            path: RouterConstant.ExamForm,
        },
        {
            id: 'profile',
            label: 'Profile',
            icon: '◉',
            path: RouterConstant.Profile,
        },
       
        {
            id: 'analytics',
            label: 'Analytics',
            icon: '◢',
            path: '/analytics'
        },
        {
            id: 'help',
            label: 'Help & Support',
            icon: '?',
            path: RouterConstant.pHelp,
        },
        
        {
            id: 'settings',
            label: 'Settings',
            icon: '⚙',
            path: '/settings'
        },
        {
            id:'users',
            label:'users',
            icon: '🔍',
            path: RouterConstant.UsersTable,

        }
    ];

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleItemClick = (itemId) => {
        setActiveItem(itemId);
        navigate(menuItems.find(item => item.id === itemId)?.path || '/');
        console.log(`Navigating to: ${itemId}`);
    };

   

    return (
        <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            {/* Sidebar Header */}
            <div className="sidebar-header">
                <div className="logo">
                    {!isCollapsed ? (
                        <h2>MyApp</h2>
                    ) : (
                        <span className="logo-icon">M</span>
                    )}
                </div>
                <button 
                    className="toggle-btn" 
                    onClick={toggleSidebar}
                >
                    {isCollapsed ? '→' : '←'}
                </button>
            </div>

            {/* User Profile Section */}
            <UserProfile isCollapsed={isCollapsed} />

            {/* Navigation Menu */}
            <nav className="sidebar-nav">
                <ul className="nav-list">
                    {menuItems.map(item => (
                        <SidebarItem
                            key={item.id}
                            item={item}
                            isActive={activeItem === item.id}
                            isCollapsed={isCollapsed}
                            onClick={() => handleItemClick(item.id)}
                        />
                    ))}
                </ul>
            </nav>

            {/* Sidebar Footer */}
            <div className="sidebar-footer">
               <LogoutButton isCollapsed={isCollapsed}/>
                {!isCollapsed && (
                    <div className="app-version">
                        v1.0.0
                    </div>
                )}
            </div>
        </div>
    );
};

export default Sidebar;