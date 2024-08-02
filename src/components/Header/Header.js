import React, { useState, useEffect } from 'react';
import './Header.css';
import usericon from '../../images/user icon.png';

function Header() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest('.profile-container')) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    if (dropdownVisible) {
      window.addEventListener('click', handleClickOutside);
    } else {
      window.removeEventListener('click', handleClickOutside);
    }

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [dropdownVisible]);

  return (
    <header className="header d-flex justify-content-between align-items-center">
      <span className="depbatch">Marketing Management System <i class="fa-solid fa-bullhorn"></i></span>
      <div className="profile-container">
        <div className="profile-icon" onClick={toggleDropdown}>
          <img src={usericon} alt="Profile" />
          <div className="status-dot"></div>
        </div>
        {dropdownVisible && (
          <div className="dropdown-content show">
            <div className="profile-info">
              <img src={usericon} alt="Profile" />
              <div>
                <h5>Anya Perera</h5>
                <p className="active-batch">Active</p>
              </div>
            </div> 
            <hr></hr>
            <a href="#"><i className="fas fa-user"></i>My Profile</a>
            <a href="#"><i className="fas fa-cog"></i>Settings</a>
            <hr></hr>
            <a href="#"><i className="fas fa-sign-out-alt"></i>Log Out</a>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
