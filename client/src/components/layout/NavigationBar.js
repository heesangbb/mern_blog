import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

function NavigationBar({ logout }) {
  return (
    <div className="navigation-bar">
      <div className="navigation-content">
        <h5 className="navigation-logo">
          <Link to="/">MERN Blog</Link>
        </h5>
        <div className="navigation-button">
          <Link to="/login">
            <button>login</button>
          </Link>
          <button onClick={logout}>logout</button>
        </div>
      </div>
    </div>
  );
}

NavigationBar.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default NavigationBar;
