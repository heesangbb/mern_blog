import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormGroup = styled.div`
  padding: 6px 0;
  font-size: 14px;
`;

const FormGroupLabel = styled.label`
  width: 100%;
`;

const FormGroupInput = styled.textarea`
  width: 100%;
  font-size: 14px;
  padding: 8px;
  margin-top: 8px;
`;

const FormGroupError = styled.div`
  width: 100%;
  font-size: 14px;
  color: red;
`;

function Textarea({ type, title, name, value, placeholder, onChange, onBlur, error }) {
  return (
    <FormGroup>
      <FormGroupLabel>
        {title}
        <FormGroupInput name={name} value={value} placeholder={placeholder} onChange={onChange} onBlur={onBlur} />
      </FormGroupLabel>
      {error && <FormGroupError>{error}</FormGroupError>}
    </FormGroup>
  );
}

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default Textarea;
