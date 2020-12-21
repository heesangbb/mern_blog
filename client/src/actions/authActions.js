import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import { SET_CURRENT_USER, TOGGLE_USER_LOADING } from './types';
import { setErrors } from './errorActions';

export const registerUser = (userData, callback) => dispatch => {
  console.log('authAction.js', userData, callback, dispatch);
  dispatch(toggleUserLoading());
  axios
    .post('/api/users/signup', userData)
    .then(res => {
      dispatch(toggleUserLoading());
      localStorage.setItem('loginMessage', 'Successfully registered. Login to continue');
      callback();
    })
    .catch(err => {
      console.log('authActions.js', err.response);
      dispatch(setErrors(err.response.status, err.response.statusText));
      dispatch(toggleUserLoading());
    });
};

export const toggleUserLoading = () => {
  return {
    type: TOGGLE_USER_LOADING,
  };
};
