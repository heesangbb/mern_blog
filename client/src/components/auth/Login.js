import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Login.css';

function Login(props) {
  return (
    <form className="login-content">
      <div className="login-title">Login</div>
      <div className="login-form-group">
        <label>
          Email <br />
          <input type="email" />
        </label>
      </div>
      <div className="login-form-group">
        <label>
          Password <br />
          <input type="password" />
        </label>
      </div>
      <div className="login-form-group">
        <button type="submit">Submit</button>
      </div>
      <div className="login-form-group">
        Don't have an account? <Link to="/signup">SignUp</Link>
      </div>
    </form>
  );
}

Login.propTypes = {};

export default Login;
