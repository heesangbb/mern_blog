import React from 'react';
import { useSelector } from 'react-redux';

function Alert(props) {
  const errors = useSelector(state => state.errors);
  const style = {
    success: { bg: '#f6ffed', border: '1px solid #b7eb8f' },
    info: { bg: '#e6f7ff', border: '1px solid #91d5ff' },
    warning: { bg: '#fffbe6', border: '1px solid #ffe58f' },
    error: { bg: '#fff2f0', border: '1px solid #ffccc7' },
  };
  return errors ? (
    <div
      style={{
        width: '100%',
        // border: '1px solid #e8e8e8',
        border: style[errors.type].border,
        // background: '#eeeeee',
        background: style[errors.type].bg,
        padding: '4px 10px',
        borderRadius: '4px',
        marginBottom: '15px',
        textAlign: 'center',
      }}
    >
      [{errors.title}] {errors.msg}
    </div>
  ) : null;
}

export default Alert;
