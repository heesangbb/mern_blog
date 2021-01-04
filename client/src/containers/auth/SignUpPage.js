import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SignUp from './../../components/auth/SignUp';
import { validate } from './../../components/form/Validate';
import { registerUser } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';

function SignUpPage({ history }) {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const errors = useSelector(state => state.errors);

  const [user, setUser] = useState({
    name: 'test',
    email: 'test@test.com',
    password: 'test123123',
    passwordConfirm: 'test123123',
    errors: {},
  });

  useEffect(() => {
    const unlisten = history.listen(() => dispatch(clearErrors()));
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

    const { name, email, password, passwordConfirm } = user;
    let errors = {
      ...validate('name', name),
      ...validate('email', email),
      ...validate('password', password),
      ...validate('passwordConfirm', passwordConfirm),
    };
    setUser({ ...user, errors });

    if (password !== passwordConfirm) {
      errors = { ...user.errors, ...{ passwordConfirm: 'Please check the password confirm fileds.' } };
      setUser({ ...user, errors });
    }

    // submit
    if (Object.keys(errors).length === 0) {
      dispatch(registerUser({ name, email, password }, handleCallback));
    }
  };

  const handleCallback = () => {
    console.log('SignUpPage.js', 'callback!!!!');
    history.push('/login');
  };

  return (
    <SignUp
      user={user}
      onChange={handleChange}
      onBlur={handleBlur}
      onSubmit={handleSubmit}
      loading={auth.userLoading}
    />
  );
}

export default SignUpPage;
