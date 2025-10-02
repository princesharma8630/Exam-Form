import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const UserProfile = ({ isCollapsed }) => {
    // Get user data from Redux store (assuming you have user data in AuthSlice)

   
   const user = useSelector((state) => state.auth.user) || JSON.parse(localStorage.getItem('user'));

     if (!user) {
        return (
            <div className={`user-profile ${isCollapsed ? 'collapsed' : ''}`}>
                <div className="user-avatar">
                    <div className="avatar-initials">--</div>
                </div>
                {!isCollapsed && (
                    <div className="user-info">
                        <div className="user-name">Loading...</div>
                        <div className="user-email">Please wait</div>
                    </div>
                )}
            </div> 
        );
    }
    
    // Default user data if not available
    const userData = {
        name: user?.displayName || user?.email?.split('@')[0] || 'John Doe',
        email: user?.email || 'john.doe@example.com',
        avatar: user?.photoURL || null
    };

    // Generate initials for avatar if no photo
    const getInitials = (name) => {
        return name
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    return (
        <div className={`user-profile ${isCollapsed ? 'collapsed' : ''}`}>
            <div className="user-avatar">
                {userData.avatar ? (
                    <img 
                        src={userData.avatar} 
                        alt={userData.name}
                        className="avatar-image"
                    />
                ) : (
                    <div className="avatar-initials">
                        {getInitials(userData.name)}
                    </div>
                )}
            </div>
            
            {!isCollapsed && (
                <div className="user-info">
                    <div className="user-name">{userData.name}</div>
                    <div className="user-email">{userData.email}</div>
                    <div className="online-status">
                        <span className="status-dot"></span>
                        Online
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserProfile;