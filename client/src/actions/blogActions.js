import axios from 'axios';
import {
  TOGGLE_POSTS_LOADING,
  TOGGLE_POST_LOADING,
  GET_POSTS,
  GET_POST,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
} from './types';

import { setErrors, clearErrors } from './errorActions';

export const togglePostsLoading = () => {
  return {
    type: TOGGLE_POSTS_LOADING,
  };
};

export const togglePostLoading = () => {
  return {
    type: TOGGLE_POST_LOADING,
  };
};

export const getPosts = () => dispatch => {
  dispatch(togglePostsLoading());
  axios
    .get(`/api/blog/posts`)
    .then(res => {
      dispatch({
        type: GET_POSTS,
        payload: res.data,
      });
      dispatch(clearErrors());
      dispatch(togglePostsLoading());
    })
    .catch(err => {
      dispatch(setErrors(err.response.data));
      dispatch(togglePostsLoading());
    });
};

export const getPostByID = id => dispatch => {
  dispatch(togglePostLoading());
  axios
    .get(`/api/blog/post/${id}`)
    .then(res => {
      dispatch({
        type: GET_POST,
        payload: res.data,
      });
      dispatch(clearErrors());
      dispatch(togglePostLoading());
    })

    .catch(err => {
      dispatch(setErrors(err.response.data));
      dispatch(togglePostLoading());
    });
};

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

export const updatePost = (id, postData, callback) => dispatch => {
  dispatch(togglePostLoading());
  axios
    .patch(`/api/blog/post/update/${id}`, postData)
    .then(res => {
      dispatch({
        type: UPDATE_POST,
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

export const deletePost = (id, callback) => dispatch => {
  dispatch(togglePostLoading());
  axios
    .delete(`/api/blog/post/delete/${id}`)
    .then(res => {
      dispatch({
        type: DELETE_POST,
        payload: id,
      });
      dispatch(togglePostLoading());
      callback();
    })
    .catch(err => {
      dispatch(setErrors(err.response.data));
      dispatch(togglePostLoading());
    });
};

export const getPostsByAuthor = author => dispatch => {
  dispatch(togglePostsLoading());
  axios
    .get(`/api/blog/${author}`)
    .then(res => {
      dispatch({
        type: GET_POSTS,
        payload: res.data,
      });
      dispatch(togglePostsLoading());
    })
    .catch(err => {
      dispatch(setErrors(err.response.data));
      dispatch(togglePostsLoading());
    });
};
