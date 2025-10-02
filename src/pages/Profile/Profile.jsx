import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setUserDetails } from "../../Userdata/UserSlice";
import LogoutButton from "../../Auth/Logout/logoutButton";
import './Profile.css';

function Profile() {
  const user = useSelector((state) => state.auth.user)|| JSON.parse(localStorage.getItem("user"));
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [isEditingAbout, setIsEditingAbout] = useState(false);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: user?.displayName || user?.email?.split('@')[0] || 'Your Name',
    phone: user?.phone || '',
    address: user?.address || '',
    about: user?.about || ''
  });

  const username = user?.displayName || user?.email?.split('@')[0] || 'Your Name';
  const email = user?.email || 'not available';
  const avatar = user?.photoURL || 'https://via.placeholder.com/150';

  const handleName = () => {
    setIsEditingName(!isEditingName);
    dispatch(setUserDetails({name:formData.name}));
  };

  const handlePhone = () => {
    setIsEditingPhone(!isEditingPhone);
    dispatch(setUserDetails({phone:formData.phone}));
  };

  const handleAddress = () => {
    setIsEditingAddress(!isEditingAddress);
    dispatch(setUserDetails({address:formData.address}));
  };

  const handleAbout = () => {
    setIsEditingAbout(!isEditingAbout);
    dispatch(setUserDetails({about:formData.about}));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="profile-container">
      <div className="profile-avatar">
        <img 
        //   src={avatar} 
        //   alt="User Avatar" 
        alt="User"
          className="avatar-img"
        />
      </div>

      <div className="profile-field name-field">
        <strong>Name: </strong>
        {isEditingName ? (
          <>
            <input 
              type="text" 
              name="name"
              value={formData.name} 
              onChange={handleInputChange}
              className="input-field"
            />
            <button onClick={handleName} className="save-btn">Save</button>
          </>
        ) : (
          <>
            {username}
            <button onClick={handleName} className="edit-btn">Edit</button>
          </>
        )}
      </div>

      <div className="profile-field email-field">
        <strong>Email: </strong>{email}
      </div>

      <div className="profile-field phone-field">
        <strong>Phone: </strong>
        {isEditingPhone ? (
          <>
            <input 
              type="tel" 
              name="phone"
              value={formData.phone} 
              onChange={handleInputChange}
              placeholder="Enter phone number"
              className="input-field"
            />
            <button onClick={handlePhone} className="save-btn">Save</button>
          </>
        ) : (
          <>
            {formData.phone || 'Not added'}
            <button onClick={handlePhone} className="edit-btn">
              {formData.phone ? 'Edit' : 'Add Phone Number'}
            </button>
          </>
        )}
      </div>

      <div className="profile-field address-field">
        <strong>Address: </strong>
        {isEditingAddress ? (
          <>
            <input 
              type="text" 
              name="address"
              value={formData.address} 
              onChange={handleInputChange}
              placeholder="Enter address"
              className="input-field"
            />
            <button onClick={handleAddress} className="save-btn">Save</button>
          </>
        ) : (
          <>
            {formData.address || 'Not added'}
            <button onClick={handleAddress} className="edit-btn">
              {formData.address ? 'Edit' : 'Add Address'}
            </button>
          </>
        )}
      </div>

      <div className="profile-field about-field">
        <strong>About: </strong>
        {isEditingAbout ? (
          <>
            <textarea 
              name="about"
              value={formData.about} 
              onChange={handleInputChange}
              placeholder="Tell us about yourself"
              className="textarea-field"
            />
            <button onClick={handleAbout} className="save-btn">Save</button>
          </>
        ) : (
          <>
            {formData.about || 'Not added'}
            <button onClick={handleAbout} className="edit-btn">
              {formData.about ? 'Edit' : 'Add About'}
            </button>
          </>
        )}
      </div>

      <div className="logout-section">
        <LogoutButton/>
      </div>
    </div>
  );
}

export default Profile;
