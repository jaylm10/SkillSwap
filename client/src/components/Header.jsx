import React from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <header className="main-header">
      <div className="left-section">
        <div className="logo">
          <Link to="/">SkillSwap</Link>
        </div>
        <button className="home-btn" onClick={() => navigate('/')}>
          Home
        </button>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search skills..." />
      </div>

      <div className="nav-buttons">
        {token ? (
          <>
            <button onClick={() => navigate('/profile')} className="profile-btn">
              Profile
            </button>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </>
        ) : (
          <button onClick={() => navigate('/login')} className="login-btn">
            Login
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
