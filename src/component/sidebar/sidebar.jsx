import { useState } from 'react';
import UserProfile from './UserProfile';
import SidebarItem from './SidebarItem';
import './sidebar.css';
import RouterConstant from '../../constant/RouterConstant';
import {  useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../Auth/AuthSlice/AuthSlice';

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
            path: '/profile'
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
    ];

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleItemClick = (itemId) => {
        setActiveItem(itemId);
        navigate(menuItems.find(item => item.id === itemId)?.path || '/');
        console.log(`Navigating to: ${itemId}`);
    };

    const handleLogout = () => {
        dispatch(logout())
        console.log('Logging out...');
        // dispatch logout action, clear tokens, redirect to login
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
                <button 
                    className={`logout-btn ${isCollapsed ? 'collapsed' : ''}`}
                    onClick={handleLogout}
                >
                    <span className="logout-icon">🚪</span>
                    {!isCollapsed && <span>Logout</span>}
                </button>
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