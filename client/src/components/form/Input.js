import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

function Input({ type, title, name, value, placeholder, onChange, onBlur, error }) {
  return (
    <div className="form-group">
      <label>
        {title} <br />
        <input type={type} name={name} value={value} placeholder={placeholder} onChange={onChange} onBlur={onBlur} />
      </label>
      {error && <div className="form-group-error">{error}</div>}
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default Input;
