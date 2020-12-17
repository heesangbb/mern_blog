import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './SignUp.css';

function SignUp(props) {
  return (
    <form className="signup-content">
      <div className="signup-title">SignUp</div>
      <div className="signup-form-group">
        <label>
          Username <br />
          <input type="text" />
        </label>
      </div>
      <div className="signup-form-group">
        <label>
          Email <br />
          <input type="email" />
        </label>
      </div>
      <div className="signup-form-group">
        <label>
          Password <br />
          <input type="password" />
        </label>
      </div>
      <div className="signup-form-group">
        <label>
          Password comfirm <br />
          <input type="password" />
        </label>
      </div>
      <div className="signup-form-group">
        <button type="submit">Submit</button>
      </div>
      <div className="signup-form-group">
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </form>
  );
}

SignUp.propTypes = {};

export default SignUp;
