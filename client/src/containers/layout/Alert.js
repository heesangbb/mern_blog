import React from 'react';
import { useSelector } from 'react-redux';

function Alert(props) {
  const errors = useSelector(state => state.errors);
  return errors ? (
    <div
      style={{
        width: '100%',
        border: '1px solid #e8e8e8',
        background: '#eeeeee',
        padding: '4px 10px',
        borderRadius: '4px',
        marginBottom: '15px',
      }}
    >
      [{errors.title}] {errors.msg}
    </div>
  ) : null;
}

export default Alert;
