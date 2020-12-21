import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Login from './../../components/auth/Login';
import { clearErrors } from '../../actions/errorActions';

function LoginPage({ history }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const unlisten = history.listen(() => {
      dispatch(clearErrors());
    });
    return () => unlisten();
  }, [history, clearErrors]);

  return <Login />;
}

export default LoginPage;
