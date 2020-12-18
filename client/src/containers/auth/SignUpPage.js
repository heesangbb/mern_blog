import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import SignUp from './../../components/auth/SignUp';
import Validate from './../../components/form/Validate';
import { registerUser } from '../../actions/authActions';

function SignUpPage({ history }) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const errors = useSelector(state => state.errors);

  const [userData, setUserData] = useState({
    name: 'test',
    email: 'test@test.com',
    password: 'test123123',
    passwordConfirm: 'test123123',
    errors: {},
  });

  const handleChange = e => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = e => {
    const { name, value } = e.target;
    const err = { ...userData.errors, ...Validate(name, value).errors };
    setUserData({ ...userData, errors: { ...err } });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const { name, email, password, passwordConfirm } = userData;
    if (!name || !email || !password) {
      alert('Please enter required fileds.');
      return;
    }
    if (password !== passwordConfirm) {
      alert('Please check the password confirm fileds.');
      return;
    }

    console.log('submit!!');
    dispatch(registerUser({ name, email, password }, handleCallback));
  };

  const handleCallback = () => {
    console.log('SignUpPage.js', 'callback!!!!');
    // history.push('/login');
  };

  return <SignUp user={userData} onChange={handleChange} onBlur={handleBlur} onSubmit={handleSubmit} />;
}

export default SignUpPage;
