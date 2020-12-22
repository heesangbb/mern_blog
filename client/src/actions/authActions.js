import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import { SET_CURRENT_USER, TOGGLE_USER_LOADING } from './types';
import { setErrors } from './errorActions';

export const registerUser = (userData, callback) => dispatch => {
  dispatch(toggleUserLoading());
  axios
    .post('/api/users/signup', userData)
    .then(res => {
      dispatch(toggleUserLoading());
      localStorage.setItem('loginMessage', 'Successfully registered. Login to continue');
      callback();
    })
    .catch(err => {
      console.log('authActions.js', 'registerUser err', err.response);
      dispatch(setErrors(err.response.data));
      dispatch(toggleUserLoading());
    });
};

export const loginUser = userData => dispatch => {
  dispatch(toggleUserLoading());
  axios
    .post('api/users/login', userData)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
      dispatch(toggleUserLoading());
    })
    .catch(err => {
      console.log('authActions.js', 'loginUser err', err.response);
      dispatch(setErrors(err.response.data));
      dispatch(toggleUserLoading());
    });
};

export const setCurrentUser = userData => {
  return {
    type: SET_CURRENT_USER,
    payload: userData,
  };
};

export const toggleUserLoading = () => {
  return {
    type: TOGGLE_USER_LOADING,
  };
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem('jwtToken');
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};
