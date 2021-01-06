import { combineReducers } from 'redux';
import errorReducer from './errorReducers';
import authReducer from './authReducers';
import blogReducer from './blogReducer';

export default combineReducers({
  errors: errorReducer,
  auth: authReducer,
  blog: blogReducer,
});
