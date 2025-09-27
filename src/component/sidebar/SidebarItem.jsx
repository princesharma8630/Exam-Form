const SidebarItem = ({ item, isActive, isCollapsed, onClick }) => {
    const handleClick = () => {
        onClick(item.id);
        // You can add React Router navigation here
        // navigate(item.path);
    };

    return (
        <li className="nav-item">
            <button
                className={`nav-link ${isActive ? 'active' : ''} ${isCollapsed ? 'collapsed' : ''}`}
                onClick={handleClick}
                title={isCollapsed ? item.label : ''}
            >
                <span className="nav-icon">{item.icon}</span>
                {!isCollapsed && (
                    <span className="nav-label">{item.label}</span>
                )}
                {isActive && <span className="active-indicator"></span>}
            </button>
        </li>
    );
};

export default SidebarItem;