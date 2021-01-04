import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './SignUp.css';
import Input from './../form/Input';

function SignUp({ user, onChange, onBlur, onSubmit, loading }) {
  const { name, email, password, passwordConfirm, errors } = user;
  return (
    <form className="signup-content" onSubmit={onSubmit}>
      <div className="signup-title">SignUp</div>
      <Input
        type="text"
        title="Name"
        name="name"
        value={name}
        onChange={onChange}
        onBlur={onBlur}
        error={errors && errors.name}
        placeholder="Enter user name"
      />
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
      <Input
        type="password"
        title="Password Confirm"
        name="passwordConfirm"
        value={passwordConfirm}
        onChange={onChange}
        onBlur={onBlur}
        error={errors && errors.passwordConfirm}
        placeholder="Enter password confirm"
      />
      <div>{errors && Object.keys(errors).length > 0 && 'Please fill in all the highlighted fields'}</div>
      <div className="signup-form-group">
        <button type="submit" disabled={loading}>
          Submit
        </button>
      </div>
      <div className="signup-form-group">
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </form>
  );
}

SignUp.propTypes = {
  user: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default SignUp;
