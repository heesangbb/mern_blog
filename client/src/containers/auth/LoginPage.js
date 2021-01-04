import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Login from './../../components/auth/Login';
import { validate } from './../../components/form/Validate';
import { loginUser } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';

function LoginPage({ history }) {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const errors = useSelector(state => state.errors);

  const [user, setUser] = useState({
    email: 'test@test.com',
    password: 'test123123',
    errors: {},
  });

  const [message, setMessage] = useState('');

  useEffect(() => {
    const unlisten = history.listen(() => dispatch(clearErrors()));

    if (localStorage.loginMessage) {
      setMessage(localStorage.loginMessage);
      localStorage.setItem('loginMessage', '');
    }

    return () => unlisten();
  }, [history, clearErrors]);

  useEffect(() => {
    if (auth.isAuthenticated) {
      history.push('/');
    }
    setUser(user => {
      return { ...user, errors };
    });
  }, [auth, errors, history]);

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = e => {
    const { name, value } = e.target;
    const errors = { ...user.errors };
    delete errors[name];
    setUser({ ...user, errors: { ...errors, ...validate(name, value) } });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const { email, password } = user;
    const errors = {
      ...validate('email', email),
      ...validate('password', password),
    };
    setUser({ ...user, errors });

    // submit
    if (Object.keys(errors).length === 0) {
      dispatch(loginUser({ email, password }));
    }
  };

  return (
    <Login
      user={user}
      onChange={handleChange}
      onBlur={handleBlur}
      onSubmit={handleSubmit}
      loading={auth.userLoading}
      message={message}
    />
  );
}

export default LoginPage;
