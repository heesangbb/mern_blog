import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

function NavigationBar({ auth, logout }) {
  return (
    <div className="navigation-bar">
      <div className="navigation-content">
        <div className="navigation-logo">
          <Link to="/">B</Link>
        </div>
        <div className="navigation-seperate" />
        <Link to="/blog">Blog</Link>
        <div className="navigation-button">
          {auth ? (
            <button onClick={logout}>Logout</button>
          ) : (
            <Link to="/login">
              <button>Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

NavigationBar.propTypes = {
  auth: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

export default NavigationBar;
