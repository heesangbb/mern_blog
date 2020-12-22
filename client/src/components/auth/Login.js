import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Login.css';
import Input from './../form/Input';

function Login({ user, onChange, onBlur, onSubmit, loading, message }) {
  const { email, password, errors } = user;
  return (
    <form className="login-content" onSubmit={onSubmit}>
      <div className="login-title">Login</div>

      {message && <div className="login-message">{message}</div>}

      <Input
        type="email"
        title="Email"
        name="email"
        value={email}
        onChange={onChange}
        onBlur={onBlur}
        error={errors && errors.email}
        placeholder="Enter email address"
      />
      <Input
        type="password"
        title="Password"
        name="password"
        value={password}
        onChange={onChange}
        onBlur={onBlur}
        error={errors && errors.password}
        placeholder="Enter password"
      />

      <div className="login-form-group">
        <button type="submit" disabled={loading}>
          Submit
        </button>
      </div>
      <div className="login-form-group">
        Don't have an account? <Link to="/signup">SignUp</Link>
      </div>
    </form>
  );
}

Login.propTypes = {
  user: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  message: PropTypes.string,
};

export default Login;
