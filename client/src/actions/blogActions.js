import axios from 'axios';
import { CREATE_POST, TOGGLE_POST_LOADING } from './types';
import { setErrors } from './errorActions';

export const createPost = (postData, callback) => dispatch => {
  dispatch(togglePostLoading());
  axios
    .post('/api/blog/post/create', postData)
    .then(res => {
      dispatch({
        type: CREATE_POST,
        payload: res.data,
      });
      dispatch(togglePostLoading());
      callback();
    })
    .catch(err => {
      dispatch(setErrors(err.response.data));
      dispatch(togglePostLoading());
    });
};

export const togglePostLoading = () => {
  return {
    type: TOGGLE_POST_LOADING,
  };
};
