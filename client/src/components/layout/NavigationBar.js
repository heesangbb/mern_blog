import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

function NavigationBar({ auth, logout }) {
  return (
    <div className="navigation-bar">
      <div className="navigation-content">
        <h5 className="navigation-logo">
          <Link to="/">MERN Blog</Link>
        </h5>
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
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

export default NavigationBar;
